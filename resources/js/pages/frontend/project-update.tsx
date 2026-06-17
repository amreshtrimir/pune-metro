import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import type { GalleryAlbumImage } from '@/types/cms';

type Props = {
    images: GalleryAlbumImage[];
};

type LightboxState = {
    index: number;
};

const INITIAL_COUNT = 8;
const LOAD_MORE_STEP = 4;

function Lightbox({
    images,
    state,
    onClose,
    onPrev,
    onNext,
}: {
    images: GalleryAlbumImage[];
    state: LightboxState;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const { index } = state;
    const src = images[index]?.media?.url ?? '';

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }

            if (e.key === 'ArrowLeft') {
                onPrev();
            }

            if (e.key === 'ArrowRight') {
                onNext();
            }
        }
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

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
                        onPrev();
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
            <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
                <img
                    src={src}
                    alt={`Construction update ${index + 1}`}
                    className="max-h-[90vh] max-w-[90vw] rounded object-contain shadow-2xl"
                />
                {images.length > 1 && (
                    <p className="mt-2 text-center font-montserrat text-xs text-white/70">
                        {index + 1} / {images.length}
                    </p>
                )}
            </div>

            {/* Next */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
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

export default function ProjectUpdate({ images }: Props) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = visibleCount < images.length;

    function openLightbox(index: number) {
        setLightbox({ index });
    }

    function closeLightbox() {
        setLightbox(null);
    }

    function prevImage() {
        setLightbox((prev) => prev && { index: (prev.index - 1 + images.length) % images.length });
    }

    function nextImage() {
        setLightbox((prev) => prev && { index: (prev.index + 1) % images.length });
    }

    return (
        <>
            {lightbox && (
                <Lightbox
                    images={images}
                    state={lightbox}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}

            <Head>
                <title>Project Update - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Stay up to date with the latest construction and development progress of Pune Metro Line 3."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/project-update/project-update-banner-md-new.png"
                srcMd="/banners/project-update/project-update-md-new.png"
                srcLg="/banners/project-update/project-update-lg-new.png"
                alt="Project Update - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Project Update</PageSectionHeading>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pt-4 pb-4">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Pune Metro Line 3  is progressing steadily, with significant construction milestones achieved across the 23.3 km elevated corridor. The Pink Line will offer commuters a modern, reliable, and comfortable alternative to road travel, connecting the IT hub of Hinjewadi to Shivajinagar District Court seamlessly. Commuters across key areas including Wakad, Baner, Balewadi, and University Circle will benefit from reduced travel time, lesser dependence on private vehicles, and a safe, efficient daily commute. The Pink Line is set to transform urban mobility for thousands of Pune residents every single day.

                    </p>
                </div>
            </section>

            {/* ── Documents ── */}
            {/* <section className="bg-white pb-6 md:pb-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <ul className="space-y-3">
                        {[
                            "Major Milestones from PMR07 to PMR23 Station in April'26 month",
                        ].map((title, idx) => (
                            <li key={idx}>
                                <a
                                    href="/progress-docs/project-updates.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-lg px-4 py-3 font-montserrat text-sm text-black font-semibold transition-opacity hover:opacity-80"
                                    style={{ background: '#E8449A26' }}
                                >
                                    <span className="flex shrink-0 items-center justify-center rounded">
                                        <img
                                            src="/project-profile-icons/icon-pdf.png"
                                            alt="PDF"
                                            width={34}
                                            height={34}
                                        />
                                    </span>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section> */}

            {/* ── Construction Gallery ── */}
            {images.length > 0 && (
                <section className="bg-white pt-6 pb-8">
                    <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                        {/* Subheading */}
                        <h2 className="mb-8 font-montserrat text-base font-semibold text-black sm:text-lg lg:text-[22px]">
                            Current Construction Updates
                        </h2>

                        {/* Image grid */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                            {visibleImages.map((img, idx) => {
                                const thumb = img.thumb_media?.url ?? img.media?.url ?? '';

                                return (
                                    <button
                                        key={img.id}
                                        type="button"
                                        className="aspect-square overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                                        onClick={() => openLightbox(idx)}
                                        aria-label={`View construction update ${idx + 1}`}
                                    >
                                        <img
                                            src={thumb}
                                            alt={`Construction update ${idx + 1}`}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Load More */}
                        {hasMore && (
                            <div className="mt-10 flex items-center gap-6">
                                <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, #d1d5db, transparent)' }} />
                                <button
                                    onClick={() => setVisibleCount((c) => c + LOAD_MORE_STEP)}
                                    className="shrink-0 cursor-pointer rounded-sm bg-brand px-8 py-2.5 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    Load More
                                </button>
                                <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
