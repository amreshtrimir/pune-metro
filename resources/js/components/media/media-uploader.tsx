import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { MediaDimension } from '@/types';
import { Upload, X, Plus, Image, CheckCircle2, Loader2 } from 'lucide-react';

const MODULES = [
    { value: '', label: 'General (no module)' },
    { value: 'blog', label: 'Blog' },
    { value: 'pages', label: 'Pages' },
    { value: 'banners', label: 'Banners' },
    { value: 'gallery', label: 'Gallery' },
];

type PreviewFile = {
    file: File;
    preview: string;
};

type MediaUploaderProps = {
    dimensions: MediaDimension[];
    onUpload: (
        file: File,
        dimensionIds: number[],
        customDimensions: Array<{ width: number; height: number }>,
        onProgress: (pct: number) => void,
        module: string,
    ) => Promise<void>;
};

const PREDEFINED_DIMENSIONS = [
    { label: 'Thumbnail (200×200)', width: 200, height: 200 },
    { label: 'Small (400×400)', width: 400, height: 400 },
    { label: 'Medium (800×600)', width: 800, height: 600 },
    { label: 'Large (1200×800)', width: 1200, height: 800 },
    { label: 'Banner (1920×400)', width: 1920, height: 400 },
];

export function MediaUploader({ dimensions, onUpload }: MediaUploaderProps) {
    const [preview, setPreview] = useState<PreviewFile | null>(null);
    const [dragging, setDragging] = useState(false);
    const [selectedDimensionIds, setSelectedDimensionIds] = useState<number[]>([]);
    const [customDimensions, setCustomDimensions] = useState<Array<{ width: string; height: string }>>([]);
    const [module, setModule] = useState('');
    const [progress, setProgress] = useState<number | null>(null);
    const [done, setDone] = useState(false);
    const uploading = progress !== null && !done;;

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
        if (!preview || uploading) return;

        const validCustom = customDimensions
            .filter((d) => d.width && d.height)
            .map((d) => ({ width: parseInt(d.width), height: parseInt(d.height) }));

        setProgress(0);
        setDone(false);
        try {
            await onUpload(preview.file, selectedDimensionIds, validCustom, setProgress, module);
            setDone(true);
            setTimeout(() => {
                setPreview(null);
                setSelectedDimensionIds([]);
                setCustomDimensions([]);
                setProgress(null);
                setDone(false);
                setModule('');
            }, 1200);
        } catch {
            setProgress(null);
        }
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
                            className={cn('max-h-64 w-full object-contain transition-opacity', uploading && 'opacity-60')}
                        />

                        {/* Progress overlay */}
                        {progress !== null && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/60 backdrop-blur-sm">
                                {done ? (
                                    <>
                                        <CheckCircle2 className="size-10 text-green-500" />
                                        <p className="text-sm font-medium text-green-600">Uploaded!</p>
                                    </>
                                ) : (
                                    <>
                                        <Loader2 className="size-8 animate-spin text-primary" />
                                        <p className="text-sm font-medium">
                                            {progress < 100 ? `Uploading… ${progress}%` : 'Processing…'}
                                        </p>
                                        <div className="h-1.5 w-3/4 overflow-hidden rounded-full bg-muted">
                                            <div
                                                className="h-full rounded-full bg-primary transition-all duration-200"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            className="absolute right-2 top-2 size-7"
                            onClick={() => setPreview(null)}
                            disabled={uploading}
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
                                    <Button type="button" size="icon" variant="ghost" className="size-8" onClick={() => removeCustomDimension(i)} disabled={uploading}>
                                        <X className="size-3" />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" size="sm" variant="outline" className="h-7 text-xs" onClick={addCustomDimension} disabled={uploading}>
                                <Plus className="mr-1 size-3" /> Add custom
                            </Button>
                        </div>
                    </div>

                    <div>
                        <p className="mb-1.5 text-sm font-medium">Module</p>
                        <div className="flex flex-wrap gap-2">
                            {MODULES.map((m) => (
                                <Badge
                                    key={m.value}
                                    variant={module === m.value ? 'default' : 'outline'}
                                    className="cursor-pointer"
                                    onClick={() => setModule(m.value)}
                                >
                                    {m.label}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <Button type="button" onClick={handleSubmit} disabled={uploading} className="w-full">
                        {uploading ? (
                            <><Loader2 className="mr-2 size-4 animate-spin" /> {progress !== null && progress < 100 ? `Uploading ${progress}%` : 'Processing…'}</>
                        ) : (
                            <><Upload className="mr-2 size-4" /> Upload</>
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
}
