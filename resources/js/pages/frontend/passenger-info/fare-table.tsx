import { Head } from '@inertiajs/react';
import { useState } from 'react';
import FareMatrix from '@/components/landing/FareMatrix';
import type { FareStation } from '@/components/landing/FareMatrix';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import ImageLightbox from '@/components/ui/image-lightbox';

const fareChartSrc = '/fare-table/pune-metro-fare-chart.png';
const fareChartAlt =
    'Pune Metro Line 3 fare chart: fares between all 23 stations from Maan to District Court, Pune';

export default function FareTable({
    stations,
    fares,
}: {
    stations: FareStation[];
    fares: number[][];
}) {
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
                    <p className="font-inter mt-3 text-sm text-black">
                        Fares in rupees between all 23 stations of Pune Metro
                        Line 3 (Pink line). Find your starting station on the
                        left and your destination along the top; the number
                        where they meet is your fare.
                    </p>
                </div>
            </section>

            {/* ── Fare Matrix ── */}
            {lightboxOpen && (
                <ImageLightbox
                    src={fareChartSrc}
                    alt={fareChartAlt}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
            <section className="bg-white pt-6 pb-8 md:pt-8 md:pb-24">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <div className="mb-4 flex justify-end">
                        <button
                            type="button"
                            onClick={() => setLightboxOpen(true)}
                            className="rounded-md bg-brand-dark px-5 py-2.5 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            View original chart
                        </button>
                    </div>
                    <FareMatrix stations={stations} fares={fares} />
                </div>
            </section>
        </>
    );
}
