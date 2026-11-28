import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import ImageLightbox from '@/components/ui/image-lightbox';

const desktopSrc = '/time-table/pink-line-frequency-desktop.png';
const mobileSrc = '/time-table/pink-line-frequency-mobile.png';
const timeTableAlt =
    'Pune Metro Pink Line time table: train frequency, travel time and distance from Maan, Hinjawadi to District Court';
const lastTrainImages = [
    {
        src: '/time-table/last-train-maan-to-district-court.png',
        alt: 'Pune Metro Pink Line last train timings from Maan to District Court',
    },
    {
        src: '/time-table/last-train-district-court-to-maan.png',
        alt: 'Pune Metro Pink Line last train timings from District Court to Maan',
    },
];

function DownloadButton({ href, children }: { href: string; children: string }) {
    return (
        <a
            href={href}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[#e8449a] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
            </svg>
            {children}
        </a>
    );
}

export default function TimeTable() {
    const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
    // Whichever image the browser picked for this screen, so zoom and download use the same one.
    const [shownSrc, setShownSrc] = useState(desktopSrc);

    return (
        <>
            <Head>
                <title>Time Table - Pune Metro Line 3</title>
                <meta name="description" content="View the Pune Metro Line 3 train time table for all lines and stations." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Pune Metro Line 3 Train"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <PageSectionHeading>Time Table</PageSectionHeading>
                </div>
            </section>

            {/* ── Time Table Image ── */}
            {zoomedImage && <ImageLightbox {...zoomedImage} onClose={() => setZoomedImage(null)} />}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <button
                        type="button"
                        onClick={() => setZoomedImage({ src: shownSrc, alt: timeTableAlt })}
                        title="Click to enlarge"
                        className="block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-gray-200 bg-white"
                    >
                        <picture>
                            <source media="(max-width: 767px)" srcSet={mobileSrc} />
                            <img
                                src={desktopSrc}
                                alt={timeTableAlt}
                                onLoad={(e) => setShownSrc(e.currentTarget.currentSrc)}
                                className="h-auto w-full object-contain"
                            />
                        </picture>
                    </button>
                    <p className="mt-3 font-montserrat text-xs text-gray-500">Tap or click the time table to zoom in.</p>
                </div>
            </section>

            {/* ── Last Train Timings ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto grid max-w-[1303px] gap-6 px-6 md:grid-cols-2 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    {lastTrainImages.map((image) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setZoomedImage(image)}
                            title="Click to enlarge"
                            className="block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-gray-200 bg-white"
                        >
                            <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full" />
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Downloads ── */}
            <section className="bg-white pt-8 pb-10 md:pt-10 md:pb-24">
                <div className="mx-auto flex max-w-[1303px] flex-col items-start gap-3 px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <DownloadButton href={shownSrc}>Download Time Table</DownloadButton>
                    <DownloadButton href="/documents/pune-metro-line-3-last-train-timings.pdf">Download Last Train Timings</DownloadButton>
                </div>
            </section>
        </>
    );
}
