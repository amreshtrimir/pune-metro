import { Head } from '@inertiajs/react';
import { useState } from 'react';

import QuoteBanner from '@/components/landing/QuoteBanner';

const stats = [
    { value: '23.3', unit: 'km.', label: 'Corridor Length' },
    { value: '23', unit: '', label: 'Metro Stations' },
    { value: '100%', unit: '', label: 'Elevated Alignment' },
    { value: '02', unit: '', label: 'Interchange Connections' },
];

export default function RouteMap() {
    const [activeTab, setActiveTab] = useState<'all' | 'line3'>('all');

    return (
        <>
            <Head>
                <title>Route Map - Puneri Metro</title>
                <meta
                    name="description"
                    content="Explore the Pune Metro Line 3 route map — connecting Hinjewadi to Shivajinagar District Court across 23 stations."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <section>
                <div className="mx-auto max-w-360">
                    <div className="max-h-100 overflow-hidden">
                        <img
                            src="/project-profile/project-profile-banner.png"
                            alt="Route Map - Puneri Metro"
                            className="h-full max-h-100 w-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Route Map
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Description ── */}
            <section className="bg-white pt-6 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Puneri Metro Line 3 connects one of the city&apos;s most important daily movement corridors, linking the
                        Hinjewadi IT hub with central Pune through a fully elevated route designed to improve commuter access,
                        reduce congestion and integrate with the wider metro network.
                    </p>
                </div>
            </section>

            {/* ── Line Filter Tabs ── */}
            <section className="bg-white pt-8 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab('all')}
                            className="cursor-pointer rounded-full px-6 py-2 font-montserrat text-sm font-medium transition-colors"
                            style={
                                activeTab === 'all'
                                    ? { background: '#e8449a', color: '#fff' }
                                    : { background: 'rgba(196,110,156,0.14)', color: '#e8449a' }
                            }
                        >
                            All line
                        </button>
                        <button
                            onClick={() => setActiveTab('line3')}
                            className="cursor-pointer rounded-full px-6 py-2 font-montserrat text-sm font-medium transition-colors"
                            style={
                                activeTab === 'line3'
                                    ? { background: '#e8449a', color: '#fff' }
                                    : { background: 'rgba(196,110,156,0.14)', color: '#e8449a' }
                            }
                        >
                            Line 3
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Route Map Image ── */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="overflow-hidden rounded-3xl bg-white">
                        <img
                            src={
                                activeTab === 'all'
                                    ? '/landing/metro-network-map-all.png'
                                    : '/landing/metro-network-map-line-1.png'
                            }
                            alt={activeTab === 'all' ? 'Pune Metro All Lines Route Map' : 'Pune Metro Line 3 Route Map'}
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="relative overflow-hidden rounded-3xl px-8 py-12"
                                style={{ background: 'rgba(232,68,154,0.15)' }}
                            >
                                <div className="relative">
                                    <p className="font-montserrat font-medium text-black" style={{ fontSize: '40px', lineHeight: '1.2' }}>
                                        {stat.value}
                                        {stat.unit && (
                                            <span className="ml-1 font-montserrat text-sm font-normal">{stat.unit}</span>
                                        )}
                                    </p>
                                    <p className="mt-2 font-montserrat text-sm text-black">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quote CTA Banner ── */}
            <QuoteBanner>
                &ldquo;Whether you&rsquo;re planning your daily commute, exploring the city, or seeking a faster and smarter way
                to travel, Puneri Metro is here to transform your journey with comfort, efficiency, and modern
                connectivity.&rdquo;
            </QuoteBanner>
        </>
    );
}
