<?php

use App\Models\BoardMember;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    Role::create(['name' => 'admin']);
    Role::create(['name' => 'user']);
});

function adminUser(): User
{
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'admin')->first());
    $user->load('roles');

    return $user;
}

// --- Public frontend ---

it('renders the board page with members prop', function (): void {
    BoardMember::create(['name' => 'Jane Doe', 'role' => 'Director', 'is_active' => true, 'sort_order' => 0]);
    BoardMember::create(['name' => 'John Smith', 'role' => 'Chairman', 'is_active' => false, 'sort_order' => 1]);

    $this->get(route('about.board'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('frontend/board')
            ->has('members', 1)
            ->where('members.0.name', 'Jane Doe')
        );
});

// --- Admin dashboard ---

it('admin can view board members index', function (): void {
    BoardMember::create(['name' => 'Jane Doe', 'role' => 'Director', 'sort_order' => 0]);

    $this->actingAs(adminUser())
        ->get(route('dashboard.board-members.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('dashboard/board/index')
            ->has('members', 1)
        );
});

it('admin can create a board member', function (): void {
    $this->actingAs(adminUser())
        ->post(route('dashboard.board-members.store'), [
            'name' => 'New Director',
            'role' => 'Independent Director',
        ])
        ->assertRedirect(route('dashboard.board-members.index'));

    expect(BoardMember::where('name', 'New Director')->exists())->toBeTrue();
});

it('admin can update a board member', function (): void {
    $member = BoardMember::create(['name' => 'Old Name', 'role' => 'Director', 'sort_order' => 0]);

    $this->actingAs(adminUser())
        ->put(route('dashboard.board-members.update', $member), [
            'name' => 'Updated Name',
            'role' => 'Chairman',
            'is_active' => true,
        ])
        ->assertRedirect(route('dashboard.board-members.index'));

    expect($member->fresh()->name)->toBe('Updated Name');
});

it('admin can delete a board member', function (): void {
    $member = BoardMember::create(['name' => 'To Delete', 'role' => 'Director', 'sort_order' => 0]);

    $this->actingAs(adminUser())
        ->delete(route('dashboard.board-members.destroy', $member))
        ->assertRedirect(route('dashboard.board-members.index'));

    expect(BoardMember::find($member->id))->toBeNull();
});

it('admin can reorder board members', function (): void {
    $a = BoardMember::create(['name' => 'A', 'role' => 'Dir', 'sort_order' => 0]);
    $b = BoardMember::create(['name' => 'B', 'role' => 'Dir', 'sort_order' => 1]);

    $this->actingAs(adminUser())
        ->post(route('dashboard.board-members.reorder'), ['ordered_ids' => [$b->id, $a->id]])
        ->assertRedirect(route('dashboard.board-members.index'));

    expect($b->fresh()->sort_order)->toBe(0)
        ->and($a->fresh()->sort_order)->toBe(1);
});

it('non-admin cannot access board member admin routes', function (): void {
    $user = User::factory()->create();
    $user->roles()->attach(Role::where('name', 'user')->first());
    $user->load('roles');

    $this->actingAs($user)
        ->get(route('dashboard.board-members.index'))
        ->assertForbidden();
});

it('store validates required fields', function (): void {
    $this->actingAs(adminUser())
        ->post(route('dashboard.board-members.store'), [])
        ->assertSessionHasErrors(['name', 'role']);
});
