import { Head, Form, router } from '@inertiajs/react';
import { ArrowUp, ArrowDown, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import * as MarqueeItemController from '@/actions/App/Http/Controllers/Marquee/MarqueeItemController';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { MarqueeItem } from '@/types/cms';

type Props = {
    items: MarqueeItem[];
};

type ItemFormState = {
    text: string;
    sort_order: number;
    is_active: boolean;
};

const emptyForm = (sort_order = 0): ItemFormState => ({
    text: '',
    sort_order,
    is_active: true,
});

type EditDialog = { mode: 'edit'; item: MarqueeItem } | null;

export default function MarqueeIndex({ items }: Props) {
    const [editDialog, setEditDialog] = useState<EditDialog>(null);
    const [editForm, setEditForm] = useState<ItemFormState>(emptyForm());
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const openEdit = (item: MarqueeItem) => {
        setEditForm({
            text: item.text,
            sort_order: item.sort_order,
            is_active: item.is_active,
        });
        setEditDialog({ mode: 'edit', item });
    };

    const closeEdit = () => {
        setEditDialog(null);
        setEditForm(emptyForm());
        setSaving(false);
    };

    const handleSaveEdit = () => {
        if (!editDialog) {
            return;
        }

        setSaving(true);
        router.put(
            MarqueeItemController.update.url(editDialog.item.id),
            {
                text: editForm.text,
                sort_order: editForm.sort_order,
                is_active: editForm.is_active,
            },
            {
                onSuccess: closeEdit,
                onFinish: () => setSaving(false),
            },
        );
    };

    const handleDelete = (item: MarqueeItem) => {
        if (!confirm(`Delete "${item.text}"?`)) {
            return;
        }

        setDeletingId(item.id);
        router.delete(MarqueeItemController.destroy.url(item.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    const handleMove = (item: MarqueeItem, direction: 'up' | 'down') => {
        const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);
        const idx = sorted.findIndex((m) => m.id === item.id);

        if (direction === 'up' && idx === 0) {
            return;
        }

        if (direction === 'down' && idx === sorted.length - 1) {
            return;
        }

        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        const orderedIds = sorted.map((m) => m.id);
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];

        router.post(MarqueeItemController.reorder.url(), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);

    return (
        <>
            <Head title="Marquee Banner" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Marquee Banner</h1>
                    <p className="text-sm text-muted-foreground">Manage the scrolling text items shown on the homepage banner.</p>
                </div>

                {/* Create form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Add new item</h2>
                    <Form {...MarqueeItemController.store.form()} resetOnSuccess className="space-y-3">
                        {({ errors, processing }) => (
                            <>
                                <div className="space-y-1">
                                    <Input
                                        name="text"
                                        placeholder="Marquee text"
                                        className={errors.text ? 'border-destructive' : ''}
                                    />
                                    {errors.text && <p className="text-xs text-destructive">{errors.text}</p>}
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Adding...' : 'Add Item'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                {/* Items table */}
                <div className="rounded-xl border overflow-hidden">
                    {sorted.length === 0 ? (
                        <div className="p-12 text-center space-y-2">
                            <p className="text-sm text-muted-foreground">No marquee items yet. Add one above.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Text</th>
                                    <th className="px-4 py-3 text-left font-medium">Order</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {sorted.map((item, idx) => (
                                    <tr key={item.id} className="hover:bg-muted/20">
                                        <td className="px-4 py-3 max-w-md truncate">{item.text}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-7"
                                                    disabled={idx === 0}
                                                    onClick={() => handleMove(item, 'up')}
                                                >
                                                    <ArrowUp className="size-3" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-7"
                                                    disabled={idx === sorted.length - 1}
                                                    onClick={() => handleMove(item, 'down')}
                                                >
                                                    <ArrowDown className="size-3" />
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge variant={item.is_active ? 'default' : 'secondary'}>
                                                {item.is_active ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-8"
                                                    onClick={() => openEdit(item)}
                                                >
                                                    <Pencil className="size-3.5" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="size-8 text-destructive hover:text-destructive"
                                                    disabled={deletingId === item.id}
                                                    onClick={() => handleDelete(item)}
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

            {/* Edit Dialog */}
            <Dialog open={editDialog !== null} onOpenChange={(open) => !open && closeEdit()}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Marquee Item</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-2">
                        <div className="space-y-1">
                            <Label htmlFor="edit-text">Text</Label>
                            <Input
                                id="edit-text"
                                value={editForm.text}
                                onChange={(e) => setEditForm((prev) => ({ ...prev, text: e.target.value }))}
                                placeholder="Marquee text"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="edit-active"
                                checked={editForm.is_active}
                                onCheckedChange={(checked) => setEditForm((prev) => ({ ...prev, is_active: !!checked }))}
                            />
                            <Label htmlFor="edit-active">Active</Label>
                        </div>
                        <div className="flex justify-end gap-2 pt-2">
                            <Button variant="outline" onClick={closeEdit}>
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
