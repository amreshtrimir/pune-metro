<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['title', 'media_id', 'mobile_media_id', 'page', 'delay_seconds', 'is_published'])]
class Popup extends Model
{
    /** New popups are drafts until an admin publishes them. */
    protected $attributes = [
        'is_published' => false,
    ];

    protected function casts(): array
    {
        return [
            'media_id' => 'integer',
            'mobile_media_id' => 'integer',
            'delay_seconds' => 'integer',
            'is_published' => 'boolean',
        ];
    }

    public function media(): BelongsTo
    {
        return $this->belongsTo(Media::class);
    }

    /** Optional portrait image; screens fall back to media() without it. */
    public function mobileMedia(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'mobile_media_id');
    }
}
