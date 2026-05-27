import { Head, Form, router } from '@inertiajs/react';
import { ArrowUp, ArrowDown, Loader2, Pencil, Trash2, MapPin, Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';
import * as ExplorePunePlaceController from '@/actions/App/Http/Controllers/ExplorePune/ExplorePunePlaceController';
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';
import { MediaPicker } from '@/components/media/media-picker';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { ExplorePunePlace, SelectedMedia } from '@/types/cms';

type Props = {
    places: ExplorePunePlace[];
};

type PlaceFormState = {
    name: string;
    category: string;
    nearest_station: string;
    distance_from_station: string;
    distance_note: string;
    about: string;
    highlights: string;
    google_maps_link: string;
    media_id: number | null;
    media_url: string | null;
    fallback_bg: string;
    sort_order: number;
    is_active: boolean;
};

const emptyForm = (sort_order = 0): PlaceFormState => ({
    name: '',
    category: '',
    nearest_station: '',
    distance_from_station: '',
    distance_note: '',
    about: '',
    highlights: '',
    google_maps_link: '',
    media_id: null,
    media_url: null,
    fallback_bg: '',
    sort_order,
    is_active: true,
});

type EditDialog = { mode: 'edit'; place: ExplorePunePlace } | null;

const getXsrfToken = () =>
    decodeURIComponent(document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '');

export default function ExplorePunePlacesIndex({ places }: Props) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [editDialog, setEditDialog] = useState<EditDialog>(null);
    const [editForm, setEditForm] = useState<PlaceFormState>(emptyForm());
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const uploadInputRef = useRef<HTMLInputElement>(null);

    const openEdit = (place: ExplorePunePlace) => {
        setEditForm({
            name: place.name,
            category: place.category,
            nearest_station: place.nearest_station,
            distance_from_station: place.distance_from_station,
            distance_note: place.distance_note ?? '',
            about: place.about,
            highlights: place.highlights,
            google_maps_link: place.google_maps_link ?? '',
            media_id: place.media_id,
            media_url: place.media?.url ?? null,
            fallback_bg: place.fallback_bg ?? '',
            sort_order: place.sort_order,
            is_active: place.is_active,
        });
        setEditDialog({ mode: 'edit', place });
    };

    const closeEdit = () => {
        setEditDialog(null);
        setEditForm(emptyForm());
        setSaving(false);
        setUploading(false);
    };

    const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = '';

        const formData = new FormData();
        formData.append('file', file);
        formData.append('module', 'explore-pune');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', MediaController.store.url());
        xhr.setRequestHeader('X-XSRF-TOKEN', getXsrfToken());
        xhr.setRequestHeader('Accept', 'application/json');

        setUploading(true);

        xhr.onload = () => {
            setUploading(false);
            if (xhr.status >= 200 && xhr.status < 300) {
                const media = JSON.parse(xhr.responseText) as { id: number; file_path: string; variants?: Array<{ file_path: string }> };
                const filePath = media.variants?.[0]?.file_path ?? media.file_path;
                setEditForm((p) => ({
                    ...p,
                    media_id: media.id,
                    media_url: `/storage/${filePath}`,
                }));
            }
        };

        xhr.onerror = () => setUploading(false);

        xhr.send(formData);
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
        if (!editDialog) {
            return;
        }

        setSaving(true);
        router.put(
            ExplorePunePlaceController.update.url(editDialog.place.id),
            {
                name: editForm.name,
                category: editForm.category,
                nearest_station: editForm.nearest_station,
                distance_from_station: editForm.distance_from_station,
                distance_note: editForm.distance_note || null,
                about: editForm.about,
                highlights: editForm.highlights,
                google_maps_link: editForm.google_maps_link || null,
                media_id: editForm.media_id,
                fallback_bg: editForm.fallback_bg || null,
                sort_order: editForm.sort_order,
                is_active: editForm.is_active,
            },
            {
                onSuccess: closeEdit,
                onFinish: () => setSaving(false),
            },
        );
    };

    const handleDelete = (place: ExplorePunePlace) => {
        if (!confirm(`Delete "${place.name}"?`)) {
            return;
        }

        setDeletingId(place.id);
        router.delete(ExplorePunePlaceController.destroy.url(place.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    const handleMove = (place: ExplorePunePlace, direction: 'up' | 'down') => {
        const sorted = [...places].sort((a, b) => a.sort_order - b.sort_order);
        const idx = sorted.findIndex((p) => p.id === place.id);

        if (direction === 'up' && idx === 0) {
            return;
        }

        if (direction === 'down' && idx === sorted.length - 1) {
            return;
        }

        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        const orderedIds = sorted.map((p) => p.id);
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];

        router.post(ExplorePunePlaceController.reorder.url(), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    const sorted = [...places].sort((a, b) => a.sort_order - b.sort_order);

    return (
        <>
            <Head title="Explore Pune" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Explore Pune</h1>
                    <p className="text-sm text-muted-foreground">Manage the places displayed in the Explore Pune section on the homepage.</p>
                </div>

                {/* Create form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Add new place</h2>
                    <Form {...ExplorePunePlaceController.store.form()} resetOnSuccess className="space-y-3">
                        {({ errors, processing }) => (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <Input
                                            name="name"
                                            placeholder="Place name"
                                            className={errors.name ? 'border-destructive' : ''}
                                        />
                                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            name="category"
                                            placeholder="Category (e.g. Famous Temple)"
                                            className={errors.category ? 'border-destructive' : ''}
                                        />
                                        {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Image and other details can be added after creation by clicking Edit.
                                </p>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing}>
                                        {processing ? 'Adding...' : 'Add Place'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                {/* Places table */}
                <div className="rounded-xl border overflow-hidden">
                    {sorted.length === 0 ? (
                        <div className="p-12 text-center space-y-2">
                            <MapPin className="mx-auto size-8 text-muted-foreground/40" />
                            <p className="text-sm text-muted-foreground">No places yet. Add one above.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Image</th>
                                    <th className="px-4 py-3 text-left font-medium">Name</th>
                                    <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Category</th>
                                    <th className="px-4 py-3 text-left font-medium hidden lg:table-cell">Nearest Station</th>
                                    <th className="px-4 py-3 text-left font-medium">Order</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {sorted.map((place, idx) => (
                                    <tr key={place.id} className="hover:bg-muted/20">
                                        <td className="px-4 py-3">
                                            {place.media?.url ? (
                                                <img
                                                    src={place.media.url}
                                                    alt={place.name}
                                                    className="size-10 rounded-lg object-cover"
                                                />
                                            ) : (
                                                <div
                                                    className="size-10 rounded-lg"
                                                    style={{ background: place.fallback_bg ?? undefined }}
                                                >
                                                    {!place.fallback_bg && (
                                                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                                                            <MapPin className="size-5 text-muted-foreground/40" />
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 font-medium">{place.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{place.category}</td>
                                        <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{place.nearest_station}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{place.sort_order}</td>
                                        <td className="px-4 py-3">
                                            {place.is_active ? (
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
                                                    onClick={() => handleMove(place, 'up')}
                                                >
                                                    <ArrowUp className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    disabled={idx === sorted.length - 1}
                                                    onClick={() => handleMove(place, 'down')}
                                                >
                                                    <ArrowDown className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={() => openEdit(place)}
                                                >
                                                    <Pencil className="size-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    disabled={deletingId === place.id}
                                                    onClick={() => handleDelete(place)}
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
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Edit Place</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            {/* Image picker */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Image</label>
                                <div className="flex items-center gap-3">
                                    {editForm.media_url ? (
                                        <div className="relative">
                                            <img
                                                src={editForm.media_url}
                                                alt="Preview"
                                                className="h-20 w-28 rounded-lg object-cover"
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
                                        <div className="flex h-20 w-28 items-center justify-center rounded-lg border border-dashed bg-muted">
                                            <MapPin className="size-6 text-muted-foreground/40" />
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-2">
                                        <Button type="button" variant="outline" size="sm" onClick={() => setPickerOpen(true)} disabled={uploading}>
                                            {editForm.media_url ? 'Change Image' : 'Select Image'}
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => uploadInputRef.current?.click()}
                                            disabled={uploading}
                                        >
                                            {uploading ? (
                                                <><Loader2 className="mr-1.5 size-3.5 animate-spin" /> Uploading...</>
                                            ) : (
                                                <><Upload className="mr-1.5 size-3.5" /> Upload New</>
                                            )}
                                        </Button>
                                    </div>
                                    <input
                                        ref={uploadInputRef}
                                        type="file"
                                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                                        className="hidden"
                                        onChange={handleUploadFile}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Name</label>
                                    <Input
                                        value={editForm.name}
                                        onChange={(e) => setEditForm((p) => ({ ...p, name: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Category</label>
                                    <Input
                                        value={editForm.category}
                                        onChange={(e) => setEditForm((p) => ({ ...p, category: e.target.value }))}
                                        placeholder="e.g. Famous Temple"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Nearest Metro Station</label>
                                    <Input
                                        value={editForm.nearest_station}
                                        onChange={(e) => setEditForm((p) => ({ ...p, nearest_station: e.target.value }))}
                                        placeholder="e.g. PMR 23 — District Court"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Distance from Station</label>
                                    <Input
                                        value={editForm.distance_from_station}
                                        onChange={(e) => setEditForm((p) => ({ ...p, distance_from_station: e.target.value }))}
                                        placeholder="e.g. Approx. 2 km — 8 min by auto"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Distance Note <span className="font-normal opacity-60">(optional)</span></label>
                                <Input
                                    value={editForm.distance_note}
                                    onChange={(e) => setEditForm((p) => ({ ...p, distance_note: e.target.value }))}
                                    placeholder="e.g. Auto rickshaw available from station"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">About</label>
                                <textarea
                                    value={editForm.about}
                                    onChange={(e) => setEditForm((p) => ({ ...p, about: e.target.value }))}
                                    rows={4}
                                    className="w-full rounded-md border px-3 py-2 text-sm bg-background resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Highlights</label>
                                <Input
                                    value={editForm.highlights}
                                    onChange={(e) => setEditForm((p) => ({ ...p, highlights: e.target.value }))}
                                    placeholder="e.g. Built 1732 | Peshwa heritage | Maratha history"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Google Maps Link <span className="font-normal opacity-60">(optional)</span></label>
                                <Input
                                    type="url"
                                    value={editForm.google_maps_link}
                                    onChange={(e) => setEditForm((p) => ({ ...p, google_maps_link: e.target.value }))}
                                    placeholder="https://maps.google.com/..."
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Fallback Background <span className="font-normal opacity-60">(CSS gradient, shown when no image)</span></label>
                                <Input
                                    value={editForm.fallback_bg}
                                    onChange={(e) => setEditForm((p) => ({ ...p, fallback_bg: e.target.value }))}
                                    placeholder="e.g. linear-gradient(135deg, #7c3000 0%, #b45309 100%)"
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
                                <Button onClick={handleSaveEdit} disabled={saving || !editForm.name || !editForm.category}>
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
                defaultModule="explore-pune"
            />
        </>
    );
}
