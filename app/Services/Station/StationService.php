<?php

namespace App\Services\Station;

use App\Models\Station;
use Illuminate\Database\Eloquent\Collection;

class StationService
{
    /**
     * @return Collection<int, Station>
     */
    public function listStations(): Collection
    {
        return Station::orderBy('sort_order')->orderBy('name')->get();
    }

    /**
     * @return Collection<int, Station>
     */
    public function getActiveStationsForFrontend(): Collection
    {
        return Station::where('is_active', true)
            ->get()
            ->sortBy(function (Station $station): array {
                $sortOrder = (int) $station->sort_order;
                $resolvedSortOrder = $sortOrder > 0 ? $sortOrder : $this->resolveSortOrder($station);

                return [$resolvedSortOrder, (string) $station->code, (string) $station->name];
            })
            ->values();
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createStation(array $data): Station
    {
        if (! isset($data['sort_order'])) {
            $data['sort_order'] = (int) (Station::max('sort_order') + 1);
        }

        return Station::create($data);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateStation(Station $station, array $data): Station
    {
        $station->update($data);

        return $station->fresh();
    }

    public function deleteStation(Station $station): void
    {
        $station->delete();
    }

    /**
     * @param  array<int, int>  $orderedIds
     */
    public function reorderStations(array $orderedIds): void
    {
        foreach ($orderedIds as $position => $id) {
            Station::where('id', $id)->update(['sort_order' => $position]);
        }
    }

    private function resolveSortOrder(Station $station): int
    {
        if (preg_match('/(\\d+)/', (string) $station->code, $matches)) {
            return (int) $matches[1];
        }

        if (preg_match('/pmr-(\\d+)/', (string) $station->slug, $matches)) {
            return (int) $matches[1];
        }

        return 9999;
    }
}
