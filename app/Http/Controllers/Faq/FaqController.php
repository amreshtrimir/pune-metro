<?php

namespace App\Http\Controllers\Faq;

use App\Http\Controllers\Controller;
use App\Http\Requests\Faq\AssignFaqsRequest;
use App\Http\Requests\Faq\BulkFaqsRequest;
use App\Http\Requests\Faq\StoreFaqRequest;
use App\Http\Requests\Faq\UpdateFaqRequest;
use App\Models\Faq;
use App\Services\Faq\FaqService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    public function __construct(private readonly FaqService $faqService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/faqs/index', [
            'faqs' => $this->faqService->listFaqs()->map(fn (Faq $faq): array => [
                ...$faq->only(['id', 'question', 'answer', 'is_active']),
                'pages' => $faq->pages->pluck('page')->values(),
            ]),
            'pages' => collect(config('faq_pages'))
                ->map(fn (string $name, string $key): array => ['key' => $key, 'name' => $name])
                ->values(),
        ]);
    }

    public function store(StoreFaqRequest $request): RedirectResponse
    {
        $this->faqService->createFaq($request->validated());

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQ created successfully.');
    }

    public function update(UpdateFaqRequest $request, Faq $faq): RedirectResponse
    {
        $this->faqService->updateFaq($faq, $request->validated());

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQ updated successfully.');
    }

    public function destroy(Faq $faq): RedirectResponse
    {
        $this->faqService->deleteFaq($faq);

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQ deleted.');
    }

    public function assign(AssignFaqsRequest $request): RedirectResponse
    {
        $this->faqService->assignToPage($request->validated('page'), $request->validated('faq_ids'));

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQs assigned to the page.');
    }

    public function unassign(AssignFaqsRequest $request): RedirectResponse
    {
        $this->faqService->removeFromPage($request->validated('page'), $request->validated('faq_ids'));

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQs removed from the page.');
    }

    public function bulkStatus(BulkFaqsRequest $request): RedirectResponse
    {
        $request->validate(['is_active' => ['required', 'boolean']]);
        $this->faqService->setActive($request->validated('faq_ids'), $request->boolean('is_active'));

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQs updated.');
    }

    public function bulkDestroy(BulkFaqsRequest $request): RedirectResponse
    {
        $this->faqService->deleteMany($request->validated('faq_ids'));

        return redirect()->route('dashboard.faqs.index')->with('success', 'FAQs deleted.');
    }
}
