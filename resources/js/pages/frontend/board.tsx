import { Head } from '@inertiajs/react';
import BoardSection from '@/components/landing/BoardSection';

import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import type { BoardMember } from '@/types/cms';

type Props = {
    members: BoardMember[];
};

export default function Board({ members }: Props) {
    return (
        <>
            <Head>
                <title>Board of Directors - Pune Metro</title>
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
                alt="Board of Directors - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Board of Directors</PageSectionHeading>
                </div>
            </section>

            {/* ── Board Members ── */}
            <BoardSection showHeading={false} members={members} />
        </>
    );
}
