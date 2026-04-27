import { useState, useEffect, useCallback } from 'react';

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

const stats = [
    { value: '23.3', label: 'Route Length (km)' },
    { value: '23', label: 'Metro Stations' },
    { value: '100%', label: 'Elevated Corridor' },
    { value: '02', label: 'Depot Facilities' },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

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
        <section className="relative w-full overflow-hidden bg-metro-dark" style={{ minHeight: '627.66px' }}>

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
                className="relative mx-auto flex max-w-[1440px] flex-col justify-center px-6 lg:px-16"
                style={{ minHeight: '627.66px', paddingBottom: '110px', paddingTop: '80px' }}
            >
                <div className={`max-w-2xl transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="mb-5 font-montserrat text-3xl font-bold leading-tight text-white lg:text-5xl">
                        {slide.heading}
                    </h1>
                    <p className="font-montserrat text-sm leading-relaxed text-white/80 lg:text-base">
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
                    className="absolute right-20 bottom-[82px] flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:text-brand lg:right-24"
                    aria-label="Previous slide"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => goTo((current + 1) % slides.length)}
                    className="absolute right-8 bottom-[82px] flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:text-brand lg:right-12"
                    aria-label="Next slide"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* ── Stats bar ── */}
            <div className="absolute bottom-0 left-0 right-0 bg-brand-dark">
                <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-0 px-6 py-5 lg:grid-cols-4 lg:px-16">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`px-6 ${i === 0 ? 'pl-0' : 'border-l border-white/20'}`}
                        >
                            <p className="font-montserrat text-2xl font-bold text-white lg:text-3xl">
                                {stat.value}
                            </p>
                            <p className="font-montserrat text-xs font-medium text-white/70">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

