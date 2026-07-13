<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'code',
    'name',
    'slug',
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
])]
class Station extends Model
{
    protected function casts(): array
    {
        return [
            'entrances' => 'array',
            'platforms' => 'array',
            'lifts_escalators' => 'array',
            'facilities' => 'array',
            'nearby_places' => 'array',
            'emergency' => 'array',
            'transport' => 'array',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
