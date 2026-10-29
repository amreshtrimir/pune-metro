import { Check, ChevronsUpDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type SearchSelectOption = {
    value: string;
    label: string;
};

type SearchSelectProps = {
    options: SearchSelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export function SearchSelect({ options, value, onChange, placeholder = 'Select…', className }: SearchSelectProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
    const selectedLabel = options.find((o) => o.value === value)?.label;

    const choose = (next: string) => {
        onChange(next);
        setOpen(false);
        setQuery('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
            setActive((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Enter' && open && filtered[active]) {
            e.preventDefault();
            choose(filtered[active].value);
        } else if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    return (
        <div ref={containerRef} className={cn('relative w-72', className)}>
            <div className="relative">
                <input
                    role="combobox"
                    aria-expanded={open}
                    value={open ? query : (selectedLabel ?? '')}
                    placeholder={selectedLabel ?? placeholder}
                    onFocus={() => setOpen(true)}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActive(0);
                        setOpen(true);
                    }}
                    onKeyDown={handleKeyDown}
                    className="h-9 w-full rounded-md border border-input bg-transparent px-3 pr-8 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
                <ChevronsUpDown className="pointer-events-none absolute top-2.5 right-2.5 size-4 opacity-50" />
            </div>
            {open && (
                <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md">
                    {filtered.length === 0 && <li className="px-2 py-1.5 text-muted-foreground">No pages found.</li>}
                    {filtered.map((o, i) => (
                        <li
                            key={o.value}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => choose(o.value)}
                            onMouseEnter={() => setActive(i)}
                            className={cn(
                                'flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5',
                                i === active && 'bg-accent text-accent-foreground',
                            )}
                        >
                            {o.label}
                            {o.value === value && <Check className="size-4" />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
