<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

#[Fillable([
    'title',
    'slug',
    'excerpt',
    'status',
    'published_at',
    'is_featured',
    'is_trending',
    'user_id',
    'featured_image_media_id',
    'card_image_media_id',
    'meta_title',
    'meta_description',
])]
class Post extends Model
{
    use SoftDeletes;

    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
            'is_featured' => 'boolean',
            'is_trending' => 'boolean',
            'featured_image_media_id' => 'integer',
            'card_image_media_id' => 'integer',
        ];
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function featuredImage(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'featured_image_media_id');
    }

    public function cardImage(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'card_image_media_id');
    }

    public function sections(): HasMany
    {
        return $this->hasMany(PostSection::class)->orderBy('position');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function views(): HasMany
    {
        return $this->hasMany(PostView::class);
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled');
    }
}
