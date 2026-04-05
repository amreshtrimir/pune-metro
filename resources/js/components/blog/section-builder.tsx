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

const SECTION_TYPES: Array<{ type: SectionType; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { type: 'text', label: 'Text', icon: Type },
    { type: 'image', label: 'Image', icon: Image },
    { type: 'image_text', label: 'Image + Text', icon: AlignLeft },
    { type: 'gallery', label: 'Gallery', icon: Images },
    { type: 'quote', label: 'Quote', icon: Quote },
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
};

function SectionEditor({ section, onChange, onDelete, index }: SectionEditorProps) {
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
                    <div className="space-y-2">
                        {c.media_id > 0 && c.variant.file_path ? (
                            <div className="relative overflow-hidden rounded-lg border">
                                <img src={`/storage/${c.variant.file_path}`} alt="" className="max-h-48 w-full object-cover" />
                                <Badge variant="secondary" className="absolute bottom-2 right-2 text-[10px]">
                                    {c.variant.width}×{c.variant.height}
                                </Badge>
                            </div>
                        ) : (
                            <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed text-muted-foreground text-sm">
                                No image selected
                            </div>
                        )}
                        <Button size="sm" variant="outline" onClick={() => setPickerOpen(true)}>
                            <Image className="mr-2 size-3" /> {c.media_id > 0 ? 'Change' : 'Select'} Image
                        </Button>
                        <MediaPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={handleMediaSelect} />
                    </div>
                );
            }
            case 'image_text': {
                const c = section.content as ImageTextContent;
                return (
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                {c.media_id > 0 ? (
                                    <div className="overflow-hidden rounded-lg border w-32 h-24">
                                        <img src={`/storage/${c.media_id}`} alt="" className="h-full w-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="flex h-24 w-32 items-center justify-center rounded-lg border-2 border-dashed text-xs text-muted-foreground">
                                        No image
                                    </div>
                                )}
                                <Button size="sm" variant="outline" className="mt-1 w-full text-xs" onClick={() => setPickerOpen(true)}>
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
        <div className="rounded-xl border bg-card">
            <div className="flex items-center gap-3 border-b px-4 py-2">
                <GripVertical className="size-4 cursor-grab text-muted-foreground" />
                <Icon className="size-4 text-muted-foreground" />
                <Badge variant="secondary" className="text-xs">{typeInfo?.label}</Badge>
                <span className="text-xs text-muted-foreground">#{index + 1}</span>
                <div className="ml-auto">
                    <Button size="icon" variant="ghost" className="size-7 text-destructive hover:text-destructive" onClick={onDelete}>
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
    const [showTypeMenu, setShowTypeMenu] = useState(false);

    const addSection = (type: SectionType) => {
        const newSection: PostSection = {
            type,
            content: defaultContent(type),
            position: sections.length,
        };
        onChange([...sections, newSection]);
        setShowTypeMenu(false);
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

    return (
        <div className="space-y-3">
            {sections.map((section, i) => (
                <SectionEditor
                    key={i}
                    section={section}
                    index={i}
                    onChange={(s) => updateSection(i, s)}
                    onDelete={() => deleteSection(i)}
                />
            ))}

            <div className="relative">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full border-dashed"
                    onClick={() => setShowTypeMenu(!showTypeMenu)}
                >
                    <Plus className="mr-2 size-4" /> Add Section
                </Button>

                {showTypeMenu && (
                    <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-xl border bg-popover shadow-lg">
                        <div className="grid grid-cols-2 gap-1 p-2 sm:grid-cols-5">
                            {SECTION_TYPES.map(({ type, label, icon: Icon }) => (
                                <button
                                    key={type}
                                    className="flex flex-col items-center gap-1.5 rounded-lg p-3 text-xs hover:bg-accent transition-colors"
                                    onClick={() => addSection(type)}
                                >
                                    <Icon className="size-5" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
