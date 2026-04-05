import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Category, PaginatedData, Post } from '@/types';
import * as PostController from '@/actions/App/Http/Controllers/Blog/PostController';
import { Plus, Search, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Props = {
    posts: PaginatedData<Post>;
    categories: Category[];
    filters: { search?: string; status?: string };
};

const STATUS_COLORS: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    published: 'default',
    draft: 'secondary',
    scheduled: 'outline',
};

export default function PostsIndex({ posts, filters }: Props) {
    const [search, setSearch] = useState(filters.search ?? '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(PostController.index.url(), { search: search || undefined }, { preserveState: true, replace: true });
    };

    const handleDelete = (id: number) => {
        if (!confirm('Delete this post?')) return;
        router.delete(PostController.destroy.url({ post: id }), { preserveScroll: true });
    };

    const handleStatusFilter = (status: string) => {
        router.get(PostController.index.url(), { status: status || undefined, search: search || undefined }, { preserveState: true, replace: true });
    };

    return (
        <>
            <Head title="Posts" />
            <div className="space-y-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Posts</h1>
                        <p className="text-sm text-muted-foreground">{posts.total} total posts</p>
                    </div>
                    <Button asChild>
                        <Link href={PostController.create.url()}>
                            <Plus className="mr-2 size-4" /> New Post
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search posts..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-64 pl-9"
                            />
                        </div>
                        <Button type="submit" variant="outline" size="sm">Search</Button>
                    </form>

                    <div className="flex gap-2">
                        {['', 'draft', 'published', 'scheduled'].map((s) => (
                            <Button
                                key={s}
                                size="sm"
                                variant={filters.status === s || (!filters.status && !s) ? 'default' : 'outline'}
                                onClick={() => handleStatusFilter(s)}
                            >
                                {s ? s.charAt(0).toUpperCase() + s.slice(1) : 'All'}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border">
                    <table className="w-full text-sm">
                        <thead className="border-b bg-muted/50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium">Title</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-left font-medium">Author</th>
                                <th className="px-4 py-3 text-left font-medium">Date</th>
                                <th className="px-4 py-3 text-left font-medium">Views</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {posts.data.map((post) => (
                                <tr key={post.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-4 py-3">
                                        <div>
                                            <p className="font-medium">{post.title}</p>
                                            <p className="text-xs text-muted-foreground">{post.slug}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={STATUS_COLORS[post.status] ?? 'secondary'}>
                                            {post.status}
                                        </Badge>
                                        {post.is_featured && <Badge variant="outline" className="ml-1 text-[10px]">Featured</Badge>}
                                        {post.is_trending && <Badge variant="outline" className="ml-1 text-[10px]">Trending</Badge>}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">{post.author?.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs">
                                        {post.published_at ? new Date(post.published_at).toLocaleDateString() : new Date(post.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-muted-foreground">{post.views_count ?? 0}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Button size="icon" variant="ghost" className="size-8" asChild>
                                                <Link href={PostController.edit.url({ post: post.id })}>
                                                    <Pencil className="size-3.5" />
                                                </Link>
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="size-8 text-destructive hover:text-destructive"
                                                onClick={() => handleDelete(post.id)}
                                            >
                                                <Trash2 className="size-3.5" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {posts.data.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                                        No posts found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {posts.last_page > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        {posts.links.map((link, i) => (
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
            </div>
        </>
    );
}
