<?php

namespace App\Http\Controllers\Gallery;

use App\Http\Controllers\Controller;
use App\Http\Requests\Gallery\StoreGalleryAlbumImageRequest;
use App\Http\Requests\Gallery\StoreGalleryAlbumRequest;
use App\Http\Requests\Gallery\UpdateGalleryAlbumImageRequest;
use App\Http\Requests\Gallery\UpdateGalleryAlbumRequest;
use App\Models\GalleryAlbum;
use App\Models\GalleryAlbumImage;
use App\Services\Gallery\GalleryAlbumService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryAlbumController extends Controller
{
    public function __construct(private readonly GalleryAlbumService $galleryAlbumService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/gallery/index', [
            'albums' => $this->galleryAlbumService->listAlbums(),
        ]);
    }

    public function store(StoreGalleryAlbumRequest $request): RedirectResponse
    {
        $album = $this->galleryAlbumService->createAlbum($request->validated());

        return redirect()->route('dashboard.gallery-albums.edit', $album)->with('success', 'Album created successfully.');
    }

    public function edit(GalleryAlbum $galleryAlbum): Response
    {
        return Inertia::render('dashboard/gallery/edit', [
            'album' => $this->galleryAlbumService->getAlbumForEdit($galleryAlbum->id),
        ]);
    }

    public function update(UpdateGalleryAlbumRequest $request, GalleryAlbum $galleryAlbum): RedirectResponse
    {
        $this->galleryAlbumService->updateAlbum($galleryAlbum, $request->validated());

        return redirect()->route('dashboard.gallery-albums.index')->with('success', 'Album updated successfully.');
    }

    public function destroy(GalleryAlbum $galleryAlbum): RedirectResponse
    {
        $this->galleryAlbumService->deleteAlbum($galleryAlbum);

        return redirect()->route('dashboard.gallery-albums.index')->with('success', 'Album deleted.');
    }

    public function storeImage(StoreGalleryAlbumImageRequest $request, GalleryAlbum $galleryAlbum): RedirectResponse
    {
        $this->galleryAlbumService->addImage($galleryAlbum, $request->validated());

        return redirect()->route('dashboard.gallery-albums.edit', $galleryAlbum)->with('success', 'Image added.');
    }

    public function bulkStoreImages(Request $request, GalleryAlbum $galleryAlbum): RedirectResponse
    {
        $request->validate([
            'images' => ['required', 'array', 'min:1'],
            'images.*.media_id' => ['required', 'integer', 'exists:media,id'],
            'images.*.thumb_media_id' => ['nullable', 'integer', 'exists:media,id'],
        ]);

        $this->galleryAlbumService->bulkAddImages($galleryAlbum, $request->input('images'));

        return redirect()->route('dashboard.gallery-albums.edit', $galleryAlbum)->with('success', count($request->input('images')).' images added.');
    }

    public function updateImage(UpdateGalleryAlbumImageRequest $request, GalleryAlbum $galleryAlbum, GalleryAlbumImage $image): RedirectResponse
    {
        $this->galleryAlbumService->updateImage($image, $request->validated());

        return redirect()->route('dashboard.gallery-albums.edit', $galleryAlbum)->with('success', 'Image updated.');
    }

    public function destroyImage(GalleryAlbum $galleryAlbum, GalleryAlbumImage $image): RedirectResponse
    {
        $this->galleryAlbumService->removeImage($image);

        return redirect()->route('dashboard.gallery-albums.edit', $galleryAlbum)->with('success', 'Image removed.');
    }

    public function reorderImages(Request $request, GalleryAlbum $galleryAlbum): RedirectResponse
    {
        $request->validate(['ordered_ids' => ['required', 'array'], 'ordered_ids.*' => ['integer']]);
        $this->galleryAlbumService->reorderImages($galleryAlbum, $request->input('ordered_ids'));

        return redirect()->route('dashboard.gallery-albums.edit', $galleryAlbum);
    }
}
