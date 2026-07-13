<?php

namespace App\Http\Controllers\Station;

use App\Http\Controllers\Controller;
use App\Http\Requests\Station\StoreStationRequest;
use App\Http\Requests\Station\UpdateStationRequest;
use App\Models\Station;
use App\Services\Station\StationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StationController extends Controller
{
    public function __construct(private readonly StationService $stationService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/stations/index', [
            'stations' => $this->stationService->listStations()
                ->map(
                    fn ($station): array => [
                        'id' => $station->id,
                        'code' => (string) $station->code,
                        'name' => (string) $station->name,
                        'slug' => (string) $station->slug,
                        'description' => (string) ($station->description ?? ''),
                        'mapKey' => (string) ($station->map_key ?? ''),
                        'embedMapUrl' => (string) ($station->embed_map_url ?? ''),
                        'entrances' => $station->entrances ?? [],
                        'platforms' => $station->platforms ?? [],
                        'liftsEscalators' => $station->lifts_escalators ?? [],
                        'facilities' => $station->facilities ?? [],
                        'nearbyPlaces' => $station->nearby_places ?? [],
                        'emergency' => $station->emergency ?? [],
                        'transport' => $station->transport ?? [],
                        'sortOrder' => (int) $station->sort_order,
                        'isActive' => (bool) $station->is_active,
                        'created_at' => (string) $station->created_at,
                        'updated_at' => (string) $station->updated_at,
                    ],
                )
                ->values(),
        ]);
    }

    public function store(StoreStationRequest $request): RedirectResponse
    {
        $this->stationService->createStation($request->validated());

        return redirect()->route('dashboard.stations.index')->with('success', 'Station added successfully.');
    }

    public function update(UpdateStationRequest $request, Station $station): RedirectResponse
    {
        $this->stationService->updateStation($station, $request->validated());

        return redirect()->route('dashboard.stations.index')->with('success', 'Station updated successfully.');
    }

    public function destroy(Station $station): RedirectResponse
    {
        $this->stationService->deleteStation($station);

        return redirect()->route('dashboard.stations.index')->with('success', 'Station deleted.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $request->validate([
            'ordered_ids' => ['required', 'array'],
            'ordered_ids.*' => ['integer'],
        ]);

        $this->stationService->reorderStations($request->input('ordered_ids', []));

        return redirect()->route('dashboard.stations.index');
    }
}
