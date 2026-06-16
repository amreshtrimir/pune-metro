import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';
import QuoteBanner from '@/components/landing/QuoteBanner';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Pune Metro</title>
                <meta
                    name="description"
                    content="Learn about Pune IT City Metro Rail Limited (PITCMRL), a joint venture between Tata Group and Siemens delivering Pune's metro Line 3 under a 35-year DBFOT concession."
                />
                <meta name="keywords" content="Pune Metro, PITCMRL, Pune Metro Line 3, Hinjewadi Shivajinagar Metro, Tata Siemens Metro" />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Pune Metro Train"
            />

            {/* ── Overview Content ── */}
            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading className="mb-5 flex items-center gap-6">Overview of Pune Metro</PageSectionHeading>
                    {/* Intro paragraphs */}
                    <div className="mb-16 space-y-5">
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            Pune IT City Metro Rail Limited (PITCMRL), a Special Purpose Vehicle (SPV) established through a strategic
                            joint venture between the Tata Group and Siemens has developed the Pune Metro Line 3 connecting the IT hub
                            of Hinjewadi with the Shivajinagar, which is the centre of the bustling city of Pune. This partnership
                            brings together two respected business houses possessing global expertise in engineering and technology to
                            deliver a transformative urban transit solution for the city of Pune.
                        </p>
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            Pune Metro Line 3 has been developed as a Public-Private Partnership (PPP) project in collaboration with the Pune Metropolitan Region Development Authority (PMRDA). PMRDA has awarded the
                            Concession to Design Build Finance Operate Transfer (DBFOT) to PITCMRL for a term of 35 years extendable
                            for a further period of 25 years. This is the first project that has been developed under the aegis of the
                            New Metro Policy 2017, which was formulated by the Government of India to encourage Private investment in
                            Infrastructure projects in the country.
                        </p>
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            The project features a 23.3 km elevated corridor specifically designed to alleviate congestion along one of
                            Pune's most critical commuter arteries. The corridor includes 23 strategically planned stations that serve
                            key residential and commercial neighbourhoods, including Wakad, Baner, Balewadi, and University Circle,
                            ensuring that the metro is accessible to the city's diverse and growing workforce. Pune Metro Line 3 has
                            interchanges with Pune Metro Line 1 &amp; 2, which extends the availability of a sustainable urban transit
                            option to the people living along the other two lines. Pune Metro Line 3 also has connectivity with the
                            other transport hubs such as the Shivajinagar Railway Station, the Bus Depots at Shivajinagar and Wakad
                            and offers two points along the National Highway 48 connecting Pune and Bengaluru from where travellers
                            can access Pune city using sustainable urban transit.
                        </p>
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            Technological innovation is at the core of the Pune Metro Line 3 infrastructure. The system utilizes an
                            advanced CBTC (Communication Based Train Control) signaling system to ensure maximum safety and operational
                            frequency. To maintain a clean urban skyline, the project employs a 750V DC third-rail electrification
                            system, eliminating the need for overhead wires. Passengers will travel in modern rolling stock supplied by
                            Alstom, designed for comfort and efficiency, with all operations supported by a state-of-the-art
                            maintenance depot located at Maan, Hinjewadi.
                        </p>
                        <p className="font-montserrat text-sm leading-relaxed text-black">
                            Pune Metro Line 3 provides a sustainable, comfortable and reliable, high-capacity alternative to road
                            travel. The project is engineered to support the daily movement of thousands of commuters, ensuring
                            sustainable economic growth and setting a new benchmark for urban mobility in India.
                        </p>
                    </div>

                    {/* Image + Vision/Mission */}
                    <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
                        {/* Left: Train image */}
                        <div className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/about/about-left.png"
                                alt="Pune Metro Line 3"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Right: Vision + Mission cards */}
                        <div className="flex flex-col justify-center gap-6">
                            {/* Vision */}
                            <div className="rounded-xl border border-gray-200 p-5 md:p-8">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                                    <div className="flex items-center gap-3 md:contents">
                                        <img
                                            src="/about/vison-icons/visionary.png"
                                            alt="Vision"
                                            width={69}
                                            height={69}
                                            className="h-12 w-12 shrink-0 md:h-[69px] md:w-[69px]"
                                        />
                                        <h3 className="font-montserrat text-lg font-bold text-black md:hidden">Vision</h3>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 hidden font-montserrat text-xl font-bold text-black md:mb-3 md:block">Vision</h3>
                                        <div className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                                            <p>
                                                To transform the urban mobility system, by delivering safe, seamless, and sustainable transport that enhances quality of life and drives inclusive economic growth for the city of Pune.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="rounded-xl border border-gray-200 p-5 md:p-8">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                                    <div className="flex items-center gap-3 md:contents">
                                        <img
                                            src="/about/vison-icons/mission.png"
                                            alt="Mission"
                                            width={69}
                                            height={69}
                                            className="h-12 w-12 shrink-0 md:h-[69px] md:w-[69px]"
                                        />
                                        <h3 className="font-montserrat text-lg font-bold text-black md:hidden">Mission</h3>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 hidden font-montserrat text-xl font-bold text-black md:mb-3 md:block">Mission</h3>
                                        <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black list-disc pl-4">
                                            <li>
                                                Launch revenue operations in 2026, delivering Pune's most anticipated transit corridor on schedule
                                            </li>
                                            <li>
                                                Achieve 99% punctuality post-stabilisation, setting a new benchmark for metro reliability in India
                                            </li>
                                            <li>
                                                Integrate metro stations seamlessly into the surrounding urban fabric for effortless accessibility
                                            </li>
                                            <li>
                                                Induce inclusive urban mobility, ensuring the metro serves every walk of life across Pune
                                            </li>
                                            <li>
                                                Generate one-third of total power consumption through rooftop solar installations across stations
                                            </li>
                                            <li>
                                                Establish Pune Metro Line 3 as a landmark success in public-private partnership in the metro rail sector
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Values */}
                            <div className="rounded-xl border border-gray-200 p-5 md:p-8">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                                    <div className="flex items-center gap-3 md:contents">
                                        <img
                                            src="/about/vison-icons/value.png"
                                            alt="Values"
                                            width={69}
                                            height={69}
                                            className="h-12 w-12 shrink-0 md:h-[69px] md:w-[69px]"
                                        />
                                        <h3 className="font-montserrat text-lg font-bold text-black md:hidden">Values</h3>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 hidden font-montserrat text-xl font-bold text-black md:mb-3 md:block">Values</h3>
                                        <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black list-disc pl-4">
                                            <li>Integrity in every decision.</li>
                                            <li>Safety in every journey.</li>
                                            <li>Sustainability in every action.</li>
                                            <li>Excellence in performance.</li>
                                            <li>Responsibility for all stakeholders.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Quote Banner ── */}
            <QuoteBanner>
                &ldquo;Pune Metro is more than transport, it reflects the rhythm of a smarter, faster city, connecting people to
                opportunities with greater ease. Designed for comfort, sustainability and efficiency, it transforms everyday
                travel into a seamless urban experience.&rdquo;
            </QuoteBanner>

        </>
    );
}
