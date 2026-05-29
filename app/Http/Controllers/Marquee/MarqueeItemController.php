<?php

namespace App\Http\Controllers\Marquee;

use App\Http\Controllers\Controller;
use App\Http\Requests\Marquee\StoreMarqueeItemRequest;
use App\Http\Requests\Marquee\UpdateMarqueeItemRequest;
use App\Models\MarqueeItem;
use App\Services\Marquee\MarqueeItemService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MarqueeItemController extends Controller
{
    public function __construct(private readonly MarqueeItemService $marqueeItemService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/marquee/index', [
            'items' => $this->marqueeItemService->listItems(),
        ]);
    }

    public function store(StoreMarqueeItemRequest $request): RedirectResponse
    {
        $this->marqueeItemService->createItem($request->validated());

        return redirect()->route('dashboard.marquee.index')->with('success', 'Marquee item created successfully.');
    }

    public function update(UpdateMarqueeItemRequest $request, MarqueeItem $marqueeItem): RedirectResponse
    {
        $this->marqueeItemService->updateItem($marqueeItem, $request->validated());

        return redirect()->route('dashboard.marquee.index')->with('success', 'Marquee item updated successfully.');
    }

    public function destroy(MarqueeItem $marqueeItem): RedirectResponse
    {
        $this->marqueeItemService->deleteItem($marqueeItem);

        return redirect()->route('dashboard.marquee.index')->with('success', 'Marquee item deleted.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $request->validate(['ordered_ids' => ['required', 'array'], 'ordered_ids.*' => ['integer']]);
        $this->marqueeItemService->reorderItems($request->input('ordered_ids'));

        return redirect()->route('dashboard.marquee.index');
    }
}
