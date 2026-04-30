import { Head } from '@inertiajs/react';
import LeadershipSection from '@/components/landing/LeadershipSection';

export default function Board() {
    return (
        <>
            <Head>
                <title>Board of Directors - Puneri Metro</title>
                <meta
                    name="description"
                    content="Meet the Board of Directors of Pune IT City Metro Rail Limited (PITCMRL) — the leaders guiding Pune Metro Line 3."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <section>
                <div className="mx-auto max-w-360">
                    <div className="max-h-100 overflow-hidden">
                        <img
                            src="/about/about-banner.png"
                            alt="Board of Directors - Puneri Metro"
                            className="h-full max-h-100 w-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <h1 className="mb-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                        Board of Directors
                    </h1>
                </div>
            </section>

            {/* ── Leadership Section ── */}
            <LeadershipSection showCeoTitle={false} showCfoTitle={false} />

        </>
    );
}
