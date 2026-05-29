interface PageSectionHeadingProps {
    children: React.ReactNode;
    className?: string;
    lineColor?: string;
    /** Set to true for long headings that would overflow on mobile */
    wrap?: boolean;
}

export default function PageSectionHeading({
    children,
    className,
    lineColor = '#d1d5db',
    wrap = false,
}: PageSectionHeadingProps) {
    const wrapperClass = className ?? 'flex items-center gap-6';
    return (
        <div className={wrapperClass}>
            <h1
                className={`mb-0 border-0 font-montserrat text-xl font-bold text-black sm:text-2xl lg:text-3xl ${
                    wrap ? 'min-w-0 sm:shrink-0' : 'shrink-0'
                }`}
            >
                {children}
            </h1>
            <div
                className={wrap ? 'hidden h-px flex-1 sm:block' : 'h-px flex-1'}
                style={{ background: `linear-gradient(to right, ${lineColor}, transparent)` }}
            />
        </div>
    );
}
