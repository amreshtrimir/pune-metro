import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { MediaDimension } from '@/types';
import { Upload, X, Plus, Image, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';

const MODULES = [
    { value: '', label: 'General (no module)' },
    { value: 'blog', label: 'Blog' },
    { value: 'pages', label: 'Pages' },
    { value: 'banners', label: 'Banners' },
    { value: 'gallery', label: 'Gallery' },
    { value: 'project-update', label: 'Project Update' },
    { value: 'board', label: 'Board' },
];

type FileStatus = 'pending' | 'uploading' | 'done' | 'error';

type QueuedFile = {
    id: string;
    file: File;
    preview: string;
    status: FileStatus;
    progress: number;
    error?: string;
};

type MediaUploaderProps = {
    dimensions: MediaDimension[];
    onComplete: () => void;
};

export function MediaUploader({ dimensions, onComplete }: MediaUploaderProps) {
    const [queue, setQueue] = useState<QueuedFile[]>([]);
    const [dragging, setDragging] = useState(false);
    const [selectedDimensionIds, setSelectedDimensionIds] = useState<number[]>([]);
    const [customDimensions, setCustomDimensions] = useState<Array<{ width: string; height: string }>>([]);
    const [module, setModule] = useState('');
    const [running, setRunning] = useState(false);

    const addFiles = useCallback((files: FileList | File[]) => {
        const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
        const newItems: QueuedFile[] = imageFiles.map((f) => ({
            id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
            file: f,
            preview: URL.createObjectURL(f),
            status: 'pending',
            progress: 0,
        }));
        setQueue((prev) => [...prev, ...newItems]);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        addFiles(e.dataTransfer.files);
    }, [addFiles]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) addFiles(e.target.files);
        e.target.value = '';
    };

    const removeFromQueue = (id: string) => {
        setQueue((prev) => {
            const item = prev.find((i) => i.id === id);
            if (item) URL.revokeObjectURL(item.preview);
            return prev.filter((i) => i.id !== id);
        });
    };

    const toggleDimension = (id: number) => {
        setSelectedDimensionIds((prev) => (prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]));
    };

    const addCustomDimension = () => {
        setCustomDimensions((prev) => [...prev, { width: '', height: '' }]);
    };

    const removeCustomDimension = (index: number) => {
        setCustomDimensions((prev) => prev.filter((_, i) => i !== index));
    };

    const updateCustomDimension = (index: number, field: 'width' | 'height', value: string) => {
        setCustomDimensions((prev) => prev.map((d, i) => (i === index ? { ...d, [field]: value } : d)));
    };

    const getXsrfToken = () =>
        decodeURIComponent(document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '');

    const uploadFile = (item: QueuedFile, validCustom: Array<{ width: number; height: number }>): Promise<void> => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', item.file);
            if (module) formData.append('module', module);
            selectedDimensionIds.forEach((id) => formData.append('dimension_ids[]', String(id)));
            validCustom.forEach((d, i) => {
                formData.append(`custom_dimensions[${i}][width]`, String(d.width));
                formData.append(`custom_dimensions[${i}][height]`, String(d.height));
            });

            const xhr = new XMLHttpRequest();
            xhr.open('POST', MediaController.store.url());
            xhr.setRequestHeader('X-XSRF-TOKEN', getXsrfToken());
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const pct = Math.round((e.loaded / e.total) * 100);
                    setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, progress: pct } : q)));
                }
            };

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: 'done', progress: 100 } : q)));
                    resolve();
                } else {
                    setQueue((prev) =>
                        prev.map((q) => (q.id === item.id ? { ...q, status: 'error', error: `HTTP ${xhr.status}` } : q)),
                    );
                    reject(new Error(`HTTP ${xhr.status}`));
                }
            };

            xhr.onerror = () => {
                setQueue((prev) =>
                    prev.map((q) => (q.id === item.id ? { ...q, status: 'error', error: 'Network error' } : q)),
                );
                reject(new Error('Network error'));
            };

            setQueue((prev) => prev.map((q) => (q.id === item.id ? { ...q, status: 'uploading' } : q)));
            xhr.send(formData);
        });
    };

    const handleSubmit = async () => {
        const pending = queue.filter((q) => q.status === 'pending' || q.status === 'error');
        if (!pending.length || running) return;

        const validCustom = customDimensions
            .filter((d) => d.width && d.height)
            .map((d) => ({ width: parseInt(d.width), height: parseInt(d.height) }));

        setRunning(true);
        let anySuccess = false;
        for (const item of pending) {
            try {
                await uploadFile(item, validCustom);
                anySuccess = true;
            } catch {
                // continue with next file
            }
        }
        setRunning(false);

        if (anySuccess) {
            setTimeout(() => onComplete(), 800);
        }
    };

    const pendingCount = queue.filter((q) => q.status === 'pending' || q.status === 'error').length;
    const doneCount = queue.filter((q) => q.status === 'done').length;

    return (
        <div className="space-y-4">
            <div
                className={cn(
                    'flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors',
                    dragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/30 hover:border-primary/50',
                )}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById('media-file-input')?.click()}
            >
                <Image className="mb-2 size-8 text-muted-foreground" />
                <p className="text-sm font-medium">Drop images here or click to select</p>
                <p className="mt-1 text-xs text-muted-foreground">JPEG, PNG, GIF, WEBP – multiple files supported</p>
                <input
                    id="media-file-input"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    multiple
                    className="hidden"
                    onChange={handleInputChange}
                />
            </div>

            {queue.length > 0 && (
                <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
                    {queue.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 rounded-lg border bg-muted/30 px-3 py-2">
                            <img src={item.preview} alt={item.file.name} className="size-10 shrink-0 rounded object-cover" />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-xs font-medium">{item.file.name}</p>
                                {item.status === 'uploading' && (
                                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
                                        <div
                                            className="h-full rounded-full bg-primary transition-all duration-200"
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                )}
                                {item.status === 'error' && <p className="text-[10px] text-destructive">{item.error}</p>}
                            </div>
                            <div className="shrink-0">
                                {item.status === 'uploading' && <Loader2 className="size-4 animate-spin text-primary" />}
                                {item.status === 'done' && <CheckCircle2 className="size-4 text-green-500" />}
                                {item.status === 'error' && <AlertCircle className="size-4 text-destructive" />}
                                {item.status === 'pending' && !running && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFromQueue(item.id);
                                        }}
                                        className="rounded p-0.5 text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="size-3.5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {queue.some((q) => q.status === 'pending') && (
                <>
                    <div>
                        <p className="mb-2 text-sm font-medium">Dimensions (optional)</p>

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
                            <p className="mb-1.5 text-xs text-muted-foreground">Custom</p>
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
                                    <Button type="button" size="icon" variant="ghost" className="size-8" onClick={() => removeCustomDimension(i)}>
                                        <X className="size-3" />
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" size="sm" variant="outline" className="h-7 text-xs" onClick={addCustomDimension}>
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
                </>
            )}

            {queue.length > 0 && (
                <Button type="button" onClick={handleSubmit} disabled={running || pendingCount === 0} className="w-full">
                    {running ? (
                        <>
                            <Loader2 className="mr-2 size-4 animate-spin" /> Uploading…
                        </>
                    ) : doneCount > 0 && pendingCount === 0 ? (
                        <>
                            <CheckCircle2 className="mr-2 size-4" /> All uploaded!
                        </>
                    ) : (
                        <>
                            <Upload className="mr-2 size-4" /> Upload {pendingCount} {pendingCount === 1 ? 'file' : 'files'}
                        </>
                    )}
                </Button>
            )}
        </div>
    );
}
