import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import ImageLightbox from '@/components/ui/image-lightbox';

const fareChartSrc = '/fare-table/pune-metro-fare-chart.png';
const fareChartAlt =
    'Pune Metro Line 3 fare chart: fares between all 23 stations from Maan to District Court, Pune';

export default function FareTable() {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Fare Table / Ticket Rules - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="View the Pune Metro Line 3 fare table and ticket rules for all routes."
                />
            </Head>

            {/* ── Hero Banner ── */}
            <section>
                <div className="relative flex h-[240px] items-end justify-end overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 md:h-[400px]">
                    <div className="absolute inset-0 bg-black/40" />
                    <p className="relative mr-6 mb-6 font-montserrat text-[clamp(32px,7vw,100px)] leading-none font-semibold text-white/25 select-none md:mr-10 md:mb-10">
                        Pune METRO
                    </p>
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <PageSectionHeading>
                        Fare Table / Ticket Rules
                    </PageSectionHeading>
                </div>
            </section>

            {/* ── Content ── */}
            {lightboxOpen && (
                <ImageLightbox
                    src={fareChartSrc}
                    alt={fareChartAlt}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
            <section className="bg-white pt-6 pb-8 md:pt-8 md:pb-24">
                {/* No max-width: the chart is dense, so it uses the full page width instead of the content container */}
                <div className="w-full px-3 md:px-4">
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        title="Click to enlarge"
                        className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white"
                    >
                        <img
                            src={fareChartSrc}
                            alt={fareChartAlt}
                            className="h-auto w-full object-contain"
                        />
                    </button>
                    <p className="mt-3 font-montserrat text-xs text-gray-500">
                        Tap or click the chart to zoom in.
                    </p>
                </div>
            </section>
        </>
    );
}
