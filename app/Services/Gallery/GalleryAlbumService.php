<?php

namespace App\Services\Gallery;

use App\Models\GalleryAlbum;
use App\Models\GalleryAlbumImage;
use Illuminate\Database\Eloquent\Collection;

class GalleryAlbumService
{
    /**
     * @return Collection<int, GalleryAlbum>
     */
    public function listAlbums(): Collection
    {
        return GalleryAlbum::withCount('images')->orderBy('sort_order')->get();
    }

    public function getAlbumForEdit(int $id): GalleryAlbum
    {
        return GalleryAlbum::with([
            'images.media.variants',
            'images.thumbMedia.variants',
        ])->findOrFail($id);
    }

    /**
     * @return Collection<int, GalleryAlbum>
     */
    public function getAlbumsForFrontend(): Collection
    {
        return GalleryAlbum::where('is_active', true)
            ->orderBy('sort_order')
            ->with([
                'images' => function ($query) {
                    $query->orderBy('sort_order');
                },
                'images.media',
                'images.thumbMedia',
            ])
            ->get();
    }

    /**
     * @param  array{title: string, description?: string|null, sort_order?: int, is_active?: bool}  $data
     */
    public function createAlbum(array $data): GalleryAlbum
    {
        if (! isset($data['sort_order'])) {
            $data['sort_order'] = (int) GalleryAlbum::max('sort_order') + 1;
        }

        return GalleryAlbum::create($data);
    }

    /**
     * @param  array{title?: string, description?: string|null, sort_order?: int, is_active?: bool}  $data
     */
    public function updateAlbum(GalleryAlbum $album, array $data): GalleryAlbum
    {
        $album->update($data);

        return $album->fresh();
    }

    public function deleteAlbum(GalleryAlbum $album): void
    {
        $album->delete();
    }

    /**
     * @param  array{media_id: int, thumb_media_id?: int|null}  $data
     */
    public function addImage(GalleryAlbum $album, array $data): GalleryAlbumImage
    {
        $data['sort_order'] = $album->images()->max('sort_order') + 1;

        return $album->images()->create($data);
    }

    /**
     * @param  array{media_id?: int, thumb_media_id?: int|null}  $data
     */
    public function updateImage(GalleryAlbumImage $image, array $data): GalleryAlbumImage
    {
        $image->update($data);

        return $image->fresh(['media.variants', 'thumbMedia.variants']);
    }

    public function removeImage(GalleryAlbumImage $image): void
    {
        $image->delete();
    }

    /**
     * @param  int[]  $orderedIds
     */
    public function reorderImages(GalleryAlbum $album, array $orderedIds): void
    {
        foreach ($orderedIds as $position => $imageId) {
            $album->images()->where('id', $imageId)->update(['sort_order' => $position]);
        }
    }
}
