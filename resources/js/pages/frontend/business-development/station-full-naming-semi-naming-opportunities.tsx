import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const availableStations = [
    { pmr: 'PMR 3', station: 'Maan Bus Depot' },
    { pmr: 'PMR 5', station: 'Hinjawadi Phase-II Circle-I' },
    { pmr: 'PMR 6', station: 'Padmabhushan Chowk' },
    { pmr: 'PMR 8', station: 'Hinjawadi Phase-I' },
    { pmr: 'PMR 9', station: 'Wakad Chowk' },
    { pmr: 'PMR 10', station: 'Shree Shiv Chhatrapati Sports Complex, Mahalunge' },
    { pmr: 'PMR 11', station: 'Mitcon Balewadi' },
    { pmr: 'PMR 12', station: 'R. K. Laxman Museum, Balewadi' },
    { pmr: 'PMR 14', station: 'Balewadi Phata' },
    { pmr: 'PMR 15', station: 'Baner Gaon' },
    { pmr: 'PMR 16', station: 'Baner Pashan Link Road' },
    { pmr: 'PMR 17', station: 'Aundh' },
    { pmr: 'PMR 18', station: 'Sakalnagar' },
    { pmr: 'PMR 19', station: 'Savitribai Phule Pune University' },
    { pmr: 'PMR 20', station: 'Bhosalenagar – RBI' },
    { pmr: 'PMR 23', station: 'District Court, Pune' },
];

const benefits = [
    'Premium long-term brand association with strategically located metro stations',
    "High visibility across one of Pune's busiest transit corridors",
    'Continuous exposure to thousands of daily commuters',
    'Brand presence through station signage and passenger information systems, subject to applicable approvals',
    'Opportunity to strengthen brand recall through consistent commuter engagement',
    'Association with sustainable urban mobility and modern public infrastructure',
];

export default function StationFullNamingSemiNamingOpportunities() {
    const opportunities = [
        {
            title: 'Station Full Naming Rights',
            description:
                "Station Full Naming Rights allow an organisation's brand to be associated with the official station name, offering premium visibility across the metro ecosystem and creating a distinctive brand identity at one of Pune's key mobility hubs.",
        },
        {
            title: 'Station Semi-Naming Rights',
            description:
                "Semi-Naming Rights provide an opportunity for brands to be associated with the station name through co-branding, delivering consistent visibility while preserving the station's original identity.",
        },
    ];

    return (
        <>
            <Head>
                <title>Station Full Naming & Semi-Naming Opportunities - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Explore station full naming and semi-naming opportunities across Pune Metro Line 3."
                />
            </Head>

            <PageHeroBanner
                src="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcMd="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcLg="/banners/non-fare-business/non-fare-business-banner-lg.png"
                alt="Station Naming opportunities at Pune Metro"
            />

            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading wrap className="mb-6 flex items-center gap-6 md:mb-8">
                        Station Full Naming &amp; Semi-Naming Opportunities
                    </PageSectionHeading>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                Pune Metro Line 3 offers organisations a unique opportunity to associate their
                                brand with strategically located metro stations through Station Full Naming and
                                Semi-Naming Rights. These opportunities provide long-term brand visibility by
                                integrating the brand name with station identity, creating continuous engagement with
                                commuters, residents, businesses and visitors along Pune's rapidly developing western
                                corridor.
                            </p>
                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                Station Full Naming and Semi-Naming Rights enable brands to establish a strong and lasting
                                presence across high-footfall transit locations while enhancing visibility through
                                station signage, passenger information systems and wayfinding elements, subject to
                                applicable guidelines and approvals.
                            </p>
                            <h3 className="mb-3 font-montserrat text-xl font-semibold text-black">
                                Available Opportunities
                            </h3>
                            <div className="grid gap-3">
                                {opportunities.map((item) => (
                                    <div key={item.title} className="rounded-2xl border border-black/10 p-4">
                                        <h4 className="mb-2 font-montserrat text-sm font-semibold text-black">
                                            {item.title}
                                        </h4>
                                        <p className="font-montserrat text-sm leading-relaxed text-black">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-3 font-montserrat text-xl font-semibold text-black">
                                Contact for Partnership Discussion
                            </h3>
                            <p className="font-montserrat text-sm text-black">
                                For partnership details, availability and commercial information, please contact:
                            </p>
                            <p className="mt-4 font-montserrat text-sm text-black">
                                📞 Mobile: <a href="tel:+919949158333" className="text-brand hover:underline">+91 9949158333</a>
                            </p>
                            <p className="font-montserrat text-sm text-black">
                                ✉️ Email: <a href="mailto:stationretail@punerimetro.in" className="text-brand hover:underline">stationretail@punerimetro.in</a>
                            </p>
                            <p className="mt-4 rounded-3xl border border-black/10 bg-black/5 p-4 text-sm leading-relaxed text-black">
                                Note: Station Full Naming and Semi-Naming Rights are subject to Pune Metro Line 3's branding
                                guidelines, statutory approvals and the terms and conditions of the respective agreement.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-3xl p-6" style={{ backgroundColor: '#E9F4FF' }}>
                        <h3 className="mb-3 font-montserrat text-lg font-semibold text-black">
                            Why brands choose metro station naming
                        </h3>
                        <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                            Associate your brand with Pune Metro Line 3 through exclusive Station's Full Naming and
                            Semi-Naming Rights. Build a lasting identity across one of the city's most prominent public
                            infrastructure networks while reaching millions of commuters over the concession period.
                        </p>
                        <ul className="list-disc space-y-2 pl-5 font-montserrat text-sm text-black">
                            {benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading wrap className="mb-6 flex items-center gap-6 md:mb-8">
                        Available Stations for Full and Semi-Naming
                    </PageSectionHeading>
                    <p className="mb-4 font-montserrat text-sm text-black">
                        Station Naming and Semi-Naming opportunities are currently available at the following Pune Metro Line
                        3 stations:
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-black/10">
                        <div className="grid grid-cols-[125px,1fr] border-b border-black/10 bg-black/5 px-4 py-3 text-sm font-semibold text-black">
                            <span>Station Code</span>
                            <span>Station Name</span>
                        </div>
                        <div className="divide-y divide-black/10">
                            {availableStations.map((station) => (
                                <div
                                    key={`${station.pmr}-${station.station}`}
                                    className="grid grid-cols-[125px,1fr] gap-2 px-4 py-3 text-sm"
                                >
                                    <div className="font-semibold text-brand">{station.pmr}</div>
                                    <div className="font-montserrat text-sm text-black">{station.station}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
