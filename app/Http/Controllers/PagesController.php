<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function overview(): Response
    {
        return Inertia::render('frontend/overview');
    }

    public function board(): Response
    {
        return Inertia::render('frontend/board');
    }
}
