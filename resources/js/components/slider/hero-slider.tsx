import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Slider, SliderSlide, Media, MediaVariant } from '@/types/cms';
import { cn } from '@/lib/utils';

type SlideWithMedia = SliderSlide & {
    desktop_media?: (Media & { variants: MediaVariant[] }) | null;
    mobile_media?: (Media & { variants: MediaVariant[] }) | null;
};

type HeroSliderProps = {
    slider: Slider & { slides: SlideWithMedia[] };
    /** Auto-advance interval in ms. Set 0 to disable. Default: 5000 */
    interval?: number;
    className?: string;
};

function getBestImagePath(media: (Media & { variants: MediaVariant[] }) | null | undefined): string | null {
    if (!media) return null;
    const largest = [...(media.variants ?? [])].sort((a, b) => b.width - a.width)[0];
    return largest ? `/storage/${largest.file_path}` : `/storage/${media.file_path}`;
}

export function HeroSlider({ slider, interval = 5000, className }: HeroSliderProps) {
    const activeSlides = slider.slides.filter((s) => s.is_active);
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning || index === current) return;
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 500);
        },
        [current, isTransitioning],
    );

    const prev = useCallback(() => {
        goTo((current - 1 + activeSlides.length) % activeSlides.length);
    }, [current, activeSlides.length, goTo]);

    const next = useCallback(() => {
        goTo((current + 1) % activeSlides.length);
    }, [current, activeSlides.length, goTo]);

    useEffect(() => {
        if (interval <= 0 || activeSlides.length <= 1) return;
        timerRef.current = setTimeout(next, interval);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, interval, activeSlides.length, next]);

    if (activeSlides.length === 0) return null;

    const slide = activeSlides[current];
    const desktopSrc = getBestImagePath(slide.desktop_media);
    const mobileSrc = getBestImagePath(slide.mobile_media) ?? desktopSrc;

    return (
        <div className={cn('relative overflow-hidden bg-gray-900', className)}>
            {/* Background image */}
            <div
                className={cn(
                    'absolute inset-0 transition-opacity duration-500',
                    isTransitioning ? 'opacity-0' : 'opacity-100',
                )}
            >
                {/* Mobile image (hidden on md+) */}
                {mobileSrc && (
                    <picture>
                        {desktopSrc && <source media="(min-width: 768px)" srcSet={desktopSrc} />}
                        <img
                            src={mobileSrc}
                            alt={slide.heading_line1}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </picture>
                )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end min-h-[360px] md:min-h-[520px] px-6 pb-12 md:px-16 md:pb-16">
                <div
                    className={cn(
                        'max-w-2xl transition-all duration-500',
                        isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
                    )}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {slide.heading_line1}
                    </h2>
                    {slide.heading_line2 && (
                        <h3 className="text-2xl md:text-4xl font-semibold text-white/90 leading-tight mt-1">
                            {slide.heading_line2}
                        </h3>
                    )}
                    {slide.paragraph && (
                        <p className="mt-3 text-base md:text-lg text-white/80 max-w-xl">
                            {slide.paragraph}
                        </p>
                    )}
                </div>
            </div>

            {/* Navigation arrows */}
            {activeSlides.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <ChevronRight className="size-5" />
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {activeSlides.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                    {activeSlides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            aria-label={`Go to slide ${idx + 1}`}
                            onClick={() => goTo(idx)}
                            className={cn(
                                'h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
                                idx === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70',
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
