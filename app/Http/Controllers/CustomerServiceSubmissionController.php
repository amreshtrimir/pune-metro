<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerServiceSubmissionRequest;
use App\Mail\CustomerServiceSubmissionConfirmed;
use App\Mail\CustomerServiceSubmissionNotification;
use App\Models\CustomerServiceSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class CustomerServiceSubmissionController extends Controller
{
    public function index(Request $request): Response
    {
        $filters = $request->only(['status']);
        $allowedStatuses = ['new', 'in_progress', 'resolved'];

        $submissions = CustomerServiceSubmission::query()
            ->when(
                $request->input('status'),
                fn ($query, string $status): mixed => in_array($status, $allowedStatuses, true) ? $query->where('status', $status) : $query
            )
            ->latest()
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('dashboard/customer-service-submissions/index', [
            'submissions' => $submissions,
            'filters' => $filters,
        ]);
    }

    public function store(StoreCustomerServiceSubmissionRequest $request): RedirectResponse
    {
        $submission = CustomerServiceSubmission::create([...$request->validated(), 'status' => 'new']);

        Mail::to($submission->email)->queue(new CustomerServiceSubmissionConfirmed($submission));
        Mail::to('support@punerimetro.in')->queue(new CustomerServiceSubmissionNotification($submission));

        return back()->with('success', 'Thank you for your enquiry. Our team will contact you shortly.');
    }
}
