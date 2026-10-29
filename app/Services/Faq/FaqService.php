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
        $pages = $data['pages'] ?? [];
        unset($data['pages']);
        $data['sort_order'] = (Faq::max('sort_order') ?? -1) + 1;

        $faq = Faq::create($data);
        $this->syncFaqPages($faq, $pages);

        return $faq;
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateFaq(Faq $faq, array $data): void
    {
        $pages = $data['pages'] ?? null;
        unset($data['pages']);

        $faq->update($data);

        if ($pages !== null) {
            $this->syncFaqPages($faq, $pages);
        }
    }

    public function deleteFaq(Faq $faq): void
    {
        $faq->delete();
    }

    /**
     * @param  array<int, string>  $pages
     */
    private function syncFaqPages(Faq $faq, array $pages): void
    {
        $faq->pages()->whereNotIn('page', $pages)->delete();

        foreach (array_unique($pages) as $page) {
            $faq->pages()->firstOrCreate(['page' => $page]);
        }
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
