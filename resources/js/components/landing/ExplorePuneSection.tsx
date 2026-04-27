import { useRef, useState } from 'react';

const places = [
    {
        name: 'Shreemant Dagdusheth Halwai Ganpati Temple',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #7c3000 0%, #b45309 100%)',
    },
    {
        name: 'Aga Khan Palace - Historical Monument',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    },
    {
        name: 'Sinhagad Fort - Historic Hill Fort',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
    },
    {
        name: 'Parvati Hill - Temple Hill',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)',
    },
    {
        name: 'Shaniwar Wada - Fortification',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    },
    {
        name: 'Rajiv Gandhi Zoological Park',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
    },
    {
        name: 'Osho Ashram - Spiritual Retreat',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #451a03 0%, #92400e 100%)',
    },
    {
        name: 'Pune Okayama Friendship Garden',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #052e16 0%, #166534 100%)',
    },
    {
        name: 'Kasba Ganpati Temple - Heritage Site',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #4a1942 0%, #86198f 100%)',
    },
    {
        name: 'National War Museum - Pune',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #1c1917 0%, #57534e 100%)',
    },
    {
        name: 'Lohagad Fort - Trekking Destination',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    },
    {
        name: 'Chaturshringi Temple - Sacred Site',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)',
    },
    {
        name: 'Saras Baug Garden - Ganesh Temple',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    },
    {
        name: 'Empress Botanical Garden',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
    },
    {
        name: 'Vishrambaug Wada - Peshwa Palace',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)',
    },
    {
        name: 'Bund Garden - River Park',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #042f2e 0%, #0f766e 100%)',
    },
    {
        name: 'Pune Railway Station - Heritage',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #1e3a5f 0%, #0369a1 100%)',
    },
    {
        name: 'Taljai Hill - Nature Reserve',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #14532d 0%, #4ade80 100%)',
    },
    {
        name: 'Phursungi Village - Rural Charm',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #422006 0%, #d97706 100%)',
    },
    {
        name: 'Khadakwasla Dam - Scenic Reservoir',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)',
    },
];

export default function ExplorePuneSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    const updateScrollState = () => {
        if (scrollRef.current) {
            setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        }
    };

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;
        // Match visible cards: 1 on mobile, 2 on md, 4 on lg
        const w = window.innerWidth;
        const visibleCards = w < 768 ? 1 : w < 1024 ? 2 : 4;
        const GAP = w >= 1024 ? 0 : 16;
        const cardWidth = (scrollRef.current.offsetWidth - GAP * (visibleCards - 1)) / visibleCards;
        scrollRef.current.scrollBy({ left: dir === 'right' ? cardWidth + GAP : -(cardWidth + GAP), behavior: 'smooth' });
        setTimeout(updateScrollState, 400);
    };

    return (
        <section id="explore" className="relative overflow-visible">
            {/* ── Rows 1 & 2 background wrapper ── */}
            <div
                className="relative"
                style={{
                    backgroundImage: "url('/landing/places-sectin-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 24, 0.82)' }} />

                {/* ── Row 1: pill + heading | description + nav buttons ── */}
                <div className="relative z-10 mx-auto max-w-360 px-6 lg:px-16 lg:pt-28">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Left: pill + heading */}
                        <div className="flex flex-col gap-3">
                            <div className="inline-flex w-fit items-center rounded-full px-5 py-1.5" style={{ background: '#F91C9163' }}>
                                <span className="font-montserrat text-xs font-semibold text-white">Places</span>
                            </div>
                            <h2
                                className="font-montserrat font-bold text-white"
                                style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.1' }}
                            >
                                Explore Pune
                            </h2>
                        </div>

                        {/* Right: description + nav buttons */}
                        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
                            <p className="max-w-lg font-montserrat text-sm leading-relaxed text-white/70">
                                Explore Pune seamlessly, with a faster, smoother and more comfortable way to get around the city. Designed to make everyday commutes and city access more convenient.
                            </p>
                            <div className="flex shrink-0 items-center gap-3">
                                <button
                                    onClick={() => scroll('left')}
                                    aria-label="Previous"
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white/60 transition hover:border-white/60 hover:text-white"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    aria-label="Next"
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Row 2: scroll hint ── */}
                <div className="relative z-10 mt-6 flex mx-auto max-w-360 px-6 lg:px-16 flex-col justify-end  lg:mt-10" style={{ minHeight: '200px', paddingBottom: '48px' }} data-row2>
                    <div className="flex flex-col gap-2">
                        <span className="font-montserrat text-xs font-semibold tracking-widest text-white/40 uppercase">
                            Scroll Right
                        </span>
                        <svg className="h-4 w-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 32 16" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28M22 2l6 6-6 6" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ── Row 3: slides (no bg image) ── */}
            <div className="mx-auto w-full" style={{ maxWidth: '1312px', marginTop: '-160px' }}>
                <div className="ml-auto px-6 pr-0" style={{ maxWidth: '1100px', paddingBottom: '48px' }}>
                <div
                    ref={scrollRef}
                    onScroll={updateScrollState}
                    className="flex gap-4 overflow-x-auto lg:gap-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {places.map((place) => (
                        <div
                            key={place.name}
                            style={{
                                height: '400px',
                                background: place.fallbackBg,
                            }}
                            className="group relative w-full shrink-0 cursor-pointer overflow-hidden sm:w-[calc(50%-8px)] lg:w-[25%]"
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
                                <svg className="mt-3 h-4 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 32 16" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28M22 2l6 6-6 6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}

