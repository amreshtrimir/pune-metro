<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\StoreCommentRequest;
use App\Models\Comment;
use App\Models\Post;
use App\Models\PostView;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PublicBlogController extends Controller
{
    public function index(): Response
    {
        $posts = Post::with(['author:id,name', 'categories:id,name,slug', 'tags:id,name,slug'])
            ->withCount('views')
            ->published()
            ->latest('published_at')
            ->paginate(12);

        $featuredPosts = Post::with(['author:id,name', 'categories:id,name,slug'])
            ->published()
            ->where('is_featured', true)
            ->latest('published_at')
            ->limit(3)
            ->get();

        $trendingPosts = Post::with(['author:id,name'])
            ->published()
            ->where('is_trending', true)
            ->latest('published_at')
            ->limit(5)
            ->get();

        return Inertia::render('blog/index', [
            'posts' => $posts,
            'featuredPosts' => $featuredPosts,
            'trendingPosts' => $trendingPosts,
        ]);
    }

    public function show(string $slug): Response
    {
        $post = Post::with([
            'author:id,name',
            'categories:id,name,slug',
            'tags:id,name,slug',
            'sections' => fn ($q) => $q->orderBy('position'),
            'comments' => fn ($q) => $q->where('status', 'approved')->latest(),
        ])
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();

        PostView::create([
            'post_id' => $post->id,
            'ip_address' => request()->ip(),
            'viewed_at' => now(),
        ]);

        $relatedPosts = Post::with(['author:id,name'])
            ->published()
            ->whereHas('categories', fn ($q) => $q->whereIn('categories.id', $post->categories->pluck('id')))
            ->where('id', '!=', $post->id)
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('blog/show', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
        ]);
    }

    public function storeComment(StoreCommentRequest $request, Post $post): RedirectResponse
    {
        $post->comments()->create(array_merge($request->validated(), ['status' => 'pending']));

        return back()->with('success', 'Your comment has been submitted for review.');
    }
}
