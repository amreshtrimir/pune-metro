<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Log;

class StationSeeder extends Seeder
{
    public function run(): void
    {
        $configStations = collect(config('station.stations', []))
            ->filter(static fn (array $station): bool => ! empty($station))
            ->mapWithKeys(static fn (array $station): array => [
                Str::slug($station['slug'] ?? $station['code'] ?? '') => $station,
            ])
            ->filter(static fn (array $station, string $slug): bool => $slug !== '')
            ->all();

        $existingMapOverrides = $this->getExistingMapOverrides();

        $stations = [];
        $seedPath = database_path('seeders/data/stations.php');

        if (is_file($seedPath)) {
            $stations = require $seedPath;
        }

        if (! is_array($stations)) {
            $stations = [];
        }

        DB::table('stations')->upsert(
            array_map(function (array $station) use ($configStations, $existingMapOverrides): array {
                $slug = (string) Arr::get($station, 'slug', '');
                $configStation = Arr::get($configStations, $slug, []);

                return [
                    'code' => (string) Arr::get($station, 'code', ''),
                    'name' => (string) Arr::get($station, 'name', ''),
                    'slug' => (string) $slug,
                    'description' => (string) Arr::get($station, 'description', ''),
                    'map_key' => $this->resolveMapField(
                        (string) Arr::get($station, 'map_key', ''),
                        (string) Arr::get($configStation, 'mapKey', Arr::get($configStation, 'map_key', '')),
                        (string) Arr::get($existingMapOverrides, $slug . '.map_key', ''),
                    ),
                    'embed_map_url' => $this->resolveMapField(
                        (string) Arr::get($station, 'embed_map_url', ''),
                        (string) Arr::get($configStation, 'embedMapUrl', Arr::get($configStation, 'embed_map_url', '')),
                        (string) Arr::get($existingMapOverrides, $slug . '.embed_map_url', ''),
                    ),
                    'entrances' => json_encode(Arr::get($station, 'entrances', []), JSON_UNESCAPED_SLASHES),
                    'platforms' => json_encode(Arr::get($station, 'platforms', []), JSON_UNESCAPED_SLASHES),
                    'lifts_escalators' => json_encode(Arr::get($station, 'lifts_escalators', []), JSON_UNESCAPED_SLASHES),
                    'facilities' => json_encode(Arr::get($station, 'facilities', []), JSON_UNESCAPED_SLASHES),
                    'nearby_places' => json_encode(Arr::get($station, 'nearby_places', []), JSON_UNESCAPED_SLASHES),
                    'emergency' => json_encode(Arr::get($station, 'emergency', []), JSON_UNESCAPED_SLASHES),
                    'transport' => json_encode(Arr::get($station, 'transport', []), JSON_UNESCAPED_SLASHES),
                    'is_active' => true,
                    'sort_order' => (int) Arr::get($station, 'sort_order', 0),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }, $stations),
            ['slug'],
            [
                'code',
                'name',
                'description',
                'map_key',
                'embed_map_url',
                'entrances',
                'platforms',
                'lifts_escalators',
                'facilities',
                'nearby_places',
                'emergency',
                'transport',
                'is_active',
                'sort_order',
                'updated_at',
            ],
        );
    }

    /**
     * Read current DB map fields for compatibility fallback.
     *
     * @return array<string, array{map_key:string,embed_map_url:string}>
     */
    private function getExistingMapOverrides(): array
    {
        try {
            return DB::table('stations')
                ->get(['slug', 'map_key', 'embed_map_url'])
                ->keyBy('slug')
                ->map(static function (object $station): array {
                    return [
                        'map_key' => (string) ($station->map_key ?? ''),
                        'embed_map_url' => (string) ($station->embed_map_url ?? ''),
                    ];
                })
                ->toArray();
        } catch (QueryException $exception) {
            Log::warning('StationSeeder could not read existing map overrides', ['error' => $exception->getMessage()]);

            return [];
        }
    }

    private function resolveMapField(string $docxValue, string $configValue, string $existingValue): string
    {
        $candidateOrder = [$configValue, $existingValue, $docxValue];

        foreach ($candidateOrder as $candidate) {
            $normalized = trim((string) $candidate);
            if ($normalized !== '') {
                return $normalized;
            }
        }

        return '';
    }
}
