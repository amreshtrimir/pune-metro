<?php

use App\Http\Middleware\RoleMiddleware;
use App\Models\Role;
use App\Models\User;
use App\Services\Auth\RoleService;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);
});

// --- RoleService ---

it('detects a role a user has', function (): void {
    $service = app(RoleService::class);
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    expect($service->hasRole($user, 'admin'))->toBeTrue()
        ->and($service->hasRole($user, 'user'))->toBeFalse();
});

it('detects any role from an array', function (): void {
    $service = app(RoleService::class);
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());
    $user->load('roles');

    expect($service->hasAnyRole($user, ['admin', 'user']))->toBeTrue()
        ->and($service->hasAnyRole($user, ['admin']))->toBeFalse();
});

it('assigns a role to a user', function (): void {
    $service = app(RoleService::class);
    $user = User::factory()->create();

    $service->assignRole($user, 'admin');

    expect($user->fresh()->roles->pluck('name'))->toContain('admin');
});

it('does not duplicate a role on repeated assignment', function (): void {
    $service = app(RoleService::class);
    $user = User::factory()->create();

    $service->assignRole($user, 'admin');
    $service->assignRole($user, 'admin');

    expect($user->fresh()->roles)->toHaveCount(1);
});

// --- User model helpers ---

it('user hasRole returns correct result', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());
    $user->load('roles');

    expect($user->hasRole('user'))->toBeTrue()
        ->and($user->hasRole('admin'))->toBeFalse()
        ->and($user->isAdmin())->toBeFalse();
});

it('user isAdmin returns true for admin role', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    expect($user->isAdmin())->toBeTrue();
});

// --- Dashboard access ---

it('authenticated user can access dashboard', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertOk();
});

it('guest cannot access dashboard', function (): void {
    $this->get(route('dashboard'))
        ->assertRedirect(route('login'));
});

it('dashboard returns admin permissions for admin user', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());

    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard')
            ->where('permissions.isAdmin', true)
            ->where('permissions.canManageUsers', true)
        );
});

it('dashboard returns limited permissions for regular user', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());

    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard')
            ->where('permissions.isAdmin', false)
            ->where('permissions.canManageUsers', false)
        );
});

// --- RoleMiddleware ---

it('role middleware blocks user without required role', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());

    Route::get('/admin-only', fn () => 'ok')->middleware(['web', 'auth', RoleMiddleware::class.':admin']);

    $this->actingAs($user)
        ->get('/admin-only')
        ->assertForbidden();
});

it('role middleware allows user with required role', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());

    Route::get('/admin-only', fn () => 'ok')->middleware(['web', 'auth', RoleMiddleware::class.':admin']);

    $this->actingAs($user)
        ->get('/admin-only')
        ->assertOk();
});

// --- Shared Inertia props ---

it('shares roles array in Inertia shared props', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());

    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertInertia(fn ($page) => $page
            ->has('auth.roles')
            ->where('auth.roles', ['admin'])
        );
});
