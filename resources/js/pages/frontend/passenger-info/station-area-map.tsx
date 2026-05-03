import { Head } from '@inertiajs/react';

export default function StationAreaMap() {
    return (
        <>
            <Head>
                <title>Station Area Map - Puneri Metro</title>
                <meta name="description" content="View station area maps for all Pune Metro stations with surroundings and accessibility information." />
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
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Station Area Map
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0" />
            </section>
        </>
    );
}
