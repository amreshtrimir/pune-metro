import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import type { GalleryAlbum } from '@/types/cms';

type GalleryImage = {
    thumb: string;
    full: string;
};

type GalleryItem = {
    title: string;
    description: string;
    images: GalleryImage[];
};

type Props = {
    albums: GalleryAlbum[];
};

function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

type LightboxState = {
    images: string[];
    index: number;
    alt: string;
};

function Lightbox({ state, onClose }: {
    state: LightboxState;
    onClose: () => void;
}) {
    const { images, alt } = state;
    const [cur, setCur] = useState(state.index);
    const [counter, setCounter] = useState(state.index);
    const imgRef = useRef<HTMLImageElement>(null);
    const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
    const dirRef = useRef<1 | -1>(1);
    const isAnimating = useRef(false);
    const pendingRef = useRef(0);
    const curRef = useRef(state.index);

    // Keep curRef in sync so navigate() never has a stale closure
    useEffect(() => {
        curRef.current = cur;
    }, [cur]);

    const navigate = useCallback((dir: 1 | -1) => {
        if (isAnimating.current || images.length <= 1) {
            return;
        }

        isAnimating.current = true;
        dirRef.current = dir;
        pendingRef.current = (curRef.current + dir + images.length) % images.length;
        setPhase('exit');
    }, [images.length]);

    // Phase-driven GSAP animation
    useEffect(() => {
        const img = imgRef.current;

        if (!img || phase === 'idle') {
            return;
        }

        if (phase === 'exit') {
            gsap.to(img, {
                x: dirRef.current === 1 ? -80 : 80,
                opacity: 0,
                duration: 0.22,
                ease: 'power2.in',
                onComplete: () => {
                    setCur(pendingRef.current);
                    setCounter(pendingRef.current);
                    setPhase('enter');
                },
            });
        } else if (phase === 'enter') {
            gsap.fromTo(
                img,
                { x: dirRef.current === 1 ? 80 : -80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.28,
                    ease: 'power2.out',
                    onComplete: () => {
                        setPhase('idle');
                        isAnimating.current = false;
                    },
                },
            );
        }
    }, [phase]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }

            if (e.key === 'ArrowLeft') {
                navigate(-1);
            }

            if (e.key === 'ArrowRight') {
                navigate(1);
            }
        }

        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, navigate]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            {/* Close */}
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
                aria-label="Close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Prev */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(-1);
                    }}
                    className="absolute left-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
            )}

            {/* Image */}
            <div
                className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    ref={imgRef}
                    src={images[cur]}
                    alt={`${alt} photo ${counter + 1}`}
                    className="max-h-[90vh] max-w-[90vw] rounded object-contain shadow-2xl"
                />
                {images.length > 1 && (
                    <p className="mt-2 text-center font-montserrat text-xs text-white/70">
                        {counter + 1} / {images.length}
                    </p>
                )}
            </div>

            {/* Next */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(1);
                    }}
                    className="absolute right-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/40"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default function PhotoGallery({ albums }: Props) {
    const galleryItems: GalleryItem[] = albums.map((album) => ({
        title: album.title,
        description: album.description ?? '',
        images: (album.images ?? [])
            .map((img) => ({
                thumb: img.thumb_media?.url ?? img.media?.url ?? '',
                full: img.media?.url ?? '',
            }))
            .filter((img) => img.full !== ''),
    }));
    const [openIndex, setOpenIndex] = useState<number>(0);
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    function toggle(index: number) {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    }

    function openLightbox(images: string[], index: number, alt: string) {
        setLightbox({ images, index, alt });
    }

    function closeLightbox() {
        setLightbox(null);
    }

    return (
        <>
            {lightbox && (
                <Lightbox
                    state={lightbox}
                    onClose={closeLightbox}
                />
            )}
            <Head>
                <title>Photo Gallery - Pune Metro</title>
                <meta
                    name="description"
                    content="Explore the photo gallery of Pune IT City Metro Rail Limited showcasing key events, green initiatives, and community activities."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/gallery/gallery-banner-md.png"
                srcMd="/banners/gallery/gallery-banner-md.png"
                srcLg="/banners/gallery/gallery-banner-lg.png"
                alt="Photo Gallery - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Photo Gallery</PageSectionHeading>
                </div>
            </section>

            {/* ── Accordion Gallery ── */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="flex flex-col gap-3">
                        {galleryItems.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-[5px] bg-[rgba(232,68,154,0.15)]"
                                >
                                    {/* Accordion Header */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        className={`flex w-full items-center justify-between px-8 text-left ${isOpen ? 'pt-6' : 'py-6'}`}
                                    >
                                        <span className="font-montserrat text-sm font-semibold text-black sm:text-base lg:text-lg">
                                            {item.title}
                                        </span>
                                        <ChevronDownIcon
                                            className={`size-8 shrink-0 text-black transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Accordion Content */}
                                    {isOpen && (
                                        <div className="px-8 pb-8">
                                            <p className="mb-6 max-w-253.75 font-montserrat text-xs leading-relaxed text-black sm:text-sm">
                                                {item.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                                {item.images.map((image, imgIndex) => (
                                                    <button
                                                        key={imgIndex}
                                                        type="button"
                                                        onClick={() => openLightbox(item.images.map((i) => i.full), imgIndex, item.title)}
                                                        className="aspect-square overflow-hidden border border-[#cacaca] transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8449a]"
                                                    >
                                                        <img
                                                            src={image.thumb}
                                                            alt={`${item.title} photo ${imgIndex + 1}`}
                                                            className="size-full object-cover"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </>
    );
}
