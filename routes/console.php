<?php

use App\Services\Blog\PostService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::call(function () {
    app(PostService::class)->publishScheduledPosts();
})->everyMinute()->name('publish-scheduled-posts')->withoutOverlapping();
