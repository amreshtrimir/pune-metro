<?php

namespace App\Services\Popup;

use App\Models\Popup;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class PopupService
{
    /**
     * @return Collection<int, Popup>
     */
    public function listPopups(): Collection
    {
        return Popup::with('media')->latest('id')->get();
    }

    /**
     * @return array{id: int, title: string, image_url: string, delay_seconds: int, version: string}|null
     */
    public function getPublishedPopupForPage(string $page): ?array
    {
        $popup = Popup::with('media')
            ->where('page', $page)
            ->where('is_published', true)
            ->whereHas('media')
            ->first();

        if ($popup === null) {
            return null;
        }

        return [
            'id' => $popup->id,
            'title' => $popup->title,
            'image_url' => $popup->media->url,
            'delay_seconds' => $popup->delay_seconds,
            // Changes on every edit, so visitors who closed the old popup see the new one.
            'version' => $popup->id.'-'.$popup->updated_at->timestamp,
        ];
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createPopup(array $data): Popup
    {
        return Popup::create($data);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updatePopup(Popup $popup, array $data): void
    {
        DB::transaction(function () use ($popup, $data): void {
            $popup->update($data);

            // A published popup may have moved to a page that already has a live one.
            if ($popup->is_published) {
                $this->unpublishOthersOnPage($popup);
            }
        });
    }

    public function setPublished(Popup $popup, bool $isPublished): void
    {
        $this->updatePopup($popup, ['is_published' => $isPublished]);
    }

    public function deletePopup(Popup $popup): void
    {
        $popup->delete();
    }

    /** Each page can have only one published popup. */
    private function unpublishOthersOnPage(Popup $popup): void
    {
        Popup::where('page', $popup->page)
            ->whereKeyNot($popup->id)
            ->update(['is_published' => false]);
    }
}
