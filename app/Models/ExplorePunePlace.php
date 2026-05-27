<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'name',
    'category',
    'nearest_station',
    'distance_from_station',
    'distance_note',
    'about',
    'highlights',
    'google_maps_link',
    'media_id',
    'fallback_bg',
    'sort_order',
    'is_active',
])]
class ExplorePunePlace extends Model
{
    protected function casts(): array
    {
        return [
            'media_id' => 'integer',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    public function media(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'media_id');
    }
}
