<?php

namespace App\Http\Middleware;

use App\Services\Faq\FaqService;
use App\Services\Popup\PopupService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
                'roles' => $request->user()?->roles->pluck('name')->all() ?? [],
            ],
            'pageFaqs' => fn (): array => $this->pageFaqs($request),
            'pagePopup' => fn (): ?array => $this->pagePopup($request),
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }

    /**
     * Active FAQs assigned to the page being visited.
     *
     * @return array<int, array{id: int, question: string, answer: string}>
     */
    private function pageFaqs(Request $request): array
    {
        $page = $this->contentPage($request);

        if ($page === null) {
            return [];
        }

        return app(FaqService::class)->getActiveFaqsForPage($page)->toArray();
    }

    /**
     * Published popup for the page being visited.
     *
     * @return array{id: int, title: string, image_url: string, mobile_image_url: string|null, delay_seconds: int, version: string}|null
     */
    private function pagePopup(Request $request): ?array
    {
        $page = $this->contentPage($request);

        if ($page === null) {
            return null;
        }

        return app(PopupService::class)->getPublishedPopupForPage($page);
    }

    /**
     * Route name of the current page, only if admins can attach content to it (config/faq_pages.php).
     */
    private function contentPage(Request $request): ?string
    {
        $routeName = $request->route()?->getName();

        if ($routeName === null || ! array_key_exists($routeName, config('faq_pages'))) {
            return null;
        }

        return $routeName;
    }
}
