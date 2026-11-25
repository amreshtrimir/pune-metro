import { Head, router, useForm } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import * as PopupController from '@/actions/App/Http/Controllers/Popup/PopupController';
import InputError from '@/components/input-error';
import { MediaPicker } from '@/components/media/media-picker';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SearchSelect } from '@/components/ui/search-select';
import type { SearchSelectOption } from '@/components/ui/search-select';
import type { Popup, SelectedMedia } from '@/types/cms';

type Props = {
    popups: Popup[];
    pages: Record<string, string>;
};

export default function PopupsIndex({ popups, pages }: Props) {
    // null = closed, 'new' = creating, otherwise the popup being edited
    const [editing, setEditing] = useState<Popup | 'new' | null>(null);

    const togglePublished = (popup: Popup) => {
        router.patch(
            PopupController.publish.url(popup.id),
            { is_published: !popup.is_published },
            { preserveScroll: true },
        );
    };

    const handleDelete = (popup: Popup) => {
        if (!confirm(`Delete "${popup.title}"?`)) {
            return;
        }

        router.delete(PopupController.destroy.url(popup.id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Popups" />

            <div className="space-y-6 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <h1 className="text-2xl font-semibold">Popups</h1>
                        <p className="text-sm text-muted-foreground">
                            New popups are drafts. Each page can have one
                            published popup; publishing another replaces it.
                        </p>
                    </div>
                    <Button onClick={() => setEditing('new')}>
                        <Plus className="size-4" /> Add Popup
                    </Button>
                </div>

                <div className="overflow-x-auto rounded-xl border">
                    {popups.length === 0 ? (
                        <p className="p-12 text-center text-sm text-muted-foreground">
                            No popups yet.
                        </p>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40 text-left">
                                    <th className="px-4 py-3 font-medium">
                                        Image
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Title
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Page
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Delay
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {popups.map((popup) => (
                                    <tr
                                        key={popup.id}
                                        className="hover:bg-muted/20"
                                    >
                                        <td className="px-4 py-3">
                                            {popup.media ? (
                                                <img
                                                    src={popup.media.url}
                                                    alt=""
                                                    className="size-12 rounded-lg object-cover"
                                                />
                                            ) : (
                                                <span className="text-xs text-destructive">
                                                    Missing
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 font-medium">
                                            {popup.title}
                                        </td>
                                        <td className="px-4 py-3">
                                            {pages[popup.page] ?? popup.page}
                                        </td>
                                        <td className="px-4 py-3">
                                            {popup.delay_seconds}s
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge
                                                variant={
                                                    popup.is_published
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {popup.is_published
                                                    ? 'Published'
                                                    : 'Draft'}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        togglePublished(popup)
                                                    }
                                                >
                                                    {popup.is_published
                                                        ? 'Unpublish'
                                                        : 'Publish'}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    aria-label="Edit"
                                                    onClick={() =>
                                                        setEditing(popup)
                                                    }
                                                >
                                                    <Pencil className="size-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    aria-label="Delete"
                                                    className="text-destructive hover:text-destructive"
                                                    onClick={() =>
                                                        handleDelete(popup)
                                                    }
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

            <Dialog
                open={editing !== null}
                onOpenChange={(open) => !open && setEditing(null)}
            >
                <DialogContent
                    aria-describedby={undefined}
                    // Escape should close an open page list before the dialog.
                    onEscapeKeyDown={(event) => {
                        const target = event.target as HTMLElement;

                        if (target.getAttribute('aria-expanded') === 'true') {
                            event.preventDefault();
                        }
                    }}
                    className="max-h-[90dvh] overflow-y-auto sm:max-w-4xl"
                >
                    <DialogHeader>
                        <DialogTitle>
                            {editing === 'new' ? 'Add Popup' : 'Edit Popup'}
                        </DialogTitle>
                    </DialogHeader>
                    {editing !== null && (
                        <PopupForm
                            popup={editing === 'new' ? null : editing}
                            pages={pages}
                            onDone={() => setEditing(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

/** Turns "Section - Page" names from config into grouped options. */
function toPageOptions(pages: Record<string, string>): SearchSelectOption[] {
    return Object.entries(pages).map(([value, name]) => {
        const [section, ...rest] = name.split(' - ');

        if (rest.length === 0) {
            return { value, label: name };
        }

        return { value, group: section, label: rest.join(' - ') };
    });
}

type PopupFormProps = {
    popup: Popup | null;
    pages: Record<string, string>;
    onDone: () => void;
};

function PopupForm({ popup, pages, onDone }: PopupFormProps) {
    const form = useForm({
        title: popup?.title ?? '',
        media_id: popup?.media_id ?? null,
        mobile_media_id: popup?.mobile_media_id ?? null,
        page: popup?.page ?? 'home',
        delay_seconds: popup?.delay_seconds ?? 3,
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const options = { preserveScroll: true, onSuccess: onDone };

        if (popup) {
            form.put(PopupController.update.url(popup.id), options);
        } else {
            form.post(PopupController.store.url(), options);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid items-start gap-4 md:grid-cols-[2fr_2fr_1fr]">
                <div className="space-y-1">
                    <Label htmlFor="popup-title">Title</Label>
                    <Input
                        id="popup-title"
                        value={form.data.title}
                        onChange={(e) => form.setData('title', e.target.value)}
                    />
                    <InputError message={form.errors.title} />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="popup-page">Show on page</Label>
                    <SearchSelect
                        id="popup-page"
                        options={toPageOptions(pages)}
                        value={form.data.page}
                        onChange={(page) => form.setData('page', page)}
                        className="w-full"
                    />
                    <InputError message={form.errors.page} />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="popup-delay">Show after (seconds)</Label>
                    <Input
                        id="popup-delay"
                        type="number"
                        min={0}
                        max={600}
                        value={form.data.delay_seconds}
                        onChange={(e) =>
                            form.setData(
                                'delay_seconds',
                                Number(e.target.value),
                            )
                        }
                    />
                    <InputError message={form.errors.delay_seconds} />
                </div>
            </div>

            <div className="grid items-start gap-4 sm:grid-cols-2">
                <ImageField
                    label="Landscape image (desktop)"
                    initialUrl={popup?.media?.url ?? null}
                    error={form.errors.media_id}
                    onChange={(id) => form.setData('media_id', id)}
                />

                <ImageField
                    label="Portrait image (phones, optional)"
                    initialUrl={popup?.mobile_media?.url ?? null}
                    error={form.errors.mobile_media_id}
                    onChange={(id) => form.setData('mobile_media_id', id)}
                    removable
                />
            </div>

            <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onDone}>
                    Cancel
                </Button>
                <Button type="submit" disabled={form.processing}>
                    {popup ? 'Save' : 'Save as draft'}
                </Button>
            </div>
        </form>
    );
}

type ImageFieldProps = {
    label: string;
    initialUrl: string | null;
    error?: string;
    onChange: (mediaId: number | null) => void;
    removable?: boolean;
};

/** An image chosen from the media library, with its preview. */
function ImageField({
    label,
    initialUrl,
    error,
    onChange,
    removable = false,
}: ImageFieldProps) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState(initialUrl);

    const handleSelect = (selected: SelectedMedia) => {
        onChange(selected.media_id);
        setImageUrl(
            selected.variant.url ?? `/storage/${selected.variant.file_path}`,
        );
        setPickerOpen(false);
    };

    const handleRemove = () => {
        onChange(null);
        setImageUrl(null);
    };

    return (
        <div className="space-y-1">
            <Label>{label}</Label>
            <div className="flex h-56 items-center justify-center rounded-lg border border-dashed bg-muted/30 p-2">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt=""
                        className="max-h-full max-w-full rounded object-contain"
                    />
                ) : (
                    <span className="text-sm text-muted-foreground">
                        No image selected
                    </span>
                )}
            </div>
            <div className="flex gap-2">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setPickerOpen(true)}
                >
                    Choose from media library
                </Button>
                {removable && imageUrl && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                )}
            </div>
            <InputError message={error} />
            <MediaPicker
                open={pickerOpen}
                onClose={() => setPickerOpen(false)}
                onSelect={handleSelect}
            />
        </div>
    );
}
