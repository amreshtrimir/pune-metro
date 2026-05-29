<?php

namespace App\Services\Marquee;

use App\Models\MarqueeItem;
use Illuminate\Database\Eloquent\Collection;

class MarqueeItemService
{
    /**
     * @return Collection<int, MarqueeItem>
     */
    public function listItems(): Collection
    {
        return MarqueeItem::orderBy('sort_order')->get();
    }

    /**
     * @return Collection<int, MarqueeItem>
     */
    public function getActiveItemsForFrontend(): Collection
    {
        return MarqueeItem::where('is_active', true)
            ->orderBy('sort_order')
            ->get();
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createItem(array $data): MarqueeItem
    {
        return MarqueeItem::create($data);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateItem(MarqueeItem $item, array $data): void
    {
        $item->update($data);
    }

    public function deleteItem(MarqueeItem $item): void
    {
        $item->delete();
    }

    /**
     * @param  array<int, int>  $orderedIds
     */
    public function reorderItems(array $orderedIds): void
    {
        foreach ($orderedIds as $position => $id) {
            MarqueeItem::where('id', $id)->update(['sort_order' => $position]);
        }
    }
}
