import { Head, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { CustomerServiceSubmission, CustomerServiceSubmissionStatus, PaginatedData } from '@/types';

type Props = {
    submissions: PaginatedData<CustomerServiceSubmission>;
    filters: {
        status?: CustomerServiceSubmissionStatus | '';
    };
};

const STATUS_COLORS: Record<CustomerServiceSubmissionStatus, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    new: 'default',
    in_progress: 'secondary',
    resolved: 'outline',
};

export default function CustomerServiceSubmissionsIndex({ submissions, filters }: Props) {
    const handleStatusFilter = (status: CustomerServiceSubmissionStatus | '') => {
        router.get('/dashboard/customer-service-submissions', { status: status || undefined }, { preserveState: true, replace: true });
    };

    return (
        <>
            <Head title="Customer Service Submissions" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Customer Service Submissions</h1>
                        <p className="text-sm text-muted-foreground">{submissions.total} total submissions</p>
                    </div>
                    <div className="flex gap-2">
                        {['', 'new', 'in_progress', 'resolved'].map((status) => (
                            <Button
                                key={status}
                                size="sm"
                                variant={filters.status === status || (!filters.status && !status) ? 'default' : 'outline'}
                                onClick={() => handleStatusFilter(status as CustomerServiceSubmissionStatus | '')}
                            >
                                {status || 'All'}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border">
                    <table className="w-full text-sm">
                        <thead className="border-b bg-muted/50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium">Name</th>
                                <th className="px-4 py-3 text-left font-medium">Contact</th>
                                <th className="px-4 py-3 text-left font-medium">Subject</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-left font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {submissions.data.map((submission) => (
                                <tr key={submission.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-4 py-3">
                                        <p className="font-medium">{submission.name}</p>
                                        <p className="text-xs text-muted-foreground">{submission.email}</p>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">{submission.mobile}</td>
                                    <td className="px-4 py-3">
                                        <p className="font-medium">{submission.subject}</p>
                                        <p className="text-xs text-muted-foreground max-h-10 overflow-hidden">{submission.message}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={STATUS_COLORS[submission.status]} className="text-[10px]">
                                            {submission.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs">
                                        {new Date(submission.created_at).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                            {submissions.data.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-4 py-12 text-center text-muted-foreground">
                                        No submissions found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {submissions.last_page > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        {submissions.links.map((link, i) => (
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
