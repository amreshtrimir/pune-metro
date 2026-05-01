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
}
