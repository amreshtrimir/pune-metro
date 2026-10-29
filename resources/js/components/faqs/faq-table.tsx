import {
    createColumnHelper,
    createPaginatedRowModel,
    rowPaginationFeature,
    tableFeatures,
    useTable,
} from '@tanstack/react-table';
import type { PaginationState } from '@tanstack/react-table';
import { Eye, EyeOff, Pencil, Trash2 } from 'lucide-react';
import { createContext, useContext, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { Faq } from '@/types/cms';

const PAGE_SIZE = 20;
const VISIBLE_PAGE_BADGES = 2;

type FaqTableContextValue = {
    selected: Set<number>;
    onSelectionChange: (ids: Set<number>) => void;
    pageName: (key: string) => string;
    onToggleActive: (faq: Faq) => void;
    onEdit: (faq: Faq) => void;
    onDelete: (faq: Faq) => void;
    deletingId: number | null;
};

const FaqTableContext = createContext<FaqTableContextValue | null>(null);

const useFaqTable = () => {
    const value = useContext(FaqTableContext);

    if (!value) {
        throw new Error('FaqTable context is missing.');
    }

    return value;
};

function SelectHeader({ faqs }: { faqs: Faq[] }) {
    const { selected, onSelectionChange } = useFaqTable();
    const pageSelected = faqs.filter((f) => selected.has(f.id)).length;

    return (
        <Checkbox
            aria-label="Select all on this page"
            checked={
                pageSelected === 0
                    ? false
                    : pageSelected === faqs.length
                      ? true
                      : 'indeterminate'
            }
            onCheckedChange={(checked) => {
                const next = new Set(selected);

                faqs.forEach((f) =>
                    checked ? next.add(f.id) : next.delete(f.id),
                );
                onSelectionChange(next);
            }}
        />
    );
}

function SelectCell({ faq }: { faq: Faq }) {
    const { selected, onSelectionChange } = useFaqTable();

    return (
        <Checkbox
            aria-label={`Select ${faq.question}`}
            checked={selected.has(faq.id)}
            onCheckedChange={(checked) => {
                const next = new Set(selected);

                if (checked) {
                    next.add(faq.id);
                } else {
                    next.delete(faq.id);
                }

                onSelectionChange(next);
            }}
        />
    );
}

function PagesCell({ faq }: { faq: Faq }) {
    const { pageName } = useFaqTable();
    const extra = faq.pages.slice(VISIBLE_PAGE_BADGES);

    if (faq.pages.length === 0) {
        return (
            <span className="text-xs text-muted-foreground">Not assigned</span>
        );
    }

    return (
        <div className="flex flex-wrap gap-1">
            {faq.pages.slice(0, VISIBLE_PAGE_BADGES).map((key) => (
                <Badge key={key} variant="outline" className="max-w-full">
                    <span className="truncate">{pageName(key)}</span>
                </Badge>
            ))}
            {extra.length > 0 && (
                <Badge
                    variant="secondary"
                    title={extra.map(pageName).join(', ')}
                >
                    +{extra.length} more
                </Badge>
            )}
        </div>
    );
}

function ActionsCell({ faq }: { faq: Faq }) {
    const { onToggleActive, onEdit, onDelete, deletingId } = useFaqTable();

    return (
        <div className="flex items-center justify-end gap-1">
            <Button
                variant="ghost"
                size="icon"
                className="size-8"
                title={faq.is_active ? 'Hide' : 'Show'}
                onClick={() => onToggleActive(faq)}
            >
                {faq.is_active ? (
                    <Eye className="size-3.5" />
                ) : (
                    <EyeOff className="size-3.5" />
                )}
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="size-8"
                onClick={() => onEdit(faq)}
            >
                <Pencil className="size-3.5" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="size-8 text-destructive hover:text-destructive"
                disabled={deletingId === faq.id}
                onClick={() => onDelete(faq)}
            >
                <Trash2 className="size-3.5" />
            </Button>
        </div>
    );
}

const features = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
});

const helper = createColumnHelper<typeof features, Faq>();

const columns = helper.columns([
    helper.display({
        id: 'select',
        header: ({ table }) => (
            <SelectHeader
                faqs={table.getRowModel().rows.map((r) => r.original)}
            />
        ),
        cell: ({ row }) => <SelectCell faq={row.original} />,
    }),
    helper.accessor('question', {
        header: 'Question',
        cell: ({ row }) => (
            <p className="truncate font-medium">{row.original.question}</p>
        ),
    }),
    helper.display({
        id: 'pages',
        header: 'Pages',
        cell: ({ row }) => <PagesCell faq={row.original} />,
    }),
    helper.accessor('is_active', {
        header: 'Status',
        cell: ({ row }) => (
            <Badge variant={row.original.is_active ? 'default' : 'secondary'}>
                {row.original.is_active ? 'Active' : 'Inactive'}
            </Badge>
        ),
    }),
    helper.display({
        id: 'actions',
        header: () => <span className="block text-right">Actions</span>,
        cell: ({ row }) => <ActionsCell faq={row.original} />,
    }),
]);

const columnWidths: Record<string, string> = {
    select: 'w-12',
    question: 'w-[40%]',
    pages: 'w-[28%]',
    is_active: 'w-24',
    actions: 'w-32',
};

type FaqTableProps = FaqTableContextValue & { faqs: Faq[] };

export function FaqTable({ faqs, ...context }: FaqTableProps) {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: PAGE_SIZE,
    });
    const pageCount = Math.max(1, Math.ceil(faqs.length / PAGE_SIZE));
    const pageIndex = Math.min(pagination.pageIndex, pageCount - 1);

    const table = useTable({
        features,
        columns,
        data: faqs,
        getRowId: (faq) => String(faq.id),
        autoResetPageIndex: false,
        state: { pagination: { ...pagination, pageIndex } },
        onPaginationChange: setPagination,
    });

    const from = faqs.length === 0 ? 0 : pageIndex * PAGE_SIZE + 1;
    const to = Math.min((pageIndex + 1) * PAGE_SIZE, faqs.length);

    return (
        <FaqTableContext.Provider value={context}>
            <div className="min-h-0 flex-1 overflow-auto">
                <table className="w-full table-fixed text-sm">
                    <thead className="sticky top-0 z-10 bg-muted">
                        {table.getHeaderGroups().map((group) => (
                            <tr key={group.id} className="border-b bg-muted/40">
                                {group.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className={`px-4 py-3 text-left font-medium ${columnWidths[header.column.id] ?? ''}`}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <table.FlexRender header={header} />
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-muted/20">
                                {row.getAllCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-4 py-2 align-middle"
                                    >
                                        <table.FlexRender cell={cell} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex shrink-0 items-center justify-between border-t px-4 py-3 text-sm">
                <span className="text-muted-foreground">
                    Showing {from}–{to} of {faqs.length}
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">
                        Page {pageIndex + 1} of {pageCount}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={pageIndex === 0}
                        onClick={() => table.previousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={pageIndex >= pageCount - 1}
                        onClick={() => table.nextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </FaqTableContext.Provider>
    );
}
