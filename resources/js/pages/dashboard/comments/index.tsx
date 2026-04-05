import { Head, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Comment, PaginatedData } from '@/types';
import * as CommentController from '@/actions/App/Http/Controllers/Blog/CommentController';
import { CheckCircle, XCircle, Trash2 } from 'lucide-react';

type Props = {
    comments: PaginatedData<Comment>;
    filters: { status?: string };
};

const STATUS_COLORS: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    approved: 'default',
    pending: 'secondary',
    rejected: 'destructive',
};

export default function CommentsIndex({ comments, filters }: Props) {
    const handleModerate = (id: number, status: 'approved' | 'rejected') => {
        router.patch(CommentController.moderate.url({ comment: id }), { status }, { preserveScroll: true });
    };

    const handleDelete = (id: number) => {
        if (!confirm('Delete this comment?')) return;
        router.delete(CommentController.destroy.url({ comment: id }), { preserveScroll: true });
    };

    const handleStatusFilter = (status: string) => {
        router.get(CommentController.index.url(), { status: status || undefined }, { preserveState: true, replace: true });
    };

    return (
        <>
            <Head title="Comments" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Comments</h1>
                        <p className="text-sm text-muted-foreground">{comments.total} total comments</p>
                    </div>
                    <div className="flex gap-2">
                        {['', 'pending', 'approved', 'rejected'].map((s) => (
                            <Button
                                key={s}
                                size="sm"
                                variant={filters.status === s || (!filters.status && !s) ? 'default' : 'outline'}
                                onClick={() => handleStatusFilter(s)}
                            >
                                {s ? s.charAt(0).toUpperCase() + s.slice(1) : 'All'}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    {comments.data.map((comment) => (
                        <div key={comment.id} className="rounded-xl border bg-card p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-sm">{comment.author_name}</span>
                                        <span className="text-xs text-muted-foreground">{comment.author_email}</span>
                                        <Badge variant={STATUS_COLORS[comment.status] ?? 'secondary'} className="text-[10px]">
                                            {comment.status}
                                        </Badge>
                                    </div>
                                    {comment.post && (
                                        <p className="text-xs text-muted-foreground mb-1">
                                            On: <span className="font-medium">{comment.post.title}</span>
                                        </p>
                                    )}
                                    <p className="text-sm">{comment.body}</p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {new Date(comment.created_at).toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex flex-shrink-0 gap-1">
                                    {comment.status !== 'approved' && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 text-xs text-green-600 border-green-300 hover:bg-green-50"
                                            onClick={() => handleModerate(comment.id, 'approved')}
                                        >
                                            <CheckCircle className="mr-1 size-3" /> Approve
                                        </Button>
                                    )}
                                    {comment.status !== 'rejected' && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 text-xs text-amber-600 border-amber-300 hover:bg-amber-50"
                                            onClick={() => handleModerate(comment.id, 'rejected')}
                                        >
                                            <XCircle className="mr-1 size-3" /> Reject
                                        </Button>
                                    )}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="size-7 text-destructive hover:text-destructive"
                                        onClick={() => handleDelete(comment.id)}
                                    >
                                        <Trash2 className="size-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {comments.data.length === 0 && (
                        <div className="flex flex-col items-center justify-center rounded-xl border py-16 text-center">
                            <p className="font-medium">No comments found</p>
                        </div>
                    )}
                </div>

                {comments.last_page > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        {comments.links.map((link, i) => (
                            <Button
                                key={i}
                                size="sm"
                                variant={link.active ? 'default' : 'outline'}
                                disabled={!link.url}
                                onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
