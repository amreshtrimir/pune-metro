import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { MediaDimension } from '@/types';
import { Upload, X, Plus, Image } from 'lucide-react';

type PreviewFile = {
    file: File;
    preview: string;
};

type MediaUploaderProps = {
    dimensions: MediaDimension[];
    onUpload: (file: File, dimensionIds: number[], customDimensions: Array<{ width: number; height: number }>) => Promise<void>;
    uploading?: boolean;
};

const PREDEFINED_DIMENSIONS = [
    { label: 'Thumbnail (200×200)', width: 200, height: 200 },
    { label: 'Small (400×400)', width: 400, height: 400 },
    { label: 'Medium (800×600)', width: 800, height: 600 },
    { label: 'Large (1200×800)', width: 1200, height: 800 },
    { label: 'Banner (1920×400)', width: 1920, height: 400 },
];

export function MediaUploader({ dimensions, onUpload, uploading = false }: MediaUploaderProps) {
    const [preview, setPreview] = useState<PreviewFile | null>(null);
    const [dragging, setDragging] = useState(false);
    const [selectedDimensionIds, setSelectedDimensionIds] = useState<number[]>([]);
    const [customDimensions, setCustomDimensions] = useState<Array<{ width: string; height: string }>>([]);

    const handleFile = useCallback((file: File) => {
        const url = URL.createObjectURL(file);
        setPreview({ file, preview: url });
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file?.type.startsWith('image/')) {
            handleFile(file);
        }
    }, [handleFile]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    };

    const toggleDimension = (id: number) => {
        setSelectedDimensionIds((prev) =>
            prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id],
        );
    };

    const addCustomDimension = () => {
        setCustomDimensions((prev) => [...prev, { width: '', height: '' }]);
    };

    const removeCustomDimension = (index: number) => {
        setCustomDimensions((prev) => prev.filter((_, i) => i !== index));
    };

    const updateCustomDimension = (index: number, field: 'width' | 'height', value: string) => {
        setCustomDimensions((prev) =>
            prev.map((d, i) => (i === index ? { ...d, [field]: value } : d)),
        );
    };

    const handleSubmit = async () => {
        if (!preview) return;

        const validCustom = customDimensions
            .filter((d) => d.width && d.height)
            .map((d) => ({ width: parseInt(d.width), height: parseInt(d.height) }));

        await onUpload(preview.file, selectedDimensionIds, validCustom);

        setPreview(null);
        setSelectedDimensionIds([]);
        setCustomDimensions([]);
    };

    return (
        <div className="space-y-4">
            {!preview ? (
                <div
                    className={cn(
                        'flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 transition-colors',
                        dragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/30 hover:border-primary/50',
                    )}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('media-file-input')?.click()}
                >
                    <Image className="mb-3 size-10 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground">Drop image here or click to select</p>
                    <p className="mt-1 text-xs text-muted-foreground">JPEG, PNG, GIF, WEBP – max 10MB</p>
                    <input
                        id="media-file-input"
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                        className="hidden"
                        onChange={handleInputChange}
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl border">
                        <img
                            src={preview.preview}
                            alt="Preview"
                            className="max-h-64 w-full object-contain"
                        />
                        <Button
                            size="icon"
                            variant="destructive"
                            className="absolute right-2 top-2 size-7"
                            onClick={() => setPreview(null)}
                        >
                            <X className="size-3" />
                        </Button>
                    </div>

                    <div>
                        <p className="mb-2 text-sm font-medium">Select dimensions</p>

                        {dimensions.length > 0 && (
                            <div className="mb-3">
                                <p className="mb-1.5 text-xs text-muted-foreground">Predefined</p>
                                <div className="flex flex-wrap gap-2">
                                    {dimensions.map((d) => (
                                        <Badge
                                            key={d.id}
                                            variant={selectedDimensionIds.includes(d.id) ? 'default' : 'outline'}
                                            className="cursor-pointer"
                                            onClick={() => toggleDimension(d.id)}
                                        >
                                            {d.name} ({d.width}×{d.height})
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <p className="mb-1.5 text-xs text-muted-foreground">Custom dimensions</p>
                            {customDimensions.map((d, i) => (
                                <div key={i} className="mb-2 flex items-center gap-2">
                                    <Input
                                        type="number"
                                        placeholder="Width"
                                        value={d.width}
                                        onChange={(e) => updateCustomDimension(i, 'width', e.target.value)}
                                        className="h-8 w-24 text-xs"
                                        min={1}
                                        max={5000}
                                    />
                                    <span className="text-muted-foreground">×</span>
                                    <Input
                                        type="number"
                                        placeholder="Height"
                                        value={d.height}
                                        onChange={(e) => updateCustomDimension(i, 'height', e.target.value)}
                                        className="h-8 w-24 text-xs"
                                        min={1}
                                        max={5000}
                                    />
                                    <Button size="icon" variant="ghost" className="size-8" onClick={() => removeCustomDimension(i)}>
                                        <X className="size-3" />
                                    </Button>
                                </div>
                            ))}
                            <Button size="sm" variant="outline" className="h-7 text-xs" onClick={addCustomDimension}>
                                <Plus className="mr-1 size-3" /> Add custom
                            </Button>
                        </div>
                    </div>

                    <Button onClick={handleSubmit} disabled={uploading} className="w-full">
                        <Upload className="mr-2 size-4" />
                        {uploading ? 'Uploading...' : 'Upload'}
                    </Button>
                </div>
            )}
        </div>
    );
}
