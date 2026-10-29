<?php

namespace App\Services\Faq;

use App\Models\Faq;
use Illuminate\Database\Eloquent\Collection;

class FaqService
{
    /**
     * @return Collection<int, Faq>
     */
    public function listFaqs(): Collection
    {
        return Faq::with('pages')->orderBy('sort_order')->orderBy('id')->get();
    }

    /**
     * @return Collection<int, Faq>
     */
    public function getActiveFaqsForPage(string $page): Collection
    {
        return Faq::where('is_active', true)
            ->whereHas('pages', fn ($query) => $query->where('page', $page))
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get(['id', 'question', 'answer']);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createFaq(array $data): Faq
    {
        $data['sort_order'] = (Faq::max('sort_order') ?? -1) + 1;

        return Faq::create($data);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateFaq(Faq $faq, array $data): void
    {
        $faq->update($data);
    }

    public function deleteFaq(Faq $faq): void
    {
        $faq->delete();
    }

    /**
     * Make the given FAQs the complete set shown on a page.
     *
     * @param  array<int, int>  $faqIds
     */
    public function syncPage(string $page, array $faqIds): void
    {
        $faqIds = array_unique($faqIds);

        Faq::query()->whereHas('pages', fn ($query) => $query->where('page', $page))
            ->whereNotIn('id', $faqIds)
            ->each(fn (Faq $faq) => $faq->pages()->where('page', $page)->delete());

        foreach ($faqIds as $faqId) {
            Faq::findOrFail($faqId)->pages()->firstOrCreate(['page' => $page]);
        }
    }
}
