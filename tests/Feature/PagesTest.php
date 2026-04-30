<?php

use App\Models\Post;

test('about page renders successfully', function () {
    $this->get(route('about'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('frontend/about'));
});

test('sitemap returns valid xml with public urls', function () {
    $response = $this->get(route('sitemap'));

    $response->assertOk()
        ->assertHeader('Content-Type', 'application/xml; charset=utf-8');

    $body = $response->getContent();
    expect($body)
        ->toContain('<urlset')
        ->toContain(route('home'))
        ->toContain(route('about'))
        ->toContain(route('blog.index'));
});

test('sitemap includes published blog posts', function () {
    $post = Post::factory()->create(['status' => 'published', 'published_at' => now()]);

    $this->get(route('sitemap'))
        ->assertOk()
        ->assertSee(route('blog.show', $post->slug), false);
});

test('sitemap excludes unpublished posts', function () {
    $post = Post::factory()->create(['status' => 'draft']);

    $this->get(route('sitemap'))
        ->assertOk()
        ->assertDontSee(route('blog.show', $post->slug), false);
});
