import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const advertisingFormats = [
    {
        title: 'Platform Advertising',
        description:
            'Premium advertising locations across station platforms offering maximum visibility to waiting passengers.',
    },
    {
        title: 'Concourse Advertising',
        description:
            'Advertising spaces at concourse levels, including ticketing and passenger circulation areas, providing high commuter exposure.',
    },
];

const inventoryHighlights = [
    'Up to 2,000 sq. ft. of advertising space available per station',
    'Multiple static branding opportunities across platforms and concourses',
    'High-impact display locations with excellent passenger visibility',
];

const benefits = [
    'Advertising opportunities across all 23 Metro stations',
    "Reach thousands of daily commuters travelling through Pune's IT and commercial corridor",
    'Premium branding locations within station premises',
    'High-frequency audience engagement and enhanced brand recall',
    'Ideal platform for long-term brand visibility and customer engagement',
];

export default function StationInternalAdvertising() {
    return (
        <>
            <Head>
                <title>Station Internal Advertising - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Explore internal advertising opportunities across Pune Metro Line 3 stations."
                />
            </Head>

            <PageHeroBanner
                src="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcMd="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcLg="/banners/non-fare-business/non-fare-business-banner-lg.png"
                alt="Internal advertising opportunities at Pune Metro stations"
            />

            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Station Internal Advertising
                    </PageSectionHeading>

                    <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                        Station Internal Advertising at Pune Metro Line 3
                        provides brands with an opportunity to reach a large and
                        diverse commuter base across one of Pune's
                        fastest-growing transit corridors. Strategically located
                        advertising spaces within metro stations ensure high
                        visibility and continuous engagement with passengers
                        throughout their journey.
                    </p>
                    <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                        With premium advertising locations across all 23
                        stations between Hinjewadi and Shivajinagar, businesses
                        can strengthen brand awareness while connecting with
                        commuters, professionals, students and visitors
                        travelling on the corridor.
                    </p>

                    <h3 className="mb-3 font-montserrat text-xl font-semibold text-black">
                        Advertising Opportunities
                    </h3>
                    <div className="mb-6 grid gap-3">
                        {advertisingFormats.map((format) => (
                            <div
                                key={format.title}
                                className="rounded-2xl border border-black/10 p-4"
                            >
                                <h4 className="mb-2 font-montserrat text-sm font-semibold text-black">
                                    {format.title}
                                </h4>
                                <p className="font-montserrat text-sm leading-relaxed text-black">
                                    {format.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h3 className="mb-3 font-montserrat text-xl font-semibold text-black">
                        Advertising Inventory
                    </h3>
                    <div className="mb-6 rounded-2xl border border-black/10 p-5">
                        <ul className="list-disc space-y-2 pl-5 font-montserrat text-sm leading-relaxed text-black">
                            {inventoryHighlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1a1MJiEExmQ4LFu2hoLMj0nwZutZoBo39/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 font-montserrat text-sm font-medium text-white transition hover:bg-brand/90"
                    >
                        Download Reference Images
                    </a>

                    <h3 className="my-3 font-montserrat text-xl font-semibold text-black">
                        Key Benefits
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 font-montserrat text-sm text-black">
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Enquire for Campaign Planning
                    </PageSectionHeading>
                    <div
                        className="rounded-3xl p-6"
                        style={{ backgroundColor: '#E9F4FF' }}
                    >
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            Position your brand where thousands of commuters
                            engage every day. Explore premium advertising
                            opportunities across Pune Metro Line 3 stations and
                            connect with one of Pune's fastest-growing urban
                            audiences.
                        </p>
                        <p className="mt-4 font-montserrat text-sm text-black">
                            Get in touch with our Business Development team to
                            explore available advertising inventory and
                            partnership opportunities.
                        </p>
                    </div>
                    <p className="mt-4 font-montserrat text-sm text-black">
                        📞 Phone:{' '}
                        <a
                            href="tel:+919960774871"
                            className="text-brand hover:underline"
                        >
                            +91 9960774871
                        </a>
                    </p>
                    <p className="mt-1 font-montserrat text-sm text-black">
                        ✉️ Email:{' '}
                        <a
                            href="mailto:stationretail@punerimetro.in"
                            className="text-brand hover:underline"
                        >
                            stationretail@punerimetro.in
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
