import { Head, Form, router } from '@inertiajs/react';
import { Plus, Search, X } from 'lucide-react';
import { useState } from 'react';
import * as FaqController from '@/actions/App/Http/Controllers/Faq/FaqController';
import { FaqTable } from '@/components/faqs/faq-table';
import { HeaderActions } from '@/components/header-actions';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MultiSelect } from '@/components/ui/multi-select';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { SearchSelect } from '@/components/ui/search-select';
import type { Faq, FaqPageOption } from '@/types/cms';

type Props = {
    faqs: Faq[];
    pages: FaqPageOption[];
};

type FaqFormState = {
    question: string;
    answer: string;
    is_active: boolean;
    pages: string[];
};

const plainText = (html: string) =>
    new DOMParser().parseFromString(html, 'text/html').body.textContent ?? '';

export default function FaqsIndex({ faqs, pages }: Props) {
    const [editing, setEditing] = useState<Faq | null>(null);
    const [editForm, setEditForm] = useState<FaqFormState>({
        question: '',
        answer: '',
        is_active: true,
        pages: [],
    });
    const [adding, setAdding] = useState(false);
    const [addAnswer, setAddAnswer] = useState('');
    const [addPages, setAddPages] = useState<string[]>([]);
    const [saving, setSaving] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Faq | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [page, setPage] = useState('');
    const [assigning, setAssigning] = useState(false);

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

    const handleAssign = () => {
        setAssigning(true);
        router.post(
            FaqController.assign.url(),
            { page, faq_ids: [...selected] },
            {
                preserveScroll: true,
                onSuccess: clearSelection,
                onFinish: () => setAssigning(false),
            },
        );
    };

    const openEdit = (faq: Faq) => {
        setEditForm({
            question: faq.question,
            answer: faq.answer,
            is_active: faq.is_active,
            pages: faq.pages,
        });
        setEditing(faq);
    };

    const handleSaveEdit = () => {
        if (!editing) {
            return;
        }

        setSaving(true);
        router.put(FaqController.update.url(editing.id), editForm, {
            onSuccess: () => setEditing(null),
            onFinish: () => setSaving(false),
        });
    };

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
        if (!deleteTarget) {
            return;
        }

        setDeletingId(deleteTarget.id);
        router.delete(FaqController.destroy.url(deleteTarget.id), {
            preserveScroll: true,
            onSuccess: () => setDeleteTarget(null),
            onFinish: () => setDeletingId(null),
        });
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
                        className="h-9 w-64 pl-8"
                    />
                </div>
                <Button onClick={() => setAdding(true)}>
                    <Plus className="size-4" />
                    Add FAQ
                </Button>
            </HeaderActions>

            <div className="flex h-[calc(100svh-4rem)] flex-col gap-6 overflow-hidden p-6 md:h-[calc(100svh-5rem)]">
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
                            onEdit={openEdit}
                            onDelete={setDeleteTarget}
                            deletingId={deletingId}
                        />
                    )}
                </div>
            </div>

            {selected.size > 0 && (
                <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-xl border bg-popover p-3 text-popover-foreground shadow-lg">
                    <span className="text-sm font-medium whitespace-nowrap">
                        {selected.size} selected
                    </span>
                    <SearchSelect
                        dropUp
                        options={pageOptions}
                        value={page}
                        onChange={setPage}
                        placeholder="Assign to page…"
                    />
                    <Button
                        disabled={!page || assigning}
                        onClick={handleAssign}
                    >
                        {assigning ? 'Assigning...' : 'Assign'}
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
                open={deleteTarget !== null}
                onOpenChange={(open) => !open && setDeleteTarget(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete FAQ</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-muted-foreground">
                        This will permanently delete{' '}
                        <span className="font-medium text-foreground">
                            “{deleteTarget?.question}”
                        </span>{' '}
                        and remove it from every page it appears on. This can’t
                        be undone.
                    </p>
                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            variant="outline"
                            onClick={() => setDeleteTarget(null)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            disabled={deletingId !== null}
                            onClick={handleConfirmDelete}
                        >
                            {deletingId !== null ? 'Deleting...' : 'Delete'}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={adding} onOpenChange={setAdding}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add FAQ</DialogTitle>
                    </DialogHeader>
                    <Form
                        {...FaqController.store.form()}
                        resetOnSuccess
                        onSuccess={() => {
                            setAdding(false);
                            setAddPages([]);
                            setAddAnswer('');
                        }}
                        className="space-y-3"
                    >
                        {({ errors, processing }) => (
                            <>
                                <div className="space-y-1">
                                    <Input
                                        name="question"
                                        placeholder="Question"
                                        className={
                                            errors.question
                                                ? 'border-destructive'
                                                : ''
                                        }
                                    />
                                    {errors.question && (
                                        <p className="text-xs text-destructive">
                                            {errors.question}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <RichTextEditor
                                        label="Answer"
                                        value={addAnswer}
                                        onChange={setAddAnswer}
                                    />
                                    <input
                                        type="hidden"
                                        name="answer"
                                        value={addAnswer}
                                    />
                                    {errors.answer && (
                                        <p className="text-xs text-destructive">
                                            {errors.answer}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <Label>Show on pages</Label>
                                    <MultiSelect
                                        options={pageOptions}
                                        selected={addPages}
                                        onChange={setAddPages}
                                        placeholder="Search and select pages…"
                                    />
                                    {addPages.map((key) => (
                                        <input
                                            key={key}
                                            type="hidden"
                                            name="pages[]"
                                            value={key}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Adding...' : 'Add FAQ'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </DialogContent>
            </Dialog>

            <Dialog
                open={editing !== null}
                onOpenChange={(open) => !open && setEditing(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit FAQ</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                            <Label htmlFor="edit-question">Question</Label>
                            <Input
                                id="edit-question"
                                value={editForm.question}
                                onChange={(e) =>
                                    setEditForm((prev) => ({
                                        ...prev,
                                        question: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="space-y-1">
                            <RichTextEditor
                                label="Answer"
                                value={editForm.answer}
                                onChange={(answer) =>
                                    setEditForm((prev) => ({ ...prev, answer }))
                                }
                            />
                        </div>
                        <div className="space-y-1">
                            <Label>Show on pages</Label>
                            <MultiSelect
                                options={pageOptions}
                                selected={editForm.pages}
                                onChange={(next) =>
                                    setEditForm((prev) => ({
                                        ...prev,
                                        pages: next,
                                    }))
                                }
                                placeholder="Search and select pages…"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="edit-active"
                                checked={editForm.is_active}
                                onCheckedChange={(checked) =>
                                    setEditForm((prev) => ({
                                        ...prev,
                                        is_active: !!checked,
                                    }))
                                }
                            />
                            <Label htmlFor="edit-active">Active</Label>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                            <Button
                                variant="outline"
                                onClick={() => setEditing(null)}
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleSaveEdit} disabled={saving}>
                                {saving ? 'Saving...' : 'Save'}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

FaqsIndex.layout = {
    breadcrumbs: [{ title: 'FAQs', href: FaqController.index.url() }],
};
