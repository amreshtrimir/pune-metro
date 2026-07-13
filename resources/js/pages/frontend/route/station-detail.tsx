import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import { stationList } from '@/routes/route';
import type { Station } from '@/types/cms';

type Props = { station: Station };

const NAV_ITEMS = [
    { id: 'map', label: 'Map' },
    { id: 'entrances', label: 'Entrances' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'lifts', label: 'Lifts & Escalators' },
    { id: 'facilities', label: 'Station Facilities' },
    { id: 'nearby', label: 'Nearby Places' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'transport', label: 'Transport' },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-[#e8449a]" />
            <h2 className="font-montserrat text-base font-bold text-black sm:text-lg">{children}</h2>
        </div>
    );
}

function EmptyState({ label }: { label: string }) {
    return (
        <p className="font-montserrat text-sm italic text-gray-400">
            {label} information will be updated soon.
        </p>
    );
}

function MapEmbed({ embedHtml, title }: { embedHtml: string | null; title: string }) {
    if (!embedHtml) {
        return null;
    }

    if (embedHtml.trim().startsWith('<iframe')) {
        return <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: embedHtml }} />;
    }

    return (
        <iframe
            src={embedHtml}
            title={title}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}

function EmergencyIcon({ type }: { type: string }) {
    if (type === 'Hospital') {
        return (
            <svg className="size-5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === 'Police Station') {
        return (
            <svg className="size-5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        );
    }

    return (
        <svg className="size-5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
    );
}

export default function StationDetail({ station }: Props) {
    const hasData = station.entrances.length > 0;
    const mapEmbedUrl = station.embedMapUrl || 'https://maps.google.com/maps?q=18.5777367,73.6961295&hl=en&z=16&output=embed';
    const stickyRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const sticky = stickyRef.current;

        if (!sticky) {
            return;
        }

        const updateScrollMargins = () => {
            const h = sticky.offsetHeight;

            NAV_ITEMS.forEach(({ id }) => {
                const el = document.getElementById(id);

                if (el) {
                    el.style.scrollMarginTop = `${h}px`;
                }
            });
        };

        const observer = new ResizeObserver(updateScrollMargins);
        observer.observe(sticky);
        updateScrollMargins();

        return () => observer.disconnect();
    }, [hasData]);

    return (
        <>
            <Head>
                <title>{`${station.name} (${station.code}) - Pune Metro`}</title>
                <meta
                    name="description"
                    content={`Station details for ${station.name} (${station.code}) on Pune Metro Line 3 – Hinjawadi to District Court, Pune.`}
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/route/route-banner-md.png"
                srcMd="/banners/route/route-banner-md.png"
                srcLg="/banners/route/route-banner-lg.png"
                alt={`${station.name} Station - Pune Metro`}
            />

            {/* ── Sticky Station Header + Tab Nav ── */}
            <div ref={stickyRef} className="sticky top-16 z-40">
                {/* Pink station header */}
                <div className="bg-[#e8449a]">
                    <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                        <div className="flex flex-col gap-1 py-3 sm:py-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <Link
                                    href={stationList.url()}
                                    className="mb-2 inline-flex items-center gap-1 font-montserrat text-xs text-white/80 hover:text-white"
                                >
                                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Station List
                                </Link>
                                <h1 className="font-montserrat text-xl font-bold text-white sm:text-2xl">{station.name}</h1>
                                <p className="mt-1 font-montserrat text-sm text-white/80">Line 3 — Hinjawadi to District Court, Pune</p>
                            </div>
                            <div className="shrink-0 rounded-xl bg-white/20 px-5 py-3 text-center backdrop-blur-sm">
                                <p className="font-montserrat text-xs font-medium uppercase tracking-widest text-white/70">Station Code</p>
                                <p className="font-montserrat text-2xl font-bold text-white">{station.code}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab nav */}
                <div className="border-b border-gray-100 bg-white shadow-sm">
                    <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                        <nav className="flex gap-0 overflow-x-auto scrollbar-hide">
                            {(hasData ? NAV_ITEMS : NAV_ITEMS.filter((i) => i.id === 'map')).map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="shrink-0 border-b-2 border-transparent px-4 py-3 font-montserrat text-xs font-semibold text-gray-500 transition hover:border-[#e8449a] hover:text-[#e8449a]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="bg-gray-50 py-6 md:py-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="flex flex-col gap-4 md:gap-6">
                        {/* ── Map ── */}
                        <section id="map" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                            <SectionHeading>Station Location</SectionHeading>
                            {station.mapKey ? (
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <a
                                        href={station.mapKey}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center rounded-full bg-[#e8449a] px-4 py-2 font-montserrat text-xs font-semibold text-white transition hover:bg-[#cf2d81]"
                                    >
                                        Open Business Profile
                                    </a>
                                    <span className="font-montserrat text-xs text-gray-500">
                                        Google share link from the station profile
                                    </span>
                                </div>
                            ) : null}
                            <div className="overflow-hidden rounded-xl border border-gray-200">
                                <div className="h-[250px] sm:h-[400px]">
                                    <MapEmbed embedHtml={mapEmbedUrl} title={`${station.name} - Station Location`} />
                                </div>
                            </div>
                        </section>

                    {!hasData ? (
                        <div className="rounded-2xl border border-gray-100 bg-white px-4 py-10 sm:px-8 sm:py-14 text-center shadow-sm">
                            <svg className="mx-auto mb-4 size-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="font-montserrat text-base font-semibold text-gray-700">Detailed information coming soon</p>
                            <p className="mt-1 font-montserrat text-sm text-gray-400">Station details for {station.name} will be updated shortly.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 md:gap-6">

                            {/* Entrances */}
                            <section id="entrances" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Entrances</SectionHeading>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {station.entrances.map((e, i) => (
                                        <div key={i} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fce3f0]">
                                                <svg className="size-4 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-montserrat text-xs font-bold text-[#e8449a]">{e.gate}</p>
                                                <p className="mt-0.5 font-montserrat text-sm text-gray-700">{e.landmarks}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Platforms */}
                            <section id="platforms" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Platforms</SectionHeading>
                                {station.platforms.length === 0 ? (
                                    <EmptyState label="Platform" />
                                ) : (
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {station.platforms.map((p, i) => (
                                            <div key={i} className="relative overflow-hidden rounded-xl border border-[#e8449a]/20 bg-linear-to-br from-[#e8449a]/5 to-[#e8449a]/10 p-5">
                                                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#e8449a]">{p.number}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <svg className="size-4 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                    <p className="font-montserrat text-sm font-medium text-gray-800">{p.direction}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>

                            {/* Lifts & Escalators */}
                            <section id="lifts" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Lifts &amp; Escalators</SectionHeading>
                                {station.liftsEscalators.length === 0 ? (
                                    <EmptyState label="Lift & escalator" />
                                ) : (
                                    <>
                                        {/* Mobile: cards */}
                                        <div className="grid grid-cols-1 gap-3 sm:hidden">
                                            {station.liftsEscalators.map((item, i) => {
                                                const isLift = item.name.toLowerCase().includes('lift');
                                                return (
                                                    <div key={i} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fce3f0]">
                                                            {isLift ? (
                                                                <svg className="size-4 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7M12 3v18" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="size-4 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 9 9-9" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="font-montserrat text-xs font-bold text-[#e8449a]">{item.name}</p>
                                                            <p className="mt-0.5 font-montserrat text-sm text-gray-700">{item.level}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* Desktop: table */}
                                        <div className="hidden sm:block overflow-x-auto">
                                            <table className="w-full min-w-96 border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50">
                                                        <th className="px-4 py-3 text-left font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-500">Unit</th>
                                                        <th className="px-4 py-3 text-left font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-500">Level / Detail</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {station.liftsEscalators.map((item, i) => (
                                                        <tr key={i} className="transition hover:bg-gray-50/60">
                                                            <td className="px-4 py-3 font-montserrat text-sm font-semibold text-[#e8449a]">{item.name}</td>
                                                            <td className="px-4 py-3 font-montserrat text-sm text-gray-700">{item.level}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )}
                            </section>

                            {/* Station Facilities */}
                            <section id="facilities" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Station Facilities</SectionHeading>
                                {station.facilities.length === 0 ? (
                                    <EmptyState label="Facilities" />
                                ) : (
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {station.facilities.map((f, i) => (
                                            <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                                                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fce3f0]">
                                                    <svg className="size-3.5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <p className="font-montserrat text-xs font-bold text-gray-900">{f.name}</p>
                                                    <p className="mt-0.5 font-montserrat text-xs text-gray-500">{f.location}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>

                            {/* Nearby Places */}
                            <section id="nearby" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Nearby Places</SectionHeading>
                                {station.nearbyPlaces.length === 0 ? (
                                    <EmptyState label="Nearby places" />
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        {station.nearbyPlaces.map((place, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full border border-[#e8449a]/20 bg-[#fce3f0] px-4 py-1.5 font-montserrat text-sm font-medium text-[#e8449a]"
                                            >
                                                {place}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </section>

                            {/* Emergency Facilities */}
                            <section id="emergency" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Emergency Facilities</SectionHeading>
                                {station.emergency.length === 0 ? (
                                    <EmptyState label="Emergency facilities" />
                                ) : (
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {station.emergency.map((e, i) => (
                                            <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                                                <div className="mb-3 flex items-center gap-2">
                                                    <EmergencyIcon type={e.type} />
                                                    <span className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#e8449a]">{e.type}</span>
                                                </div>
                                                <p className="font-montserrat text-sm font-semibold text-gray-900">{e.name}</p>
                                                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
                                                    <span className="font-montserrat text-xs font-bold text-gray-700">{e.distance}</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span className="font-montserrat text-xs text-gray-500">🚶 {e.walking}</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span className="font-montserrat text-xs text-gray-500">🚗 {e.car}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>

                            {/* Transport Connections */}
                            <section id="transport" className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                                <SectionHeading>Transport Connections</SectionHeading>
                                {station.transport.length === 0 ? (
                                    <EmptyState label="Transport connections" />
                                ) : (
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {station.transport.map((t, i) => (
                                            <div key={i} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fce3f0]">
                                                    {t.type === 'Airport' ? (
                                                        <svg className="size-5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="size-5 text-[#e8449a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#e8449a]">{t.type}</p>
                                                    <p className="mt-0.5 font-montserrat text-sm font-medium text-gray-900">{t.name}</p>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <span className="font-montserrat text-xs font-bold text-gray-700">{t.distance}</span>
                                                        <span className="text-gray-300">|</span>
                                                        <span className="font-montserrat text-xs text-gray-500">🚗 {t.car}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>

                        </div>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}
