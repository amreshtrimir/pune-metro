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

test('fare table page renders and ships the fare chart image', function () {
    $this->get(route('passenger-info.fare-table'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('frontend/passenger-info/fare-table'));

    expect(public_path('fare-table/pune-metro-fare-chart.png'))->toBeFile();
});

test('fare table page source carries the fare intro paragraph', function () {
    $source = file_get_contents(resource_path('js/pages/frontend/passenger-info/fare-table.tsx'));
    $text = preg_replace('/\s+/', ' ', $source);

    expect($text)->toContain('Pune Metro Line 3 offers distance-based fares for all commuters travelling across the Hinjawadi - Shivajinagar corridor.')
        ->toContain('Tickets can be purchased using NCMC card, WhatsApp QR, Ticket Vending Machine or manual counter at every station.')
        ->toContain('Refer to the fare chart below for complete details.');
});
