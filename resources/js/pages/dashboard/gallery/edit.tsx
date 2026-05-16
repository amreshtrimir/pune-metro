import { useState } from 'react';
import { Head, Form, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaPicker } from '@/components/media/media-picker';
import type { GalleryAlbum, GalleryAlbumImage, Media, SelectedMedia } from '@/types/cms';
import * as GalleryAlbumController from '@/actions/App/Http/Controllers/Gallery/GalleryAlbumController';
import { ArrowUp, ArrowDown, Plus, Pencil, Trash2, ImageIcon, ChevronLeft } from 'lucide-react';

type Props = {
    album: GalleryAlbum & {
        images: (GalleryAlbumImage & { media?: Media | null; thumb_media?: Media | null })[];
    };
};

type ImageFormState = {
    media_id: number | null;
    media_path: string | null;
    thumb_media_id: number | null;
    thumb_media_path: string | null;
};

const emptyImageForm = (): ImageFormState => ({
    media_id: null,
    media_path: null,
    thumb_media_id: null,
    thumb_media_path: null,
});

type PickerTarget = 'full' | 'thumb' | null;

export default function GalleryEdit({ album }: Props) {
    const [pickerFor, setPickerFor] = useState<PickerTarget>(null);
    const [imageDialog, setImageDialog] = useState<{ mode: 'add' | 'edit'; image: GalleryAlbumImage | null } | null>(null);
    const [imageForm, setImageForm] = useState<ImageFormState>(emptyImageForm());
    const [saving, setSaving] = useState(false);
    const [bulkPickerOpen, setBulkPickerOpen] = useState(false);

    const openAddImage = () => {
        setImageForm(emptyImageForm());
        setImageDialog({ mode: 'add', image: null });
    };

    const openEditImage = (image: GalleryAlbumImage & { media?: Media | null; thumb_media?: Media | null }) => {
        setImageForm({
            media_id: image.media_id,
            media_path: image.media?.file_path ?? null,
            thumb_media_id: image.thumb_media_id,
            thumb_media_path: image.thumb_media?.file_path ?? null,
        });
        setImageDialog({ mode: 'edit', image });
    };

    const closeDialog = () => {
        setImageDialog(null);
        setImageForm(emptyImageForm());
    };

    const handlePickerSelect = (target: 'full' | 'thumb', selected: { media_id: number; variant: { file_path: string } }) => {
        if (target === 'full') {
            setImageForm((prev) => ({
                ...prev,
                media_id: selected.media_id,
                media_path: selected.variant.file_path,
            }));
        } else {
            setImageForm((prev) => ({
                ...prev,
                thumb_media_id: selected.media_id,
                thumb_media_path: selected.variant.file_path,
            }));
        }
        setPickerFor(null);
    };

    const handleSaveImage = () => {
        if (!imageForm.media_id) return;
        setSaving(true);

        const payload = {
            media_id: imageForm.media_id,
            thumb_media_id: imageForm.thumb_media_id ?? null,
        };

        if (imageDialog?.mode === 'add') {
            router.post(GalleryAlbumController.storeImage.url(album.id), payload, {
                onSuccess: closeDialog,
                onFinish: () => setSaving(false),
            });
        } else if (imageDialog?.image) {
            router.put(GalleryAlbumController.updateImage.url({ galleryAlbum: album.id, image: imageDialog.image.id }), payload, {
                onSuccess: closeDialog,
                onFinish: () => setSaving(false),
            });
        }
    };

    const handleDeleteImage = (image: GalleryAlbumImage) => {
        if (!confirm('Remove this image from the album?')) return;
        router.delete(GalleryAlbumController.destroyImage.url({ galleryAlbum: album.id, image: image.id }), {
            preserveScroll: true,
        });
    };

    const handleMoveImage = (image: GalleryAlbumImage, direction: 'up' | 'down') => {
        const sorted = [...album.images].sort((a, b) => a.sort_order - b.sort_order);
        const idx = sorted.findIndex((i) => i.id === image.id);
        if (direction === 'up' && idx === 0) return;
        if (direction === 'down' && idx === sorted.length - 1) return;

        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        const orderedIds = sorted.map((i) => i.id);
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];

        router.post(GalleryAlbumController.reorderImages.url(album.id), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    const handleBulkSelect = (selected: SelectedMedia[]) => {
        router.post(
            GalleryAlbumController.bulkStoreImages.url(album.id),
            { images: selected.map((s) => ({ media_id: s.media_id })) },
            { onSuccess: () => setBulkPickerOpen(false) },
        );
    };

    const sortedImages = [...album.images].sort((a, b) => a.sort_order - b.sort_order);

    return (
        <>
            <Head title={`Edit Album: ${album.title}`} />

            <div className="space-y-6 p-6 max-w-4xl">
                {/* Back link */}
                <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" onClick={() => router.visit(GalleryAlbumController.index.url())}>
                    <ChevronLeft className="size-4 mr-1" /> All Albums
                </Button>

                <div>
                    <h1 className="text-2xl font-semibold">Edit Album</h1>
                    <p className="text-sm text-muted-foreground">Update album settings and manage images.</p>
                </div>

                {/* Album settings */}
                <div className="rounded-xl border p-4 space-y-4">
                    <h2 className="text-sm font-semibold">Album Settings</h2>
                    <Form action={GalleryAlbumController.update.url(album.id)} method="put" className="space-y-4">
                        {({ errors, processing }) => (
                            <>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Title</label>
                                    <Input
                                        name="title"
                                        defaultValue={album.title}
                                        className={errors.title ? 'border-destructive' : ''}
                                    />
                                    {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">
                                        Slug <span className="font-normal text-muted-foreground/60">(optional — use <code>project-update</code> to link to the Project Update page)</span>
                                    </label>
                                    <Input
                                        name="slug"
                                        defaultValue={album.slug ?? ''}
                                        placeholder="e.g. project-update"
                                        className={errors.slug ? 'border-destructive' : ''}
                                    />
                                    {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Description</label>
                                    <textarea
                                        name="description"
                                        defaultValue={album.description ?? ''}
                                        rows={2}
                                        placeholder="Brief description of this album (optional)"
                                        className="w-full rounded-md border px-3 py-2 text-sm bg-background resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Sort Order</label>
                                    <Input
                                        name="sort_order"
                                        type="number"
                                        defaultValue={album.sort_order}
                                        min={0}
                                        className="w-32"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        name="is_active"
                                        defaultChecked={album.is_active}
                                        className="size-4 rounded"
                                    />
                                    <label htmlFor="is_active" className="text-sm">Active (visible on frontend)</label>
                                </div>

                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing} size="sm">
                                        {processing ? 'Saving...' : 'Save Settings'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                {/* Images */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold">Images ({sortedImages.length})</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => setBulkPickerOpen(true)}>
                                <Plus className="size-4 mr-1" /> Add Multiple
                            </Button>
                            <Button size="sm" onClick={openAddImage}>
                                <Plus className="size-4 mr-1" /> Add Image
                            </Button>
                        </div>
                    </div>

                    {sortedImages.length === 0 ? (
                        <div className="rounded-xl border p-8 text-center text-sm text-muted-foreground">
                            No images yet. Add the first image above.
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {sortedImages.map((image, idx) => {
                                const thumbPath = image.thumb_media?.file_path ?? image.media?.file_path ?? null;
                                return (
                                    <div key={image.id} className="rounded-xl border overflow-hidden bg-muted group relative">
                                        {/* Thumbnail */}
                                        <div className="aspect-video overflow-hidden">
                                            {thumbPath ? (
                                                <img
                                                    src={`/storage/${thumbPath}`}
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                    <ImageIcon className="size-6" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="p-2 flex items-center justify-between gap-1">
                                            <div className="flex gap-1">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-7"
                                                    disabled={idx === 0}
                                                    onClick={() => handleMoveImage(image, 'up')}
                                                >
                                                    <ArrowUp className="size-3" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-7"
                                                    disabled={idx === sortedImages.length - 1}
                                                    onClick={() => handleMoveImage(image, 'down')}
                                                >
                                                    <ArrowDown className="size-3" />
                                                </Button>
                                            </div>
                                            <div className="flex gap-1">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-7"
                                                    onClick={() => openEditImage(image)}
                                                >
                                                    <Pencil className="size-3" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-7 text-destructive hover:text-destructive"
                                                    onClick={() => handleDeleteImage(image)}
                                                >
                                                    <Trash2 className="size-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Add / Edit Image Dialog */}
            <Dialog open={imageDialog !== null} onOpenChange={(open) => !open && closeDialog()}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>{imageDialog?.mode === 'add' ? 'Add Image' : 'Edit Image'}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        {/* Full size image */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-muted-foreground">Full-size Image *</label>
                            <div className="flex items-center gap-3">
                                {imageForm.media_path ? (
                                    <div className="relative w-24 h-16 rounded-lg border overflow-hidden bg-muted">
                                        <img src={`/storage/${imageForm.media_path}`} className="w-full h-full object-cover" alt="" />
                                    </div>
                                ) : (
                                    <div className="w-24 h-16 rounded-lg border bg-muted flex items-center justify-center">
                                        <ImageIcon className="size-5 text-muted-foreground" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-1.5">
                                    <Button type="button" size="sm" variant="outline" onClick={() => setPickerFor('full')}>
                                        {imageForm.media_path ? 'Change' : 'Select Image'}
                                    </Button>
                                    {imageForm.media_path && (
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="ghost"
                                            className="text-destructive"
                                            onClick={() => setImageForm((p) => ({ ...p, media_id: null, media_path: null }))}
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail image */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-muted-foreground">
                                Thumbnail Image
                                <span className="ml-1 text-muted-foreground/60">(optional — uses full-size if not set)</span>
                            </label>
                            <div className="flex items-center gap-3">
                                {imageForm.thumb_media_path ? (
                                    <div className="relative w-24 h-16 rounded-lg border overflow-hidden bg-muted">
                                        <img src={`/storage/${imageForm.thumb_media_path}`} className="w-full h-full object-cover" alt="" />
                                    </div>
                                ) : (
                                    <div className="w-24 h-16 rounded-lg border bg-muted flex items-center justify-center">
                                        <ImageIcon className="size-5 text-muted-foreground" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-1.5">
                                    <Button type="button" size="sm" variant="outline" onClick={() => setPickerFor('thumb')}>
                                        {imageForm.thumb_media_path ? 'Change' : 'Select Thumbnail'}
                                    </Button>
                                    {imageForm.thumb_media_path && (
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="ghost"
                                            className="text-destructive"
                                            onClick={() => setImageForm((p) => ({ ...p, thumb_media_id: null, thumb_media_path: null }))}
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-2 pt-2">
                            <Button type="button" variant="outline" onClick={closeDialog}>
                                Cancel
                            </Button>
                            <Button type="button" disabled={saving || !imageForm.media_id} onClick={handleSaveImage}>
                                {saving ? 'Saving...' : imageDialog?.mode === 'add' ? 'Add Image' : 'Save Changes'}
                            </Button>
                        </div>
                    </div>

                    {/* Media pickers nested inside this dialog so Radix treats them as child layers */}
                    <MediaPicker
                        open={pickerFor === 'full'}
                        onClose={() => setPickerFor(null)}
                        onSelect={(s) => handlePickerSelect('full', s)}
                    />
                    <MediaPicker
                        open={pickerFor === 'thumb'}
                        onClose={() => setPickerFor(null)}
                        onSelect={(s) => handlePickerSelect('thumb', s)}
                    />
                </DialogContent>
            </Dialog>
            {/* Bulk image picker */}
            <MediaPicker
                multiSelect
                open={bulkPickerOpen}
                onClose={() => setBulkPickerOpen(false)}
                onMultiSelect={handleBulkSelect}
            />
        </>
    );
}
