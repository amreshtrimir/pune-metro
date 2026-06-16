import { Bold, Italic, List, ListOrdered, Pilcrow } from 'lucide-react';
import { useEffect, useId, useRef } from 'react';
import { Button } from '@/components/ui/button';

type RichTextEditorProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    helperText?: string;
};

const allowedEmptyValue = '<p><br></p>';

function normalizeHtml(value: string): string {
    const trimmedValue = value.trim();

    if (trimmedValue === '') {
        return '';
    }

    if (/<[a-z][\s\S]*>/i.test(trimmedValue)) {
        return trimmedValue;
    }

    return trimmedValue
        .split(/\n{2,}/)
        .map((paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');
}

function getEditorValue(html: string): string {
    const normalizedHtml = html.trim();

    if (normalizedHtml === '' || normalizedHtml === allowedEmptyValue || normalizedHtml === '<br>') {
        return '';
    }

    return normalizedHtml;
}

export function RichTextEditor({ label, value, onChange, helperText }: RichTextEditorProps) {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const labelId = useId();
    const lastSyncedValueRef = useRef('');

    useEffect(() => {
        const editor = editorRef.current;

        if (!editor) {
            return;
        }

        const normalizedValue = normalizeHtml(value);

        if (normalizedValue === lastSyncedValueRef.current) {
            return;
        }

        if (editor.innerHTML !== normalizedValue) {
            editor.innerHTML = normalizedValue;
        }

        lastSyncedValueRef.current = normalizedValue;
    }, [value]);

    const runCommand = (command: 'bold' | 'italic' | 'insertUnorderedList' | 'insertOrderedList' | 'formatBlock') => {
        const editor = editorRef.current;

        if (!editor) {
            return;
        }

        editor.focus();

        if (command === 'formatBlock') {
            document.execCommand(command, false, 'p');
        } else {
            document.execCommand(command, false);
        }

        const nextValue = getEditorValue(editor.innerHTML);
        lastSyncedValueRef.current = normalizeHtml(nextValue);
        onChange(nextValue);
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
                <label id={labelId} className="text-xs font-medium text-muted-foreground">
                    {label}
                </label>
                <div className="flex items-center gap-1 rounded-md border bg-muted/20 p-1">
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => runCommand('formatBlock')}
                    >
                        <Pilcrow className="size-4" />
                    </Button>
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => runCommand('bold')}
                    >
                        <Bold className="size-4" />
                    </Button>
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => runCommand('italic')}
                    >
                        <Italic className="size-4" />
                    </Button>
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => runCommand('insertUnorderedList')}
                    >
                        <List className="size-4" />
                    </Button>
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="size-8"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => runCommand('insertOrderedList')}
                    >
                        <ListOrdered className="size-4" />
                    </Button>
                </div>
            </div>
            <div
                ref={editorRef}
                role="textbox"
                aria-labelledby={labelId}
                contentEditable
                suppressContentEditableWarning
                onInput={(event) => {
                    const nextValue = getEditorValue(event.currentTarget.innerHTML);
                    lastSyncedValueRef.current = normalizeHtml(nextValue);
                    onChange(nextValue);
                }}
                className="min-h-36 rounded-md border bg-background px-3 py-2 text-left text-sm leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-0 [&_p]:py-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1"
            />
            {helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
        </div>
    );
}
