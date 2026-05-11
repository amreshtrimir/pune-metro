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
            <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '30px' }}>
                {children}
            </h1>
            <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${lineColor}, transparent)` }} />
        </div>
    );
}
