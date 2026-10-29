import { Head, router } from '@inertiajs/react';
import { Eye, EyeOff, Plus, Search, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import * as FaqController from '@/actions/App/Http/Controllers/Faq/FaqController';
import { FaqFormDialog } from '@/components/faqs/faq-form-dialog';
import { FaqTable } from '@/components/faqs/faq-table';
import { HeaderActions } from '@/components/header-actions';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { SearchSelect } from '@/components/ui/search-select';
import type { Faq, FaqPageOption } from '@/types/cms';

type Props = {
    faqs: Faq[];
    pages: FaqPageOption[];
};

const plainText = (html: string) =>
    new DOMParser().parseFromString(html, 'text/html').body.textContent ?? '';

export default function FaqsIndex({ faqs, pages }: Props) {
    const [formTarget, setFormTarget] = useState<{ faq: Faq | null } | null>(
        null,
    );
    const [deleteTargets, setDeleteTargets] = useState<Faq[] | null>(null);
    const [deleting, setDeleting] = useState(false);

    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [page, setPage] = useState('');
    const [busy, setBusy] = useState(false);

    const pageOptions = pages.map((p) => ({ value: p.key, label: p.name }));

    const pageName = (key: string) =>
        pages.find((p) => p.key === key)?.name ?? key;

    const needle = search.trim().toLowerCase();
    const visibleFaqs = needle
        ? faqs.filter(
              (f) =>
                  f.question.toLowerCase().includes(needle) ||
                  plainText(f.answer).toLowerCase().includes(needle),
          )
        : faqs;

    const clearSelection = () => {
        setSelected(new Set());
        setPage('');
    };

    const runBulk = (url: string, data: Record<string, unknown>) =>
        router.post(url, data as Record<string, never>, {
            preserveScroll: true,
            onStart: () => setBusy(true),
            onSuccess: clearSelection,
            onFinish: () => setBusy(false),
        });

    const faqIds = () => [...selected];
    const handleAssign = () =>
        runBulk(FaqController.assign.url(), { page, faq_ids: faqIds() });
    const handleUnassign = () =>
        runBulk(FaqController.unassign.url(), { page, faq_ids: faqIds() });
    const handleStatus = (isActive: boolean) =>
        runBulk(FaqController.bulkStatus.url(), {
            faq_ids: faqIds(),
            is_active: isActive,
        });

    const handleToggle = (faq: Faq) =>
        router.put(
            FaqController.update.url(faq.id),
            {
                question: faq.question,
                answer: faq.answer,
                is_active: !faq.is_active,
            },
            { preserveScroll: true },
        );

    const handleConfirmDelete = () => {
        if (!deleteTargets) {
            return;
        }

        const ids = deleteTargets.map((f) => f.id);
        const options = {
            preserveScroll: true,
            onStart: () => setDeleting(true),
            onSuccess: () => {
                setSelected(
                    (prev) =>
                        new Set([...prev].filter((id) => !ids.includes(id))),
                );
                setDeleteTargets(null);
            },
            onFinish: () => setDeleting(false),
        };

        if (ids.length === 1) {
            router.delete(FaqController.destroy.url(ids[0]), options);
        } else {
            router.delete(FaqController.bulkDestroy.url(), {
                ...options,
                data: { faq_ids: ids },
            });
        }
    };

    return (
        <>
            <Head title="FAQs" />

            <HeaderActions>
                <div className="relative">
                    <Search className="pointer-events-none absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
                    <Input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search FAQs…"
                        className="h-9 w-56 pl-8 transition-[width] duration-200 focus:w-72"
                    />
                </div>
                <Button
                    className="transition-transform active:scale-95"
                    onClick={() => setFormTarget({ faq: null })}
                >
                    <Plus className="size-4" />
                    Add FAQ
                </Button>
            </HeaderActions>

            <div className="flex h-[calc(100svh-4rem)] flex-col gap-6 overflow-hidden p-6 motion-safe:animate-in motion-safe:duration-300 motion-safe:fade-in motion-safe:slide-in-from-bottom-2 md:h-[calc(100svh-5rem)]">
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border">
                    {visibleFaqs.length === 0 ? (
                        <div className="p-12 text-center text-sm text-muted-foreground">
                            {faqs.length === 0
                                ? 'No FAQs yet. Use Add FAQ to create one.'
                                : `No FAQs match “${search.trim()}”.`}
                        </div>
                    ) : (
                        <FaqTable
                            key={needle}
                            faqs={visibleFaqs}
                            selected={selected}
                            onSelectionChange={setSelected}
                            pageName={pageName}
                            onToggleActive={handleToggle}
                            onEdit={(faq) => setFormTarget({ faq })}
                            onDelete={(faq) => setDeleteTargets([faq])}
                            deletingId={
                                deleting && deleteTargets?.length === 1
                                    ? deleteTargets[0].id
                                    : null
                            }
                        />
                    )}
                </div>
            </div>

            {selected.size > 0 && (
                <div className="fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-xl border bg-popover p-3 text-popover-foreground shadow-lg motion-safe:animate-in motion-safe:duration-200 motion-safe:fade-in motion-safe:slide-in-from-bottom-4">
                    <span className="text-sm font-medium whitespace-nowrap">
                        {selected.size} selected
                    </span>
                    <SearchSelect
                        dropUp
                        className="w-60"
                        options={pageOptions}
                        value={page}
                        onChange={setPage}
                        placeholder="Choose a page…"
                    />
                    <Button disabled={!page || busy} onClick={handleAssign}>
                        Assign
                    </Button>
                    <Button
                        variant="outline"
                        disabled={!page || busy}
                        onClick={handleUnassign}
                    >
                        Remove from page
                    </Button>
                    <div className="mx-1 h-6 w-px bg-border" />
                    <Button
                        variant="outline"
                        disabled={busy}
                        onClick={() => handleStatus(true)}
                    >
                        <Eye className="size-4" />
                        Show
                    </Button>
                    <Button
                        variant="outline"
                        disabled={busy}
                        onClick={() => handleStatus(false)}
                    >
                        <EyeOff className="size-4" />
                        Hide
                    </Button>
                    <Button
                        variant="outline"
                        className="text-destructive hover:text-destructive"
                        disabled={busy}
                        onClick={() =>
                            setDeleteTargets(
                                faqs.filter((f) => selected.has(f.id)),
                            )
                        }
                    >
                        <Trash2 className="size-4" />
                        Delete
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        title="Clear selection"
                        onClick={clearSelection}
                    >
                        <X className="size-4" />
                    </Button>
                </div>
            )}

            <Dialog
                open={deleteTargets !== null}
                onOpenChange={(open) => !open && setDeleteTargets(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {deleteTargets && deleteTargets.length > 1
                                ? `Delete ${deleteTargets.length} FAQs`
                                : 'Delete FAQ'}
                        </DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-muted-foreground">
                        This will permanently delete{' '}
                        <span className="font-medium text-foreground">
                            {deleteTargets && deleteTargets.length > 1
                                ? `${deleteTargets.length} selected FAQs`
                                : `“${deleteTargets?.[0]?.question}”`}
                        </span>{' '}
                        and remove{' '}
                        {deleteTargets && deleteTargets.length > 1
                            ? 'them'
                            : 'it'}{' '}
                        from every page{' '}
                        {deleteTargets && deleteTargets.length > 1
                            ? 'they appear'
                            : 'it appears'}{' '}
                        on. This can’t be undone.
                    </p>
                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            variant="outline"
                            onClick={() => setDeleteTargets(null)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            disabled={deleting}
                            onClick={handleConfirmDelete}
                        >
                            {deleting ? 'Deleting...' : 'Delete'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {formTarget && (
                <FaqFormDialog
                    key={formTarget.faq?.id ?? 'new'}
                    faq={formTarget.faq}
                    pageOptions={pageOptions}
                    onClose={() => setFormTarget(null)}
                />
            )}
        </>
    );
}

FaqsIndex.layout = {
    breadcrumbs: [{ title: 'FAQs', href: FaqController.index.url() }],
};
