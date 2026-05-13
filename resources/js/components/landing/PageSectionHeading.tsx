interface PageSectionHeadingProps {
    children: React.ReactNode;
    className?: string;
    lineColor?: string;
}

export default function PageSectionHeading({
    children,
    className = 'flex items-center gap-6',
    lineColor = '#d1d5db',
}: PageSectionHeadingProps) {
    return (
        <div className={className}>
            <h1 className="mb-0 shrink-0 border-0 font-montserrat text-xl font-bold text-black sm:text-2xl lg:text-3xl">
                {children}
            </h1>
            <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${lineColor}, transparent)` }} />
        </div>
    );
}
