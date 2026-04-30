import { useInView } from '@/hooks/useInView';

type LeaderData = {
    name: string;
    bio: string;
    image: string;
    imageBg: string;
    watermark: string;
    titleLines?: string[];
};

type Props = {
    ceo?: LeaderData;
    cfo?: LeaderData;
    showCeoTitle?: boolean;
    showCfoTitle?: boolean;
};

const defaultCeo: LeaderData = {
    name: 'Mr. Anil Kumar Saini',
    bio: "Mr. Anil Kumar Saini brings over 30 years of leadership experience in rail transport, spanning project management, operations, and business development. He has led major assignments across India's rail and metro sectors, demonstrating strong expertise in execution and strategy. An IIT Roorkee graduate, he has also completed executive programs at Harvard Business School and INSEAD.",
    image: '/landing/leadership-section/ceo-anil-kumar-saini.png',
    imageBg: '#e8dfc0',
    watermark: 'CEO',
    titleLines: ['Chief', 'Executive', 'Officer'],
};

const defaultCfo: LeaderData = {
    name: 'Mr. Mitul Jhaveri',
    bio: 'Mr. Mitul Jhaveri has an overall experience of 22+ years in Corporate and Trade Finance, Business Finance, M&A Advisory, Project Finance and Equity Finance. He joined Siemens in the year 2007 and currently working in the equity finance group of Siemens Financial Services. He has previously worked with ICICI Bank and Indian Oil Corporation in their International Banking and Finance divisions respectively.',
    image: '/landing/leadership-section/cfo-mitul-jhaveri.png',
    imageBg: '#dce9f5',
    watermark: 'CFO',
    titleLines: ['Chief', 'Financial', 'Officer'],
};

export default function LeadershipSection({ ceo = defaultCeo, cfo = defaultCfo, showCeoTitle = true, showCfoTitle = true }: Props) {
    const { ref: ceoRef, inView: ceoInView } = useInView<HTMLDivElement>();
    const { ref: cfoRef, inView: cfoInView } = useInView<HTMLDivElement>();

    return (
        <section id="leadership" className="overflow-hidden">
            {/* Outer shell — max 1440px */}
            <div className="mx-auto w-full" style={{ maxWidth: '1440px' }}>

                    {/* ── Card 1: CEO ── */}
                    <div ref={ceoRef} className={`relative pb-16 lg:pb-24 transition-all duration-700 ${ceoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Per-card gradient background — full 1440px width */}
                        <div
                            className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                            style={{ top: '33.333%', background: 'linear-gradient(180deg, #F3F3F3 0%, #FFFFFF 100%)' }}
                        />
                        <div className="relative z-10 mx-auto max-w-360 px-6 lg:px-16">
                        <div
                            className="grid"
                            style={{ gridTemplateColumns: '1fr 2fr', gridTemplateRows: '1fr 1fr 1fr' }}
                        >
                        {/* [Col 1, Row 1] — Heading */}
                        <div
                            className="flex flex-col justify-center self-stretch px-8 lg:px-12"
                            style={{ gridColumn: '1', gridRow: '1' }}
                        >
                            {showCeoTitle && (
                                <h2 className="font-montserrat text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                                    {ceo.titleLines?.map((line) => (
                                        <span key={line} className="block">{line}</span>
                                    ))}
                                </h2>
                            )}
                        </div>

                        {/* [Col 1, Rows 2–3] — Watermark */}
                        <div
                            className="flex items-center justify-center"
                            style={{ gridColumn: '1', gridRow: '2 / 4' }}
                        >
                            <span
                                className="pointer-events-none select-none font-montserrat font-bold text-black/[0.06]"
                                style={{ fontSize: 'clamp(120px, 14vw, 160px)', lineHeight: 1 }}
                            >
                                {ceo.watermark}
                            </span>
                        </div>

                        {/* [Col 2, Rows 1–2] — Image */}
                        <div
                            className="flex items-start"
                            style={{ gridColumn: '2', gridRow: '1 / 3' }}
                        >
                            <div className="inline-block rounded-2xl" style={{ background: ceo.imageBg }}>
                                <img
                                    src={ceo.image}
                                    alt={ceo.name}
                                    className="block rounded-2xl object-cover object-top"
                                    style={{ height: '371px', width: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* [Col 2, Row 3] — Name + bio */}
                        <div
                            className="flex flex-col justify-start pt-6"
                            style={{ gridColumn: '2', gridRow: '3', maxWidth: '768px' }}
                        >
                            <p className="mb-1 font-montserrat text-[14px] font-semibold" style={{ color: '#000000' }}>
                                {ceo.name}
                            </p>
                            <p className="font-montserrat text-[14px] leading-relaxed" style={{ color: '#000000' }}>
                                {ceo.bio}
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>

                    {/* ── Card 2: CFO ── */}
                    <div ref={cfoRef} className={`relative pb-16 lg:pb-24 transition-all duration-700 ${cfoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Per-card gradient background — full 1440px width */}
                        <div
                            className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                            style={{ top: '33.333%', background: 'linear-gradient(180deg, #F3F3F3 0%, #FFFFFF 100%)' }}
                        />
                        <div className="relative z-10 mx-auto max-w-360 px-6 lg:px-16">
                        <div
                            className="grid"
                            style={{ gridTemplateColumns: 'auto 1fr', gridTemplateRows: '1fr 1fr auto' }}
                        >
                        {/* [Col 1, Rows 1–2] — Image */}
                        <div
                            className="flex items-start"
                            style={{ gridColumn: '1', gridRow: '1 / 3' }}
                        >
                            <div className="inline-block rounded-2xl" style={{ background: cfo.imageBg }}>
                                <img
                                    src={cfo.image}
                                    alt={cfo.name}
                                    className="block rounded-2xl object-cover object-top"
                                    style={{ height: '371px', width: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* [Col 2, Row 1] — Heading */}
                        <div
                            className="flex flex-col justify-center self-stretch pl-6 lg:pl-8"
                            style={{ gridColumn: '2', gridRow: '1' }}
                        >
                            {showCfoTitle && (
                                <h2 className="font-montserrat text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                                    {cfo.titleLines?.map((line) => (
                                        <span key={line} className="block">{line}</span>
                                    ))}
                                </h2>
                            )}
                        </div>

                        {/* [Col 2, Row 2] — Watermark */}
                        <div
                            className="flex items-center justify-start pl-6 lg:pl-8"
                            style={{ gridColumn: '2', gridRow: '2' }}
                        >
                            <span
                                className="pointer-events-none select-none font-montserrat font-bold text-black/[0.06]"
                                style={{ fontSize: 'clamp(120px, 14vw, 160px)', lineHeight: 1 }}
                            >
                                {cfo.watermark}
                            </span>
                        </div>

                        {/* [Col 1+2, Row 3] — Name + bio (full width) */}
                        <div
                            className="flex flex-col justify-start pt-6"
                            style={{ gridColumn: '1 / -1', gridRow: '3', maxWidth: '768px' }}
                        >
                            <p className="mb-1 font-montserrat text-[14px] font-semibold" style={{ color: '#000000' }}>
                                {cfo.name}
                            </p>
                            <p className="font-montserrat text-[14px] leading-relaxed" style={{ color: '#000000' }}>
                                {cfo.bio}
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>

            </div>
        </section>
    );
}

