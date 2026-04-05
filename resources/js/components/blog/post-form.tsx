import { useState } from 'react';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SectionBuilder } from '@/components/blog/section-builder';
import type { Category, Post, PostSection } from '@/types';
import { X, Plus, Loader2, Check } from 'lucide-react';
import * as CategoryController from '@/actions/App/Http/Controllers/Blog/CategoryController';

type PostFormProps = {
    post?: Post;
    categories: Category[];
    action: string;
    method?: 'post' | 'put';
};

export function PostForm({ post, categories, action, method = 'post' }: PostFormProps) {
    const [sections, setSections] = useState<PostSection[]>(post?.sections ?? []);
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<string[]>(post?.tags?.map((t) => t.name) ?? []);
    const [localCategories, setLocalCategories] = useState<Category[]>(categories);
    const [selectedCategories, setSelectedCategories] = useState<number[]>(post?.categories?.map((c) => c.id) ?? []);
    const [newCatInput, setNewCatInput] = useState('');
    const [creatingCat, setCreatingCat] = useState(false);
    const [showCatInput, setShowCatInput] = useState(false);

    const addTag = () => {
        const trimmed = tagInput.trim();
        if (trimmed && !tags.includes(trimmed)) {
            setTags((prev) => [...prev, trimmed]);
        }
        setTagInput('');
    };

    const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

    const toggleCategory = (id: number) => {
        setSelectedCategories((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
    };

    const handleCreateCategory = async () => {
        const name = newCatInput.trim();
        if (!name || creatingCat) return;

        setCreatingCat(true);
        try {
            const xsrfToken = decodeURIComponent(
                document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '',
            );
            const response = await fetch(CategoryController.store.url(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': xsrfToken,
                },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                const created = await response.json() as Category;
                setLocalCategories((prev) => [...prev, created]);
                setSelectedCategories((prev) => [...prev, created.id]);
                setNewCatInput('');
                setShowCatInput(false);
            }
        } finally {
            setCreatingCat(false);
        }
    };

    return (
        <Form action={action} method={method} className="flex flex-col gap-6 lg:flex-row">
            {({ errors, processing }) => (
                <>
                    {/* Left col */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <Input
                                name="title"
                                defaultValue={post?.title}
                                placeholder="Post title"
                                className={errors.title ? 'border-destructive' : ''}
                            />
                            {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Excerpt</label>
                            <textarea
                                name="excerpt"
                                defaultValue={post?.excerpt ?? ''}
                                placeholder="Short description..."
                                className="min-h-20 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium">Content sections</label>
                            <SectionBuilder sections={sections} onChange={setSections} />
                        </div>

                        {/* Hidden inputs for sections */}
                        {sections.map((section, i) => (
                            <span key={i}>
                                <input type="hidden" name={`sections[${i}][type]`} value={section.type} />
                                <input type="hidden" name={`sections[${i}][position]`} value={section.position} />
                                <input type="hidden" name={`sections[${i}][content]`} value={JSON.stringify(section.content)} />
                            </span>
                        ))}

                        {/* SEO section */}
                        <div className="rounded-xl border p-4 space-y-3">
                            <h3 className="text-sm font-semibold">SEO</h3>
                            <div className="space-y-2">
                                <label className="text-xs text-muted-foreground">Meta title</label>
                                <Input name="meta_title" defaultValue={post?.meta_title ?? ''} placeholder="Meta title" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-muted-foreground">Meta description</label>
                                <textarea
                                    name="meta_description"
                                    defaultValue={post?.meta_description ?? ''}
                                    placeholder="Meta description"
                                    className="min-h-16 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-muted-foreground">Custom slug</label>
                                <Input name="slug" defaultValue={post?.slug} placeholder="auto-generated-from-title" />
                                {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="w-full space-y-4 lg:w-72 lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start">
                        <div className="rounded-xl border p-4 space-y-4">
                            <h3 className="text-sm font-semibold">Publishing</h3>

                            <div className="space-y-2">
                                <label className="text-xs text-muted-foreground">Status</label>
                                <select
                                    name="status"
                                    defaultValue={post?.status ?? 'draft'}
                                    className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="scheduled">Scheduled</option>
                                </select>
                                {errors.status && <p className="text-xs text-destructive">{errors.status}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-muted-foreground">Publish date</label>
                                <Input
                                    type="datetime-local"
                                    name="published_at"
                                    defaultValue={post?.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : ''}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="checkbox" name="is_featured" value="1" defaultChecked={post?.is_featured} className="rounded" />
                                    Featured
                                </label>
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="checkbox" name="is_trending" value="1" defaultChecked={post?.is_trending} className="rounded" />
                                    Trending
                                </label>
                            </div>
                        </div>

                        <div className="rounded-xl border p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold">Categories</h3>
                                <button
                                    type="button"
                                    onClick={() => setShowCatInput((v) => !v)}
                                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                                >
                                    <Plus className="size-3" />
                                    New
                                </button>
                            </div>

                            {showCatInput && (
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Category name"
                                        value={newCatInput}
                                        onChange={(e) => setNewCatInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') { e.preventDefault(); void handleCreateCategory(); }
                                            if (e.key === 'Escape') { setShowCatInput(false); setNewCatInput(''); }
                                        }}
                                        className="flex-1 h-8 text-xs"
                                        autoFocus
                                    />
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        className="h-8 px-2"
                                        onClick={() => void handleCreateCategory()}
                                        disabled={creatingCat || !newCatInput.trim()}
                                    >
                                        {creatingCat ? <Loader2 className="size-3 animate-spin" /> : <Check className="size-3" />}
                                    </Button>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {localCategories.length === 0 && !showCatInput && (
                                    <p className="text-xs text-muted-foreground">No categories yet. Click "New" to add one.</p>
                                )}
                                {localCategories.map((cat) => (
                                    <Badge
                                        key={cat.id}
                                        variant={selectedCategories.includes(cat.id) ? 'default' : 'outline'}
                                        className="cursor-pointer"
                                        onClick={() => toggleCategory(cat.id)}
                                    >
                                        {cat.name}
                                    </Badge>
                                ))}
                            </div>
                            {selectedCategories.map((id) => (
                                <input key={id} type="hidden" name="category_ids[]" value={id} />
                            ))}
                        </div>

                        <div className="rounded-xl border p-4 space-y-3">
                            <h3 className="text-sm font-semibold">Tags</h3>
                            <div className="flex flex-wrap gap-1.5 min-h-8">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        {tag}
                                        <button type="button" onClick={() => removeTag(tag)}>
                                            <X className="size-2.5" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Add tag..."
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
                                    className="flex-1 h-8 text-xs"
                                />
                                <Button type="button" size="sm" variant="outline" className="h-8 text-xs" onClick={addTag}>
                                    Add
                                </Button>
                            </div>
                            {tags.map((tag) => (
                                <input key={tag} type="hidden" name="tags[]" value={tag} />
                            ))}
                        </div>

                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
                        </Button>
                    </div>
                </>
            )}
        </Form>
    );
}
