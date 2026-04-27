import { useRef, useState } from 'react';

const places = [
    {
        name: 'Shreemant Dagdusheth Halwai Ganpati Temple',
        image: '/landing/dagdusheth-temple.jpg',
        fallbackBg: 'linear-gradient(135deg, #7c3000 0%, #b45309 100%)',
    },
    {
        name: 'Aga Khan Palace - Historical Monument',
        image: '/landing/aga-khan-palace.jpg',
        fallbackBg: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    },
    {
        name: 'Sinhagad Fort - Historic Hill Fort',
        image: '/landing/sinhagad-fort.jpg',
        fallbackBg: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
    },
    {
        name: 'Parvati Hill - Temple Hill',
        image: '/landing/parvati-hill.jpg',
        fallbackBg: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)',
    },
];

export default function ExplorePuneSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    const CARD_WIDTH = 300;

    const updateScrollState = () => {
        if (scrollRef.current) {
            setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        }
    };

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === 'right' ? CARD_WIDTH : -CARD_WIDTH, behavior: 'smooth' });
        setTimeout(updateScrollState, 400);
    };

    return (
        <section
            id="explore"
            className="relative overflow-hidden"
            style={{ background: '#0f0f1a' }}
        >
            {/* Header */}
            <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-16 lg:px-16">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left: pill + heading */}
                    <div className="flex flex-col gap-3">
                        <div className="inline-flex w-fit items-center rounded-full bg-brand px-5 py-1.5">
                            <span className="font-montserrat text-xs font-semibold text-white">Places</span>
                        </div>
                        <h2
                            className="font-montserrat font-bold text-white"
                            style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.1' }}
                        >
                            Explore Pune
                        </h2>
                    </div>

                    {/* Center: description */}
                    <p className="max-w-lg font-montserrat text-sm leading-relaxed text-white/70 lg:flex-1 lg:px-12">
                        Explore Pune seamlessly, with a faster, smoother and more comfortable way to get around the city. Designed to make everyday commutes and city access more convenient.
                    </p>

                    {/* Right: nav buttons */}
                    <div className="flex shrink-0 items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            aria-label="Previous"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            aria-label="Next"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="mt-10 flex gap-0 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {places.map((place, i) => (
                    <div
                        key={place.name}
                        className="group relative shrink-0 cursor-pointer overflow-hidden"
                        style={{
                            width: '300px',
                            height: '476px',
                            background: place.fallbackBg,
                            marginLeft: i === 0 ? 'max(24px, calc((100vw - 1440px) / 2 + 64px))' : '0',
                        }}
                    >
                        {/* Photo */}
                        <img
                            src={place.image}
                            alt={place.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />

                        {/* Bottom gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                        />

                        {/* Card footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-montserrat text-sm font-bold leading-snug text-white">
                                {place.name}
                            </h3>
                            <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/50">
                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Right spacer */}
                <div className="shrink-0" style={{ width: 'max(24px, calc((100vw - 1440px) / 2 + 64px))' }} />
            </div>

            {/* Scroll right hint */}
            <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-6 lg:px-16">
                <div className="flex items-center gap-3">
                    <span className="font-montserrat text-xs font-semibold tracking-widest text-white/40 uppercase">Scroll Right</span>
                    <svg className="h-4 w-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 32 16" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28M22 2l6 6-6 6" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

