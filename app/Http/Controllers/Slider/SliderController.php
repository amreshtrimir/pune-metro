<?php

namespace App\Http\Controllers\Slider;

use App\Http\Controllers\Controller;
use App\Http\Requests\Slider\StoreSliderRequest;
use App\Http\Requests\Slider\StoreSliderSlideRequest;
use App\Http\Requests\Slider\UpdateSliderRequest;
use App\Http\Requests\Slider\UpdateSliderSlideRequest;
use App\Models\Slider;
use App\Models\SliderSlide;
use App\Services\Slider\SliderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SliderController extends Controller
{
    public function __construct(private readonly SliderService $sliderService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/sliders/index', [
            'sliders' => $this->sliderService->listSliders(),
        ]);
    }

    public function store(StoreSliderRequest $request): RedirectResponse
    {
        $slider = $this->sliderService->createSlider($request->validated());

        return redirect()->route('dashboard.sliders.edit', $slider)->with('success', 'Slider created successfully.');
    }

    public function edit(Slider $slider): Response
    {
        return Inertia::render('dashboard/sliders/edit', [
            'slider' => $this->sliderService->getSliderForEdit($slider->id),
        ]);
    }

    public function update(UpdateSliderRequest $request, Slider $slider): RedirectResponse
    {
        $this->sliderService->updateSlider($slider, $request->validated());

        return redirect()->route('dashboard.sliders.index')->with('success', 'Slider updated successfully.');
    }

    public function destroy(Slider $slider): RedirectResponse
    {
        $this->sliderService->deleteSlider($slider);

        return redirect()->route('dashboard.sliders.index')->with('success', 'Slider deleted.');
    }

    public function storeSlide(StoreSliderSlideRequest $request, Slider $slider): RedirectResponse
    {
        $this->sliderService->createSlide($slider, $request->validated());

        return redirect()->route('dashboard.sliders.edit', $slider)->with('success', 'Slide added.');
    }

    public function updateSlide(UpdateSliderSlideRequest $request, Slider $slider, SliderSlide $slide): RedirectResponse
    {
        $this->sliderService->updateSlide($slide, $request->validated());

        return redirect()->route('dashboard.sliders.edit', $slider)->with('success', 'Slide updated.');
    }

    public function destroySlide(Slider $slider, SliderSlide $slide): RedirectResponse
    {
        $this->sliderService->deleteSlide($slide);

        return redirect()->route('dashboard.sliders.edit', $slider)->with('success', 'Slide deleted.');
    }

    public function reorderSlides(Request $request, Slider $slider): RedirectResponse
    {
        $request->validate(['ordered_ids' => ['required', 'array'], 'ordered_ids.*' => ['integer']]);
        $this->sliderService->reorderSlides($slider, $request->input('ordered_ids'));

        return redirect()->route('dashboard.sliders.edit', $slider);
    }

    public function show(string $slug): JsonResponse
    {
        $slider = $this->sliderService->getActiveSliderBySlug($slug);

        if (! $slider) {
            return response()->json(['error' => 'Slider not found'], 404);
        }

        return response()->json($slider);
    }
}
