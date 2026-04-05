import { Head } from '@inertiajs/react';
import { PostForm } from '@/components/blog/post-form';
import type { Category } from '@/types';
import * as PostController from '@/actions/App/Http/Controllers/Blog/PostController';

type Props = {
    categories: Category[];
};

export default function PostCreate({ categories }: Props) {
    return (
        <>
            <Head title="Create Post" />
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Create Post</h1>
                    <p className="text-sm text-muted-foreground">Build your content using sections</p>
                </div>
                <PostForm
                    categories={categories}
                    action={PostController.store.url()}
                    method="post"
                />
            </div>
        </>
    );
}
