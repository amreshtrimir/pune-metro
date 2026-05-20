import { Search, ChevronLeft, ChevronRight, CheckCircle2, Images, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { Media, MediaVariant, PaginatedData, SelectedMedia } from '@/types';

type SingleSelectProps = {
    multiSelect?: false;
    onSelect: (selected: SelectedMedia) => void;
    onMultiSelect?: never;
};

type MultiSelectProps = {
    multiSelect: true;
    onSelect?: never;
    onMultiSelect: (selected: SelectedMedia[]) => void;
};

type MediaPickerProps = (SingleSelectProps | MultiSelectProps) & {
    open: boolean;
    onClose: () => void;
    defaultModule?: string;
};

export function MediaPicker({ open, onClose, onSelect, onMultiSelect, multiSelect, defaultModule }: MediaPickerProps) {
    const [media, setMedia] = useState<PaginatedData<Media> | null>(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [module, setModule] = useState<string | null>(defaultModule ?? null);
    const [modules, setModules] = useState<string[]>(defaultModule ? [defaultModule] : []);
    const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<MediaVariant | null>(null);
    const [multiSelectedIds, setMultiSelectedIds] = useState<Set<number>>(new Set());
    const [multiSelectedItems, setMultiSelectedItems] = useState<Map<number, Media>>(new Map());

    const fetchMedia = async (searchVal: string, pageVal: number, moduleVal: string | null) => {
        setLoading(true);

        try {
            const params = new URLSearchParams({ page: String(pageVal) });

            if (searchVal) {
params.set('search', searchVal);
}

            if (moduleVal) {
params.set('module', moduleVal);
}

            const res = await fetch(`/dashboard/media?${params}`, {
                headers: { Accept: 'application/json' },
            });
            const data = await res.json() as { media: typeof media; modules?: string[] };
            setMedia(data.media ?? data);

            if (data.modules) {
                setModules((prev) => {
                    const merged = [...new Set([...prev, ...data.modules!])];

                    return merged.sort();
                });
            }
        } catch {
            // silent
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (open) {
            setSelectedMedia(null);
            setSelectedVariant(null);
            setMultiSelectedIds(new Set());
            setMultiSelectedItems(new Map());
            setSearch('');
            setPage(1);
            const initialModule = defaultModule ?? null;
            setModule(initialModule);

            if (defaultModule) {
setModules((prev) => (prev.includes(defaultModule) ? prev : [defaultModule, ...prev]));
}

            fetchMedia('', 1, initialModule);
        }
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClose = (isOpen: boolean) => {
        if (!isOpen) {
onClose();
}
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchMedia(search, 1, module);
    };

    const handleModuleChange = (mod: string | null) => {
        setModule(mod);
        setPage(1);
        setSelectedMedia(null);
        setSelectedVariant(null);
        fetchMedia(search, 1, mod);
    };

    const handleSelect = (m: Media) => {
        if (multiSelect) {
            setMultiSelectedIds((prev) => {
                const next = new Set(prev);

                if (next.has(m.id)) {
                    next.delete(m.id);
                } else {
                    next.add(m.id);
                }

                return next;
            });
            setMultiSelectedItems((prev) => {
                const next = new Map(prev);

                if (next.has(m.id)) {
                    next.delete(m.id);
                } else {
                    next.set(m.id, m);
                }

                return next;
            });

            return;
        }

        setSelectedMedia(m);
        setSelectedVariant(m.variants[0] ?? null);
    };

    const handleMultiConfirm = () => {
        if (multiSelectedItems.size === 0) {
return;
}

        const selected: SelectedMedia[] = Array.from(multiSelectedItems.values()).map((m) => {
            const variant = m.variants[0] ?? null;
            const filePath = variant?.file_path ?? m.file_path;

            return {
                media_id: m.id,
                variant: {
                    width: variant?.width ?? 0,
                    height: variant?.height ?? 0,
                    file_path: filePath,
                    url: `/storage/${filePath}`,
                },
            };
        });
        onMultiSelect!(selected);
        onClose();
    };

    const handleConfirm = () => {
        if (!selectedMedia) {
return;
}

        // If variants exist, one must be selected; otherwise fall back to the original file
        if (selectedMedia.variants.length > 0 && !selectedVariant) {
return;
}

        const filePath = selectedVariant?.file_path ?? selectedMedia.file_path;
        onSelect({
            media_id: selectedMedia.id,
            variant: {
                width: selectedVariant?.width ?? 0,
                height: selectedVariant?.height ?? 0,
                file_path: filePath,
                url: `/storage/${filePath}`,
            },
        });
        onClose();
    };

    const canConfirm = selectedMedia !== null && (selectedVariant !== null || selectedMedia.variants.length === 0);

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex h-[85vh] max-h-205 max-w-6xl flex-col gap-0 overflow-hidden p-0">
                {/* Header */}
                <DialogHeader className="flex-none border-b px-5 py-4">
                    <DialogTitle className="flex items-center gap-2 text-base">
                        <Images className="size-4 text-muted-foreground" />
                        Select Media
                    </DialogTitle>
                </DialogHeader>

                {/* Body */}
                <div className="flex min-h-0 flex-1">
                    {/* Grid panel */}
                    <div className="flex flex-1 flex-col min-w-0">
                        {/* Search + module filter bar */}
                        <div className="flex-none border-b px-4 py-3 space-y-2.5">
                            <form onSubmit={handleSearch} className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        placeholder="Search media…"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="pl-8 h-8 text-sm"
                                    />
                                </div>
                                <Button type="submit" size="sm" variant="outline" className="h-8">
                                    Search
                                </Button>
                            </form>

                            {modules.length > 0 && (
                                <div className="flex flex-wrap gap-1.5">
                                    <button
                                        type="button"
                                        onClick={() => handleModuleChange(null)}
                                        className={cn(
                                            'rounded-full border px-3 py-0.5 text-xs font-medium transition-colors',
                                            module === null
                                                ? 'border-primary bg-primary text-primary-foreground'
                                                : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                        )}
                                    >
                                        All
                                    </button>
                                    {modules.map((mod) => (
                                        <button
                                            key={mod}
                                            type="button"
                                            onClick={() => handleModuleChange(mod)}
                                            className={cn(
                                                'rounded-full border px-3 py-0.5 text-xs font-medium capitalize transition-colors',
                                                module === mod
                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                    : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
                                            )}
                                        >
                                            {mod}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Grid */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {loading ? (
                                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="aspect-square animate-pulse rounded-xl bg-muted" />
                                    ))}
                                </div>
                            ) : media?.data.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                                    <Images className="size-12 opacity-30" />
                                    <p className="text-sm">No media found</p>
                                    {(search || module) && (
                                        <Button type="button" variant="ghost" size="sm" onClick={() => {
 setSearch(''); handleModuleChange(null); 
}}>
                                            Clear filters
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                                    {media?.data.map((m) => {
                                        const isMultiSelected = multiSelect && multiSelectedIds.has(m.id);
                                        const isSingleSelected = !multiSelect && selectedMedia?.id === m.id;

                                        return (
                                            <div
                                                key={m.id}
                                                onClick={() => handleSelect(m)}
                                                className={cn(
                                                    'group relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 bg-muted transition-all',
                                                    (isSingleSelected || isMultiSelected)
                                                        ? 'border-primary ring-2 ring-primary/30'
                                                        : 'border-transparent hover:border-primary/40',
                                                )}
                                            >
                                                <img
                                                    src={`/storage/${(m.variants[0] ?? m).file_path}`}
                                                    alt={m.file_name}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                                {(isSingleSelected || isMultiSelected) && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                                                        <CheckCircle2 className="size-7 text-primary drop-shadow" />
                                                    </div>
                                                )}
                                                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/60 to-transparent p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                                                    <p className="truncate text-[10px] text-white">{m.file_name}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {media && media.last_page > 1 && (
                            <div className="flex-none flex items-center justify-between border-t px-4 py-2.5">
                                <span className="text-xs text-muted-foreground">
                                    Page {page} of {media.last_page} &middot; {media.total} files
                                </span>
                                <div className="flex items-center gap-1">
                                    <Button
                                        type="button" size="icon" variant="outline"
                                        className="size-7"
                                        disabled={page === 1}
                                        onClick={() => {
 const p = page - 1; setPage(p); fetchMedia(search, p, module); 
}}
                                    >
                                        <ChevronLeft className="size-3.5" />
                                    </Button>
                                    <Button
                                        type="button" size="icon" variant="outline"
                                        className="size-7"
                                        disabled={page === media.last_page}
                                        onClick={() => {
 const p = page + 1; setPage(p); fetchMedia(search, p, module); 
}}
                                    >
                                        <ChevronRight className="size-3.5" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Detail side-panel (single-select only) */}
                    {!multiSelect && (
                    <div className={cn(
                        'flex-none w-56 border-l bg-muted/30 flex flex-col transition-all duration-200',
                        selectedMedia ? 'translate-x-0 opacity-100' : 'hidden',
                    )}>
                        <div className="flex items-center justify-between border-b px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Selected</p>
                            <button
                                type="button"
                                onClick={() => {
 setSelectedMedia(null); setSelectedVariant(null); 
}}
                                className="rounded p-0.5 text-muted-foreground hover:text-foreground"
                            >
                                <X className="size-3.5" />
                            </button>
                        </div>

                        {selectedMedia && (
                            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
                                <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
                                    <img
                                        src={`/storage/${selectedMedia.file_path}`}
                                        alt={selectedMedia.file_name}
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="break-all text-xs font-medium">{selectedMedia.file_name}</p>
                                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                                        {(selectedMedia.file_size / 1024).toFixed(0)} KB
                                    </p>
                                </div>

                                {selectedMedia.variants.length > 0 && (
                                    <div>
                                        <p className="mb-2 text-xs font-semibold">Size / Variant</p>
                                        <div className="flex flex-col gap-1">
                                            {selectedMedia.variants.map((v) => (
                                                <button
                                                    key={v.id}
                                                    type="button"
                                                    onClick={() => setSelectedVariant(v)}
                                                    className={cn(
                                                        'flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-xs transition-colors',
                                                        selectedVariant?.id === v.id
                                                            ? 'border-primary bg-primary/10 text-primary font-medium'
                                                            : 'border-transparent bg-background hover:border-border',
                                                    )}
                                                >
                                                    <span>{v.width}×{v.height}</span>
                                                    {selectedVariant?.id === v.id && (
                                                        <CheckCircle2 className="size-3.5 text-primary" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Confirm button */}
                        <div className="flex-none border-t p-4">
                            <Button
                                type="button"
                                className="w-full"
                                size="sm"
                                disabled={!canConfirm}
                                onClick={handleConfirm}
                            >
                                <CheckCircle2 className="mr-1.5 size-3.5" />
                                Use this image
                            </Button>
                        </div>
                    </div>
                    )}
                </div>

                {/* Multi-select confirm bar */}
                {multiSelect && (
                    <div className="flex-none border-t px-4 py-3 flex items-center justify-between bg-background">
                        <p className="text-sm text-muted-foreground">
                            {multiSelectedIds.size === 0
                                ? 'Click images to select them'
                                : `${multiSelectedIds.size} image${multiSelectedIds.size === 1 ? '' : 's'} selected`}
                        </p>
                        <Button
                            type="button"
                            size="sm"
                            disabled={multiSelectedIds.size === 0}
                            onClick={handleMultiConfirm}
                        >
                            <CheckCircle2 className="mr-1.5 size-3.5" />
                            Add {multiSelectedIds.size > 0 ? multiSelectedIds.size : ''} Image{multiSelectedIds.size === 1 ? '' : 's'}
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

