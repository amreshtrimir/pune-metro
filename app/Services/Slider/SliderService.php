<?php

namespace App\Services\Slider;

use App\Models\Slider;
use App\Models\SliderSlide;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

class SliderService
{
    /**
     * @return Collection<int, Slider>
     */
    public function listSliders(): Collection
    {
        return Slider::withCount('slides')->orderBy('name')->get();
    }

    public function getSliderForEdit(int $id): Slider
    {
        return Slider::with([
            'slides.desktopMedia.variants',
            'slides.mobileMedia.variants',
        ])->findOrFail($id);
    }

    public function getActiveSliderBySlug(string $slug): ?Slider
    {
        return Slider::where('slug', $slug)
            ->where('is_active', true)
            ->with([
                'slides' => function ($query) {
                    $query->where('is_active', true)->orderBy('position');
                },
                'slides.desktopMedia.variants',
                'slides.mobileMedia.variants',
            ])
            ->first();
    }

    /**
     * @param  array{name: string, slug?: string, is_active?: bool}  $data
     */
    public function createSlider(array $data): Slider
    {
        $data['slug'] = $data['slug'] ?? Str::slug($data['name']);

        return Slider::create($data);
    }

    /**
     * @param  array{name?: string, slug?: string, is_active?: bool}  $data
     */
    public function updateSlider(Slider $slider, array $data): Slider
    {
        if (isset($data['name']) && ! isset($data['slug'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        $slider->update($data);

        return $slider->fresh();
    }

    public function deleteSlider(Slider $slider): void
    {
        $slider->delete();
    }

    /**
     * @param  array{heading_line1: string, heading_line2?: string|null, paragraph?: string|null, desktop_media_id?: int|null, mobile_media_id?: int|null, is_active?: bool}  $data
     */
    public function createSlide(Slider $slider, array $data): SliderSlide
    {
        $data['position'] = $slider->slides()->max('position') + 1;

        return $slider->slides()->create($data);
    }

    /**
     * @param  array{heading_line1?: string, heading_line2?: string|null, paragraph?: string|null, desktop_media_id?: int|null, mobile_media_id?: int|null, position?: int, is_active?: bool}  $data
     */
    public function updateSlide(SliderSlide $slide, array $data): SliderSlide
    {
        $slide->update($data);

        return $slide->fresh(['desktopMedia.variants', 'mobileMedia.variants']);
    }

    public function deleteSlide(SliderSlide $slide): void
    {
        $slide->delete();
    }

    /**
     * @param  int[]  $orderedIds
     */
    public function reorderSlides(Slider $slider, array $orderedIds): void
    {
        foreach ($orderedIds as $position => $slideId) {
            $slider->slides()->where('id', $slideId)->update(['position' => $position]);
        }
    }
}
