import { Head, Link, Form } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionRenderer } from '@/components/blog/section-renderer';
import type { Comment, Post } from '@/types';
import * as BlogController from '@/actions/App/Http/Controllers/Blog/PublicBlogController';
import { ArrowLeft } from 'lucide-react';

type Props = {
    post: Post;
    relatedPosts: Post[];
};

export default function BlogShow({ post, relatedPosts }: Props) {
    return (
        <>
            <Head title={post.meta_title ?? post.title}>
                {post.meta_description && <meta name="description" content={post.meta_description} />}
            </Head>

            <div className="min-h-screen bg-background">
                <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
                    <Link
                        href={BlogController.index.url()}
                        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="size-4" /> Back to blog
                    </Link>

                    <article>
                        <header className="mb-8">
                            <div className="mb-3 flex flex-wrap gap-1.5">
                                {post.categories?.map((cat) => (
                                    <Badge key={cat.id} variant="secondary">{cat.name}</Badge>
                                ))}
                                {post.is_featured && <Badge>Featured</Badge>}
                                {post.is_trending && <Badge variant="outline">Trending</Badge>}
                            </div>

                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>

                            {post.excerpt && (
                                <p className="mt-3 text-lg text-muted-foreground">{post.excerpt}</p>
                            )}

                            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                {post.author && <span>By <strong className="text-foreground">{post.author.name}</strong></span>}
                                {post.published_at && (
                                    <time dateTime={post.published_at}>
                                        {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </time>
                                )}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {post.tags.map((tag) => (
                                            <Badge key={tag.id} variant="outline" className="text-[10px]">#{tag.name}</Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </header>

                        <div className="border-t pt-8">
                            {post.sections && <SectionRenderer sections={post.sections} />}
                        </div>
                    </article>

                    {/* Comments */}
                    <section className="mt-16 border-t pt-10">
                        <h2 className="mb-6 text-xl font-bold">
                            Comments ({post.comments?.length ?? 0})
                        </h2>

                        {post.comments && post.comments.length > 0 && (
                            <div className="mb-8 space-y-4">
                                {post.comments.map((comment: Comment) => (
                                    <div key={comment.id} className="rounded-xl border bg-card p-4">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="font-medium">{comment.author_name}</span>
                                            <time className="text-xs text-muted-foreground">
                                                {new Date(comment.created_at).toLocaleDateString()}
                                            </time>
                                        </div>
                                        <p className="text-sm">{comment.body}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="rounded-xl border bg-card p-6">
                            <h3 className="mb-4 font-semibold">Leave a comment</h3>
                            <Form action={BlogController.storeComment.url({ post: post.id })} method="post" className="space-y-4">
                                {({ errors, processing, wasSuccessful }) => (
                                    <>
                                        {wasSuccessful && (
                                            <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
                                                Your comment has been submitted for review.
                                            </div>
                                        )}
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium">Name</label>
                                                <Input name="author_name" placeholder="Your name" className={errors.author_name ? 'border-destructive' : ''} />
                                                {errors.author_name && <p className="text-xs text-destructive">{errors.author_name}</p>}
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium">Email</label>
                                                <Input name="author_email" type="email" placeholder="your@email.com" className={errors.author_email ? 'border-destructive' : ''} />
                                                {errors.author_email && <p className="text-xs text-destructive">{errors.author_email}</p>}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium">Comment</label>
                                            <textarea
                                                name="body"
                                                placeholder="Write your comment..."
                                                className={`min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y ${errors.body ? 'border-destructive' : ''}`}
                                            />
                                            {errors.body && <p className="text-xs text-destructive">{errors.body}</p>}
                                        </div>
                                        <Button type="submit" disabled={processing}>
                                            {processing ? 'Submitting...' : 'Submit comment'}
                                        </Button>
                                    </>
                                )}
                            </Form>
                        </div>
                    </section>

                    {relatedPosts.length > 0 && (
                        <section className="mt-16 border-t pt-10">
                            <h2 className="mb-6 text-xl font-bold">Related Posts</h2>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {relatedPosts.map((related) => (
                                    <div key={related.id} className="rounded-xl border bg-card p-4">
                                        <h3 className="font-medium text-sm leading-snug">
                                            <Link href={BlogController.show.url({ slug: related.slug })} className="hover:text-primary transition-colors">
                                                {related.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {related.published_at ? new Date(related.published_at).toLocaleDateString() : ''}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
}
