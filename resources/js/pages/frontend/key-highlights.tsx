import { Head } from '@inertiajs/react';
import QuoteBanner from '@/components/landing/QuoteBanner';

const highlights = [
    {
        title: 'Infrastructure',
        bullets: ['23.3 km elevated corridor', '23 stations'],
    },
    {
        title: 'Connectivity',
        bullets: ['Hinjewadi to Shivajinagar', 'Covers key IT and business hubs'],
    },
    {
        title: 'Technology',
        bullets: ['CBTC signalling', '750V DC electrification'],
    },
    {
        title: 'Project Model',
        bullets: ['DBFOT PPP framework', 'Tata Projects + Siemens execution'],
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
];

const stationsLeft = [
    { code: 'PMR 1', name: 'Maan' },
    { code: 'PMR 2', name: 'MIDC Circle Phase II' },
    { code: 'PMR 3', name: 'Bus Depot, Maan' },
    { code: 'PMR 4', name: 'Hinjewadi Phase II' },
    { code: 'PMR 5', name: 'Bodakewadi' },
    { code: 'PMR 6', name: 'Padmabhushan Chowk' },
    { code: 'PMR 7', name: 'Chhatrapati Shivaji Maharaj Chowk' },
    { code: 'PMR 8', name: 'Hinjewadi Phase I' },
    { code: 'PMR 9', name: 'Wakad Chowk' },
    { code: 'PMR 10', name: 'Shree Shiv Chhatrapati Sports Complex Mahalunge' },
    { code: 'PMR 11', name: 'MITCON' },
    { code: 'PMR 12', name: 'RK Laxman Museum Ramnagar' },
];

const stationsRight = [
    { code: 'PMR 13', name: 'Balewadi High Street' },
    { code: 'PMR 14', name: 'Balewadi Phata' },
    { code: 'PMR 15', name: 'Baner Gaon' },
    { code: 'PMR 16', name: 'Baner Pashan Link Road' },
    { code: 'PMR 17', name: 'Aundh' },
    { code: 'PMR 18', name: 'Sakal Nagar' },
    { code: 'PMR 19', name: 'Savitribai Phule Pune University' },
    { code: 'PMR 20', name: 'Bhosale Nagar' },
    { code: 'PMR 21', name: 'Agriculture College' },
    { code: 'PMR 22', name: 'Shivaji Nagar' },
    { code: 'PMR 23', name: 'District Court' },
];

export default function KeyHighlights() {
    return (
        <>
            <Head>
                <title>Key Highlights - Puneri Metro</title>
                <meta
                    name="description"
                    content="Discover the key highlights and milestones of Pune Metro Line 3 — a landmark public-private partnership in Indian urban transit."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <section>
                <div className="max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src="/project-profile/project-profile-banner.png"
                        alt="Key Highlights - Puneri Metro"
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Key Highlights
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="bg-white py-6">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <p className="font-montserrat text-base leading-relaxed text-gray-700">
                        Puneri Metro Line 3 brings together large-scale infrastructure, advanced metro systems, and city-wide
                        connectivity across one of Pune&apos;s most important urban corridors.
                    </p>
                </div>
            </section>

            {/* ── Highlight Cards ── */}
            <section className="bg-white py-8">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="rounded-3xl p-8"
                                style={{ background: index === 0 ? 'rgba(232,68,154,0.15)' : 'rgba(243,243,243,1)' }}
                            >
                                <h3 className="mb-3 font-montserrat text-2xl font-semibold text-black">{item.title}</h3>
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

            {/* ── Project Highlights ── */}
            <section className="bg-white py-12">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <h2 className="font-montserrat text-3xl font-semibold text-black">Project Highlights</h2>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        {/* Left: numbered highlights */}
                        <div className="w-full space-y-10">
                            {projectHighlights.map((item, index) => (
                                <div key={item.title}>

                                    <h3 className="mb-3 font-montserrat text-2xl font-semibold text-black">
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
                        <div className="overflow-hidden rounded-3xl" style={{ background: 'rgba(109,0,58,0.1)', maxWidth: '592px', width: '100%' }}>
                            <img
                                src="/project-profile/key-highlights-side.png"
                                alt="Puneri Metro Project Highlights"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── List of Stations ── */}
            <section className="bg-white py-12">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <h2 className="mb-8 font-montserrat text-3xl font-semibold text-black">List of Stations</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Left table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[128px_1fr] bg-[#fce3f0]">
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">NAME</div>
                            </div>
                            {stationsLeft.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[128px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.name}</div>
                                </div>
                            ))}
                        </div>

                        {/* Right table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[128px_1fr] bg-[#fce3f0]">
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">NAME</div>
                            </div>
                            {stationsRight.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[128px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <QuoteBanner>
                Whether you&rsquo;re planning your daily commute, exploring the city, or seeking a faster and smarter way to
                travel, Puneri Metro is here to transform your journey with comfort, efficiency, and modern connectivity.
            </QuoteBanner>
        </>
    );
}
