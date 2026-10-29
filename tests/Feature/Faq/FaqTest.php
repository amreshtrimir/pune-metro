<?php

use App\Models\Faq;
use App\Models\Role;
use App\Models\User;
use App\Services\Faq\FaqService;
use Database\Seeders\FaqSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

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

it('adds the selected faqs to a page without removing existing ones', function (): void {
    [$a, $b, $c] = Faq::factory()->count(3)->create();
    $admin = faqAdminUser();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.assign'), ['page' => 'contact', 'faq_ids' => [$a->id, $b->id]])
        ->assertRedirect(route('dashboard.faqs.index'));

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.assign'), ['page' => 'contact', 'faq_ids' => [$b->id, $c->id]]);

    $ids = app(FaqService::class)->getActiveFaqsForPage('contact')->pluck('id')->all();

    expect($ids)->toEqualCanonicalizing([$a->id, $b->id, $c->id]);
});

it('requires at least one faq to assign', function (): void {
    $this->actingAs(faqAdminUser())
        ->post(route('dashboard.faqs.assign'), ['page' => 'contact', 'faq_ids' => []])
        ->assertSessionHasErrors('faq_ids');
});

it('rejects an unknown page', function (): void {
    $this->actingAs(faqAdminUser())
        ->post(route('dashboard.faqs.assign'), ['page' => 'nope', 'faq_ids' => [1]])
        ->assertSessionHasErrors('page');
});

it('assigns pages when creating and editing a faq, and keeps them when pages is omitted', function (): void {
    $admin = faqAdminUser();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.store'), ['question' => 'Q?', 'answer' => 'A.', 'pages' => ['contact', 'home']]);

    $faq = Faq::firstOrFail();
    expect($faq->pages()->pluck('page')->all())->toEqualCanonicalizing(['contact', 'home']);

    $this->actingAs($admin)
        ->put(route('dashboard.faqs.update', $faq), ['question' => 'Q?', 'answer' => 'A.', 'pages' => ['home', 'policies']]);
    expect($faq->pages()->pluck('page')->all())->toEqualCanonicalizing(['home', 'policies']);

    $this->actingAs($admin)
        ->put(route('dashboard.faqs.update', $faq), ['question' => 'Q?', 'answer' => 'A.', 'is_active' => false]);
    expect($faq->pages()->count())->toBe(2);

    $this->actingAs($admin)
        ->put(route('dashboard.faqs.update', $faq), ['question' => 'Q?', 'answer' => 'A.', 'pages' => ['nope']])
        ->assertSessionHasErrors('pages.0');
});

it('seeds the faqs without duplicating on a second run', function (): void {
    $this->seed(FaqSeeder::class);
    $count = Faq::count();

    $this->seed(FaqSeeder::class);

    expect($count)->toBe(52)->and(Faq::count())->toBe(52);
});

it('keeps basic formatting in answers but strips scripts and attributes', function (): void {
    $this->actingAs(faqAdminUser())->post(route('dashboard.faqs.store'), [
        'question' => 'Q?',
        'answer' => '<p onclick="x()">Hi <strong>there</strong></p><script>alert(1)</script><ul><li>One</li></ul><a href="javascript:x">link</a>',
    ]);

    expect(Faq::firstOrFail()->answer)->toBe('<p>Hi <strong>there</strong></p><ul><li>One</li></ul>link');
});

it('removes selected faqs from a page without touching the others', function (): void {
    [$a, $b] = Faq::factory()->count(2)->create();
    $admin = faqAdminUser();
    app(FaqService::class)->assignToPage('contact', [$a->id, $b->id]);

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.unassign'), ['page' => 'contact', 'faq_ids' => [$a->id]])
        ->assertRedirect(route('dashboard.faqs.index'));

    expect(app(FaqService::class)->getActiveFaqsForPage('contact')->pluck('id')->all())->toBe([$b->id]);
});

it('shows or hides selected faqs in bulk', function (): void {
    [$a, $b, $c] = Faq::factory()->count(3)->create();
    $admin = faqAdminUser();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.bulk-status'), ['faq_ids' => [$a->id, $b->id], 'is_active' => false])
        ->assertRedirect(route('dashboard.faqs.index'));

    expect($a->fresh()->is_active)->toBeFalse()
        ->and($b->fresh()->is_active)->toBeFalse()
        ->and($c->fresh()->is_active)->toBeTrue();

    $this->actingAs($admin)
        ->post(route('dashboard.faqs.bulk-status'), ['faq_ids' => [$a->id], 'is_active' => true]);

    expect($a->fresh()->is_active)->toBeTrue();
});

it('deletes selected faqs in bulk along with their page links', function (): void {
    [$a, $b] = Faq::factory()->count(2)->create();
    app(FaqService::class)->assignToPage('home', [$a->id, $b->id]);

    $this->actingAs(faqAdminUser())
        ->delete(route('dashboard.faqs.bulk-destroy'), ['faq_ids' => [$a->id]])
        ->assertRedirect(route('dashboard.faqs.index'));

    expect(Faq::pluck('id')->all())->toBe([$b->id])
        ->and(DB::table('faq_pages')->pluck('faq_id')->all())->toBe([$b->id]);
});

it('forbids bulk actions for non-admins', function (): void {
    $faq = Faq::factory()->create();
    $user = User::factory()->create();

    $this->actingAs($user)->delete(route('dashboard.faqs.bulk-destroy'), ['faq_ids' => [$faq->id]])->assertForbidden();
    $this->actingAs($user)->post(route('dashboard.faqs.bulk-status'), ['faq_ids' => [$faq->id], 'is_active' => false])->assertForbidden();

    expect($faq->fresh()->is_active)->toBeTrue();
});

it('shares only the active faqs assigned to the visited frontend page', function (): void {
    $shown = Faq::factory()->create(['question' => 'Shown?']);
    $hidden = Faq::factory()->create(['is_active' => false]);
    $elsewhere = Faq::factory()->create();
    app(FaqService::class)->assignToPage('contact', [$shown->id, $hidden->id]);
    app(FaqService::class)->assignToPage('home', [$elsewhere->id]);

    $this->get(route('contact'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->has('pageFaqs', 1)
            ->where('pageFaqs.0.question', 'Shown?')
        );
});
