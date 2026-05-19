import { useState } from 'react';
import { Head, Form, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaPicker } from '@/components/media/media-picker';
import type { BoardMember, Media, SelectedMedia } from '@/types/cms';
import * as BoardMemberController from '@/actions/App/Http/Controllers/Board/BoardMemberController';
import { ArrowUp, ArrowDown, Pencil, Trash2, UserSquare2, X } from 'lucide-react';

type Props = {
    members: BoardMember[];
};

type MemberFormState = {
    name: string;
    role: string;
    bio: string;
    media_id: number | null;
    media_url: string | null;
    sort_order: number;
    is_active: boolean;
};

const emptyForm = (sort_order = 0): MemberFormState => ({
    name: '',
    role: '',
    bio: '',
    media_id: null,
    media_url: null,
    sort_order,
    is_active: true,
});

type EditDialog = { mode: 'edit'; member: BoardMember } | null;

export default function BoardMembersIndex({ members }: Props) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [editDialog, setEditDialog] = useState<EditDialog>(null);
    const [editForm, setEditForm] = useState<MemberFormState>(emptyForm());
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const openEdit = (member: BoardMember) => {
        setEditForm({
            name: member.name,
            role: member.role,
            bio: member.bio ?? '',
            media_id: member.media_id,
            media_url: member.media?.url ?? null,
            sort_order: member.sort_order,
            is_active: member.is_active,
        });
        setEditDialog({ mode: 'edit', member });
    };

    const closeEdit = () => {
        setEditDialog(null);
        setEditForm(emptyForm());
        setSaving(false);
    };

    const handlePickerSelect = (selected: SelectedMedia) => {
        setEditForm((prev) => ({
            ...prev,
            media_id: selected.media_id,
            media_url: selected.variant.url ?? `/storage/${selected.variant.file_path}`,
        }));
        setPickerOpen(false);
    };

    const handleSaveEdit = () => {
        if (!editDialog) return;
        setSaving(true);
        router.put(
            BoardMemberController.update.url(editDialog.member.id),
            {
                name: editForm.name,
                role: editForm.role,
                bio: editForm.bio || null,
                media_id: editForm.media_id,
                sort_order: editForm.sort_order,
                is_active: editForm.is_active,
            },
            {
                onSuccess: closeEdit,
                onFinish: () => setSaving(false),
            },
        );
    };

    const handleDelete = (member: BoardMember) => {
        if (!confirm(`Delete "${member.name}"?`)) return;
        setDeletingId(member.id);
        router.delete(BoardMemberController.destroy.url(member.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    const handleMove = (member: BoardMember, direction: 'up' | 'down') => {
        const sorted = [...members].sort((a, b) => a.sort_order - b.sort_order);
        const idx = sorted.findIndex((m) => m.id === member.id);
        if (direction === 'up' && idx === 0) return;
        if (direction === 'down' && idx === sorted.length - 1) return;

        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        const orderedIds = sorted.map((m) => m.id);
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];

        router.post(BoardMemberController.reorder.url(), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    const sorted = [...members].sort((a, b) => a.sort_order - b.sort_order);

    return (
        <>
            <Head title="Board Members" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Board Members</h1>
                    <p className="text-sm text-muted-foreground">Manage the Board of Directors displayed on the frontend.</p>
                </div>

                {/* Create form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Add new board member</h2>
                    <Form {...BoardMemberController.store.form()} resetOnSuccess className="space-y-3">
                        {({ errors, processing }) => (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <Input
                                            name="name"
                                            placeholder="Full name"
                                            className={errors.name ? 'border-destructive' : ''}
                                        />
                                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            name="role"
                                            placeholder="Role / title"
                                            className={errors.role ? 'border-destructive' : ''}
                                        />
                                        {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Photo and bio can be added after creation by clicking Edit.
                                </p>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Adding...' : 'Add Member'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                {/* Members table */}
                <div className="rounded-xl border overflow-hidden">
                    {sorted.length === 0 ? (
                        <div className="p-12 text-center space-y-2">
                            <UserSquare2 className="mx-auto size-8 text-muted-foreground/40" />
                            <p className="text-sm text-muted-foreground">No board members yet. Add one above.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Photo</th>
                                    <th className="px-4 py-3 text-left font-medium">Name</th>
                                    <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Role</th>
                                    <th className="px-4 py-3 text-left font-medium">Order</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {sorted.map((member, idx) => (
                                    <tr key={member.id} className="hover:bg-muted/20">
                                        <td className="px-4 py-3">
                                            {member.media?.url ? (
                                                <img
                                                    src={member.media.url}
                                                    alt={member.name}
                                                    className="size-10 rounded-lg object-cover object-top"
                                                />
                                            ) : (
                                                <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                                                    <UserSquare2 className="size-5 text-muted-foreground/40" />
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 font-medium">{member.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{member.role}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{member.sort_order}</td>
                                        <td className="px-4 py-3">
                                            {member.is_active ? (
                                                <Badge variant="default">Active</Badge>
                                            ) : (
                                                <Badge variant="secondary">Inactive</Badge>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    disabled={idx === 0}
                                                    onClick={() => handleMove(member, 'up')}
                                                >
                                                    <ArrowUp className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    disabled={idx === sorted.length - 1}
                                                    onClick={() => handleMove(member, 'down')}
                                                >
                                                    <ArrowDown className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={() => openEdit(member)}
                                                >
                                                    <Pencil className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    disabled={deletingId === member.id}
                                                    onClick={() => handleDelete(member)}
                                                >
                                                    <Trash2 className="size-4" />
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
            {editDialog && (
                <Dialog open onOpenChange={closeEdit}>
                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Edit Board Member</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            {/* Photo picker */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Photo</label>
                                <div className="flex items-center gap-3">
                                    {editForm.media_url ? (
                                        <div className="relative">
                                            <img
                                                src={editForm.media_url}
                                                alt="Preview"
                                                className="h-20 w-16 rounded-lg object-cover object-top"
                                            />
                                            <button
                                                type="button"
                                                className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground"
                                                onClick={() => setEditForm((p) => ({ ...p, media_id: null, media_url: null }))}
                                            >
                                                <X className="size-3" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex h-20 w-16 items-center justify-center rounded-lg border border-dashed bg-muted">
                                            <UserSquare2 className="size-6 text-muted-foreground/40" />
                                        </div>
                                    )}
                                    <Button type="button" variant="outline" size="sm" onClick={() => setPickerOpen(true)}>
                                        {editForm.media_url ? 'Change Photo' : 'Select Photo'}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Name</label>
                                <Input
                                    value={editForm.name}
                                    onChange={(e) => setEditForm((p) => ({ ...p, name: e.target.value }))}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Role / Title</label>
                                <Input
                                    value={editForm.role}
                                    onChange={(e) => setEditForm((p) => ({ ...p, role: e.target.value }))}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Bio <span className="font-normal opacity-60">(optional — shown in modal on frontend)</span></label>
                                <textarea
                                    value={editForm.bio}
                                    onChange={(e) => setEditForm((p) => ({ ...p, bio: e.target.value }))}
                                    rows={3}
                                    className="w-full rounded-md border px-3 py-2 text-sm bg-background resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Sort Order</label>
                                    <Input
                                        type="number"
                                        min={0}
                                        value={editForm.sort_order}
                                        onChange={(e) => setEditForm((p) => ({ ...p, sort_order: Number(e.target.value) }))}
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Status</label>
                                    <div className="flex items-center gap-2 pt-2">
                                        <input
                                            type="checkbox"
                                            id="edit_is_active"
                                            checked={editForm.is_active}
                                            onChange={(e) => setEditForm((p) => ({ ...p, is_active: e.target.checked }))}
                                            className="rounded"
                                        />
                                        <label htmlFor="edit_is_active" className="text-sm">Active</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <Button variant="outline" onClick={closeEdit}>Cancel</Button>
                                <Button onClick={handleSaveEdit} disabled={saving || !editForm.name || !editForm.role}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            <MediaPicker
                open={pickerOpen}
                onClose={() => setPickerOpen(false)}
                onSelect={handlePickerSelect}
                defaultModule="board"
            />
        </>
    );
}
