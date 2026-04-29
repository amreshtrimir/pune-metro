import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

type Line = {
    id: string;
    label: string;
    image: string;
    imageAlt: string;
    stats: { value: string; unit: string; label: string }[];
};

const lines: Line[] = [
    {
        id: 'all',
        label: 'All line',
        image: '/landing/metro-network-map-all.png',
        imageAlt: 'Pune Metro Full Network Map',
        stats: [
            { value: '57.9', unit: 'km.', label: 'Total Network Length' },
            { value: '47', unit: '', label: 'Total Stations' },
            { value: '3', unit: '', label: 'Metro Lines' },
            { value: '04', unit: '', label: 'Interchange Connections' },
        ],
    },
    {
        id: 'line1',
        label: 'Line 3',
        image: '/landing/metro-network-map-line-1.png',
        imageAlt: 'Pune Metro Line 1 — PCMC to Swargate',
        stats: [
            { value: '17.4', unit: 'km.', label: 'Corridor Length' },
            { value: '14', unit: '', label: 'Metro Stations' },
            { value: '100%', unit: '', label: 'Elevated Alignment' },
            { value: '01', unit: '', label: 'Interchange Connections' },
        ],
    },
];

export default function RoutesSection() {
    const [activeId, setActiveId] = useState('all');
    const active = lines.find((l) => l.id === activeId) ?? lines[0];
    const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>();
    const { ref: contentRef, inView: contentInView } = useInView<HTMLDivElement>();

    return (
        <section id="routes" className="pt-16 pb-0" style={{
            minHeight: '866px',
            background: `
                linear-gradient(to bottom, transparent 0%, #9A0052 60%),
                repeating-linear-gradient(
                    to right,
                    #7a1545 0px,
                    #7a1545 32px,
                    #9A0052 32px,
                    #9A0052 38px
                )
            `,
        }}>
            <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                {/* ── Header ── */}
                <div ref={headerRef} className={`mb-6 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-1.5">
                        <span className="font-montserrat text-xs font-semibold text-white">
                            PUNERI Metro Route
                        </span>
                    </div>
                    <h2 className="mb-3 font-montserrat text-4xl font-bold text-white lg:text-5xl">
                        Routes &amp; Network
                    </h2>
                    <p className="mb-6 max-w-4xl font-montserrat text-sm leading-relaxed text-white/80">
                        Puneri Metro Line 3 connects one of the city's most important daily movement corridors, linking the
                        Hinjewadi IT hub with central Pune through a fully elevated route designed to improve commuter access,
                        reduce congestion and integrate with the wider metro network.
                    </p>

                    {/* Tab pills */}
                    <div className="relative flex flex-wrap items-center gap-2">
                        {lines.map((line) => (
                            <button
                                key={line.id}
                                onClick={() => setActiveId(line.id)}
                                className={`relative z-10 cursor-pointer rounded-full px-6 py-1.5 font-montserrat text-sm font-semibold transition-all ${
                                    activeId === line.id
                                        ? 'bg-white text-[#9A0052]'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                            >
                                {line.label}
                            </button>
                        ))}
                        {/* Fading horizontal line */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{
                                left: 0,
                                right: 0,
                                height: '1px',
                                background: 'linear-gradient(to right, transparent 180px, white 260px, transparent 100%)',
                                opacity: 0.4,
                            }}
                        />
                    </div>
                </div>

                {/* ── Map + Stats ── */}
                <div ref={contentRef} className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_260px]">

                    {/* Route map image — rounded top, flush bottom */}
                    <div
                        className="bg-white shadow-xl"
                        style={{ borderRadius: '25px 25px 0 0' }}
                    >
                        <div className="overflow-hidden p-4" style={{ borderRadius: '25px 25px 0 0' }}>
                            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                                <img
                                    key={active.id}
                                    src={active.image}
                                    alt={active.imageAlt}
                                    className="absolute inset-0 h-full w-full rounded-xl object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats column */}
                    <div className="flex flex-col gap-4">
                        {active.stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`rounded-xl px-6 py-5 transition-all duration-500 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                style={{
                                    background: 'linear-gradient(149.32deg, rgba(109, 0, 58, 0) 55.02%, #6D003A 102.53%)',
                                    transitionDelay: contentInView ? `${i * 100}ms` : '0ms',
                                }}
                            >
                                <p className="font-montserrat text-5xl font-bold text-white">
                                    {stat.value}
                                    {stat.unit && (
                                        <span className="ml-1 font-montserrat text-xl font-normal text-white/70">
                                            {stat.unit}
                                        </span>
                                    )}
                                </p>
                                <p className="mt-1 font-montserrat text-sm text-white/70">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

