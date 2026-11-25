import { Check, ChevronsUpDown } from 'lucide-react';
import { Fragment, useState } from 'react';
import { cn } from '@/lib/utils';

export type SearchSelectOption = {
    value: string;
    label: string;
    /** Options sharing a group are listed under one heading; keep them next to each other. */
    group?: string;
};

const fullLabel = (option: SearchSelectOption) =>
    option.group ? `${option.group} - ${option.label}` : option.label;

type SearchSelectProps = {
    id?: string;
    options: SearchSelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    /** Open the list above the input (for pickers near the bottom of the screen). */
    dropUp?: boolean;
};

export function SearchSelect({ id, options, value, onChange, placeholder = 'Select…', className, dropUp = false }: SearchSelectProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);

    const filtered = options.filter((o) => fullLabel(o).toLowerCase().includes(query.toLowerCase()));
    const selected = options.find((o) => o.value === value);
    const selectedLabel = selected && fullLabel(selected);

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
        <div className={cn('relative w-72', className)}>
            <div className="relative">
                <input
                    id={id}
                    role="combobox"
                    aria-expanded={open}
                    value={open ? query : (selectedLabel ?? '')}
                    placeholder={selectedLabel ?? placeholder}
                    onFocus={() => setOpen(true)}
                    onClick={() => setOpen(true)}
                    onBlur={() => {
                        setOpen(false);
                        setQuery('');
                    }}
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
            {/* preventDefault on the list keeps focus in the input, so using it does not close it. */}
            {open && (
                <ul onMouseDown={(e) => e.preventDefault()} className={cn('absolute z-50 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md', dropUp ? 'bottom-full mb-1' : 'mt-1')}>
                    {filtered.length === 0 && <li className="px-2 py-1.5 text-muted-foreground">No pages found.</li>}
                    {filtered.map((o, i) => (
                        <Fragment key={o.value}>
                            {o.group && o.group !== filtered[i - 1]?.group && (
                                <li role="presentation" className="px-2 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase">
                                    {o.group}
                                </li>
                            )}
                            <li
                                ref={i === active ? (el) => el?.scrollIntoView({ block: 'nearest' }) : undefined}
                                onClick={() => choose(o.value)}
                                onMouseEnter={() => setActive(i)}
                                className={cn(
                                    'flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5',
                                    o.group && 'pl-4',
                                    i === active && 'bg-accent text-accent-foreground',
                                )}
                            >
                                {o.label}
                                {o.value === value && <Check className="size-4" />}
                            </li>
                        </Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
}
