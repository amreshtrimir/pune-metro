import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaCard } from '@/components/media/media-card';
import { cn } from '@/lib/utils';
import type { Media, MediaVariant, PaginatedData, SelectedMedia } from '@/types';
import { Search, ChevronLeft, ChevronRight, CheckCircle2, Images, X } from 'lucide-react';

type MediaPickerProps = {
    open: boolean;
    onClose: () => void;
    onSelect: (selected: SelectedMedia) => void;
};

export function MediaPicker({ open, onClose, onSelect }: MediaPickerProps) {
    const [media, setMedia] = useState<PaginatedData<Media> | null>(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<MediaVariant | null>(null);

    const fetchMedia = async (searchVal: string, pageVal: number) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({ page: String(pageVal) });
            if (searchVal) params.set('search', searchVal);
            const res = await fetch(`/dashboard/media?${params}`, {
                headers: { Accept: 'application/json' },
            });
            const data = await res.json() as { media: typeof media };
            setMedia(data.media ?? data);
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
            setSearch('');
            setPage(1);
            fetchMedia('', 1);
        }
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClose = (isOpen: boolean) => {
        if (!isOpen) onClose();
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchMedia(search, 1);
    };

    const handleSelect = (m: Media) => {
        setSelectedMedia(m);
        setSelectedVariant(m.variants[0] ?? null);
    };

    const handleConfirm = () => {
        if (!selectedMedia || !selectedVariant) return;
        onSelect({
            media_id: selectedMedia.id,
            variant: {
                width: selectedVariant.width,
                height: selectedVariant.height,
                file_path: selectedVariant.file_path,
                url: `/storage/${selectedVariant.file_path}`,
            },
        });
        onClose();
    };

    const canConfirm = selectedMedia !== null && (selectedVariant !== null || selectedMedia.variants.length === 0);

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex h-[80vh] max-h-[700px] max-w-5xl flex-col gap-0 overflow-hidden p-0">
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
                        {/* Search bar */}
                        <div className="flex-none border-b px-4 py-3">
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
                        </div>

                        {/* Grid */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {loading ? (
                                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <div key={i} className="aspect-square animate-pulse rounded-xl bg-muted" />
                                    ))}
                                </div>
                            ) : media?.data.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-foreground">
                                    <Images className="size-12 opacity-30" />
                                    <p className="text-sm">No media found</p>
                                    {search && (
                                        <Button type="button" variant="ghost" size="sm" onClick={() => { setSearch(''); fetchMedia('', 1); }}>
                                            Clear search
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                                    {media?.data.map((m) => (
                                        <div
                                            key={m.id}
                                            onClick={() => handleSelect(m)}
                                            className={cn(
                                                'group relative aspect-square cursor-pointer overflow-hidden rounded-xl border-2 bg-muted transition-all',
                                                selectedMedia?.id === m.id
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
                                            {selectedMedia?.id === m.id && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                                                    <CheckCircle2 className="size-7 text-primary drop-shadow" />
                                                </div>
                                            )}
                                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                                                <p className="truncate text-[10px] text-white">{m.file_name}</p>
                                            </div>
                                        </div>
                                    ))}
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
                                        onClick={() => { const p = page - 1; setPage(p); fetchMedia(search, p); }}
                                    >
                                        <ChevronLeft className="size-3.5" />
                                    </Button>
                                    <Button
                                        type="button" size="icon" variant="outline"
                                        className="size-7"
                                        disabled={page === media.last_page}
                                        onClick={() => { const p = page + 1; setPage(p); fetchMedia(search, p); }}
                                    >
                                        <ChevronRight className="size-3.5" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Detail side-panel */}
                    <div className={cn(
                        'flex-none w-56 border-l bg-muted/30 flex flex-col transition-all duration-200',
                        selectedMedia ? 'translate-x-0 opacity-100' : 'hidden',
                    )}>
                        <div className="flex items-center justify-between border-b px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Selected</p>
                            <button
                                type="button"
                                onClick={() => { setSelectedMedia(null); setSelectedVariant(null); }}
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
                </div>
            </DialogContent>
        </Dialog>
    );
}

