import { useState, useEffect, useCallback, useLayoutEffect } from 'react';

interface Slide {
    image: string;
    heading: string;
    description: string;
}

const slides: Slide[] = [
    {
        image: '/landing/train-exterior.png',
        heading: 'Transforming Urban Mobility with Speed, Comfort and Sustainability',
        description:
            'Puneri Metro Line 3 is a key urban infrastructure initiative designed to provide safe, efficient and reliable travel across the city. By linking major corridors, it reduces congestion and travel time while supporting the long-term goals of sustainable urban development.',
    },
    {
        image: '/landing/train-side.jpg',
        heading: 'Connecting Hinjewadi to Shivajinagar — 23 Stations, 23.3 km',
        description:
            "Experience seamless connectivity across Pune's major corridors. Puneri Metro Line 3 links the thriving Hinjewadi IT hub to the heart of the city with world-class infrastructure and modern passenger amenities.",
    },
    {
        image: '/landing/metro-interior.png',
        heading: 'A Greener, Smarter Way to Move Across Pune',
        description:
            'Pune Metro is committed to sustainable urban development — reducing vehicular pollution, easing road congestion and delivering a world-class commuting experience to millions of Punekars every day.',
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    useLayoutEffect(() => {
        const header = document.querySelector('header');
        if (!header) return;
        const update = () => setNavHeight(header.offsetHeight);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(header);
        return () => ro.disconnect();
    }, []);

    const heroHeight = navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh';

    const goTo = useCallback(
        (index: number) => {
            if (index === current || transitioning) return;
            setTransitioning(true);
            setTimeout(() => {
                setCurrent(index);
                setTransitioning(false);
            }, 300);
        },
        [current, transitioning],
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5500);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section className="relative w-full overflow-hidden bg-metro-dark" style={{ minHeight: heroHeight }}>

            {/* ── Full-width background image ── */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={s.image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    {/* Dark gradient overlay — left-heavy so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                </div>
            ))}

            {/* ── Text content — layered on top ── */}
            <div
                className="relative mx-auto flex max-w-[1440px] flex-col justify-end px-6 lg:px-16"
                style={{ minHeight: heroHeight, paddingBottom: '110px', paddingTop: '80px' }}
            >
                <div className={`w-4/5 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                    <h1
                        className="mb-5 font-montserrat font-bold text-white"
                        style={{ fontSize: 'clamp(28px, 5vw, 66px)', lineHeight: 'clamp(36px, 6.25vw, 80px)' }}
                    >
                        {slide.heading}
                    </h1>
                    <p
                        className="font-montserrat text-white/80"
                        style={{ fontSize: 'clamp(14px, 1.72vw, 22px)', lineHeight: 'clamp(22px, 2.5vw, 32px)' }}
                    >
                        {slide.description}
                    </p>
                </div>

                {/* Slide dots */}
                <div className="absolute bottom-[90px] left-6 flex items-center gap-2 lg:left-16">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === current ? 'w-6 bg-brand' : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Prev / Next arrows */}
                <button
                    onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                    className="absolute right-20 bottom-[82px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white/60 transition hover:border-white/60 hover:text-white lg:right-24"
                    aria-label="Previous slide"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                </button>
                <button
                    onClick={() => goTo((current + 1) % slides.length)}
                    className="absolute right-8 bottom-[82px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white lg:right-12"
                    aria-label="Next slide"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

