import { useState } from 'react';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/ui/multi-select';
import { MediaPicker } from '@/components/media/media-picker';
import { SectionBuilder } from '@/components/blog/section-builder';
import type { Category, Post, PostSection, Tag } from '@/types';
import { ImagePlus, X } from 'lucide-react';
import * as CategoryController from '@/actions/App/Http/Controllers/Blog/CategoryController';

type PostFormProps = {
    post?: Post;
    categories: Category[];
    allTags: Tag[];
    action: string;
    method?: 'post' | 'put';
};

export function PostForm({ post, categories, allTags, action, method = 'post' }: PostFormProps) {
    const [sections, setSections] = useState<PostSection[]>(post?.sections ?? []);
    const [tags, setTags] = useState<string[]>(post?.tags?.map((t) => t.name) ?? []);
    const [localCategories, setLocalCategories] = useState<Category[]>(categories);
    const [selectedCategories, setSelectedCategories] = useState<number[]>(post?.categories?.map((c) => c.id) ?? []);

    const [featuredImageId, setFeaturedImageId] = useState<number | null>(post?.featured_image_media_id ?? null);
    const [featuredImagePath, setFeaturedImagePath] = useState<string | null>(
        post?.featured_image?.variants?.[0]?.file_path ?? post?.featured_image?.file_path ?? null,
    );
    const [featuredPickerOpen, setFeaturedPickerOpen] = useState(false);

    const [cardImageId, setCardImageId] = useState<number | null>(post?.card_image_media_id ?? null);
    const [cardImagePath, setCardImagePath] = useState<string | null>(
        post?.card_image?.variants?.[0]?.file_path ?? post?.card_image?.file_path ?? null,
    );
    const [cardPickerOpen, setCardPickerOpen] = useState(false);

    const handleCreateCategory = async (name: string): Promise<string | null> => {
        const xsrfToken = decodeURIComponent(
            document.cookie.split('; ').find((c) => c.startsWith('XSRF-TOKEN='))?.split('=')[1] ?? '',
        );
        const response = await fetch(CategoryController.store.url(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-XSRF-TOKEN': xsrfToken,
            },
            body: JSON.stringify({ name }),
        });

        if (response.ok) {
            const created = (await response.json()) as Category;
            setLocalCategories((prev) => [...prev, created]);
            return String(created.id);
        }

        return null;
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
                            <h3 className="text-sm font-semibold">Categories</h3>
                            <MultiSelect
                                options={localCategories.map((c) => ({ value: String(c.id), label: c.name }))}
                                selected={selectedCategories.map(String)}
                                onChange={(vals) => setSelectedCategories(vals.map(Number))}
                                placeholder="Search categories..."
                                onCreateOption={handleCreateCategory}
                                createLabel="Create category"
                            />
                            {selectedCategories.map((id) => (
                                <input key={id} type="hidden" name="category_ids[]" value={id} />
                            ))}
                        </div>

                        <div className="rounded-xl border p-4 space-y-3">
                            <h3 className="text-sm font-semibold">Tags</h3>
                            <MultiSelect
                                options={allTags.map((t) => ({ value: t.name, label: t.name }))}
                                selected={tags}
                                onChange={setTags}
                                placeholder="Search or add tags..."
                                allowCustom
                                createLabel="Add tag"
                            />
                            {tags.map((tag) => (
                                <input key={tag} type="hidden" name="tags[]" value={tag} />
                            ))}
                        </div>

                        {/* Featured Image */}
                        <div className="rounded-xl border p-4 space-y-3">
                            <h3 className="text-sm font-semibold">Featured Image</h3>
                            <p className="text-xs text-muted-foreground">Hero image shown on the full post page</p>
                            {featuredImagePath ? (
                                <div className="relative overflow-hidden rounded-lg border">
                                    <img
                                        src={`/storage/${featuredImagePath}`}
                                        className="w-full max-h-32 object-cover"
                                        alt="Featured"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setFeaturedImageId(null); setFeaturedImagePath(null); }}
                                        className="absolute top-1 right-1 rounded bg-black/50 p-0.5 text-white hover:bg-black/70"
                                    >
                                        <X className="size-3" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setFeaturedPickerOpen(true)}
                                    className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed py-6 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    <ImagePlus className="size-5" />
                                    <span className="text-xs">Select image</span>
                                </button>
                            )}
                            {featuredImagePath && (
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    className="w-full text-xs"
                                    onClick={() => setFeaturedPickerOpen(true)}
                                >
                                    Change
                                </Button>
                            )}
                            <input type="hidden" name="featured_image_media_id" value={featuredImageId ?? ''} />
                            <MediaPicker
                                open={featuredPickerOpen}
                                onClose={() => setFeaturedPickerOpen(false)}
                                onSelect={(s) => {
                                    setFeaturedImageId(s.media_id);
                                    setFeaturedImagePath(s.variant.file_path);
                                    setFeaturedPickerOpen(false);
                                }}
                            />
                        </div>

                        {/* Card Image */}
                        <div className="rounded-xl border p-4 space-y-3">
                            <h3 className="text-sm font-semibold">Card Image</h3>
                            <p className="text-xs text-muted-foreground">Thumbnail shown on the blog listing page</p>
                            {cardImagePath ? (
                                <div className="relative overflow-hidden rounded-lg border">
                                    <img
                                        src={`/storage/${cardImagePath}`}
                                        className="w-full max-h-32 object-cover"
                                        alt="Card"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setCardImageId(null); setCardImagePath(null); }}
                                        className="absolute top-1 right-1 rounded bg-black/50 p-0.5 text-white hover:bg-black/70"
                                    >
                                        <X className="size-3" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setCardPickerOpen(true)}
                                    className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed py-6 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    <ImagePlus className="size-5" />
                                    <span className="text-xs">Select image</span>
                                </button>
                            )}
                            {cardImagePath && (
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    className="w-full text-xs"
                                    onClick={() => setCardPickerOpen(true)}
                                >
                                    Change
                                </Button>
                            )}
                            <input type="hidden" name="card_image_media_id" value={cardImageId ?? ''} />
                            <MediaPicker
                                open={cardPickerOpen}
                                onClose={() => setCardPickerOpen(false)}
                                onSelect={(s) => {
                                    setCardImageId(s.media_id);
                                    setCardImagePath(s.variant.file_path);
                                    setCardPickerOpen(false);
                                }}
                            />
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
