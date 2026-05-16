<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['title', 'slug', 'description', 'sort_order', 'is_active'])]
class GalleryAlbum extends Model
{
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function images(): HasMany
    {
        return $this->hasMany(GalleryAlbumImage::class)->orderBy('sort_order');
    }
}
