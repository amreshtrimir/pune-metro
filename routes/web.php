<?php

use App\Http\Controllers\Blog\CategoryController;
use App\Http\Controllers\Blog\CommentController;
use App\Http\Controllers\Blog\PostController;
use App\Http\Controllers\Blog\PublicBlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Media\MediaController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\Slider\SliderController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// Public frontend pages
Route::get('/about/overview', [PagesController::class, 'overview'])->name('about.overview');
Route::get('/about/board', [PagesController::class, 'board'])->name('about.board');

// project-profile routes and pages
Route::prefix('project-profile')->name('project-profile.')->group(function (): void {
    Route::get('/update', [PagesController::class, 'projectUpdate'])->name('update');
    Route::get('/highlights', [PagesController::class, 'keyHighlights'])->name('highlights');
    Route::get('/route-map', [PagesController::class, 'routeMap'])->name('route-map');
});

// Passenger Info routes and pages
Route::prefix('passenger-info')->name('passenger-info.')->group(function (): void {
    Route::get('/time-table', [PagesController::class, 'timeTable'])->name('time-table');
    Route::get('/fare-table', [PagesController::class, 'fareTable'])->name('fare-table');
    Route::get('/dos-and-donts', [PagesController::class, 'dosAndDonts'])->name('dos-and-donts');
    Route::get('/items-not-to-carry', [PagesController::class, 'itemsNotToCarry'])->name('items-not-to-carry');
    Route::get('/offences-and-penalties', [PagesController::class, 'offencesAndPenalties'])->name('offences-and-penalties');
    Route::get('/lost-and-found', [PagesController::class, 'lostAndFound'])->name('lost-and-found');
    Route::get('/last-mile-connectivity', [PagesController::class, 'lastMileConnectivity'])->name('last-mile-connectivity');
    Route::get('/retail-fnb', [PagesController::class, 'retailFnb'])->name('retail-fnb');
    Route::get('/station-area-map', [PagesController::class, 'stationAreaMap'])->name('station-area-map');
    Route::get('/passenger-amenities', [PagesController::class, 'passengerAmenities'])->name('passenger-amenities');
});

// Environment routes and pages
Route::prefix('environment')->name('environment.')->group(function (): void {
    Route::get('/eia-reports', [PagesController::class, 'eiaReports'])->name('eia-reports');
    Route::get('/carbon-credit', [PagesController::class, 'carbonCredit'])->name('carbon-credit');
    Route::get('/art-from-scrap', [PagesController::class, 'artFromScrap'])->name('art-from-scrap');
    Route::get('/green-initiatives', [PagesController::class, 'greenInitiatives'])->name('green-initiatives');
});

// Sitemap
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// Public Blog
Route::prefix('blog')->name('blog.')->group(function (): void {
    Route::get('/', [PublicBlogController::class, 'index'])->name('index');
    Route::get('/{slug}', [PublicBlogController::class, 'show'])->name('show');
    Route::post('/{post}/comments', [PublicBlogController::class, 'storeComment'])->name('comments.store');
});

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Admin-only routes
    Route::middleware('admin')->prefix('dashboard')->name('dashboard.')->group(function (): void {
        // Media
        Route::get('/media', [MediaController::class, 'index'])->name('media.index');
        Route::post('/media', [MediaController::class, 'store'])->name('media.store');
        Route::get('/media/dimensions', [MediaController::class, 'dimensions'])->name('media.dimensions');
        Route::get('/media/{id}', [MediaController::class, 'show'])->name('media.show');
        Route::get('/media/{id}/usages', [MediaController::class, 'usages'])->name('media.usages');
        Route::put('/media/{id}', [MediaController::class, 'update'])->name('media.update');
        Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.destroy');

        // Posts
        Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
        Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
        Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
        Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
        Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
        Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');

        // Categories
        Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
        Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
        Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');
        Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');

        // Comments
        Route::get('/comments', [CommentController::class, 'index'])->name('comments.index');
        Route::patch('/comments/{comment}/moderate', [CommentController::class, 'moderate'])->name('comments.moderate');
        Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');

        // Sliders
        Route::get('/sliders', [SliderController::class, 'index'])->name('sliders.index');
        Route::post('/sliders', [SliderController::class, 'store'])->name('sliders.store');
        Route::get('/sliders/{slider}/edit', [SliderController::class, 'edit'])->name('sliders.edit');
        Route::put('/sliders/{slider}', [SliderController::class, 'update'])->name('sliders.update');
        Route::delete('/sliders/{slider}', [SliderController::class, 'destroy'])->name('sliders.destroy');
        Route::post('/sliders/{slider}/slides', [SliderController::class, 'storeSlide'])->name('sliders.slides.store');
        Route::put('/sliders/{slider}/slides/{slide}', [SliderController::class, 'updateSlide'])->name('sliders.slides.update');
        Route::delete('/sliders/{slider}/slides/{slide}', [SliderController::class, 'destroySlide'])->name('sliders.slides.destroy');
        Route::post('/sliders/{slider}/slides/reorder', [SliderController::class, 'reorderSlides'])->name('sliders.slides.reorder');
    });
});

// Public slider API
Route::get('/api/sliders/{slug}', [SliderController::class, 'show'])->name('sliders.show');

require __DIR__.'/settings.php';
