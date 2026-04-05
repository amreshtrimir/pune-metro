<?php

namespace App\Http\Middleware;

use App\Services\Auth\RoleService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function __construct(private readonly RoleService $roleService) {}

    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        $user = $request->user();

        if (! $user || ! $this->roleService->hasAnyRole($user, $roles)) {
            abort(403);
        }

        return $next($request);
    }
}
