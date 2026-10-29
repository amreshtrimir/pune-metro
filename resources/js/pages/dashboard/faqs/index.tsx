import { Head, Form, router } from '@inertiajs/react';
import { Eye, EyeOff, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import * as FaqController from '@/actions/App/Http/Controllers/Faq/FaqController';
import { Badge } from '@/components/ui/badge';
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
};

export default function FaqsIndex({ faqs, pages }: Props) {
    const [editing, setEditing] = useState<Faq | null>(null);
    const [editForm, setEditForm] = useState<FaqFormState>({
        question: '',
        answer: '',
        is_active: true,
    });
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const [page, setPage] = useState('');
    const [draft, setDraft] = useState<{
        page: string;
        ids: Set<number>;
    } | null>(null);
    const [assigning, setAssigning] = useState(false);

    const pageName = (key: string) =>
        pages.find((p) => p.key === key)?.name ?? key;

    const saved = new Set(
        faqs.filter((f) => f.pages.includes(page)).map((f) => f.id),
    );
    const selected = draft?.page === page ? draft.ids : saved;
    const setSelected = (ids: Set<number>) => setDraft({ page, ids });

    const toggle = (id: number, checked: boolean) => {
        const next = new Set(selected);

        if (checked) {
            next.add(id);
        } else {
            next.delete(id);
        }

        setSelected(next);
    };

    const allSelected = faqs.length > 0 && selected.size === faqs.length;

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

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">FAQs</h1>
                    <p className="text-sm text-muted-foreground">
                        Create FAQs, then choose which ones appear on each page.
                    </p>
                </div>

                <div className="space-y-3 rounded-xl border p-4">
                    <h2 className="text-sm font-semibold">Add new FAQ</h2>
                    <Form
                        {...FaqController.store.form()}
                        resetOnSuccess
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
                                    <textarea
                                        name="answer"
                                        rows={3}
                                        placeholder="Answer"
                                        className={`w-full rounded-md border bg-transparent px-3 py-2 text-sm ${errors.answer ? 'border-destructive' : 'border-input'}`}
                                    />
                                    {errors.answer && (
                                        <p className="text-xs text-destructive">
                                            {errors.answer}
                                        </p>
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Adding...' : 'Add FAQ'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                <div className="flex flex-wrap items-center gap-3 rounded-xl border p-4">
                    <Label htmlFor="page">Assign to page</Label>
                    <SearchSelect
                        options={pages.map((p) => ({
                            value: p.key,
                            label: p.name,
                        }))}
                        value={page}
                        onChange={setPage}
                        placeholder="Search a page…"
                    />
                    <span className="text-sm text-muted-foreground">
                        {page
                            ? `${selected.size} selected`
                            : 'Pick a page, tick the FAQs to show on it, then save.'}
                    </span>
                    <Button
                        className="ml-auto"
                        disabled={!page || assigning}
                        onClick={handleAssign}
                    >
                        {assigning ? 'Saving...' : 'Save selection'}
                    </Button>
                </div>

                <div className="overflow-hidden rounded-xl border">
                    {faqs.length === 0 ? (
                        <div className="p-12 text-center text-sm text-muted-foreground">
                            No FAQs yet. Add one above.
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="w-10 px-4 py-3">
                                        <Checkbox
                                            aria-label="Select all"
                                            disabled={!page}
                                            checked={allSelected}
                                            onCheckedChange={(checked) =>
                                                setSelected(
                                                    checked
                                                        ? new Set(
                                                              faqs.map(
                                                                  (f) => f.id,
                                                              ),
                                                          )
                                                        : new Set(),
                                                )
                                            }
                                        />
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Question
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Pages
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {faqs.map((faq) => (
                                    <tr
                                        key={faq.id}
                                        className="hover:bg-muted/20"
                                    >
                                        <td className="px-4 py-3">
                                            <Checkbox
                                                aria-label={`Select ${faq.question}`}
                                                disabled={!page}
                                                checked={selected.has(faq.id)}
                                                onCheckedChange={(checked) =>
                                                    toggle(faq.id, !!checked)
                                                }
                                            />
                                        </td>
                                        <td className="max-w-md px-4 py-3">
                                            <p className="truncate font-medium">
                                                {faq.question}
                                            </p>
                                            <p className="truncate text-xs text-muted-foreground">
                                                {faq.answer}
                                            </p>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex flex-wrap gap-1">
                                                {faq.pages.length === 0 && (
                                                    <span className="text-xs text-muted-foreground">
                                                        Not assigned
                                                    </span>
                                                )}
                                                {faq.pages.map((key) => (
                                                    <Badge
                                                        key={key}
                                                        variant="outline"
                                                    >
                                                        {pageName(key)}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge
                                                variant={
                                                    faq.is_active
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {faq.is_active
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-8"
                                                    title={
                                                        faq.is_active
                                                            ? 'Hide'
                                                            : 'Show'
                                                    }
                                                    onClick={() =>
                                                        handleToggle(faq)
                                                    }
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
                                                    onClick={() =>
                                                        openEdit(faq)
                                                    }
                                                >
                                                    <Pencil className="size-3.5" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-8 text-destructive hover:text-destructive"
                                                    disabled={
                                                        deletingId === faq.id
                                                    }
                                                    onClick={() =>
                                                        handleDelete(faq)
                                                    }
                                                >
                                                    <Trash2 className="size-3.5" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

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
                            <Label htmlFor="edit-answer">Answer</Label>
                            <textarea
                                id="edit-answer"
                                rows={5}
                                value={editForm.answer}
                                onChange={(e) =>
                                    setEditForm((prev) => ({
                                        ...prev,
                                        answer: e.target.value,
                                    }))
                                }
                                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
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
