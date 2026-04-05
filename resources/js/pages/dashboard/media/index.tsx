import { Head } from '@inertiajs/react';
import { MediaLibrary } from '@/components/media/media-library';
import type { Media, MediaDimension, PaginatedData } from '@/types';

type Props = {
    media: PaginatedData<Media>;
    dimensions: MediaDimension[];
    filters: { search?: string; file_type?: string; module?: string };
};

export default function MediaIndex({ media, dimensions, filters }: Props) {
    return (
        <>
            <Head title="Media Library" />
            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-bold">Media Library</h1>
                    <p className="text-sm text-muted-foreground">Upload and manage your media files</p>
                </div>
                <MediaLibrary media={media} dimensions={dimensions} filters={filters} />
            </div>
        </>
    );
}
