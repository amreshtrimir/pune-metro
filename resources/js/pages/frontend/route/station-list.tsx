import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const stationsLeft = [
    { code: 'PMR 1', name: 'Maan' },
    { code: 'PMR 2', name: 'Maan - MIDC Circle, Phase II' },
    { code: 'PMR 3', name: 'Maan Bus Depot' },
    { code: 'PMR 4', name: 'Hinjawadi Phase-II Circle-II' },
    { code: 'PMR 5', name: 'Hinjawadi Phase-II Circle-I' },
    { code: 'PMR 6', name: 'Padmabhushan Chowk' },
    { code: 'PMR 7', name: 'Shree Shiv Chhatrapati Shivaji Maharaj Chowk, Hinjawadi' },
    { code: 'PMR 8', name: 'Hinjawadi Phase - I' },
    { code: 'PMR 9', name: 'Wakad Chowk' },
    { code: 'PMR 10', name: 'Shree Shiv Chhatrapati Sports Complex, Mahalunge' },
    { code: 'PMR 11', name: 'Mitcon Balewadi' },
    { code: 'PMR 12', name: 'R K Laxman Museum Balewadi' },
];

const stationsRight = [
    { code: 'PMR 13', name: 'Balewadi High Street' },
    { code: 'PMR 14', name: 'Balewadi Phata' },
    { code: 'PMR 15', name: 'Baner Gaon' },
    { code: 'PMR 16', name: 'Baner Pashan Link Road' },
    { code: 'PMR 17', name: 'Aundh' },
    { code: 'PMR 18', name: 'Sakalnagar' },
    { code: 'PMR 19', name: 'Savitribai Phule Pune University' },
    { code: 'PMR 20', name: 'Bhosalenagar – RBI' },
    { code: 'PMR 21', name: 'Agriculture College' },
    { code: 'PMR 22', name: 'Shivaji Nagar' },
    { code: 'PMR 23', name: 'District Court, Pune' },
];

export default function StationList() {
    return (
        <>
            <Head>
                <title>Station List - Puneri Metro</title>
                <meta name="description" content="View the complete list of Pune Metro Line 3 stations from Hinjewadi to Shivajinagar District Court." />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner src="/project-profile/project-profile-banner.png" alt="Station List - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Station List</PageSectionHeading>
                </div>
            </section>

            {/* ── List of Stations ── */}
            <section className="bg-white py-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Left table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[128px_1fr] bg-[#fce3f0]">
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">NAME</div>
                            </div>
                            {stationsLeft.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[128px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.name}</div>
                                </div>
                            ))}
                        </div>

                        {/* Right table */}
                        <div className="overflow-hidden rounded-3xl border border-[#f3f3f3]">
                            <div className="grid grid-cols-[128px_1fr] bg-[#fce3f0]">
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">STATION</div>
                                <div className="px-6 py-3 font-montserrat text-sm font-medium text-black">NAME</div>
                            </div>
                            {stationsRight.map((station, i) => (
                                <div
                                    key={station.code}
                                    className={`grid grid-cols-[128px_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.code}</div>
                                    <div className="px-6 py-2.5 font-montserrat text-sm text-black">{station.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
