import { Head } from '@inertiajs/react';
import { PostForm } from '@/components/blog/post-form';
import type { Category, Post, Tag } from '@/types';
import * as PostController from '@/actions/App/Http/Controllers/Blog/PostController';

type Props = {
    post: Post;
    categories: Category[];
    allTags: Tag[];
};

export default function PostEdit({ post, categories, allTags }: Props) {
    return (
        <>
            <Head title={`Edit: ${post.title}`} />
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Edit Post</h1>
                    <p className="text-sm text-muted-foreground">{post.title}</p>
                </div>
                <PostForm
                    post={post}
                    categories={categories}
                    allTags={allTags}
                    action={PostController.update.url({ post: post.id })}
                    method="put"
                />
            </div>
        </>
    );
}
