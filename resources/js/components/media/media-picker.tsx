import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaCard } from '@/components/media/media-card';
import type { Media, MediaVariant, PaginatedData, SelectedMedia } from '@/types';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

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
            const res = await fetch(`/dashboard/media?${params}`);
            const data = await res.json();
            setMedia(data.media ?? data);
        } catch {
            // silent
        } finally {
            setLoading(false);
        }
    };

    const handleOpen = (isOpen: boolean) => {
        if (isOpen && !media) {
            fetchMedia('', 1);
        }
        if (!isOpen) {
            onClose();
        }
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

    return (
        <Dialog open={open} onOpenChange={handleOpen}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Select Media</DialogTitle>
                </DialogHeader>

                <div className="flex gap-4">
                    <div className="flex-1 space-y-3">
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <Input
                                placeholder="Search media..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" size="sm">
                                <Search className="size-4" />
                            </Button>
                        </form>

                        {loading ? (
                            <div className="grid grid-cols-4 gap-3">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="aspect-square animate-pulse rounded-xl bg-muted" />
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-4 gap-3 max-h-80 overflow-y-auto pr-1">
                                    {media?.data.map((m) => (
                                        <MediaCard
                                            key={m.id}
                                            media={m}
                                            selectable
                                            selected={selectedMedia?.id === m.id}
                                            onSelect={handleSelect}
                                        />
                                    ))}
                                </div>

                                {media && media.last_page > 1 && (
                                    <div className="flex items-center justify-center gap-2">
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            disabled={page === 1}
                                            onClick={() => { setPage(p => p - 1); fetchMedia(search, page - 1); }}
                                        >
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <span className="text-sm">{page} / {media.last_page}</span>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            disabled={page === media.last_page}
                                            onClick={() => { setPage(p => p + 1); fetchMedia(search, page + 1); }}
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {selectedMedia && (
                        <div className="w-48 space-y-3 border-l pl-4">
                            <p className="text-sm font-medium">Selected</p>
                            <img
                                src={`/storage/${selectedMedia.file_path}`}
                                alt={selectedMedia.file_name}
                                className="w-full rounded-lg object-cover"
                            />
                            <p className="truncate text-xs text-muted-foreground">{selectedMedia.file_name}</p>

                            {selectedMedia.variants.length > 0 && (
                                <div>
                                    <p className="mb-1 text-xs font-medium">Select variant</p>
                                    <div className="flex flex-wrap gap-1">
                                        {selectedMedia.variants.map((v) => (
                                            <Badge
                                                key={v.id}
                                                variant={selectedVariant?.id === v.id ? 'default' : 'outline'}
                                                className="cursor-pointer text-[10px]"
                                                onClick={() => setSelectedVariant(v)}
                                            >
                                                {v.width}×{v.height}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Button onClick={handleConfirm} className="w-full" size="sm" disabled={!selectedVariant && selectedMedia.variants.length > 0}>
                                Confirm selection
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
