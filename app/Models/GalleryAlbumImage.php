<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['gallery_album_id', 'media_id', 'thumb_media_id', 'sort_order'])]
class GalleryAlbumImage extends Model
{
    protected function casts(): array
    {
        return [
            'gallery_album_id' => 'integer',
            'media_id' => 'integer',
            'thumb_media_id' => 'integer',
            'sort_order' => 'integer',
        ];
    }

    public function album(): BelongsTo
    {
        return $this->belongsTo(GalleryAlbum::class, 'gallery_album_id');
    }

    public function media(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'media_id');
    }

    public function thumbMedia(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'thumb_media_id');
    }
}
