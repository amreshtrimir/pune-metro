<?php

use App\Models\ExplorePunePlace;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);
});

function explorePuneAdminUser(): User
{
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    return $user;
}

// --- Public frontend ---

it('home page returns active explore places', function (): void {
    ExplorePunePlace::create(['name' => 'Shaniwar Wada', 'category' => 'Historical', 'is_active' => true, 'sort_order' => 1]);
    ExplorePunePlace::create(['name' => 'Inactive Place', 'category' => 'Other', 'is_active' => false, 'sort_order' => 2]);

    $this->get('/')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->has('explorePlaces', 1)
            ->where('explorePlaces.0.name', 'Shaniwar Wada')
        );
});

// --- Admin dashboard ---

it('admin can view explore pune places index', function (): void {
    ExplorePunePlace::create(['name' => 'Shaniwar Wada', 'category' => 'Historical', 'sort_order' => 0]);

    $this->actingAs(explorePuneAdminUser())
        ->get(route('dashboard.explore-pune.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard/explore-pune/index')
            ->has('places', 1)
        );
});

it('admin can create an explore pune place', function (): void {
    $this->actingAs(explorePuneAdminUser())
        ->post(route('dashboard.explore-pune.store'), [
            'name' => 'Aga Khan Palace',
            'category' => 'Heritage & History',
        ])
        ->assertRedirect(route('dashboard.explore-pune.index'));

    expect(ExplorePunePlace::where('name', 'Aga Khan Palace')->exists())->toBeTrue();
});

it('admin can update an explore pune place', function (): void {
    $place = ExplorePunePlace::create(['name' => 'Old Name', 'category' => 'Heritage', 'sort_order' => 0]);

    $this->actingAs(explorePuneAdminUser())
        ->put(route('dashboard.explore-pune.update', $place), [
            'name' => 'Updated Name',
            'category' => 'Updated Category',
            'nearest_station' => 'PMR 23 — District Court',
            'distance_from_station' => 'Approx. 2 km',
            'about' => 'Description here',
            'highlights' => 'Key highlights',
            'is_active' => true,
        ])
        ->assertRedirect(route('dashboard.explore-pune.index'));

    expect($place->fresh()->name)->toBe('Updated Name');
});

it('admin can delete an explore pune place', function (): void {
    $place = ExplorePunePlace::create(['name' => 'To Delete', 'category' => 'Heritage', 'sort_order' => 0]);

    $this->actingAs(explorePuneAdminUser())
        ->delete(route('dashboard.explore-pune.destroy', $place))
        ->assertRedirect(route('dashboard.explore-pune.index'));

    expect(ExplorePunePlace::find($place->id))->toBeNull();
});

it('admin can reorder explore pune places', function (): void {
    $a = ExplorePunePlace::create(['name' => 'A', 'category' => 'Cat', 'sort_order' => 1]);
    $b = ExplorePunePlace::create(['name' => 'B', 'category' => 'Cat', 'sort_order' => 2]);

    $this->actingAs(explorePuneAdminUser())
        ->post(route('dashboard.explore-pune.reorder'), ['ordered_ids' => [$b->id, $a->id]])
        ->assertRedirect(route('dashboard.explore-pune.index'));

    expect($b->fresh()->sort_order)->toBe(1)
        ->and($a->fresh()->sort_order)->toBe(2);
});

it('non-admin cannot access explore pune admin routes', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());
    $user->load('roles');

    $this->actingAs($user)
        ->get(route('dashboard.explore-pune.index'))
        ->assertForbidden();
});

it('store validates required fields', function (): void {
    $this->actingAs(explorePuneAdminUser())
        ->post(route('dashboard.explore-pune.store'), [])
        ->assertSessionHasErrors(['name', 'category']);
});
