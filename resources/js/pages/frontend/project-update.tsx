import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const constructionImages = [
    '/project-update/construction-1.png',
    '/project-update/construction-2.png',
    '/project-update/construction-3.png',
    '/project-update/construction-4.png',
    '/project-update/construction-5.png',
    '/project-update/construction-6.png',
    '/project-update/construction-7.png',
    '/project-update/construction-8.png',
    '/project-update/construction-9.png',
    '/project-update/construction-10.png',
    '/project-update/construction-11.png',
    '/project-update/construction-12.png',
];

const INITIAL_COUNT = 8;
const LOAD_MORE_STEP = 4;

export default function ProjectUpdate() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const visibleImages = constructionImages.slice(0, visibleCount);
    const hasMore = visibleCount < constructionImages.length;

    return (
        <>
            <Head>
                <title>Project Update - Puneri Metro</title>
                <meta
                    name="description"
                    content="Stay up to date with the latest construction and development progress of Pune Metro Line 3."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner src="/project-profile/project-profile-banner.png" alt="Project Update - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Project Update
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pt-6 pb-3">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Puneri Metro Line 3 is progressing across key construction and systems milestones, with work advancing across stations, viaducts, and operational readiness. Regular updates will reflect major project developments and important commuter information.
                    </p>
                </div>
            </section>

            {/* ── Documents ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <ul className="space-y-3">
                        {[
                            "Major Milestones from PMR07 to PMR23 Station in April'26 month",
                        ].map((title, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="flex items-center gap-4 rounded-lg px-4 py-3 font-montserrat text-sm text-black font-semibold transition-opacity hover:opacity-80"
                                    style={{ background: '#E8449A26' }}
                                >
                                    <span
                                        className="flex shrink-0 items-center justify-center rounded"
                                    >
                                        <img
                                            src="/project-profile-icons/icon-pdf.png"
                                            alt="PDF"
                                            width={34}
                                            height={34}
                                        />
                                    </span>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── Construction Gallery ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    {/* Subheading */}
                    <h2 className="mb-8 font-montserrat font-semibold text-black" style={{ fontSize: '22px' }}>
                        Current Construction Updates
                    </h2>

                    {/* Image grid */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                        {visibleImages.map((src, idx) => (
                            <div key={idx} className="aspect-square overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt={`Construction update ${idx + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    {hasMore && (
                        <div className="mt-10 flex items-center gap-6">
                            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, #d1d5db, transparent)' }} />
                            <button
                                onClick={() => setVisibleCount((c) => c + LOAD_MORE_STEP)}
                                className="shrink-0 rounded-sm bg-brand px-8 py-2.5 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
                            >
                                Load More
                            </button>
                            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
