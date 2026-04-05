import { useState } from 'react';
import { Head, Form, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { Category } from '@/types';
import * as CategoryController from '@/actions/App/Http/Controllers/Blog/CategoryController';
import { Pencil, Trash2, Check, X } from 'lucide-react';

type CategoryWithCount = Category & { posts_count: number };

type Props = {
    categories: CategoryWithCount[];
};

export default function CategoriesIndex({ categories }: Props) {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const startEdit = (cat: CategoryWithCount) => {
        setEditingId(cat.id);
        setEditName(cat.name);
        setEditDescription(cat.description ?? '');
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditName('');
        setEditDescription('');
    };

    const handleDelete = (cat: CategoryWithCount) => {
        router.delete(CategoryController.destroy.url(cat.id), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout>
            <Head title="Categories" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Categories</h1>
                    <p className="text-sm text-muted-foreground">Manage blog post categories.</p>
                </div>

                {/* Add category form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Add new category</h2>
                    <Form {...CategoryController.store.form()} resetOnSuccess className="flex flex-col gap-3 sm:flex-row">
                        {({ errors, processing }) => (
                            <>
                                <div className="flex-1 space-y-1">
                                    <Input name="name" placeholder="Category name" className={errors.name ? 'border-destructive' : ''} />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                </div>
                                <Input name="description" placeholder="Description (optional)" className="flex-1" />
                                <Button type="submit" disabled={processing} className="shrink-0">
                                    {processing ? 'Adding...' : 'Add Category'}
                                </Button>
                            </>
                        )}
                    </Form>
                </div>

                {/* Categories table */}
                <div className="rounded-xl border overflow-hidden">
                    {categories.length === 0 ? (
                        <div className="p-8 text-center text-muted-foreground text-sm">
                            No categories yet. Add one above.
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Name</th>
                                    <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Description</th>
                                    <th className="px-4 py-3 text-left font-medium">Posts</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {categories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-muted/20">
                                        {editingId === cat.id ? (
                                            <td colSpan={4} className="px-4 py-2">
                                                <Form
                                                    action={CategoryController.update.url(cat.id)}
                                                    method="put"
                                                    onSuccess={() => cancelEdit()}
                                                    className="flex flex-col gap-2 sm:flex-row sm:items-start"
                                                >
                                                    {({ errors, processing }) => (
                                                        <>
                                                            <div className="flex-1 space-y-1">
                                                                <Input
                                                                    name="name"
                                                                    value={editName}
                                                                    onChange={(e) => setEditName(e.target.value)}
                                                                    className={`h-8 text-sm ${errors.name ? 'border-destructive' : ''}`}
                                                                />
                                                                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                                            </div>
                                                            <Input
                                                                name="description"
                                                                value={editDescription}
                                                                onChange={(e) => setEditDescription(e.target.value)}
                                                                placeholder="Description"
                                                                className="flex-1 h-8 text-sm"
                                                            />
                                                            <div className="flex gap-1 shrink-0">
                                                                <Button type="submit" size="sm" disabled={processing} className="h-8">
                                                                    <Check className="size-3.5" />
                                                                </Button>
                                                                <Button type="button" size="sm" variant="ghost" className="h-8" onClick={cancelEdit}>
                                                                    <X className="size-3.5" />
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                </Form>
                                            </td>
                                        ) : (
                                            <>
                                                <td className="px-4 py-3 font-medium">{cat.name}</td>
                                                <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                                                    {cat.description ?? <span className="italic text-muted-foreground/50">—</span>}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <Badge variant="secondary">{cat.posts_count}</Badge>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex gap-1 justify-end">
                                                        <Button
                                                            type="button"
                                                            size="sm"
                                                            variant="ghost"
                                                            className="h-7 w-7 p-0"
                                                            onClick={() => startEdit(cat)}
                                                        >
                                                            <Pencil className="size-3.5" />
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            size="sm"
                                                            variant="ghost"
                                                            className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                                                            onClick={() => handleDelete(cat)}
                                                            disabled={cat.posts_count > 0}
                                                            title={cat.posts_count > 0 ? 'Remove from all posts first' : 'Delete category'}
                                                        >
                                                            <Trash2 className="size-3.5" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
