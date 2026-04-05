<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'slider_id',
    'heading_line1',
    'heading_line2',
    'paragraph',
    'desktop_media_id',
    'mobile_media_id',
    'position',
    'is_active',
])]
class SliderSlide extends Model
{
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'position' => 'integer',
            'slider_id' => 'integer',
            'desktop_media_id' => 'integer',
            'mobile_media_id' => 'integer',
        ];
    }

    public function slider(): BelongsTo
    {
        return $this->belongsTo(Slider::class);
    }

    public function desktopMedia(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'desktop_media_id');
    }

    public function mobileMedia(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'mobile_media_id');
    }
}
