import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const lmcItems = [
    'Feeder bus services (PMPML & MSRTC)',
    'Corporate mobility solutions (Svida)',
    'Auto rickshaws and local transport',
    'Planned pick-up and drop-off zones',
];

export default function LastMileConnectivity() {
    return (
        <>
            <Head>
                <title>Last Mile Connectivity - Pune Metro</title>
                <meta name="description" content="Explore last-mile connectivity options available at Pune Metro stations including buses, autos, and parking." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/items-not-carry/items-not-carry-banner-md.png"
                srcMd="/banners/items-not-carry/items-not-carry-banner-md.png"
                srcLg="/banners/items-not-carry/items-not-carry-banner-lg.png"
                alt="Last Mile Connectivity - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-8 pb-0 mb-5 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading wrap>Last Mile Connectivity (LMC) – Pune Metro Line 3</PageSectionHeading>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-8 md:pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8 space-y-4">
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Pune Metro Line 3 (Hinjewadi – Shivajinagar Corridor) is supported by a well-planned Last Mile
                        Connectivity (LMC) network to ensure smooth and convenient travel between metro stations and
                        final destinations. The aim is to provide seamless access across key IT hubs, residential areas,
                        commercial zones, and important transit points along the corridor.
                    </p>

                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        PMPML buses will act as the primary feeder service, operating on routes aligned with metro
                        stations to offer reliable and affordable connectivity across areas such as Hinjewadi Phase I,
                        II, III, Balewadi, Baner, University Circle, and Shivajinagar. To further improve regional
                        access, MSRTC buses will connect passengers from nearby towns to major metro stations.
                    </p>

                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        For the Hinjewadi IT corridor, Svida has been appointed as a dedicated LMC operator, providing
                        organised and technology-enabled transport solutions for corporate commuters, ensuring easy
                        connectivity between metro stations and office campuses.
                    </p>

                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        The LMC framework is designed as a multi-modal system, including:
                    </p>

                    <ul className="space-y-2 pl-1">
                        {lmcItems.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-[#e8449a]" />
                                <span className="font-montserrat text-sm text-black">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Together, these initiatives aim to deliver a smooth, connected, and end-to-end travel experience
                        for all commuters along Pune Metro Line 3.
                    </p>
                </div>
            </section>
        </>
    );
}
