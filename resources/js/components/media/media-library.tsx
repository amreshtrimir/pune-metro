import { router } from '@inertiajs/react';
import { Search, Upload, LayoutGrid, Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';
import { MediaCard } from '@/components/media/media-card';
import { MediaUploader } from '@/components/media/media-uploader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Media, MediaDimension, PaginatedData } from '@/types';

const MODULES = [
    { value: '', label: 'All' },
    { value: 'general', label: 'General' },
    { value: 'blog', label: 'Blog' },
    { value: 'pages', label: 'Pages' },
    { value: 'banners', label: 'Banners' },
    { value: 'gallery', label: 'Gallery' },
    { value: 'project-update', label: 'Project Update' },
    { value: 'board', label: 'Board' },
];

type MediaUsage = {
    items: Array<{ label: string; count: number }>;
    total: number;
};

type MediaLibraryProps = {
    media: PaginatedData<Media>;
    dimensions: MediaDimension[];
    filters: Record<string, string>;
};

export function MediaLibrary({ media, dimensions, filters }: MediaLibraryProps) {
    const [showUploader, setShowUploader] = useState(false);
    const [search, setSearch] = useState(filters.search ?? '');
    const [moduleFilter, setModuleFilter] = useState(filters.module ?? '');
    const [editingMedia, setEditingMedia] = useState<Media | null>(null);
    const [editFileName, setEditFileName] = useState('');
    const [editModule, setEditModule] = useState('');
    const [saving, setSaving] = useState(false);
    const [usages, setUsages] = useState<MediaUsage | null>(null);
    const [loadingUsages, setLoadingUsages] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(MediaController.index.url(), { search: search || undefined, module: moduleFilter || undefined }, { preserveState: true, replace: true });
    };

    const handleModuleFilter = (mod: string) => {
        setModuleFilter(mod);
        router.get(MediaController.index.url(), { search: search || undefined, module: mod || undefined }, { preserveState: true, replace: true });
    };

    const handleUploadComplete = useCallback(() => {
        setShowUploader(false);
        router.reload({ only: ['media'] });
    }, []);

    const handleDelete = useCallback((id: number) => {
        if (!confirm('Delete this media file?')) {
return;
}

        router.delete(MediaController.destroy.url({ id }), { preserveScroll: true });
    }, []);

    const openEdit = useCallback(async (m: Media) => {
        setEditingMedia(m);
        setEditFileName(m.file_name);
        setEditModule(m.module ?? '');
        setUsages(null);
        setLoadingUsages(true);

        try {
            const res = await fetch(MediaController.usages.url({ id: m.id }), {
                headers: { 'Accept': 'application/json' },
            });

            if (res.ok) {
                setUsages(await res.json());
            }
        } finally {
            setLoadingUsages(false);
        }
    }, []);

    const handleSaveEdit = async () => {
        if (!editingMedia) {
return;
}

        setSaving(true);

        try {
            const xsrfToken = decodeURIComponent(
                document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '',
            );
            const res = await fetch(MediaController.update.url({ id: editingMedia.id }), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': xsrfToken,
                },
                body: JSON.stringify({ file_name: editFileName, module: editModule || null }),
            });

            if (!res.ok) {
throw new Error('Save failed');
}

            setEditingMedia(null);
            router.reload({ only: ['media'] });
        } finally {
            setSaving(false);
        }
    };

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

            <div className="flex flex-wrap gap-2">
                {MODULES.map((m) => (
                    <Badge
                        key={m.value}
                        variant={moduleFilter === m.value ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => handleModuleFilter(m.value)}
                    >
                        {m.label}
                    </Badge>
                ))}
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
                        <MediaCard key={m.id} media={m} onDelete={handleDelete} onEdit={openEdit} />
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
                    <MediaUploader dimensions={dimensions} onComplete={handleUploadComplete} />
                </DialogContent>
            </Dialog>

            <Dialog open={!!editingMedia} onOpenChange={(open) => !open && setEditingMedia(null)}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit Media</DialogTitle>
                    </DialogHeader>

                    {editingMedia && (
                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-lg border">
                                <img
                                    src={`/storage/${editingMedia.variants[0]?.file_path ?? editingMedia.file_path}`}
                                    alt={editingMedia.file_name}
                                    className="max-h-40 w-full object-cover"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="edit-file-name">File name</Label>
                                <Input
                                    id="edit-file-name"
                                    value={editFileName}
                                    onChange={(e) => setEditFileName(e.target.value)}
                                    placeholder="File name"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label>Module</Label>
                                <div className="flex flex-wrap gap-2">
                                    {MODULES.map((m) => (
                                        <Badge
                                            key={m.value}
                                            variant={editModule === m.value ? 'default' : 'outline'}
                                            className="cursor-pointer"
                                            onClick={() => setEditModule(m.value)}
                                        >
                                            {m.label}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-lg border p-3 space-y-2">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Used in</p>
                                {loadingUsages ? (
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Loader2 className="size-3 animate-spin" /> Checking usages…
                                    </div>
                                ) : usages ? (
                                    <>
                                        {usages.total === 0 ? (
                                            <p className="text-xs text-muted-foreground">Not used anywhere</p>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-sm font-semibold">{usages.total}</span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {usages.total === 1 ? 'place' : 'places'} — changes will apply everywhere
                                                    </span>
                                                </div>
                                                <div className="space-y-1">
                                                    {usages.items.filter((item) => item.count > 0).map((item) => (
                                                        <div key={item.label} className="flex items-center justify-between text-xs">
                                                            <span className="text-muted-foreground">{item.label}</span>
                                                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                                                {item.count}
                                                            </Badge>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : null}
                            </div>
                        </div>
                    )}

                    <DialogFooter>
                        <Button variant="outline" onClick={() => setEditingMedia(null)} disabled={saving}>
                            Cancel
                        </Button>
                        <Button onClick={handleSaveEdit} disabled={saving || !editFileName.trim()}>
                            {saving ? 'Saving…' : 'Save'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
