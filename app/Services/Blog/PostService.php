<?php

namespace App\Services\Blog;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Str;

class PostService
{
    /**
     * @param  array{title: string, slug?: string, excerpt?: string, status: string, published_at?: string|null, is_featured?: bool, is_trending?: bool, meta_title?: string, meta_description?: string, category_ids?: int[], tags?: string[]}  $data
     * @param  array<int, array{type: string, content: array<string, mixed>, position: int}>  $sections
     */
    public function createPost(array $data, int $userId, array $sections = []): Post
    {
        $data['user_id'] = $userId;
        $data['slug'] = $data['slug'] ?? Str::slug($data['title']);

        $post = Post::create($data);

        $this->syncSections($post, $sections);
        $this->syncCategories($post, $data['category_ids'] ?? []);
        $this->syncTags($post, $data['tags'] ?? []);

        return $post->load(['sections', 'categories', 'tags']);
    }

    /**
     * @param  array{title?: string, slug?: string, excerpt?: string, status?: string, published_at?: string|null, is_featured?: bool, is_trending?: bool, meta_title?: string, meta_description?: string, category_ids?: int[], tags?: string[]}  $data
     * @param  array<int, array{type: string, content: array<string, mixed>, position: int}>  $sections
     */
    public function updatePost(Post $post, array $data, array $sections = []): Post
    {
        if (isset($data['title']) && ! isset($data['slug'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        $post->update($data);

        $this->syncSections($post, $sections);
        $this->syncCategories($post, $data['category_ids'] ?? []);
        $this->syncTags($post, $data['tags'] ?? []);

        return $post->load(['sections', 'categories', 'tags']);
    }

    /**
     * @param  array<int, array{type: string, content: array<string, mixed>, position: int}>  $sections
     */
    public function syncSections(Post $post, array $sections): void
    {
        $post->sections()->delete();

        foreach ($sections as $index => $section) {
            $post->sections()->create([
                'type' => $section['type'],
                'content' => $section['content'],
                'position' => $section['position'] ?? $index,
            ]);
        }
    }

    /**
     * @param  array<int, array{id: int, position: int}>  $positions
     */
    public function reorderSections(Post $post, array $positions): void
    {
        foreach ($positions as $item) {
            $post->sections()->where('id', $item['id'])->update(['position' => $item['position']]);
        }
    }

    public function publishScheduledPosts(): int
    {
        return Post::scheduled()
            ->where('published_at', '<=', now())
            ->update(['status' => 'published']);
    }

    public function listPosts(array $filters = []): LengthAwarePaginator
    {
        $query = Post::with(['author', 'categories', 'tags'])
            ->withCount('views')
            ->latest();

        if (! empty($filters['search'])) {
            $query->where('title', 'like', '%'.$filters['search'].'%');
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        return $query->paginate(20);
    }

    public function getPostForEdit(int $id): Post
    {
        return Post::with(['sections', 'categories', 'tags', 'featuredImage.variants', 'cardImage.variants'])->findOrFail($id);
    }

    public function deletePost(Post $post): void
    {
        $post->delete();
    }

    /**
     * @param  int[]  $categoryIds
     */
    private function syncCategories(Post $post, array $categoryIds): void
    {
        $post->categories()->sync($categoryIds);
    }

    /**
     * @param  string[]  $tagNames
     */
    private function syncTags(Post $post, array $tagNames): void
    {
        $tagIds = collect($tagNames)
            ->filter()
            ->map(function (string $name): Tag {
                return Tag::firstOrCreate(
                    ['slug' => Str::slug($name)],
                    ['name' => $name],
                );
            })
            ->pluck('id')
            ->toArray();

        $post->tags()->sync($tagIds);
    }
}
