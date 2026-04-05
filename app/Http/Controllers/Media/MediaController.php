<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Http\Requests\Media\StoreMediaRequest;
use App\Http\Requests\Media\UpdateMediaRequest;
use App\Models\MediaDimension;
use App\Services\Media\MediaService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    public function __construct(private readonly MediaService $mediaService) {}

    public function index(Request $request): Response|JsonResponse
    {
        $filters = $request->only(['search', 'file_type', 'module']);
        $media = $this->mediaService->listMedia($filters);
        $dimensions = $this->mediaService->listDimensions();

        if ($request->wantsJson()) {
            return response()->json(['media' => $media, 'dimensions' => $dimensions]);
        }

        return Inertia::render('dashboard/media/index', [
            'media' => $media,
            'dimensions' => $dimensions,
            'filters' => $filters,
        ]);
    }

    public function store(StoreMediaRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $dimensionIds = $validated['dimension_ids'] ?? [];
        $customDimensions = $validated['custom_dimensions'] ?? [];

        $media = $this->mediaService->upload(
            $request->file('file'),
            $dimensionIds,
            $request->user(),
            $validated['module'] ?? null,
        );

        if (! empty($customDimensions)) {
            $this->mediaService->generateVariants($media, $customDimensions);
            $media->load('variants');
        }

        return response()->json($media);
    }

    public function show(int $id): JsonResponse
    {
        $media = $this->mediaService->getMediaWithVariants($id);

        return response()->json($media);
    }

    public function usages(int $id): JsonResponse
    {
        return response()->json($this->mediaService->getUsages($id));
    }

    public function update(UpdateMediaRequest $request, int $id): JsonResponse
    {
        $media = $this->mediaService->updateMedia($id, $request->validated());

        return response()->json($media);
    }

    public function destroy(int $id): RedirectResponse
    {
        $this->mediaService->deleteMedia($id);

        return back()->with('success', 'Media deleted successfully.');
    }

    public function dimensions(): JsonResponse
    {
        return response()->json(MediaDimension::orderBy('name')->get());
    }
}
