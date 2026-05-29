<?php

use App\Models\MarqueeItem;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);
});

function marqueeAdminUser(): User
{
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    return $user;
}

// --- Public homepage ---

it('home page passes active marquee items to the frontend', function (): void {
    MarqueeItem::create(['text' => 'Active item', 'is_active' => true, 'sort_order' => 0]);
    MarqueeItem::create(['text' => 'Inactive item', 'is_active' => false, 'sort_order' => 1]);

    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('welcome')
            ->has('marqueeItems', 1)
            ->where('marqueeItems.0.text', 'Active item')
        );
});

// --- Admin dashboard ---

it('admin can view marquee items index', function (): void {
    MarqueeItem::create(['text' => 'Test item', 'is_active' => true, 'sort_order' => 0]);

    $this->actingAs(marqueeAdminUser())
        ->get(route('dashboard.marquee.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard/marquee/index')
            ->has('items', 1)
        );
});

it('admin can create a marquee item', function (): void {
    $this->actingAs(marqueeAdminUser())
        ->post(route('dashboard.marquee.store'), [
            'text' => 'New marquee text',
        ])
        ->assertRedirect(route('dashboard.marquee.index'));

    expect(MarqueeItem::where('text', 'New marquee text')->exists())->toBeTrue();
});

it('admin can update a marquee item', function (): void {
    $item = MarqueeItem::create(['text' => 'Old text', 'is_active' => true, 'sort_order' => 0]);

    $this->actingAs(marqueeAdminUser())
        ->put(route('dashboard.marquee.update', $item), [
            'text' => 'Updated text',
            'is_active' => true,
        ])
        ->assertRedirect(route('dashboard.marquee.index'));

    expect($item->fresh()->text)->toBe('Updated text');
});

it('admin can delete a marquee item', function (): void {
    $item = MarqueeItem::create(['text' => 'To Delete', 'is_active' => true, 'sort_order' => 0]);

    $this->actingAs(marqueeAdminUser())
        ->delete(route('dashboard.marquee.destroy', $item))
        ->assertRedirect(route('dashboard.marquee.index'));

    expect(MarqueeItem::find($item->id))->toBeNull();
});

it('admin can reorder marquee items', function (): void {
    $first = MarqueeItem::create(['text' => 'First', 'sort_order' => 0]);
    $second = MarqueeItem::create(['text' => 'Second', 'sort_order' => 1]);

    $this->actingAs(marqueeAdminUser())
        ->post(route('dashboard.marquee.reorder'), [
            'ordered_ids' => [$second->id, $first->id],
        ])
        ->assertRedirect(route('dashboard.marquee.index'));

    expect($second->fresh()->sort_order)->toBe(0);
    expect($first->fresh()->sort_order)->toBe(1);
});
