import gsap from 'gsap';
import { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react';

interface Slide {
    image: string;
    heading: string;
    description: string;
}

const SLIDE_INTERVAL = 6000;

const slides: Slide[] = [
    {
        image: '/landing/sliders-slides/first-image.webp',
        heading: 'Transforming Urban Mobility with Speed, Safety and Comfort',
        description:
            'Puneri Metro Line 3 is a key urban infrastructure initiative designed to provide safe, efficient and reliable travel across the city.',
    },
    {
        image: '/landing/sliders-slides/hero-section-slides/slide-2-desktop.png',
        heading: "Connecting Pune's Vital Commuter Arteries",
        description:
            "The project features a 23.3 km elevated corridor designed to alleviate congestion along one of Pune's most critical routes. By linking the Hinjewadi IT hub to the Shivajinagar District Court, the line bridges major tech zones with the city centre.",
    },
    {
        image: '/landing/sliders-slides/hero-section-slides/slide-3-desktop.png',
        heading: 'A blueprint for sustainable urban mobility',
        description:
            'Puneri Metro Line 3 embeds environmental stewardship into its design, construction, and daily operations. By deploying sustainable practices, the project minimizes the carbon footprint of the city.',
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    const headingRef = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const prevIndexRef = useRef<number>(-1);
    const slideTlRef = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        const header = document.querySelector('header');

        if (!header) {
return;
}

        const update = () => setNavHeight(header.offsetHeight);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(header);

        return () => ro.disconnect();
    }, []);

    const heroHeight = navHeight > 0 ? `calc(100vh - ${navHeight}px)` : '100vh';

    const startTimer = useCallback(() => {
        if (timerRef.current) {
clearInterval(timerRef.current);
}

        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);
    }, []);

    useEffect(() => {
        startTimer();

        return () => {
            if (timerRef.current) {
clearInterval(timerRef.current);
}
        };
    }, [startTimer]);

    const goTo = useCallback(
        (index: number) => {
            setCurrent(index);
            startTimer();
        },
        [startTimer],
    );

    // GSAP slide transition — crossfade + Ken Burns on incoming image
    useEffect(() => {
        const prev = prevIndexRef.current;
        const next = current;

        if (slideTlRef.current) {
            slideTlRef.current.kill();
            slideTlRef.current = null;
        }

        const nextEl = slideRefs.current[next];
        const nextImg = imgRefs.current[next];
        const prevEl = prev >= 0 ? slideRefs.current[prev] : null;

        if (!nextEl) {
return;
}

        // Place incoming slide on top, reset its image scale
        gsap.set(nextEl, { opacity: 0, zIndex: 2 });

        if (nextImg) {
            gsap.killTweensOf(nextImg);
            gsap.set(nextImg, { scale: 1.0 });
        }

        if (prevEl) {
gsap.set(prevEl, { zIndex: 1 });
}

        const tl = gsap.timeline({
            onComplete: () => {
                if (prevEl) {
gsap.set(prevEl, { opacity: 0, zIndex: 0 });
}
            },
        });

        // Incoming slide fades in
        tl.to(nextEl, { opacity: 1, duration: 1.1, ease: 'power2.inOut' }, 0);

        // Outgoing slide fades out (slightly slower so cross-dissolve is visible)
        if (prevEl) {
            tl.to(prevEl, { opacity: 0, duration: 1.3, ease: 'power2.inOut' }, 0);
        }

        // Ken Burns: slow zoom on incoming image
        if (nextImg) {
            gsap.to(nextImg, { scale: 1.09, duration: 7, ease: 'power1.inOut' });
        }

        slideTlRef.current = tl;
        prevIndexRef.current = next;

        return () => {
 tl.kill();
};
    }, [current]);

    // GSAP text animation — runs after each slide change
    useEffect(() => {
        const heading = headingRef.current;
        const para = paraRef.current;

        if (!heading || !para) {
return;
}

        // Kill any in-flight timeline immediately to prevent conflicts
        if (tlRef.current) {
            tlRef.current.kill();
            tlRef.current = null;
        }

        // Split heading into individual word spans for staggered reveal
        const words = slides[current].heading.split(' ');
        heading.innerHTML = words
            .map(
                (w) =>
                    `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;line-height:inherit;"><span class="hero-wi" style="display:inline-block;">${w}</span></span>`,
            )
            .join('\u00A0'); // non-breaking space to preserve word gaps

        para.textContent = slides[current].description;

        const wordInners = heading.querySelectorAll<HTMLSpanElement>('.hero-wi');

        // Pin everything invisible before the image fade completes (~350ms)
        gsap.set(wordInners, { yPercent: 115, opacity: 0 });
        gsap.set(para, { y: 32, opacity: 0 });

        const tl = gsap.timeline({ delay: 0.35 });

        // Heading words cascade upward
        tl.to(wordInners, {
            yPercent: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.055,
            ease: 'power3.out',
        });

        // Paragraph slides up with overlap
        tl.to(
            para,
            {
                y: 0,
                opacity: 1,
                duration: 0.68,
                ease: 'power2.out',
            },
            '-=0.38',
        );

        tlRef.current = tl;

        return () => {
            tl.kill();
        };
    }, [current]);

    return (
        <section className="relative w-full overflow-hidden bg-metro-dark max-md:min-h-[33vh]!" style={{ minHeight: heroHeight }}>
            {/* ── Background slides — fully GSAP controlled ── */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    ref={(el) => {
 slideRefs.current[i] = el;
}}
                    className="absolute inset-0"
                    style={{ opacity: 0, zIndex: 0, willChange: 'opacity' }}
                >
                    <img
                        ref={(el) => {
 imgRefs.current[i] = el;
}}
                        src={s.image}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ willChange: 'transform', transformOrigin: 'center center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
                </div>
            ))}

            {/* ── Text content ── */}
            <div
                className="relative mx-auto flex max-w-[1303px] min-[1440px]:max-w-[1440px] flex-col justify-end px-6 lg:px-16 max-md:min-h-[33vh]! max-md:pb-16! max-md:pt-8!"
                style={{
                    minHeight: heroHeight,
                    paddingBottom: '110px',
                    paddingTop: '80px',
                    zIndex: 20,
                }}
            >
                <div className="w-full">
                    {/* heading innerHTML is controlled by GSAP — no children here */}
                    <h1
                        ref={headingRef}
                        className="mb-3 font-montserrat font-bold text-white md:mb-5 max-md:text-[clamp(20px,5.5vw,28px)]! max-md:leading-[clamp(28px,7vw,36px)]!"
                        style={{
                            fontSize: 'clamp(20px, 2.7vw, 36px)',
                            lineHeight: 'clamp(28px, 3.3vw, 44px)',
                        }}
                    />
                    <p
                        ref={paraRef}
                        className="font-montserrat text-white/80 max-md:hidden max-md:text-[13px]! max-md:leading-[1.6]!"
                        style={{
                            fontSize: 'clamp(10px, 1.2vw, 15px)',
                            lineHeight: 'clamp(22px, 2.5vw, 32px)',
                        }}
                    />
                </div>

                {/* ── Slide dots ── */}
                <div className="absolute bottom-14 left-6 flex items-center gap-2 md:bottom-22.5 lg:left-16">
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

                {/* ── Prev / Next arrows ── */}
                <button
                    onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                    className="absolute right-20 bottom-12.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white/60 transition hover:border-white/60 hover:text-white md:bottom-20.5 md:h-10 md:w-10 lg:right-24 max-md:hidden"
                    aria-label="Previous slide"
                >
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                </button>
                <button
                    onClick={() => goTo((current + 1) % slides.length)}
                    className="absolute right-8 bottom-12.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white md:bottom-20.5 md:h-10 md:w-10 lg:right-12 max-md:hidden"
                    aria-label="Next slide"
                >
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

