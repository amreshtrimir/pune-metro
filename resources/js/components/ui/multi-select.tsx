import { useEffect, useRef, useState } from 'react';
import { X, ChevronsUpDown, Loader2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MultiSelectOption = {
    value: string;
    label: string;
};

type MultiSelectProps = {
    options: MultiSelectOption[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
    /** Allow typing a value not in options and pressing Enter to add it */
    allowCustom?: boolean;
    /** Async factory for creating a new option (e.g. API call). Returns the new value on success. */
    onCreateOption?: (label: string) => Promise<string | null>;
    createLabel?: string;
    className?: string;
};

export function MultiSelect({
    options,
    selected,
    onChange,
    placeholder = 'Select…',
    allowCustom = false,
    onCreateOption,
    createLabel = 'Create',
    className,
}: MultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [creating, setCreating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
                setQuery('');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const deselect = (value: string) => onChange(selected.filter((v) => v !== value));

    const select = (value: string) => {
        if (!selected.includes(value)) {
            onChange([...selected, value]);
        }
        setQuery('');
        inputRef.current?.focus();
    };

    const filteredOptions = options.filter(
        (o) =>
            o.label.toLowerCase().includes(query.toLowerCase()) &&
            !selected.includes(o.value),
    );

    const exactMatch = options.some(
        (o) => o.label.toLowerCase() === query.toLowerCase(),
    );

    const showCreateRow =
        query.trim().length > 0 &&
        !exactMatch &&
        !selected.includes(query.trim()) &&
        (allowCustom || onCreateOption);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && query === '' && selected.length > 0) {
            deselect(selected[selected.length - 1]);
            return;
        }
        if (e.key === 'Escape') {
            setOpen(false);
            setQuery('');
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredOptions.length === 1) {
                select(filteredOptions[0].value);
                return;
            }
            if (showCreateRow) {
                void handleCreate(query.trim());
            }
        }
    };

    const handleCreate = async (label: string) => {
        if (!label) return;

        if (allowCustom && !onCreateOption) {
            select(label);
            return;
        }

        if (onCreateOption) {
            setCreating(true);
            try {
                const newValue = await onCreateOption(label);
                if (newValue) {
                    select(newValue);
                }
            } finally {
                setCreating(false);
            }
        }
    };

    const selectedLabels = selected.map(
        (v) => options.find((o) => o.value === v)?.label ?? v,
    );

    return (
        <div ref={containerRef} className={cn('relative', className)}>
            {/* Input box with chips */}
            <div
                className={cn(
                    'flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border bg-background px-2 py-1.5 text-sm ring-offset-background',
                    'cursor-text focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0',
                    open && 'ring-2 ring-ring ring-offset-0',
                )}
                onClick={() => {
                    inputRef.current?.focus();
                    setOpen(true);
                }}
            >
                {selected.map((value, i) => (
                    <span
                        key={value}
                        className="inline-flex items-center gap-1 rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                        {selectedLabels[i]}
                        <button
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                deselect(value);
                            }}
                            className="rounded-sm opacity-60 hover:opacity-100 focus:outline-none"
                        >
                            <X className="size-3" />
                        </button>
                    </span>
                ))}

                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder={selected.length === 0 ? placeholder : ''}
                    className="min-w-24 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />

                <ChevronsUpDown className="ml-auto size-3.5 shrink-0 opacity-40" />
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
                    <ul className="max-h-52 overflow-y-auto py-1 text-sm">
                        {filteredOptions.length === 0 && !showCreateRow && (
                            <li className="px-3 py-2 text-xs text-muted-foreground">
                                {query ? 'No matches.' : 'All options selected.'}
                            </li>
                        )}

                        {filteredOptions.map((option) => (
                            <li
                                key={option.value}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    select(option.value);
                                }}
                                className="flex cursor-pointer items-center px-3 py-1.5 hover:bg-accent hover:text-accent-foreground"
                            >
                                {option.label}
                            </li>
                        ))}

                        {showCreateRow && (
                            <li
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    void handleCreate(query.trim());
                                }}
                                className="flex cursor-pointer items-center gap-1.5 border-t px-3 py-1.5 text-xs font-medium text-primary hover:bg-accent hover:text-accent-foreground"
                            >
                                {creating ? (
                                    <Loader2 className="size-3 animate-spin" />
                                ) : (
                                    <Plus className="size-3" />
                                )}
                                {createLabel} &ldquo;{query.trim()}&rdquo;
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
