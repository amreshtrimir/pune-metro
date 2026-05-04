import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const connectivityPoints = [
    {
        title: 'Integration with PMPML buses',
        description: 'Existing PMPML bus routes will support smooth connectivity between metro stations and nearby city areas.',
    },
    {
        title: 'Integration with private players for additional routes',
        description: 'Partnerships with private mobility providers will help extend connectivity beyond station zones.',
    },
    {
        title: 'Auto-rickshaw and cab pickup zones',
        description: 'Dedicated pickup and drop-off areas will support convenient onward travel for commuters.',
    },
    {
        title: 'Pedestrian walkways and foot over bridges',
        description: 'Safe pedestrian access will improve movement between stations and surrounding areas.',
    },
    {
        title: 'Parking facilities at selected stations',
        description: 'Parking provisions at select stations will support easier first and last-mile access.',
    },
];

export default function LastMileConnectivity() {
    return (
        <>
            <Head>
                <title>Last Mile Connectivity - Puneri Metro</title>
                <meta name="description" content="Explore last-mile connectivity options available at Pune Metro stations including buses, autos, and parking." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Last Mile Connectivity - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Last Mile Connectivity
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Built for Faster, Smarter, more Comfortable travel
                    </p>
                </div>
            </section>

            {/* ── Connectivity Points ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    {connectivityPoints.map((point) => (
                        <div key={point.title} className="mb-8 flex gap-3">
                            <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                            <div>
                                <h2 className="mb-1 font-montserrat text-base font-semibold text-black">{point.title}</h2>
                                <p className="font-inter text-sm text-gray-600">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
