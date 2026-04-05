<?php

namespace App\Services\Media;

use App\Models\Media;
use App\Models\MediaDimension;
use App\Models\MediaVariant;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MediaService
{
    public function upload(UploadedFile $file, array $dimensionIds, User $user, ?string $module = null): Media
    {
        $fileName = $file->getClientOriginalName();
        $safeName = Str::slug(pathinfo($fileName, PATHINFO_FILENAME)) . '_' . time() . '.' . $file->getClientOriginalExtension();
        $filePath = $file->storeAs('media/originals', $safeName, 'public');

        $media = Media::create([
            'file_name' => $fileName,
            'file_path' => $filePath,
            'file_type' => $file->getMimeType(),
            'file_size' => $file->getSize(),
            'uploaded_by' => $user->id,
            'module' => $module,
        ]);

        if (!empty($dimensionIds)) {
            $dimensions = MediaDimension::whereIn('id', $dimensionIds)->get();
            $this->generateVariants($media, $dimensions->toArray());
        }

        return $media->load('variants');
    }

    /**
     * @param  array<int, array{width: int, height: int}>  $dimensions
     */
    public function generateVariants(Media $media, array $dimensions): void
    {
        $originalPath = Storage::disk('public')->path($media->file_path);
        $extension = strtolower(pathinfo($media->file_path, PATHINFO_EXTENSION));
        $mimeType = $media->file_type;

        foreach ($dimensions as $dimension) {
            $width = (int) $dimension['width'];
            $height = (int) $dimension['height'];

            $source = $this->createImageResource($originalPath, $mimeType);

            if ($source === false) {
                continue;
            }

            $srcWidth = imagesx($source);
            $srcHeight = imagesy($source);

            $srcRatio = $srcWidth / $srcHeight;
            $dstRatio = $width / $height;

            if ($srcRatio > $dstRatio) {
                $cropHeight = $srcHeight;
                $cropWidth = (int) ($srcHeight * $dstRatio);
                $cropX = (int) (($srcWidth - $cropWidth) / 2);
                $cropY = 0;
            } else {
                $cropWidth = $srcWidth;
                $cropHeight = (int) ($srcWidth / $dstRatio);
                $cropX = 0;
                $cropY = (int) (($srcHeight - $cropHeight) / 2);
            }

            $resized = imagecreatetruecolor($width, $height);
            imagecopyresampled($resized, $source, 0, 0, $cropX, $cropY, $width, $height, $cropWidth, $cropHeight);

            $variantName = pathinfo($media->file_path, PATHINFO_FILENAME) . "_{$width}x{$height}.jpg";
            $variantPath = 'media/variants/' . $variantName;
            $fullVariantPath = Storage::disk('public')->path($variantPath);

            Storage::disk('public')->makeDirectory('media/variants');
            imagejpeg($resized, $fullVariantPath, 85);

            imagedestroy($source);
            imagedestroy($resized);

            MediaVariant::create([
                'media_id' => $media->id,
                'width' => $width,
                'height' => $height,
                'file_path' => $variantPath,
            ]);
        }
    }

    /**
     * @return \GdImage|false
     */
    private function createImageResource(string $path, string $mimeType): mixed
    {
        return match (true) {
            str_contains($mimeType, 'jpeg') => imagecreatefromjpeg($path),
            str_contains($mimeType, 'png') => imagecreatefrompng($path),
            str_contains($mimeType, 'gif') => imagecreatefromgif($path),
            str_contains($mimeType, 'webp') => imagecreatefromwebp($path),
            default => false,
        };
    }

    public function getMediaWithVariants(int $id): Media
    {
        return Media::with('variants')->findOrFail($id);
    }

    public function listMedia(array $filters = []): LengthAwarePaginator
    {
        $query = Media::with('variants')->latest();

        if (!empty($filters['search'])) {
            $query->where('file_name', 'like', '%' . $filters['search'] . '%');
        }

        if (!empty($filters['file_type'])) {
            $query->where('file_type', 'like', $filters['file_type'] . '%');
        }

        if (!empty($filters['module'])) {
            $query->where('module', $filters['module']);
        }

        return $query->paginate(24);
    }

    public function updateMedia(int $id, array $data): Media
    {
        $media = Media::with('variants')->findOrFail($id);
        $media->update($data);

        return $media;
    }

    public function deleteMedia(int $id): void
    {
        $media = Media::with('variants')->findOrFail($id);

        foreach ($media->variants as $variant) {
            Storage::disk('public')->delete($variant->file_path);
        }

        Storage::disk('public')->delete($media->file_path);
        $media->delete();
    }

    public function listDimensions(?string $module = null): Collection
    {
        $query = MediaDimension::query();

        if ($module !== null) {
            $query->where(function ($q) use ($module) {
                $q->where('module', $module)->orWhereNull('module');
            });
        }

        return $query->orderBy('name')->get();
    }
}
