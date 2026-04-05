<?php

namespace App\Services\Auth;

use App\Models\Role;
use App\Models\User;

class RoleService
{
    public function hasRole(User $user, string $role): bool
    {
        return $user->roles->contains('name', $role);
    }

    public function hasAnyRole(User $user, array $roles): bool
    {
        return $user->roles->whereIn('name', $roles)->isNotEmpty();
    }

    public function assignRole(User $user, string $role): void
    {
        $roleModel = Role::firstOrCreate(['name' => $role]);

        if (! $user->roles->contains($roleModel)) {
            $user->roles()->attach($roleModel);
            $user->unsetRelation('roles');
        }
    }

    public function syncRoles(User $user, array $roles): void
    {
        $roleIds = Role::whereIn('name', $roles)->pluck('id');
        $user->roles()->sync($roleIds);
        $user->unsetRelation('roles');
    }
}
