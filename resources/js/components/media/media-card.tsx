import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Media } from '@/types';
import { Trash2, Eye, Pencil } from 'lucide-react';

type MediaCardProps = {
    media: Media;
    onDelete?: (id: number) => void;
    onEdit?: (media: Media) => void;
    onSelect?: (media: Media) => void;
    selectable?: boolean;
    selected?: boolean;
};

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
}

function getTypeLabel(fileType: string): string {
    if (fileType.includes('jpeg') || fileType.includes('jpg')) return 'JPEG';
    if (fileType.includes('png')) return 'PNG';
    if (fileType.includes('gif')) return 'GIF';
    if (fileType.includes('webp')) return 'WEBP';
    return fileType.split('/')[1]?.toUpperCase() ?? 'FILE';
}

export function MediaCard({ media, onDelete, onEdit, onSelect, selectable = false, selected = false }: MediaCardProps) {
    const [showVariants, setShowVariants] = useState(false);

    const previewVariant = media.variants[0];
    const previewUrl = previewVariant
        ? `/storage/${previewVariant.file_path}`
        : `/storage/${media.file_path}`;

    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-xl border bg-card transition-all',
                selectable && 'cursor-pointer hover:border-primary',
                selected && 'border-primary ring-2 ring-primary ring-offset-2',
            )}
            onClick={() => selectable && onSelect?.(media)}
        >
            <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                    src={previewUrl}
                    alt={media.file_name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                {selected && (
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">✓</div>
                    </div>
                )}
                {!selectable && (
                    <div className="absolute inset-0 flex items-end gap-1 bg-linear-to-t from-black/60 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <Button
                            size="sm"
                            variant="secondary"
                            className="h-7 text-xs"
                            onClick={(e) => { e.stopPropagation(); setShowVariants(!showVariants); }}
                        >
                            <Eye className="mr-1 size-3" /> {media.variants.length} variants
                        </Button>
                        {onEdit && (
                            <Button
                                size="sm"
                                variant="secondary"
                                className="h-7 text-xs"
                                onClick={(e) => { e.stopPropagation(); onEdit(media); }}
                            >
                                <Pencil className="size-3" />
                            </Button>
                        )}
                        {onDelete && (
                            <Button
                                size="sm"
                                variant="destructive"
                                className="h-7 text-xs"
                                onClick={(e) => { e.stopPropagation(); onDelete(media.id); }}
                            >
                                <Trash2 className="size-3" />
                            </Button>
                        )}
                    </div>
                )}
            </div>

            <div className="p-2">
                <p className="truncate text-xs font-medium text-foreground" title={media.file_name}>
                    {media.file_name}
                </p>
                <div className="mt-1 flex items-center gap-1">
                    <Badge variant="secondary" className="text-[10px] px-1 py-0">
                        {getTypeLabel(media.file_type)}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">{formatBytes(media.file_size)}</span>
                </div>
            </div>

            {showVariants && media.variants.length > 0 && (
                <div className="border-t p-2">
                    <p className="mb-1 text-[10px] font-medium text-muted-foreground">Variants</p>
                    <div className="flex flex-wrap gap-1">
                        {media.variants.map((v) => (
                            <Badge key={v.id} variant="outline" className="text-[10px]">
                                {v.width}×{v.height}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
