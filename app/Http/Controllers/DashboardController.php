<?php

namespace App\Http\Controllers;

use App\Services\Auth\RoleService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __construct(private readonly RoleService $roleService) {}

    public function index(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('dashboard', [
            'permissions' => [
                'canManageUsers' => $this->roleService->hasRole($user, 'admin'),
                'isAdmin' => $this->roleService->hasRole($user, 'admin'),
            ],
        ]);
    }
}
