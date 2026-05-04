<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
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
        return Inertia::render('frontend/project-update');
    }

    public function keyHighlights(): Response
    {
        return Inertia::render('frontend/key-highlights');
    }

    public function routeMap(): Response
    {
        return Inertia::render('frontend/route-map');
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
}
