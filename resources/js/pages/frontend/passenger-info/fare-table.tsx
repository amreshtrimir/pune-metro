import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
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
            <PageHeroBanner
                src="/banners/passenger-aminities/amenniteis.png"
                srcMd="/banners/passenger-aminities/amenniteis.png"
                srcLg="/banners/passenger-aminities/amenniteis.png"
                alt="Fare Table - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <PageSectionHeading>
                        Fare Table / Ticket Rules
                    </PageSectionHeading>
                    <p className="font-inter mt-3 text-sm leading-relaxed text-black">
                        Pune Metro Line 3 offers distance-based fares for all
                        commuters travelling across the Hinjawadi - Shivajinagar
                        corridor. Tickets can be purchased using NCMC card,
                        WhatsApp QR, Ticket Vending Machine or manual counter at
                        every station. Refer to the fare chart below for
                        complete details.
                    </p>
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
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        title="Click to enlarge"
                        className="block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-gray-200 bg-white"
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
