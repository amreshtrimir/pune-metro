<?php

namespace App\Http\Controllers\Popup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Popup\SavePopupRequest;
use App\Models\Popup;
use App\Services\Popup\PopupService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PopupController extends Controller
{
    public function __construct(private readonly PopupService $popupService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/popups/index', [
            'popups' => $this->popupService->listPopups(),
            'pages' => config('faq_pages'),
        ]);
    }

    public function store(SavePopupRequest $request): RedirectResponse
    {
        $this->popupService->createPopup($request->validated());

        return redirect()->route('dashboard.popups.index')->with('success', 'Popup saved as draft.');
    }

    public function update(SavePopupRequest $request, Popup $popup): RedirectResponse
    {
        $this->popupService->updatePopup($popup, $request->validated());

        return redirect()->route('dashboard.popups.index')->with('success', 'Popup updated successfully.');
    }

    public function publish(Request $request, Popup $popup): RedirectResponse
    {
        $validated = $request->validate(['is_published' => ['required', 'boolean']]);
        $this->popupService->setPublished($popup, (bool) $validated['is_published']);

        return redirect()->route('dashboard.popups.index');
    }

    public function destroy(Popup $popup): RedirectResponse
    {
        $this->popupService->deletePopup($popup);

        return redirect()->route('dashboard.popups.index')->with('success', 'Popup deleted.');
    }
}
