<?php

namespace App\Http\Controllers\ExplorePune;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExplorePune\StoreExplorePunePlaceRequest;
use App\Http\Requests\ExplorePune\UpdateExplorePunePlaceRequest;
use App\Models\ExplorePunePlace;
use App\Services\ExplorePune\ExplorePunePlaceService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExplorePunePlaceController extends Controller
{
    public function __construct(private readonly ExplorePunePlaceService $service) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/explore-pune/index', [
            'places' => $this->service->listPlaces(),
        ]);
    }

    public function store(StoreExplorePunePlaceRequest $request): RedirectResponse
    {
        $this->service->createPlace($request->validated());

        return redirect()->route('dashboard.explore-pune.index')->with('success', 'Place added successfully.');
    }

    public function update(UpdateExplorePunePlaceRequest $request, ExplorePunePlace $explorePunePlace): RedirectResponse
    {
        $this->service->updatePlace($explorePunePlace, $request->validated());

        return redirect()->route('dashboard.explore-pune.index')->with('success', 'Place updated successfully.');
    }

    public function destroy(ExplorePunePlace $explorePunePlace): RedirectResponse
    {
        $this->service->deletePlace($explorePunePlace);

        return redirect()->route('dashboard.explore-pune.index')->with('success', 'Place deleted.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $request->validate([
            'ordered_ids' => ['required', 'array'],
            'ordered_ids.*' => ['integer'],
        ]);

        $this->service->reorderPlaces($request->input('ordered_ids'));

        return redirect()->route('dashboard.explore-pune.index');
    }
}
