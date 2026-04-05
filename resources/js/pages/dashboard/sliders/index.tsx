import { useState } from 'react';
import { Head, Form, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import type { Slider } from '@/types/cms';
import * as SliderController from '@/actions/App/Http/Controllers/Slider/SliderController';
import { Pencil, Trash2, SlidersHorizontal } from 'lucide-react';

type Props = {
    sliders: (Slider & { slides_count: number })[];
};

export default function SlidersIndex({ sliders }: Props) {
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (slider: Slider) => {
        if (!confirm(`Delete slider "${slider.name}"? All slides will be removed.`)) return;
        setDeletingId(slider.id);
        router.delete(SliderController.destroy.url(slider.id), {
            preserveScroll: true,
            onFinish: () => setDeletingId(null),
        });
    };

    return (
        <>
            <Head title="Sliders" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Sliders</h1>
                    <p className="text-sm text-muted-foreground">Manage frontend sliders and their slides.</p>
                </div>

                {/* Create slider form */}
                <div className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Create new slider</h2>
                    <Form {...SliderController.store.form()} resetOnSuccess className="flex flex-col gap-3 sm:flex-row">
                        {({ errors, processing }) => (
                            <>
                                <div className="flex-1 space-y-1">
                                    <Input
                                        name="name"
                                        placeholder="Slider name (e.g. Home Hero)"
                                        className={errors.name ? 'border-destructive' : ''}
                                    />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                                </div>
                                <Button type="submit" disabled={processing} className="shrink-0">
                                    {processing ? 'Creating...' : 'Create Slider'}
                                </Button>
                            </>
                        )}
                    </Form>
                </div>

                {/* Sliders table */}
                <div className="rounded-xl border overflow-hidden">
                    {sliders.length === 0 ? (
                        <div className="p-12 text-center space-y-2">
                            <SlidersHorizontal className="mx-auto size-8 text-muted-foreground/40" />
                            <p className="text-sm text-muted-foreground">No sliders yet. Create one above.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b bg-muted/40">
                                    <th className="px-4 py-3 text-left font-medium">Name</th>
                                    <th className="px-4 py-3 text-left font-medium hidden md:table-cell">Slug</th>
                                    <th className="px-4 py-3 text-left font-medium">Slides</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {sliders.map((slider) => (
                                    <tr key={slider.id} className="hover:bg-muted/20">
                                        <td className="px-4 py-3 font-medium">{slider.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">
                                            <code className="text-xs">{slider.slug}</code>
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">{slider.slides_count}</td>
                                        <td className="px-4 py-3">
                                            {slider.is_active ? (
                                                <Badge variant="default">Active</Badge>
                                            ) : (
                                                <Badge variant="secondary">Inactive</Badge>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button size="icon" variant="ghost" asChild>
                                                    <Link href={SliderController.edit.url(slider.id)}>
                                                        <Pencil className="size-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="text-destructive hover:text-destructive"
                                                    disabled={deletingId === slider.id}
                                                    onClick={() => handleDelete(slider)}
                                                >
                                                    <Trash2 className="size-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
