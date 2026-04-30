<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $staticUrls = [
            ['loc' => route('home'), 'priority' => '1.0', 'changefreq' => 'daily'],
            ['loc' => route('about'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['loc' => route('blog.index'), 'priority' => '0.9', 'changefreq' => 'daily'],
        ];

        $postUrls = Post::query()
            ->where('status', 'published')
            ->orderByDesc('published_at')
            ->get(['slug', 'updated_at'])
            ->map(fn (Post $post) => [
                'loc' => route('blog.show', $post->slug),
                'lastmod' => $post->updated_at->toAtomString(),
                'priority' => '0.7',
                'changefreq' => 'weekly',
            ]);

        $xml = view('sitemap', [
            'staticUrls' => $staticUrls,
            'postUrls' => $postUrls,
        ])->render();

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
        ]);
    }
}
