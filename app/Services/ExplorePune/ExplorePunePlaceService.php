<?php

namespace App\Services\ExplorePune;

use App\Models\ExplorePunePlace;
use Illuminate\Database\Eloquent\Collection;

class ExplorePunePlaceService
{
    /**
     * @return Collection<int, ExplorePunePlace>
     */
    public function listPlaces(): Collection
    {
        return ExplorePunePlace::with('media.variants')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();
    }

    /**
     * @return Collection<int, ExplorePunePlace>
     */
    public function getActivePlacesForFrontend(): Collection
    {
        return ExplorePunePlace::with('media.variants')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();
    }

    /**
     * @param  array{name: string, category: string, nearest_station: string, other_nearby_mahametro_stations?: string|null, distance_from_station: string, distance_note?: string|null, about: string, highlights: string, google_maps_link?: string|null, media_id?: int|null, fallback_bg?: string|null, sort_order?: int, is_active?: bool}  $data
     */
    public function createPlace(array $data): ExplorePunePlace
    {
        if (! isset($data['sort_order'])) {
            $data['sort_order'] = (int) ExplorePunePlace::max('sort_order') + 1;
        }

        return ExplorePunePlace::create($data);
    }

    /**
     * @param  array{name?: string, category?: string, nearest_station?: string, other_nearby_mahametro_stations?: string|null, distance_from_station?: string, distance_note?: string|null, about?: string, highlights?: string, google_maps_link?: string|null, media_id?: int|null, fallback_bg?: string|null, sort_order?: int, is_active?: bool}  $data
     */
    public function updatePlace(ExplorePunePlace $place, array $data): ExplorePunePlace
    {
        $place->update($data);

        return $place->fresh(['media.variants']);
    }

    public function deletePlace(ExplorePunePlace $place): void
    {
        $place->delete();
    }

    /**
     * @param  int[]  $orderedIds
     */
    public function reorderPlaces(array $orderedIds): void
    {
        foreach ($orderedIds as $position => $id) {
            ExplorePunePlace::where('id', $id)->update(['sort_order' => $position + 1]);
        }
    }
}
