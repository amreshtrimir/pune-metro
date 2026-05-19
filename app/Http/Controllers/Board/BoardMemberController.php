<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\StoreBoardMemberRequest;
use App\Http\Requests\Board\UpdateBoardMemberRequest;
use App\Models\BoardMember;
use App\Services\Board\BoardMemberService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BoardMemberController extends Controller
{
    public function __construct(private readonly BoardMemberService $boardMemberService) {}

    public function index(): Response
    {
        return Inertia::render('dashboard/board/index', [
            'members' => $this->boardMemberService->listMembers(),
        ]);
    }

    public function store(StoreBoardMemberRequest $request): RedirectResponse
    {
        $this->boardMemberService->createMember($request->validated());

        return redirect()->route('dashboard.board-members.index')->with('success', 'Board member created successfully.');
    }

    public function update(UpdateBoardMemberRequest $request, BoardMember $boardMember): RedirectResponse
    {
        $this->boardMemberService->updateMember($boardMember, $request->validated());

        return redirect()->route('dashboard.board-members.index')->with('success', 'Board member updated successfully.');
    }

    public function destroy(BoardMember $boardMember): RedirectResponse
    {
        $this->boardMemberService->deleteMember($boardMember);

        return redirect()->route('dashboard.board-members.index')->with('success', 'Board member deleted.');
    }

    public function reorder(Request $request): RedirectResponse
    {
        $request->validate(['ordered_ids' => ['required', 'array'], 'ordered_ids.*' => ['integer']]);
        $this->boardMemberService->reorderMembers($request->input('ordered_ids'));

        return redirect()->route('dashboard.board-members.index');
    }
}
