import { router } from '@inertiajs/react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import * as FaqController from '@/actions/App/Http/Controllers/Faq/FaqController';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MultiSelect } from '@/components/ui/multi-select';
import type { MultiSelectOption } from '@/components/ui/multi-select';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import type { Faq } from '@/types/cms';

type FormValues = {
    question: string;
    answer: string;
    is_active: boolean;
    pages: string[];
};

type Props = {
    /** The FAQ being edited, or null to add a new one. Mount fresh for each open. */
    faq: Faq | null;
    pageOptions: MultiSelectOption[];
    onClose: () => void;
};

export function FaqFormDialog({ faq, pageOptions, onClose }: Props) {
    const [values, setValues] = useState<FormValues>({
        question: faq?.question ?? '',
        answer: faq?.answer ?? '',
        is_active: faq?.is_active ?? true,
        pages: faq?.pages ?? [],
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [processing, setProcessing] = useState(false);

    const set = (patch: Partial<FormValues>) =>
        setValues((prev) => ({ ...prev, ...patch }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const options = {
            onStart: () => {
                setProcessing(true);
                setErrors({});
            },
            onSuccess: onClose,
            onError: setErrors,
            onFinish: () => setProcessing(false),
        };

        if (faq) {
            router.put(FaqController.update.url(faq.id), values, options);
        } else {
            router.post(FaqController.store.url(), values, options);
        }
    };

    return (
        <Dialog open onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-h-[calc(100svh-2rem)] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{faq ? 'Edit FAQ' : 'Add FAQ'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="faq-question">Question</Label>
                        <Input
                            id="faq-question"
                            value={values.question}
                            onChange={(e) => set({ question: e.target.value })}
                            placeholder="e.g. Is security screening mandatory?"
                            className={
                                errors.question ? 'border-destructive' : ''
                            }
                        />
                        {errors.question && (
                            <p className="text-xs text-destructive">
                                {errors.question}
                            </p>
                        )}
                    </div>
                    <RichTextEditor
                        label="Answer"
                        value={values.answer}
                        onChange={(answer) => set({ answer })}
                        placeholder="Write the answer…"
                        error={errors.answer}
                        editorClassName="max-h-56 overflow-y-auto"
                    />
                    <div className="space-y-1">
                        <Label>Show on pages</Label>
                        <MultiSelect
                            dropUp
                            options={pageOptions}
                            selected={values.pages}
                            onChange={(pages) => set({ pages })}
                            placeholder="Search and select pages…"
                        />
                        {errors.pages && (
                            <p className="text-xs text-destructive">
                                {errors.pages}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox
                            id="faq-active"
                            checked={values.is_active}
                            onCheckedChange={(checked) =>
                                set({ is_active: !!checked })
                            }
                        />
                        <Label htmlFor="faq-active">Active</Label>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing
                                ? 'Saving...'
                                : faq
                                  ? 'Save'
                                  : 'Add FAQ'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
