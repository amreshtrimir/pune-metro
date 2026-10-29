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

test('fare table page renders with the stations and fares and ships the chart image', function () {
    $this->get(route('passenger-info.fare-table'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('frontend/passenger-info/fare-table')
            ->has('stations', 23)
            ->has('fares', 23)
            ->where('stations.0.en', 'Maan')
            ->where('stations.22.en', 'District Court, Pune')
        );

    expect(public_path('fare-table/pune-metro-fare-chart.png'))->toBeFile();
});

test('fare chart data is a complete symmetric matrix with a zero-distance diagonal', function () {
    $stations = config('fare_chart.stations');
    $fares = config('fare_chart.fares');
    $count = count($stations);

    expect($fares)->toHaveCount($count);

    foreach ($fares as $row => $rowFares) {
        expect($rowFares)->toHaveCount($count);
        expect($fares[$row][$row])->toBe(12);

        foreach ($rowFares as $column => $fare) {
            expect($fare)->toBeIn([12, 25, 37, 43, 49, 62]);
            expect($fares[$column][$row])->toBe($fare);
        }
    }

    foreach ($stations as $station) {
        expect($station['en'])->not->toBeEmpty();
        expect($station['mr'])->not->toBeEmpty();
    }

    // Fares never drop as stations get further apart along the line.
    foreach ($fares as $row => $rowFares) {
        for ($column = $row + 1; $column < $count; $column++) {
            expect($rowFares[$column])->toBeGreaterThanOrEqual($rowFares[$column - 1]);
        }
    }
});
