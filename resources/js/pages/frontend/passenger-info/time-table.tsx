import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const summaryItems = [
    { label: 'First Train', value: '05:00 AM' },
    { label: 'Last Train', value: '11:30 PM' },
    { label: 'Peak Frequency', value: 'Every 4 min 30 sec' },
    { label: 'Off-Peak Frequency', value: 'Every 8 min 30 sec' },
];

const peakHours = [
    { period: 'Morning Peak', time: '08:30 AM – 10:30 AM' },
    { period: 'Evening Peak', time: '05:30 PM – 07:30 PM' },
];

const directions = [
    {
        from: 'Maan',
        to: 'District Court',
        firstTrain: '05:00 AM',
        lastTrain: '11:30 PM',
    },
    {
        from: 'District Court',
        to: 'Maan',
        firstTrain: '05:00 AM',
        lastTrain: '11:30 PM',
    },
];

const stations = [
    'Maan',
    'Hinjewadi Kasarsai Road',
    'Hinjewadi Aundh Road',
    'Wakad Chowk',
    'Balewadi High Street',
    'Baner',
    'Savitribai Phule Pune University',
    'Shivaji Nagar',
    'District Court',
];


export default function TimeTable() {
    return (
        <>
            <Head>
                <title>Time Table - Pune Metro Line 3</title>
                <meta name="description" content="View the Pune Metro Line 3 train time table for all lines and stations." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Pune Metro Line 3 Train"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <PageSectionHeading>Time Table</PageSectionHeading>
                </div>
            </section>

            {/* ── Route Label ── */}
            <section className="bg-white pt-6 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e8449a]/10 px-4 py-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#e8449a]" />
                        <span className="font-montserrat text-sm font-semibold text-[#e8449a]">
                            Pune IT City Metro — Pink Line &nbsp;|&nbsp; Maan ↔ District Court
                        </span>
                    </div>
                </div>
            </section>

            {/* ── Summary Cards ── */}
            <section className="bg-white pt-8 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {summaryItems.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center justify-center rounded-2xl px-4 py-6 text-center"
                                style={{ background: '#E8449A26' }}
                            >
                                <p className="font-montserrat text-xl font-bold text-[#e8449a] sm:text-2xl">{item.value}</p>
                                <p className="mt-1.5 font-montserrat text-xs font-medium text-gray-600 sm:text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Schedule Table ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <h2 className="mb-5 font-montserrat text-lg font-semibold text-gray-900">Train Schedule by Direction</h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="w-full border-collapse font-montserrat text-sm">
                            <thead>
                                <tr className="bg-[#e8449a] text-white">
                                    <th className="px-5 py-3.5 text-left font-semibold">Direction</th>
                                    <th className="px-5 py-3.5 text-left font-semibold">First Train</th>
                                    <th className="px-5 py-3.5 text-left font-semibold">Last Train</th>
                                    <th className="px-5 py-3.5 text-left font-semibold">Peak Frequency</th>
                                    <th className="px-5 py-3.5 text-left font-semibold">Off-Peak Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {directions.map((d, idx) => (
                                    <tr key={d.from} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-5 py-4 font-medium text-gray-900">
                                            {d.from} → {d.to}
                                        </td>
                                        <td className="px-5 py-4 text-gray-700">{d.firstTrain}</td>
                                        <td className="px-5 py-4 text-gray-700">{d.lastTrain}</td>
                                        <td className="px-5 py-4 text-gray-700">Every 4 min 30 sec</td>
                                        <td className="px-5 py-4 text-gray-700">Every 8 min 30 sec</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── Peak Hours ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <h2 className="mb-5 font-montserrat text-lg font-semibold text-gray-900">Peak Hours</h2>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        {peakHours.map((ph) => (
                            <div
                                key={ph.period}
                                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-5 sm:flex-1"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8449a]/10">
                                    <span className="h-3 w-3 rounded-full bg-[#e8449a]" />
                                </div>
                                <div>
                                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        {ph.period}
                                    </p>
                                    <p className="font-montserrat text-base font-bold text-gray-900">{ph.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Major Stations ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <h2 className="mb-6 font-montserrat text-lg font-semibold text-gray-900">Major Stations</h2>

                    <ul className="space-y-2">
                        {stations.map((station, idx) => {
                            const isFirst = idx === 0;
                            const isLast = idx === stations.length - 1;

                            return (
                                <li key={station} className="flex items-center gap-3">
                                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#e8449a]" />
                                    <span className="font-montserrat text-sm font-medium text-gray-900">{station}</span>
                                    {(isFirst || isLast) && (
                                        <span className="rounded-full bg-[#e8449a] px-2 py-0.5 font-montserrat text-[10px] font-medium text-white">
                                            {isFirst ? 'Origin' : 'Terminus'}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ── Download PDF ── */}
            <section className="bg-white pt-8 pb-10 md:pt-10 md:pb-24">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <a
                        href="/documents/TIMETABLE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#e8449a] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                            />
                        </svg>
                        Download Full Time Table (PDF)
                    </a>
                </div>
            </section>
        </>
    );
}
