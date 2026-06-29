import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import QuoteBanner from '@/components/landing/QuoteBanner';

const highlights = [
    {
        title: 'Infrastructure & Connectivity',
        bullets: ['23.3 km elevated corridor', '23 stations', 'Hinjewadi to Shivajinagar', 'Covers key IT and business hubs', 'Precision-engineered elevated trackway'],
        icon: '/project-profile/key-heighlight-icons/flexible-infrastructure 1.png',
    },
    {
        title: 'Operation & Maintenance (O&M)',
        bullets: ['O&M Partner: M/s Keolis', 'All-Women Pilot Workforce', 'Rooftop Solar at Depot & Stations'],
        icon: '/project-profile/key-heighlight-icons/connectivity 1.png',
    },
    {
        title: 'Technology',
        bullets: ['CBTC signalling', '750V DC electrification','Modern stainless-steel rolling stock', '⁠Precision-engineered elevated trackway', 'Siemens Project Ventures GmbH for Systems and Signalling', 'Alstom for Rolling Stock', 'Datamatics for IT and Data Systems'],
        icon: '/project-profile/key-heighlight-icons/ad-tech 1.png',
    },
    {
        title: 'Project Model',
        bullets: ['DBFOT PPP framework', 'PITCMRL as Concessionaire (Tata Group + Siemens AG)', 'Tata Projects Limited (TPL) as EPC Contractor', ],
        icon: '/project-profile/key-heighlight-icons/3d-model-viewer 1.png',
    },
];

const projectHighlights = [
    {
        title: 'Enhancing Urban Connectivity',
        description:
            "Strengthening Pune's vital IT corridor by connecting Hinjewadi to Shivajinagar via a 23.3 km fully elevated metro line featuring 23 modern stations.",
    },
    {
        title: 'Transforming the Commuter Experience',
        description:
            'Effectively addressing traffic congestion faced by residents and working professionals to enable seamless urbanization. This air-conditioned, safe, and high-speed transit mode will significantly reduce travel times, fuel costs, and environmental pollution. By improving accessibility, it serves as a catalyst for regional investment and long-term prosperity.',
    },
    {
        title: 'Customer-Centric Approach',
        description:
            'Adopting a \u201cThink Like the Customer\u201d philosophy to deliver inclusive and accessible infrastructure. Key features include ergonomic design, real-time passenger information systems, seamless ticketing, and an uncompromising commitment to safety.',
    },
    {
        title: 'Sustainable Development',
        description:
            'Dedicated to environmentally responsible practices, including green construction methods, waste reduction, and large-scale tree transplantation. We maintain rigorous environmental monitoring throughout the project lifecycle to ensure a greener future for Pune.',
    },
    {
        title: 'Solar Power Integration',
        description:
            'Solar panels installed across stations and depot facilities will generate clean, renewable energy to support metro operations, significantly reducing dependence on conventional power sources and lowering overall operational energy costs.',
    },
    // {
    //     title: 'Carbon Credit & Environmental Responsibility',
    //     description:
    //         'By shifting thousands of daily commuters from private vehicles to public transport, Pune Metro Line 3 will contribute to a measurable reduction in carbon emissions across Pune, actively earning carbon credits through its sustainable operations and energy-efficient systems.',
    // },
    {
        title: 'Last-Mile Connectivity',
        description:
            'Comprehensive last-mile solutions; including PMPML bus integration, dedicated cab and auto-rickshaw pickup zones, pedestrian walkways, and station parking, will ensure a seamless, end-to-end travel experience for every commuter.',
    },
];

export default function KeyHighlights() {
    return (
        <>
            <Head>
                <title>Key Highlights - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Discover the key highlights and milestones of Pune Metro Line 3 — a landmark public-private partnership in Indian urban transit."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Key Highlights - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Key Highlights</PageSectionHeading>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="bg-white py-6">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <p className="font-montserrat text-base leading-relaxed text-gray-700">
                        Pune Metro Line 3 brings together large-scale infrastructure, advanced metro systems, and city-wide
                        connectivity across one of Pune&apos;s most important urban corridors.
                    </p>
                </div>
            </section>

            {/* ── Highlight Cards ── */}
            <section className="bg-white py-6 md:py-8">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-10">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl p-6 lg:p-8"
                                style={{ background: '#E8449A26', minHeight: '310px' }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    style={{ width: '63px', height: '63px', marginBottom: '16px' }}
                                />
                                <h3 className="mb-3 font-montserrat text-lg font-semibold text-black md:text-2xl">{item.title}</h3>
                                <ul className="list-disc space-y-1 pl-5">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet} className="font-montserrat text-sm text-black">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Chronology of Major Milestones ── */}
            <section className="bg-white py-6 md:py-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <h2 className="font-montserrat text-lg font-semibold text-black mb-4 md:text-2xl md:mb-5">Chronology of Major Milestones</h2>
                    {/* Mobile image */}
                    <img
                        src="/key-highlight/chronology/chronology-mobile.png"
                        alt="Chronology of Major Milestones - Mobile"
                        className="mt-6 w-full block md:hidden"
                    />
                    {/* Desktop image */}
                    <img
                        src="/Pune-Metro-milestone-map-B-png.png"
                        alt="Chronology of Major Milestones"
                        className="mt-6 w-full hidden md:block"
                    />
                </div>
            </section>

            {/* ── Project Highlights ── */}
            <section className="bg-white py-6">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <h2 className="font-montserrat text-lg font-semibold text-black mb-4 md:text-2xl md:mb-5">Project Highlights</h2>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        {/* Left: numbered highlights */}
                        <div className="w-full space-y-10 lg:order-1">
                            {projectHighlights.map((item, index) => (
                                <div key={item.title}>

                                    <h3 className="mb-3 font-montserrat text-base font-semibold text-black md:text-xl">
                                        {index + 1}. {item.title}
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">{item.description}</p>
                                    <div className="mt-4 mb-0">
                                        {index === 0 && <div className="h-0.5 w-48 rounded-full bg-brand" />}
                                        <div className="h-px w-full bg-gray-300" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: image */}
                        <div className="overflow-hidden rounded-3xl lg:order-2 lg:ml-auto" style={{ background: 'rgba(109,0,58,0.1)', maxWidth: '592px', width: '100%' }}>
                            <img
                                src="/project-profile/key-high-point-new.png"
                                alt="Pune Metro Line 3 Project Highlights"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <QuoteBanner>
                Whether you&rsquo;re planning your daily commute, exploring the city, or seeking a faster and smarter way to
                travel, Pune Metro Line 3 is here to transform your journey with comfort, efficiency, and modern connectivity.
            </QuoteBanner>
        </>
    );
}
