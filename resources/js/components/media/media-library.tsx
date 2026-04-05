import { useCallback, useState } from 'react';
import { router } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MediaCard } from '@/components/media/media-card';
import { MediaUploader } from '@/components/media/media-uploader';
import type { Media, MediaDimension, PaginatedData } from '@/types';
import { Search, Upload, LayoutGrid } from 'lucide-react';
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';

type MediaLibraryProps = {
    media: PaginatedData<Media>;
    dimensions: MediaDimension[];
    filters: Record<string, string>;
};

export function MediaLibrary({ media, dimensions, filters }: MediaLibraryProps) {
    const [showUploader, setShowUploader] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [search, setSearch] = useState(filters.search ?? '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(MediaController.index.url(), { search: search || undefined }, { preserveState: true, replace: true });
    };

    const handleUpload = useCallback(async (
        file: File,
        dimensionIds: number[],
        customDimensions: Array<{ width: number; height: number }>,
        onProgress: (pct: number) => void,
    ) => {
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            dimensionIds.forEach((id) => formData.append('dimension_ids[]', String(id)));
            customDimensions.forEach((d, i) => {
                formData.append(`custom_dimensions[${i}][width]`, String(d.width));
                formData.append(`custom_dimensions[${i}][height]`, String(d.height));
            });

            const xsrfToken = decodeURIComponent(
                document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '',
            );

            await new Promise<void>((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', MediaController.store.url());
                xhr.setRequestHeader('X-XSRF-TOKEN', xsrfToken);
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.upload.onprogress = (e) => {
                    if (e.lengthComputable) {
                        onProgress(Math.round((e.loaded / e.total) * 100));
                    }
                };
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve();
                    } else {
                        reject(new Error(`Upload failed: ${xhr.status}`));
                    }
                };
                xhr.onerror = () => reject(new Error('Network error'));
                xhr.send(formData);
            });

            setShowUploader(false);
            router.reload({ only: ['media'] });
        } finally {
            setUploading(false);
        }
    }, []);

    const handleDelete = useCallback((id: number) => {
        if (!confirm('Delete this media file?')) return;
        router.delete(MediaController.destroy.url({ id }), { preserveScroll: true });
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <form onSubmit={handleSearch} className="flex flex-1 gap-2">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search media..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <Button type="submit" variant="outline" size="sm">Search</Button>
                </form>
                <Button onClick={() => setShowUploader(true)}>
                    <Upload className="mr-2 size-4" /> Upload
                </Button>
            </div>

            {media.data.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border py-20 text-center">
                    <LayoutGrid className="mb-3 size-12 text-muted-foreground" />
                    <p className="font-medium">No media found</p>
                    <p className="text-sm text-muted-foreground">Upload your first image to get started</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {media.data.map((m) => (
                        <MediaCard key={m.id} media={m} onDelete={handleDelete} />
                    ))}
                </div>
            )}

            {media.last_page > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                    {media.links.map((link, i) => (
                        <Button
                            key={i}
                            size="sm"
                            variant={link.active ? 'default' : 'outline'}
                            disabled={!link.url}
                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}

            <Dialog open={showUploader} onOpenChange={setShowUploader}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Upload Media</DialogTitle>
                    </DialogHeader>
                    <MediaUploader dimensions={dimensions} onUpload={handleUpload} uploading={uploading} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
