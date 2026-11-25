<?php

use App\Models\Media;
use App\Models\Popup;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function popupAdminUser(): User
{
    $user = User::factory()->create();
    $user->roles()->attach(Role::firstOrCreate(['name' => 'admin']));

    return $user->load('roles');
}

function popupImage(): Media
{
    return Media::create([
        'file_name' => 'offer.jpg',
        'file_path' => 'media/originals/offer.jpg',
        'file_type' => 'image/jpeg',
        'file_size' => 100,
        'uploaded_by' => User::factory()->create()->id,
    ]);
}

function makePopup(array $attributes = []): Popup
{
    return Popup::create([
        'title' => 'Offer',
        'media_id' => popupImage()->id,
        'page' => 'home',
        'delay_seconds' => 5,
        ...$attributes,
    ]);
}

it('saves a new popup as a draft even if publishing is requested', function (): void {
    $this->actingAs(popupAdminUser())
        ->post(route('dashboard.popups.store'), [
            'title' => 'Offer',
            'media_id' => popupImage()->id,
            'page' => 'home',
            'delay_seconds' => 5,
            'is_published' => true,
        ])
        ->assertRedirect(route('dashboard.popups.index'));

    expect(Popup::sole()->is_published)->toBeFalse();
});

it('requires an image, a known page and a sensible delay', function (): void {
    $this->actingAs(popupAdminUser())
        ->post(route('dashboard.popups.store'), [
            'title' => 'Offer',
            'page' => 'nope',
            'delay_seconds' => -1,
        ])
        ->assertSessionHasErrors(['media_id', 'page', 'delay_seconds']);
});

it('keeps only one published popup per page', function (): void {
    $old = makePopup(['is_published' => true]);
    $new = makePopup();
    $otherPage = makePopup(['page' => 'contact', 'is_published' => true]);

    $this->actingAs(popupAdminUser())
        ->patch(route('dashboard.popups.publish', $new), ['is_published' => true]);

    expect($old->fresh()->is_published)->toBeFalse()
        ->and($new->fresh()->is_published)->toBeTrue()
        ->and($otherPage->fresh()->is_published)->toBeTrue();
});

it('replaces the live popup when a published popup moves to its page', function (): void {
    $home = makePopup(['is_published' => true]);
    $moved = makePopup(['page' => 'contact', 'is_published' => true]);

    $this->actingAs(popupAdminUser())
        ->put(route('dashboard.popups.update', $moved), [
            'title' => 'Offer',
            'media_id' => $moved->media_id,
            'page' => 'home',
            'delay_seconds' => 5,
        ]);

    expect($home->fresh()->is_published)->toBeFalse()
        ->and($moved->fresh()->is_published)->toBeTrue();
});

it('shares the published popup only with its own page', function (): void {
    makePopup(['title' => 'Draft']);
    makePopup(['title' => 'Live', 'is_published' => true]);

    $this->get(route('home'))->assertInertia(fn ($page) => $page
        ->where('pagePopup.title', 'Live')
        ->where('pagePopup.delay_seconds', 5)
    );

    $this->get(route('contact'))->assertInertia(fn ($page) => $page->where('pagePopup', null));
});

it('saves an optional portrait image and shares it with the page', function (): void {
    $popup = makePopup(['is_published' => true]);
    $portrait = popupImage();

    $this->get(route('home'))->assertInertia(fn ($page) => $page->where('pagePopup.mobile_image_url', null));

    $this->actingAs(popupAdminUser())
        ->put(route('dashboard.popups.update', $popup), [
            'title' => 'Offer',
            'media_id' => $popup->media_id,
            'mobile_media_id' => $portrait->id,
            'page' => 'home',
            'delay_seconds' => 5,
        ])
        ->assertSessionHasNoErrors();

    $this->get(route('home'))->assertInertia(fn ($page) => $page->where('pagePopup.mobile_image_url', $portrait->url));
});

it('lets an admin list and delete popups', function (): void {
    $popup = makePopup();
    $admin = popupAdminUser();

    $this->actingAs($admin)
        ->get(route('dashboard.popups.index'))
        ->assertInertia(fn ($page) => $page->component('dashboard/popups/index')->has('popups', 1));

    $this->actingAs($admin)->delete(route('dashboard.popups.destroy', $popup));

    expect(Popup::count())->toBe(0);
});

it('blocks non-admins from managing popups', function (): void {
    $this->actingAs(User::factory()->create())
        ->patch(route('dashboard.popups.publish', makePopup()), ['is_published' => true])
        ->assertForbidden();
});
