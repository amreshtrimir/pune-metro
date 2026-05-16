import { useState } from 'react';
import { Head, Form, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { GalleryAlbum } from '@/types/cms';
import * as GalleryAlbumController from '@/actions/App/Http/Controllers/Gallery/GalleryAlbumController';
import { Images, Pencil, Trash2 } from 'lucide-react';

type Props = {
    albums: (GalleryAlbum & { images_count: number })[];
};

export default function GalleryIndex({ albums }: Props) {
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (album: GalleryAlbum) => {
        if (!confirm(`Delete album "${album.title}"? All images in this album will be removed.`)) return;
        setDeletingId(album.id);
        router.delete(GalleryAlbumController.destroy.url(album.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <>
            <Head title="Gallery Albums" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Gallery Albums</h1>
                    <p className="text-sm text-muted-foreground">Manage photo gallery albums for the frontend.</p>
                </div>

                {/* Create album form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Create new album</h2>
                    <Form {...GalleryAlbumController.store.form()} resetOnSuccess className="flex flex-col gap-3">
                        {({ errors, processing }) => (
                            <>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="space-y-1">
                                        <Input
                                            name="title"
                                            placeholder="Album title (e.g. Construction Progress)"
                                            className={errors.title ? 'border-destructive' : ''}
                                        />
                                        {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            name="slug"
                                            placeholder="Slug — optional (e.g. project-update)"
                                            className={errors.slug ? 'border-destructive' : ''}
                                        />
                                        {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button type="submit" disabled={processing} className="shrink-0">
                                        {processing ? 'Creating...' : 'Create Album'}
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                {/* Albums table */}
                <div className="rounded-xl border overflow-hidden">
                    {albums.length === 0 ? (
                        <div className="p-12 text-center space-y-2">
                            <Images className="mx-auto size-8 text-muted-foreground/40" />
                            <p className="text-sm text-muted-foreground">No albums yet. Create one above.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Title</th>
                                    <th className="px-4 py-3 text-left font-medium hidden lg:table-cell">Slug</th>
                                    <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Description</th>
                                    <th className="px-4 py-3 text-left font-medium">Images</th>
                                    <th className="px-4 py-3 text-left font-medium">Order</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {albums.map((album) => (
                                    <tr key={album.id} className="hover:bg-muted/20">
                                        <td className="px-4 py-3 font-medium">{album.title}</td>
                                        <td className="px-4 py-3 hidden lg:table-cell">
                                            {album.slug ? (
                                                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">{album.slug}</code>
                                            ) : (
                                                <span className="italic text-xs text-muted-foreground/50">—</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell max-w-xs truncate">
                                            {album.description ?? <span className="italic opacity-50">No description</span>}
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">{album.images_count}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{album.sort_order}</td>
                                        <td className="px-4 py-3">
                                            {album.is_active ? (
                                                <Badge variant="default">Active</Badge>
                                            ) : (
                                                <Badge variant="secondary">Inactive</Badge>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button size="icon" variant="ghost" asChild>
                                                    <Link href={GalleryAlbumController.edit.url(album.id)}>
                                                        <Pencil className="size-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="text-destructive hover:text-destructive"
                                                    disabled={deletingId === album.id}
                                                    onClick={() => handleDelete(album)}
                                                >
                                                    <Trash2 className="size-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
