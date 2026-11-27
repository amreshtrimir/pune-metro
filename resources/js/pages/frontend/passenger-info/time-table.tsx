import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import ImageLightbox from '@/components/ui/image-lightbox';

const timeTableSrc = '/time-table/pink-line-time-table.png';
const timeTableAlt =
    'Pune Metro Pink Line time table: service time, frequency, travel time and distance from Maan to District Court';

export default function TimeTable() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

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
            {lightboxOpen && <ImageLightbox src={timeTableSrc} alt={timeTableAlt} onClose={() => setLightboxOpen(false)} />}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        title="Click to enlarge"
                        className="block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-gray-200 bg-white"
                    >
                        <img src={timeTableSrc} alt={timeTableAlt} className="h-auto w-full object-contain" />
                    </button>
                    <p className="mt-3 font-montserrat text-xs text-gray-500">Tap or click the time table to zoom in.</p>
                </div>
            </section>

            {/* ── Download PDF ── */}
            <section className="bg-white pt-8 pb-10 md:pt-10 md:pb-24">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <a
                        href="/documents/pink-line-time-table.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        Download Time Table (PDF)
                    </a>
                </div>
            </section>
        </>
    );
}
