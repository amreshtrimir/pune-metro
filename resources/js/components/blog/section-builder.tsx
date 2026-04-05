import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MediaPicker } from '@/components/media/media-picker';
import type { PostSection, SectionType, SelectedMedia, TextContent, ImageContent, ImageTextContent, GalleryContent, QuoteContent } from '@/types';
import { Plus, Trash2, GripVertical, Type, Image, AlignLeft, Images, Quote } from 'lucide-react';

type SectionBuilderProps = {
    sections: PostSection[];
    onChange: (sections: PostSection[]) => void;
};

const SECTION_TYPES: Array<{ type: SectionType; label: string; description: string; icon: React.ComponentType<{ className?: string }> }> = [
    { type: 'text', label: 'Text', description: 'Rich paragraph', icon: Type },
    { type: 'image', label: 'Image', description: 'Full-width photo', icon: Image },
    { type: 'image_text', label: 'Image + Text', description: 'Side by side', icon: AlignLeft },
    { type: 'gallery', label: 'Gallery', description: 'Photo grid', icon: Images },
    { type: 'quote', label: 'Quote', description: 'Pull quote', icon: Quote },
];

function defaultContent(type: SectionType): PostSection['content'] {
    switch (type) {
        case 'text': return { text: '' };
        case 'image': return { media_id: 0, variant: { width: 0, height: 0, file_path: '' } };
        case 'image_text': return { media_id: 0, text: '' };
        case 'gallery': return { items: [] };
        case 'quote': return { text: '', author: '' };
    }
}

type SectionEditorProps = {
    section: PostSection;
    onChange: (section: PostSection) => void;
    onDelete: () => void;
    index: number;
    isDragging: boolean;
    onDragStart: () => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: () => void;
    onDragEnd: () => void;
};

function SectionEditor({ section, onChange, onDelete, index, isDragging, onDragStart, onDragOver, onDrop, onDragEnd }: SectionEditorProps) {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [galleryPickerOpen, setGalleryPickerOpen] = useState(false);

    const updateContent = (patch: Partial<PostSection['content']>) => {
        onChange({ ...section, content: { ...section.content, ...patch } as PostSection['content'] });
    };

    const handleMediaSelect = (selected: SelectedMedia) => {
        if (section.type === 'image') {
            updateContent({ media_id: selected.media_id, variant: selected.variant } as Partial<ImageContent>);
        } else if (section.type === 'image_text') {
            updateContent({ media_id: selected.media_id } as Partial<ImageTextContent>);
        }
        setPickerOpen(false);
    };

    const handleGalleryAdd = (selected: SelectedMedia) => {
        const current = section.content as GalleryContent;
        updateContent({ items: [...(current.items ?? []), { media_id: selected.media_id, variant: selected.variant }] } as Partial<GalleryContent>);
        setGalleryPickerOpen(false);
    };

    const renderEditor = () => {
        switch (section.type) {
            case 'text': {
                const c = section.content as TextContent;
                return (
                    <textarea
                        className="min-h-32 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                        placeholder="Enter text content..."
                        value={c.text}
                        onChange={(e) => updateContent({ text: e.target.value } as Partial<TextContent>)}
                    />
                );
            }
            case 'image': {
                const c = section.content as ImageContent;
                return (
                    <div className="flex items-start gap-4">
                        {c.media_id > 0 && c.variant.file_path ? (
                            <div className="relative shrink-0 overflow-hidden rounded-lg border w-48 h-32">
                                <img src={`/storage/${c.variant.file_path}`} alt="" className="h-full w-full object-cover" />
                                <Badge variant="secondary" className="absolute bottom-1.5 right-1.5 text-[10px]">
                                    {c.variant.width}×{c.variant.height}
                                </Badge>
                            </div>
                        ) : (
                            <div className="flex shrink-0 h-32 w-48 items-center justify-center rounded-lg border-2 border-dashed text-muted-foreground text-xs">
                                No image selected
                            </div>
                        )}
                        <div className="flex flex-col gap-2 justify-center">
                            <Button type="button" size="sm" variant="outline" onClick={() => setPickerOpen(true)}>
                                <Image className="mr-2 size-3" /> {c.media_id > 0 ? 'Change' : 'Select'} Image
                            </Button>
                            {c.media_id > 0 && (
                                <button
                                    type="button"
                                    onClick={() => updateContent({ media_id: 0, variant: { width: 0, height: 0, file_path: '' } } as Partial<ImageContent>)}
                                    className="text-xs text-muted-foreground hover:text-destructive transition-colors text-left"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        <MediaPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={handleMediaSelect} />
                    </div>
                );
            }
            case 'image_text': {
                const c = section.content as ImageTextContent;
                return (
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0">
                                {c.media_id > 0 ? (
                                    <div className="overflow-hidden rounded-lg border w-32 h-24">
                                        <img src={`/storage/${c.media_id}`} alt="" className="h-full w-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="flex h-24 w-32 items-center justify-center rounded-lg border-2 border-dashed text-xs text-muted-foreground">
                                        No image
                                    </div>
                                )}
                                <Button type="button" size="sm" variant="outline" className="mt-1 w-full text-xs" onClick={() => setPickerOpen(true)}>
                                    Select
                                </Button>
                            </div>
                            <textarea
                                className="min-h-24 flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                                placeholder="Enter text..."
                                value={c.text}
                                onChange={(e) => updateContent({ text: e.target.value } as Partial<ImageTextContent>)}
                            />
                        </div>
                        <MediaPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={handleMediaSelect} />
                    </div>
                );
            }
            case 'gallery': {
                const c = section.content as GalleryContent;
                return (
                    <div className="space-y-3">
                        <div className="grid grid-cols-4 gap-2">
                            {(c.items ?? []).map((item, i) => (
                                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg border">
                                    <img src={`/storage/${item.variant.file_path}`} alt="" className="h-full w-full object-cover" />
                                    <button
                                        type="button"
                                        className="absolute right-1 top-1 hidden rounded bg-destructive p-0.5 group-hover:block"
                                        onClick={() => {
                                            const newItems = c.items.filter((_, idx) => idx !== i);
                                            updateContent({ items: newItems } as Partial<GalleryContent>);
                                        }}
                                    >
                                        <Trash2 className="size-3 text-white" />
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                                onClick={() => setGalleryPickerOpen(true)}
                            >
                                <Plus className="size-6" />
                            </button>
                        </div>
                        <MediaPicker open={galleryPickerOpen} onClose={() => setGalleryPickerOpen(false)} onSelect={handleGalleryAdd} />
                    </div>
                );
            }
            case 'quote': {
                const c = section.content as QuoteContent;
                return (
                    <div className="space-y-2">
                        <textarea
                            className="min-h-20 w-full rounded-md border bg-background px-3 py-2 text-sm italic focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                            placeholder="Enter quote text..."
                            value={c.text}
                            onChange={(e) => updateContent({ text: e.target.value } as Partial<QuoteContent>)}
                        />
                        <Input
                            placeholder="Author name"
                            value={c.author}
                            onChange={(e) => updateContent({ author: e.target.value } as Partial<QuoteContent>)}
                        />
                    </div>
                );
            }
        }
    };

    const typeInfo = SECTION_TYPES.find((t) => t.type === section.type);
    const Icon = typeInfo?.icon ?? Type;

    return (
        <div
            className={`rounded-xl border bg-card transition-opacity ${isDragging ? 'opacity-40' : 'opacity-100'}`}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <div className="flex items-center gap-3 border-b px-4 py-2">
                <div
                    draggable
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    className="cursor-grab active:cursor-grabbing touch-none"
                    title="Drag to reorder"
                >
                    <GripVertical className="size-4 text-muted-foreground" />
                </div>
                <Icon className="size-4 text-muted-foreground" />
                <Badge variant="secondary" className="text-xs">{typeInfo?.label}</Badge>
                <span className="text-xs text-muted-foreground">#{index + 1}</span>
                <div className="ml-auto">
                    <Button type="button" size="icon" variant="ghost" className="size-7 text-destructive hover:text-destructive" onClick={onDelete}>
                        <Trash2 className="size-3" />
                    </Button>
                </div>
            </div>
            <div className="p-4">
                {renderEditor()}
            </div>
        </div>
    );
}

export function SectionBuilder({ sections, onChange }: SectionBuilderProps) {
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const addSection = (type: SectionType) => {
        const newSection: PostSection = {
            type,
            content: defaultContent(type),
            position: sections.length,
        };
        onChange([...sections, newSection]);
    };

    const updateSection = (index: number, section: PostSection) => {
        const updated = [...sections];
        updated[index] = section;
        onChange(updated);
    };

    const deleteSection = (index: number) => {
        const updated = sections.filter((_, i) => i !== index);
        onChange(updated.map((s, i) => ({ ...s, position: i })));
    };

    const handleDrop = (targetIndex: number) => {
        if (dragIndex === null || dragIndex === targetIndex) {
            setDragIndex(null);
            return;
        }
        const updated = [...sections];
        const [moved] = updated.splice(dragIndex, 1);
        updated.splice(targetIndex, 0, moved);
        onChange(updated.map((s, i) => ({ ...s, position: i })));
        setDragIndex(null);
    };

    return (
        <div className="space-y-3">
            {sections.map((section, i) => (
                <SectionEditor
                    key={i}
                    section={section}
                    index={i}
                    onChange={(s) => updateSection(i, s)}
                    onDelete={() => deleteSection(i)}
                    isDragging={dragIndex === i}
                    onDragStart={() => setDragIndex(i)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(i)}
                    onDragEnd={() => setDragIndex(null)}
                />
            ))}

            <div className="rounded-xl border border-dashed p-4 space-y-3">
                <p className="text-xs font-medium text-muted-foreground">Add a block</p>
                <div className="grid grid-cols-5 gap-2">
                    {SECTION_TYPES.map(({ type, label, description, icon: Icon }) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => addSection(type)}
                            className="group flex flex-col items-center gap-2 rounded-lg border bg-card p-3 text-center transition-all hover:border-primary/50 hover:bg-accent hover:shadow-sm"
                        >
                            <div className="flex size-9 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                                <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-medium leading-tight text-foreground">{label}</p>
                                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
