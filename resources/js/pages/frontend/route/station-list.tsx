import { Head, Link } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import { stationDetail } from '@/routes/route';
import type { Station } from '@/types/cms';

type Props = {
    stations: Station[];
};

export default function StationList({ stations }: Props) {
    const sorted = [...stations].sort((a, b) => a.sortOrder - b.sortOrder);
    const midpoint = Math.ceil(sorted.length / 2);
    const left = sorted.slice(0, midpoint);
    const right = sorted.slice(midpoint);

    const renderList = (items: Station[]) => (
        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
            <div className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[128px_1fr_auto] bg-[#fce3f0]">
                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">STATION</div>
                <div className="px-3 py-3 sm:px-6 font-montserrat text-sm font-medium text-black">NAME</div>
                <div className="px-6 py-3" />
            </div>
            {items.map((station, i) => (
                <div
                    key={station.slug}
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
    );

    return (
        <>
            <Head>
                <title>Station List - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="View the complete list of Pune Metro Line 3 stations from Hinjewadi to Shivajinagar District Court."
                />
            </Head>

            <PageHeroBanner
                src="/banners/route/route-banner-md.png"
                srcMd="/banners/route/route-banner-md.png"
                srcLg="/banners/route/route-banner-lg.png"
                alt="Station List - Pune Metro"
            />

            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Station List</PageSectionHeading>
                </div>
            </section>

            <section className="bg-white py-8 md:py-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {renderList(left)}
                        {renderList(right)}
                    </div>
                </div>
            </section>
        </>
    );
}
