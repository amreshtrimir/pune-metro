import { Head, Link } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import { stationList } from '@/routes/route';

type Station = {
    code: string;
    name: string;
    slug: string;
};

type Props = {
    station: Station;
};

const amenities = [
    'Escalators at entry/exit and platform levels',
    'Lifts/elevators for senior citizens and persons with disabilities',
    'Tactile pathways for visually impaired passengers',
    'Wheelchair-accessible facilities',
    'Automatic ticket vending machines',
    'Staffed customer service counter',
    'Waiting area with seating',
    'Clean and accessible restrooms',
    'CCTV surveillance for passenger safety',
    'Drinking water facility',
];

export default function StationDetail({ station }: Props) {
    return (
        <>
            <Head>
                <title>{station.name} ({station.code}) - Puneri Metro</title>
                <meta
                    name="description"
                    content={`Station details for ${station.name} (${station.code}) on Pune Metro Line 3 – Hinjawadi to District Court, Pune.`}
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/route/route-banner-md.png"
                srcMd="/banners/route/route-banner-md.png"
                srcLg="/banners/route/route-banner-lg.png"
                alt={`${station.name} Station - Puneri Metro`}
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Link
                            href={stationList.url()}
                            className="font-montserrat text-sm text-[#e31e71] hover:underline"
                        >
                            ← Station List
                        </Link>
                    </div>
                    <PageSectionHeading>{station.name}</PageSectionHeading>
                </div>
            </section>

            {/* ── Station Details ── */}
            <section className="bg-white py-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                        {/* Station Info Card */}
                        <div className="lg:col-span-1">
                            <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                                <div className="bg-[#fce3f0] px-6 py-4">
                                    <p className="font-montserrat text-xs font-semibold uppercase tracking-widest text-[#e31e71]">
                                        Station Code
                                    </p>
                                    <p className="mt-1 font-montserrat text-3xl font-bold text-black">
                                        {station.code}
                                    </p>
                                </div>
                                <div className="divide-y divide-[#f3f3f3] bg-white">
                                    <div className="px-6 py-4">
                                        <p className="font-montserrat text-xs font-medium uppercase tracking-wide text-gray-400">
                                            Station Name
                                        </p>
                                        <p className="mt-1 font-montserrat text-sm font-semibold text-black">
                                            {station.name}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <p className="font-montserrat text-xs font-medium uppercase tracking-wide text-gray-400">
                                            Metro Line
                                        </p>
                                        <p className="mt-1 font-montserrat text-sm font-semibold text-black">
                                            Line 3 – Purple Line
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <p className="font-montserrat text-xs font-medium uppercase tracking-wide text-gray-400">
                                            Corridor
                                        </p>
                                        <p className="mt-1 font-montserrat text-sm text-black">
                                            Hinjawadi to District Court, Pune
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="lg:col-span-2">
                            <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                                <div className="bg-[#fce3f0] px-6 py-4">
                                    <p className="font-montserrat text-sm font-semibold text-black">
                                        Station Amenities
                                    </p>
                                </div>
                                <ul className="divide-y divide-[#f3f3f3] bg-white">
                                    {amenities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 px-6 py-3">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fce3f0]">
                                                <svg
                                                    className="h-3 w-3 text-[#e31e71]"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={3}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className="font-montserrat text-sm text-black">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
