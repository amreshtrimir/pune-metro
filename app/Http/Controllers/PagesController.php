<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('frontend/about');
    }

    public function board(): Response
    {
        return Inertia::render('frontend/board');
    }
}
