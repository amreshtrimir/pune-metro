import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const connectivityPoints = [
    {
        title: 'Integration with PMPML Buses',
        description:
            'Existing PMPML bus routes will provide smooth connectivity between metro stations and nearby areas of the city. Schedules and routes will be coordinated to minimise waiting time and ensure a seamless transfer experience for daily commuters. Dedicated bus bays at key stations will further streamline the interchange between bus and metro services.',
    },
    {
        title: 'Integration with Private Players for Additional Routes',
        description:
            'Partnerships with private mobility providers will help extend connectivity beyond station zones. These collaborations will offer commuters a wider range of travel options, including app-based cab services and shared mobility solutions. The goal is to bridge gaps in public transport coverage and ensure no commuter is left without a convenient last-mile option.',
    },
    {
        title: 'Auto-Rickshaw and Cab Pickup Zones',
        description:
            'Dedicated pickup and drop-off areas will support convenient onward travel for commuters. These designated zones will be clearly marked and strategically located at station exits to reduce congestion and ensure passenger safety. Integration with app-based cab aggregators will also allow passengers to pre-book rides directly from the station.',
    },
    {
        title: 'Pedestrian Walkways and Foot Over Bridges (FOBs)',
        description:
            'Safe pedestrian access will improve movement between stations and surrounding areas. Well-lit, weather-protected walkways and foot over bridges will be designed with accessibility in mind, catering to senior citizens, persons with disabilities, and families with children. These connections will reduce dependence on short vehicular trips and encourage walking as a first and last-mile option.',
    },
    {
        title: 'Parking Facilities at Selected Stations',
        description:
            'Parking provisions at select stations will support easier first and last-mile access. Dedicated spaces for two-wheelers and four-wheelers will be available, along with secure bicycle parking to encourage eco-friendly commuting. Cashless payment options and digital monitoring systems will ensure a smooth and secure parking experience for all users.',
    },
];

export default function LastMileConnectivity() {
    return (
        <>
            <Head>
                <title>Last Mile Connectivity - Puneri Metro</title>
                <meta name="description" content="Explore last-mile connectivity options available at Pune Metro stations including buses, autos, and parking." />
            </Head>

            {/* ── Hero Banner ── */}
             <PageHeroBanner
                                        src="/banners/items-not-carry/items-not-carry-banner-md.png"
                                        srcMd="/banners/items-not-carry/items-not-carry-banner-md.png"
                                        srcLg="/banners/items-not-carry/items-not-carry-banner-lg.png"
                                        alt="Last Mile Connectivity - Puneri Metro"
                                    />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0 mb-5">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading lineColor="#8e8e8e">Last Mile Connectivity</PageSectionHeading>
                </div>
            </section>

            {/* ── Connectivity Points ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    {connectivityPoints.map((point) => (
                        <div key={point.title} className="mb-8 flex gap-3">
                            <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                            <div>
                                <h2 className="mb-1 font-montserrat text-base font-semibold text-black">{point.title}</h2>
                                <p className="font-inter text-sm text-gray-600">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
