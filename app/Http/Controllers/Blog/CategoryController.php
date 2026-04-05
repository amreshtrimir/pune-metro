<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\StoreCategoryRequest;
use App\Http\Requests\Blog\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $categories = Category::withCount('posts')->orderBy('name')->get();

        return Inertia::render('dashboard/categories/index', [
            'categories' => $categories,
        ]);
    }

    public function store(StoreCategoryRequest $request): JsonResponse|RedirectResponse
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);

        $category = Category::create($validated);

        if ($request->wantsJson()) {
            return response()->json($category);
        }

        return back()->with('success', 'Category created.');
    }

    public function update(UpdateCategoryRequest $request, Category $category): JsonResponse|RedirectResponse
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);

        $category->update($validated);

        if ($request->wantsJson()) {
            return response()->json($category->fresh());
        }

        return back()->with('success', 'Category updated.');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $category->posts()->detach();
        $category->delete();

        return back()->with('success', 'Category deleted.');
    }
}
