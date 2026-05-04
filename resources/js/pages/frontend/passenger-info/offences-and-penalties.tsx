import { Head } from '@inertiajs/react';

export default function OffencesAndPenalties() {
    return (
        <>
            <Head>
                <title>Offences and Penalties - Puneri Metro</title>
                <meta name="description" content="Learn about offences and corresponding penalties under the Pune Metro Railway rules." />
            </Head>

            {/* ── Hero Banner ── */}
            <section>
                <div className="relative flex h-[240px] items-end justify-end overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 md:h-[400px]">
                        <div className="absolute inset-0 bg-black/40" />
                        <p className="relative mb-6 mr-6 font-montserrat text-[clamp(32px,7vw,100px)] font-semibold leading-none text-white/25 select-none md:mb-10 md:mr-10">
                            PUNERI METRO
                        </p>
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Offences and Penalties
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="mt-10">
                        <a
                            href="/documents/offence- penalties.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#e8449a] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            View Offences and Penalties (PDF)
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
