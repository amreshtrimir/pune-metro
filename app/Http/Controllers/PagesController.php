<?php

namespace App\Http\Controllers;

use App\Services\Gallery\GalleryAlbumService;
use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function __construct(private readonly GalleryAlbumService $galleryAlbumService) {}

    public function overview(): Response
    {
        return Inertia::render('frontend/about');
    }

    public function board(): Response
    {
        return Inertia::render('frontend/board');
    }

    public function projectUpdate(): Response
    {
        return Inertia::render('frontend/project-update', [
            'images' => $this->galleryAlbumService->getProjectUpdateImages(),
        ]);
    }

    public function keyHighlights(): Response
    {
        return Inertia::render('frontend/key-highlights');
    }

    public function photoGallery(): Response
    {
        return Inertia::render('frontend/project-profile/photo-gallery', [
            'albums' => $this->galleryAlbumService->getAlbumsForFrontend(),
        ]);
    }

    public function routeMap(): Response
    {
        return Inertia::render('frontend/route-map');
    }

    public function stationList(): Response
    {
        return Inertia::render('frontend/route/station-list');
    }

    public function stationDetail(string $slug): Response
    {
        $stations = [
            ['code' => 'PMR 1', 'name' => 'Maan', 'slug' => 'pmr-1'],
            ['code' => 'PMR 2', 'name' => 'Maan - MIDC Circle, Phase II', 'slug' => 'pmr-2'],
            ['code' => 'PMR 3', 'name' => 'Maan Bus Depot', 'slug' => 'pmr-3'],
            ['code' => 'PMR 4', 'name' => 'Hinjawadi Phase-II Circle-II', 'slug' => 'pmr-4'],
            ['code' => 'PMR 5', 'name' => 'Hinjawadi Phase-II Circle-I', 'slug' => 'pmr-5'],
            ['code' => 'PMR 6', 'name' => 'Padmabhushan Chowk', 'slug' => 'pmr-6'],
            ['code' => 'PMR 7', 'name' => 'Shree Shiv Chhatrapati Shivaji Maharaj Chowk, Hinjawadi', 'slug' => 'pmr-7'],
            ['code' => 'PMR 8', 'name' => 'Hinjawadi Phase - I', 'slug' => 'pmr-8'],
            ['code' => 'PMR 9', 'name' => 'Wakad Chowk', 'slug' => 'pmr-9'],
            ['code' => 'PMR 10', 'name' => 'Shree Shiv Chhatrapati Sports Complex, Mahalunge', 'slug' => 'pmr-10'],
            ['code' => 'PMR 11', 'name' => 'Mitcon Balewadi', 'slug' => 'pmr-11'],
            ['code' => 'PMR 12', 'name' => 'R K Laxman Museum Balewadi', 'slug' => 'pmr-12'],
            ['code' => 'PMR 13', 'name' => 'Balewadi High Street', 'slug' => 'pmr-13'],
            ['code' => 'PMR 14', 'name' => 'Balewadi Phata', 'slug' => 'pmr-14'],
            ['code' => 'PMR 15', 'name' => 'Baner Gaon', 'slug' => 'pmr-15'],
            ['code' => 'PMR 16', 'name' => 'Baner Pashan Link Road', 'slug' => 'pmr-16'],
            ['code' => 'PMR 17', 'name' => 'Aundh', 'slug' => 'pmr-17'],
            ['code' => 'PMR 18', 'name' => 'Sakalnagar', 'slug' => 'pmr-18'],
            ['code' => 'PMR 19', 'name' => 'Savitribai Phule Pune University', 'slug' => 'pmr-19'],
            ['code' => 'PMR 20', 'name' => 'Bhosalenagar – RBI', 'slug' => 'pmr-20'],
            ['code' => 'PMR 21', 'name' => 'Agriculture College', 'slug' => 'pmr-21'],
            ['code' => 'PMR 22', 'name' => 'Shivaji Nagar', 'slug' => 'pmr-22'],
            ['code' => 'PMR 23', 'name' => 'District Court, Pune', 'slug' => 'pmr-23'],
        ];

        $station = collect($stations)->firstWhere('slug', $slug);

        if (! $station) {
            abort(404);
        }

        return Inertia::render('frontend/route/station-detail', [
            'station' => $station,
        ]);
    }

    public function eiaReports(): Response
    {
        return Inertia::render('frontend/environment/eia-reports');
    }

    public function carbonCredit(): Response
    {
        return Inertia::render('frontend/environment/carbon-credit');
    }

    public function artFromScrap(): Response
    {
        return Inertia::render('frontend/environment/art-from-scrap');
    }

    public function greenInitiatives(): Response
    {
        return Inertia::render('frontend/environment/green-initiatives');
    }

    public function timeTable(): Response
    {
        return Inertia::render('frontend/passenger-info/time-table');
    }

    public function fareTable(): Response
    {
        return Inertia::render('frontend/passenger-info/fare-table');
    }

    public function dosAndDonts(): Response
    {
        return Inertia::render('frontend/passenger-info/dos-and-donts');
    }

    public function itemsNotToCarry(): Response
    {
        return Inertia::render('frontend/passenger-info/items-not-to-carry');
    }

    public function offencesAndPenalties(): Response
    {
        return Inertia::render('frontend/passenger-info/offences-and-penalties');
    }

    public function lostAndFound(): Response
    {
        return Inertia::render('frontend/passenger-info/lost-and-found');
    }

    public function customerService(): Response
    {
        return Inertia::render('frontend/passenger-info/customer-service');
    }

    public function lastMileConnectivity(): Response
    {
        return Inertia::render('frontend/passenger-info/last-mile-connectivity');
    }

    public function retailFnb(): Response
    {
        return Inertia::render('frontend/passenger-info/retail-fnb');
    }

    public function stationAreaMap(): Response
    {
        return Inertia::render('frontend/passenger-info/station-area-map');
    }

    public function passengerAmenities(): Response
    {
        return Inertia::render('frontend/passenger-info/passenger-amenities');
    }

    public function termsAndConditions(): Response
    {
        return Inertia::render('frontend/legal/terms-and-conditions');
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('frontend/legal/privacy-policy');
    }

    public function stationRetail(): Response
    {
        return Inertia::render('frontend/business-development/station-retail');
    }
}
