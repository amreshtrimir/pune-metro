import { useState } from 'react';
import ImageLightbox from '@/components/ui/image-lightbox';
import { useInView } from '@/hooks/useInView';

type Line = {
    id: string;
    label: string;
    image: string;
    imageAlt: string;
};

const lines: Line[] = [
    {
        id: 'all',
        label: 'All line',
        image: '/landing/route-section/map-all-updated-new.png',
        imageAlt: 'Pune Metro Line 3 Full Network Map',
    },
    {
        id: 'line1',
        label: 'Line 3',
        image: '/landing/route-section/map-line-3-new.png',
        imageAlt: 'Pune Metro Line 3 Pink — Maan to District Court',
    },
];

export default function RoutesSection() {
    const [activeId, setActiveId] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const active = lines.find((l) => l.id === activeId) ?? lines[0];
    const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>();
    const { ref: contentRef, inView: contentInView } = useInView<HTMLDivElement>();

    return (
        <>
        {lightboxOpen && (
            <ImageLightbox
                src={active.image}
                alt={active.imageAlt}
                onClose={() => setLightboxOpen(false)}
            />
        )}
        <section id="routes" className="pt-16 pb-0 max-md:min-h-0!" style={{
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
            <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 lg:px-16">

                {/* ── Header ── */}
                <div ref={headerRef} className={`mb-6 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-4 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-1.5">
                        <span className="font-montserrat text-xs font-semibold text-white">
                            Pune Metro Line 3 Route
                        </span>
                    </div>
                    <h2 className="mb-3 font-montserrat text-4xl font-bold text-white lg:text-5xl">
                        Routes &amp; Network
                    </h2>
                    <p className="mb-6 max-w-4xl font-montserrat text-sm leading-relaxed text-white/80">
                        Pune Metro Line 3 connects one of the city's most important daily movement corridors, linking the
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

                {/* ── Map ── */}
                <div ref={contentRef} className={`transition-all duration-700 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div
                        className="bg-white shadow-xl"
                        style={{ borderRadius: '25px 25px 0 0' }}
                    >
                        <div className="overflow-hidden p-4 max-md:pb-0" style={{ borderRadius: '25px 25px 0 0' }}>
                            <div
                                className="relative w-full cursor-zoom-in"
                                style={{ aspectRatio: '16 / 9' }}
                                onClick={() => setLightboxOpen(true)}
                                title="Click to enlarge"
                            >
                                <img
                                    key={active.id}
                                    src={active.image}
                                    alt={active.imageAlt}
                                    className="absolute inset-0 h-full w-full rounded-xl object-contain transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-all duration-300 hover:bg-black/10">
                                    <span className="rounded-full bg-black/50 px-3 py-1.5 font-montserrat text-xs text-white opacity-0 transition-opacity duration-300 [div:hover>&]:opacity-100">
                                        Click to enlarge
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

