import { Head, Link, router } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { PaginatedData, Post } from '@/types';
import * as BlogController from '@/actions/App/Http/Controllers/Blog/PublicBlogController';

type Props = {
    posts: PaginatedData<Post>;
    featuredPosts: Post[];
    trendingPosts: Post[];
};

function PostCard({ post }: { post: Post }) {
    return (
        <article className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
            <div className="aspect-video overflow-hidden bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm bg-gradient-to-br from-muted to-muted/50">
                    Post
                </div>
            </div>
            <div className="p-4">
                <div className="mb-2 flex flex-wrap gap-1">
                    {post.categories?.map((cat) => (
                        <Badge key={cat.id} variant="secondary" className="text-[10px]">{cat.name}</Badge>
                    ))}
                    {post.is_featured && <Badge variant="default" className="text-[10px]">Featured</Badge>}
                    {post.is_trending && <Badge variant="outline" className="text-[10px]">Trending</Badge>}
                </div>
                <h2 className="mb-1 font-semibold leading-snug group-hover:text-primary transition-colors">
                    <Link href={BlogController.show.url({ slug: post.slug })}>
                        {post.title}
                    </Link>
                </h2>
                {post.excerpt && <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>}
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author?.name}</span>
                    <span>
                        {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function BlogIndex({ posts, featuredPosts, trendingPosts }: Props) {
    return (
        <>
            <Head title="Blog" />

            <div className="min-h-screen bg-background">
                {/* Hero / featured */}
                {featuredPosts.length > 0 && (
                    <section className="border-b bg-muted/30 py-10">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6">
                            <h2 className="mb-6 text-lg font-semibold text-muted-foreground">Featured</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {featuredPosts.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                    <div className="flex gap-10">
                        <main className="flex-1">
                            <h2 className="mb-6 text-xl font-bold">Latest Posts</h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {posts.data.map((post) => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                                {posts.data.length === 0 && (
                                    <p className="col-span-2 text-center py-10 text-muted-foreground">No posts yet.</p>
                                )}
                            </div>

                            {posts.last_page > 1 && (
                                <div className="mt-8 flex items-center justify-center gap-2">
                                    {posts.links.map((link, i) => (
                                        <Button
                                            key={i}
                                            size="sm"
                                            variant={link.active ? 'default' : 'outline'}
                                            disabled={!link.url}
                                            onClick={() => link.url && router.get(link.url)}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            )}
                        </main>

                        {trendingPosts.length > 0 && (
                            <aside className="hidden lg:block w-64 flex-shrink-0">
                                <h3 className="mb-4 font-semibold">Trending</h3>
                                <div className="space-y-3">
                                    {trendingPosts.map((post, i) => (
                                        <div key={post.id} className="flex items-start gap-3">
                                            <span className="mt-0.5 flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                                                {i + 1}
                                            </span>
                                            <Link
                                                href={BlogController.show.url({ slug: post.slug })}
                                                className="text-sm font-medium leading-snug hover:text-primary transition-colors"
                                            >
                                                {post.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </aside>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
