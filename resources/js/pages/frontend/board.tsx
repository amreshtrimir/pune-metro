import { Head } from '@inertiajs/react';
import LeadershipSection from '@/components/landing/LeadershipSection';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import BoardSection from '@/components/landing/BoardSection';

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
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Board of Directors - Puneri Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Board of Directors</PageSectionHeading>
                </div>
            </section>

            {/* ── Board Members ── */}
            <BoardSection showHeading={false} />
        </>
    );
}
