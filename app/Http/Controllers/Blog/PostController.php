<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\StorePostRequest;
use App\Http\Requests\Blog\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Services\Blog\PostService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function __construct(private readonly PostService $postService) {}

    public function index(Request $request): Response
    {
        $filters = $request->only(['search', 'status']);
        $posts = $this->postService->listPosts($filters);
        $categories = Category::orderBy('name')->get(['id', 'name']);

        return Inertia::render('dashboard/posts/index', [
            'posts' => $posts,
            'categories' => $categories,
            'filters' => $filters,
        ]);
    }

    public function create(): Response
    {
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $allTags = Tag::orderBy('name')->get(['id', 'name', 'slug']);

        return Inertia::render('dashboard/posts/create', [
            'categories' => $categories,
            'allTags' => $allTags,
        ]);
    }

    public function store(StorePostRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $sections = $validated['sections'] ?? [];
        unset($validated['sections']);

        $this->postService->createPost($validated, $request->user()->id, $sections);

        return redirect()->route('dashboard.posts.index')->with('success', 'Post created successfully.');
    }

    public function edit(Post $post): Response
    {
        $postData = $this->postService->getPostForEdit($post->id);
        $categories = Category::orderBy('name')->get(['id', 'name']);
        $allTags = Tag::orderBy('name')->get(['id', 'name', 'slug']);

        return Inertia::render('dashboard/posts/edit', [
            'post' => $postData,
            'categories' => $categories,
            'allTags' => $allTags,
        ]);
    }

    public function update(UpdatePostRequest $request, Post $post): RedirectResponse
    {
        $validated = $request->validated();
        $sections = $validated['sections'] ?? [];
        unset($validated['sections']);

        $this->postService->updatePost($post, $validated, $sections);

        return redirect()->route('dashboard.posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $this->postService->deletePost($post);

        return back()->with('success', 'Post deleted successfully.');
    }
}
