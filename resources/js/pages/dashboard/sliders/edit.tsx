import { useState } from 'react';
import { Head, Form, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaPicker } from '@/components/media/media-picker';
import type { Slider, SliderSlide, Media } from '@/types/cms';
import * as SliderController from '@/actions/App/Http/Controllers/Slider/SliderController';
import { ArrowUp, ArrowDown, Plus, Pencil, Trash2, Monitor, Smartphone, ChevronLeft } from 'lucide-react';

type Props = {
    slider: Slider & { slides: (SliderSlide & { desktop_media?: Media | null; mobile_media?: Media | null })[] };
};

type SlideFormState = {
    heading_line1: string;
    heading_line2: string;
    paragraph: string;
    is_active: boolean;
    desktop_media_id: number | null;
    desktop_media_path: string | null;
    mobile_media_id: number | null;
    mobile_media_path: string | null;
};

const emptySlide = (): SlideFormState => ({
    heading_line1: '',
    heading_line2: '',
    paragraph: '',
    is_active: true,
    desktop_media_id: null,
    desktop_media_path: null,
    mobile_media_id: null,
    mobile_media_path: null,
});

export default function SliderEdit({ slider }: Props) {
    const [pickerFor, setPickerFor] = useState<'desktop' | 'mobile' | null>(null);
    const [slideDialog, setSlideDialog] = useState<{ mode: 'add' | 'edit'; slide: SliderSlide | null } | null>(null);
    const [slideForm, setSlideForm] = useState<SlideFormState>(emptySlide());
    const [saving, setSaving] = useState(false);

    const openAddSlide = () => {
        setSlideForm(emptySlide());
        setSlideDialog({ mode: 'add', slide: null });
    };

    const openEditSlide = (slide: SliderSlide & { desktop_media?: Media | null; mobile_media?: Media | null }) => {
        setSlideForm({
            heading_line1: slide.heading_line1,
            heading_line2: slide.heading_line2 ?? '',
            paragraph: slide.paragraph ?? '',
            is_active: slide.is_active,
            desktop_media_id: slide.desktop_media_id,
            desktop_media_path: slide.desktop_media?.variants?.[0]?.file_path ?? slide.desktop_media?.file_path ?? null,
            mobile_media_id: slide.mobile_media_id,
            mobile_media_path: slide.mobile_media?.variants?.[0]?.file_path ?? slide.mobile_media?.file_path ?? null,
        });
        setSlideDialog({ mode: 'edit', slide });
    };

    const closeDialog = () => {
        setSlideDialog(null);
        setSlideForm(emptySlide());
    };

    const handlePickerSelect = (type: 'desktop' | 'mobile', selected: { media_id: number; variant: { file_path: string } }) => {
        setSlideForm((prev) => ({
            ...prev,
            [`${type}_media_id`]: selected.media_id,
            [`${type}_media_path`]: selected.variant.file_path,
        }));
        setPickerFor(null);
    };

    const handleSaveSlide = () => {
        setSaving(true);
        const payload = {
            heading_line1: slideForm.heading_line1,
            heading_line2: slideForm.heading_line2 || null,
            paragraph: slideForm.paragraph || null,
            is_active: slideForm.is_active,
            desktop_media_id: slideForm.desktop_media_id,
            mobile_media_id: slideForm.mobile_media_id,
        };

        if (slideDialog?.mode === 'add') {
            router.post(SliderController.storeSlide.url(slider.id), payload, {
                onSuccess: closeDialog,
                onFinish: () => setSaving(false),
            });
        } else if (slideDialog?.slide) {
            router.put(SliderController.updateSlide.url({ slider: slider.id, slide: slideDialog.slide.id }), payload, {
                onSuccess: closeDialog,
                onFinish: () => setSaving(false),
            });
        }
    };

    const handleDeleteSlide = (slide: SliderSlide) => {
        if (!confirm('Delete this slide?')) return;
        router.delete(SliderController.destroySlide.url({ slider: slider.id, slide: slide.id }), {
            preserveScroll: true,
        });
    };

    const handleMoveSlide = (slide: SliderSlide, direction: 'up' | 'down') => {
        const slides = [...slider.slides].sort((a, b) => a.position - b.position);
        const idx = slides.findIndex((s) => s.id === slide.id);
        if (direction === 'up' && idx === 0) return;
        if (direction === 'down' && idx === slides.length - 1) return;

        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        const orderedIds = slides.map((s) => s.id);
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];

        router.post(SliderController.reorderSlides.url(slider.id), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    const sortedSlides = [...slider.slides].sort((a, b) => a.position - b.position);

    return (
        <>
            <Head title={`Edit Slider: ${slider.name}`} />

            <div className="space-y-6 p-6 max-w-4xl">
                {/* Back link */}
                <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" onClick={() => router.visit(SliderController.index.url())}>
                    <ChevronLeft className="size-4 mr-1" /> All Sliders
                </Button>

                <div>
                    <h1 className="text-2xl font-semibold">Edit Slider</h1>
                    <p className="text-sm text-muted-foreground">Update slider settings and manage slides.</p>
                </div>

                {/* Slider settings */}
                <div className="rounded-xl border p-4 space-y-4">
                    <h2 className="text-sm font-semibold">Slider Settings</h2>
                    <Form
                        action={SliderController.update.url(slider.id)}
                        method="put"
                        className="space-y-4"
                    >
                        {({ errors, processing }) => (
                            <>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-muted-foreground">Name</label>
                                        <Input
                                            name="name"
                                            defaultValue={slider.name}
                                            className={errors.name ? 'border-destructive' : ''}
                                        />
                                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-muted-foreground">Slug</label>
                                        <Input
                                            name="slug"
                                            defaultValue={slider.slug}
                                            className={errors.slug ? 'border-destructive' : ''}
                                        />
                                        {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="is_active"
                                        name="is_active"
                                        defaultChecked={slider.is_active}
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

                {/* Slides */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold">Slides ({sortedSlides.length})</h2>
                        <Button size="sm" onClick={openAddSlide}>
                            <Plus className="size-4 mr-1" /> Add Slide
                        </Button>
                    </div>

                    {sortedSlides.length === 0 ? (
                        <div className="rounded-xl border p-8 text-center text-sm text-muted-foreground">
                            No slides yet. Add the first slide above.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedSlides.map((slide, idx) => {
                                const desktopUrl = slide.desktop_media?.variants?.[0]?.file_path
                                    ? `/storage/${slide.desktop_media.variants[0].file_path}`
                                    : slide.desktop_media?.file_path
                                    ? `/storage/${slide.desktop_media.file_path}`
                                    : null;

                                return (
                                    <div key={slide.id} className="rounded-xl border p-4">
                                        <div className="flex items-start gap-4">
                                            {/* Thumbnail */}
                                            <div className="shrink-0 w-24 h-16 rounded-lg border bg-muted overflow-hidden">
                                                {desktopUrl ? (
                                                    <img src={desktopUrl} className="w-full h-full object-cover" alt="" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                        <Monitor className="size-5" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium truncate">{slide.heading_line1}</p>
                                                {slide.heading_line2 && (
                                                    <p className="text-sm text-muted-foreground truncate">{slide.heading_line2}</p>
                                                )}
                                                <div className="mt-1 flex items-center gap-2">
                                                    {slide.is_active ? (
                                                        <Badge variant="default" className="text-xs">Active</Badge>
                                                    ) : (
                                                        <Badge variant="secondary" className="text-xs">Inactive</Badge>
                                                    )}
                                                    {slide.mobile_media_id && (
                                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                            <Smartphone className="size-3" /> Mobile image set
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-1 shrink-0">
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-8"
                                                    disabled={idx === 0}
                                                    onClick={() => handleMoveSlide(slide, 'up')}
                                                >
                                                    <ArrowUp className="size-3.5" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-8"
                                                    disabled={idx === sortedSlides.length - 1}
                                                    onClick={() => handleMoveSlide(slide, 'down')}
                                                >
                                                    <ArrowDown className="size-3.5" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-8"
                                                    onClick={() => openEditSlide(slide)}
                                                >
                                                    <Pencil className="size-3.5" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="size-8 text-destructive hover:text-destructive"
                                                    onClick={() => handleDeleteSlide(slide)}
                                                >
                                                    <Trash2 className="size-3.5" />
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

            {/* Add / Edit Slide Dialog */}
            <Dialog open={slideDialog !== null} onOpenChange={(open) => !open && closeDialog()}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>{slideDialog?.mode === 'add' ? 'Add Slide' : 'Edit Slide'}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        {/* Desktop image */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                                <Monitor className="size-3.5" /> Desktop Image
                            </label>
                            <div className="flex items-center gap-3">
                                {slideForm.desktop_media_path ? (
                                    <div className="relative w-20 h-14 rounded-lg border overflow-hidden bg-muted">
                                        <img
                                            src={`/storage/${slideForm.desktop_media_path}`}
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div className="w-20 h-14 rounded-lg border bg-muted flex items-center justify-center">
                                        <Monitor className="size-5 text-muted-foreground" />
                                    </div>
                                )}
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setPickerFor('desktop')}
                                >
                                    {slideForm.desktop_media_path ? 'Change' : 'Select Image'}
                                </Button>
                                {slideForm.desktop_media_path && (
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="ghost"
                                        className="text-destructive"
                                        onClick={() => setSlideForm((p) => ({ ...p, desktop_media_id: null, desktop_media_path: null }))}
                                    >
                                        Remove
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Mobile image */}
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                                <Smartphone className="size-3.5" /> Mobile Image
                                <span className="text-muted-foreground/60">(optional — uses desktop if not set)</span>
                            </label>
                            <div className="flex items-center gap-3">
                                {slideForm.mobile_media_path ? (
                                    <div className="relative w-12 h-14 rounded-lg border overflow-hidden bg-muted">
                                        <img
                                            src={`/storage/${slideForm.mobile_media_path}`}
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-14 rounded-lg border bg-muted flex items-center justify-center">
                                        <Smartphone className="size-4 text-muted-foreground" />
                                    </div>
                                )}
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setPickerFor('mobile')}
                                >
                                    {slideForm.mobile_media_path ? 'Change' : 'Select Image'}
                                </Button>
                                {slideForm.mobile_media_path && (
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="ghost"
                                        className="text-destructive"
                                        onClick={() => setSlideForm((p) => ({ ...p, mobile_media_id: null, mobile_media_path: null }))}
                                    >
                                        Remove
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Heading line 1 */}
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-muted-foreground">Heading Line 1 *</label>
                            <Input
                                value={slideForm.heading_line1}
                                onChange={(e) => setSlideForm((p) => ({ ...p, heading_line1: e.target.value }))}
                                placeholder="Main heading"
                            />
                        </div>

                        {/* Heading line 2 */}
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-muted-foreground">Heading Line 2</label>
                            <Input
                                value={slideForm.heading_line2}
                                onChange={(e) => setSlideForm((p) => ({ ...p, heading_line2: e.target.value }))}
                                placeholder="Secondary heading (optional)"
                            />
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-muted-foreground">Paragraph</label>
                            <textarea
                                value={slideForm.paragraph}
                                onChange={(e) => setSlideForm((p) => ({ ...p, paragraph: e.target.value }))}
                                placeholder="Description text (optional)"
                                rows={2}
                                className="w-full rounded-md border px-3 py-2 text-sm bg-background resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>

                        {/* Active toggle */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="slide_is_active"
                                checked={slideForm.is_active}
                                onChange={(e) => setSlideForm((p) => ({ ...p, is_active: e.target.checked }))}
                                className="size-4 rounded"
                            />
                            <label htmlFor="slide_is_active" className="text-sm">Active (visible on frontend)</label>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-2 pt-2">
                            <Button type="button" variant="outline" onClick={closeDialog}>
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                disabled={saving || !slideForm.heading_line1.trim()}
                                onClick={handleSaveSlide}
                            >
                                {saving ? 'Saving...' : slideDialog?.mode === 'add' ? 'Add Slide' : 'Save Changes'}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Media pickers */}
            <MediaPicker
                open={pickerFor === 'desktop'}
                onClose={() => setPickerFor(null)}
                onSelect={(s) => handlePickerSelect('desktop', s)}
            />
            <MediaPicker
                open={pickerFor === 'mobile'}
                onClose={() => setPickerFor(null)}
                onSelect={(s) => handlePickerSelect('mobile', s)}
            />
        </>
    );
}
