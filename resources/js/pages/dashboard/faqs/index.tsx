import { Head, Form, router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
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
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const [page, setPage] = useState('');
    const [draft, setDraft] = useState<{
        page: string;
        ids: Set<number>;
    } | null>(null);
    const [assigning, setAssigning] = useState(false);

    const pageOptions = pages.map((p) => ({ value: p.key, label: p.name }));

    const pageName = (key: string) =>
        pages.find((p) => p.key === key)?.name ?? key;

    const savedFor = (key: string) =>
        new Set(faqs.filter((f) => f.pages.includes(key)).map((f) => f.id));
    const selected = draft?.page === page ? draft.ids : savedFor(page);
    const setSelected = (ids: Set<number>) => setDraft({ page, ids });

    // Rows ticked before a page is chosen carry over and merge with that page's saved FAQs.
    const handlePageChange = (next: string) => {
        const carried = page === '' ? selected : new Set<number>();

        setPage(next);
        setDraft(
            carried.size > 0
                ? { page: next, ids: new Set([...savedFor(next), ...carried]) }
                : null,
        );
    };

    const handleAssign = () => {
        setAssigning(true);
        router.post(
            FaqController.assign.url(),
            { page, faq_ids: [...selected] },
            {
                preserveScroll: true,
                onSuccess: () => setDraft(null),
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

    const handleDelete = (faq: Faq) => {
        if (!confirm(`Delete "${faq.question}"?`)) {
            return;
        }

        setDeletingId(faq.id);
        router.delete(FaqController.destroy.url(faq.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <>
            <Head title="FAQs" />

            <HeaderActions>
                <Button onClick={() => setAdding(true)}>
                    <Plus className="size-4" />
                    Add FAQ
                </Button>
            </HeaderActions>

            <div className="flex h-[calc(100svh-4rem)] flex-col gap-6 overflow-hidden p-6 md:h-[calc(100svh-5rem)]">
                <div className="flex flex-wrap items-center gap-3 rounded-xl border p-4">
                    <Label htmlFor="page">Assign to page</Label>
                    <SearchSelect
                        options={pages.map((p) => ({
                            value: p.key,
                            label: p.name,
                        }))}
                        value={page}
                        onChange={handlePageChange}
                        placeholder="Search a page…"
                    />
                    <span className="text-sm text-muted-foreground">
                        {page
                            ? `${selected.size} selected`
                            : selected.size > 0
                              ? `${selected.size} selected. Pick a page to assign them.`
                              : 'Tick the FAQs, pick a page, then save.'}
                    </span>
                    <Button
                        className="ml-auto"
                        disabled={!page || assigning}
                        onClick={handleAssign}
                    >
                        {assigning ? 'Saving...' : 'Save selection'}
                    </Button>
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border">
                    {faqs.length === 0 ? (
                        <div className="p-12 text-center text-sm text-muted-foreground">
                            No FAQs yet. Add one above.
                        </div>
                    ) : (
                        <FaqTable
                            faqs={faqs}
                            selected={selected}
                            onSelectionChange={setSelected}
                            pageName={pageName}
                            onToggleActive={handleToggle}
                            onEdit={openEdit}
                            onDelete={handleDelete}
                            deletingId={deletingId}
                        />
                    )}
                </div>
            </div>

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
