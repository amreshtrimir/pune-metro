import { Head, Link } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import { stationDetail } from '@/routes/route';

const stationsLeft = [
    { code: 'PMR 1', name: 'Maan', slug: 'pmr-1' },
    { code: 'PMR 2', name: 'Maan - MIDC Circle, Phase II', slug: 'pmr-2' },
    { code: 'PMR 3', name: 'Maan Bus Depot', slug: 'pmr-3' },
    { code: 'PMR 4', name: 'Hinjawadi Phase-II Circle-II', slug: 'pmr-4' },
    { code: 'PMR 5', name: 'Hinjawadi Phase-II Circle-I', slug: 'pmr-5' },
    { code: 'PMR 6', name: 'Padmabhushan Chowk', slug: 'pmr-6' },
    { code: 'PMR 7', name: 'Shree Shiv Chhatrapati Shivaji Maharaj Chowk, Hinjawadi', slug: 'pmr-7' },
    { code: 'PMR 8', name: 'Hinjawadi Phase - I', slug: 'pmr-8' },
    { code: 'PMR 9', name: 'Wakad Chowk', slug: 'pmr-9' },
    { code: 'PMR 10', name: 'Shree Shiv Chhatrapati Sports Complex, Mahalunge', slug: 'pmr-10' },
    { code: 'PMR 11', name: 'Mitcon Balewadi', slug: 'pmr-11' },
    { code: 'PMR 12', name: 'R K Laxman Museum Balewadi', slug: 'pmr-12' },
];

const stationsRight = [
    { code: 'PMR 13', name: 'Balewadi High Street', slug: 'pmr-13' },
    { code: 'PMR 14', name: 'Balewadi Phata', slug: 'pmr-14' },
    { code: 'PMR 15', name: 'Baner Gaon', slug: 'pmr-15' },
    { code: 'PMR 16', name: 'Baner Pashan Link Road', slug: 'pmr-16' },
    { code: 'PMR 17', name: 'Aundh', slug: 'pmr-17' },
    { code: 'PMR 18', name: 'Sakalnagar', slug: 'pmr-18' },
    { code: 'PMR 19', name: 'Savitribai Phule Pune University', slug: 'pmr-19' },
    { code: 'PMR 20', name: 'Bhosalenagar – RBI', slug: 'pmr-20' },
    { code: 'PMR 21', name: 'Agriculture College', slug: 'pmr-21' },
    { code: 'PMR 22', name: 'Shivaji Nagar', slug: 'pmr-22' },
    { code: 'PMR 23', name: 'District Court, Pune', slug: 'pmr-23' },
];

export default function StationList() {
    return (
        <>
            <Head>
                <title>Station List - Pune Metro Line 3</title>
                <meta name="description" content="View the complete list of Pune Metro Line 3 stations from Hinjewadi to Shivajinagar District Court." />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/route/route-banner-md.png"
                srcMd="/banners/route/route-banner-md.png"
                srcLg="/banners/route/route-banner-lg.png"
                alt="Station List - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Station List</PageSectionHeading>
                </div>
            </section>

            {/* ── List of Stations ── */}
            <section className="bg-white py-8 md:py-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Left table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[128px_1fr_auto] bg-[#fce3f0]">
                                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">NAME</div>
                                <div className="px-6 py-3" />
                            </div>
                            {stationsLeft.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[80px_1fr_auto] sm:grid-cols-[128px_1fr_auto] items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-3 py-2.5 sm:px-6 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-3 py-2.5 sm:px-6 font-montserrat text-sm text-black">{station.name}</div>
                                    <div className="px-3 py-2.5 sm:px-6">
                                        <Link
                                            href={stationDetail.url(station.slug)}
                                            className="font-montserrat text-xs font-medium text-[#e31e71] hover:underline whitespace-nowrap"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[128px_1fr_auto] bg-[#fce3f0]">
                                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">NAME</div>
                                <div className="px-6 py-3" />
                            </div>
                            {stationsRight.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[80px_1fr_auto] sm:grid-cols-[128px_1fr_auto] items-center ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-3 py-2.5 sm:px-6 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-3 py-2.5 sm:px-6 font-montserrat text-sm text-black">{station.name}</div>
                                    <div className="px-3 py-2.5 sm:px-6">
                                        <Link
                                            href={stationDetail.url(station.slug)}
                                            className="font-montserrat text-xs font-medium text-[#e31e71] hover:underline whitespace-nowrap"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
