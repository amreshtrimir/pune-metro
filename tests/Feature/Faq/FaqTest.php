<?php

use App\Models\Faq;
use App\Models\Role;
use App\Models\User;
use App\Services\Faq\FaqService;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);
});

function faqAdminUser(): User
{
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    return $user;
}

it('admin can view faqs with the page list', function (): void {
    Faq::factory()->create();

    $this->actingAs(faqAdminUser())
        ->get(route('dashboard.faqs.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard/faqs/index')
            ->has('faqs', 1)
            ->has('pages', count(config('faq_pages')))
        );
});

it('non-admin cannot access faqs', function (): void {
    $this->actingAs(User::factory()->create())
        ->get(route('dashboard.faqs.index'))
        ->assertForbidden();
});

it('admin can create, update and delete a faq', function (): void {
    $admin = faqAdminUser();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.store'), ['question' => 'Q?', 'answer' => 'A.'])
        ->assertRedirect(route('dashboard.faqs.index'));

    $faq = Faq::firstOrFail();

    $this->actingAs($admin)
        ->put(route('dashboard.faqs.update', $faq), ['question' => 'New Q?', 'answer' => 'A.', 'is_active' => false])
        ->assertRedirect(route('dashboard.faqs.index'));

    expect($faq->fresh())->question->toBe('New Q?')->is_active->toBeFalse();

    $this->actingAs($admin)->delete(route('dashboard.faqs.destroy', $faq))->assertRedirect();

    expect(Faq::count())->toBe(0);
});

it('syncs the checked faqs to a page', function (): void {
    [$a, $b, $c] = Faq::factory()->count(3)->create();
    $admin = faqAdminUser();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.assign'), ['page' => 'contact', 'faq_ids' => [$a->id, $b->id]])
        ->assertRedirect(route('dashboard.faqs.index'));

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.assign'), ['page' => 'contact', 'faq_ids' => [$b->id, $c->id]]);

    $ids = app(FaqService::class)->getActiveFaqsForPage('contact')->pluck('id')->all();

    expect($ids)->toEqualCanonicalizing([$b->id, $c->id]);
});

it('rejects an unknown page', function (): void {
    $this->actingAs(faqAdminUser())
        ->post(route('dashboard.faqs.assign'), ['page' => 'nope', 'faq_ids' => []])
        ->assertSessionHasErrors('page');
});
