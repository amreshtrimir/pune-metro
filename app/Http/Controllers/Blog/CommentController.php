<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\ModerateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CommentController extends Controller
{
    public function index(Request $request): Response
    {
        $comments = Comment::with('post:id,title,slug')
            ->when($request->input('status'), fn ($q, $status) => $q->where('status', $status))
            ->latest()
            ->paginate(20);

        return Inertia::render('dashboard/comments/index', [
            'comments' => $comments,
            'filters' => $request->only(['status']),
        ]);
    }

    public function moderate(ModerateCommentRequest $request, Comment $comment): RedirectResponse
    {
        $comment->update(['status' => $request->validated('status')]);

        return back()->with('success', 'Comment updated.');
    }

    public function destroy(Comment $comment): RedirectResponse
    {
        $comment->delete();

        return back()->with('success', 'Comment deleted.');
    }
}
