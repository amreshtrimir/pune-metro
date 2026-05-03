import { Head } from '@inertiajs/react';
import QuoteBanner from '@/components/landing/QuoteBanner';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Puneri Metro</title>
                <meta
                    name="description"
                    content="Learn about Puneri IT City Metro Rail Limited (PITCMRL), a joint venture between Tata Group and Siemens delivering Pune's metro Line 3 under a 35-year DBFOT concession."
                />
                <meta name="keywords" content="Pune Metro, PITCMRL, Pune Metro Line 3, Hinjewadi Shivajinagar Metro, Tata Siemens Metro" />
            </Head>

            {/* ── Page Hero Banner ── */}
            <section>
                <div className="max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src="/about/about-banner.png"
                        alt="Puneri Metro Train"
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                </div>
            </section>

            {/* ── Overview Content ── */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
                    <h1 className="mb-10 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                        Overview of Puneri Metro
                    </h1>
                    {/* Intro paragraphs */}
                    <div className="mb-16 space-y-5">
                        <p className="font-montserrat text-base leading-relaxed text-black">
                            Pune IT City Metro Rail Limited (PITCMRL), popularly known as Pune Metro Line 3, is a Special Purpose
                            Vehicle (SPV) established through a strategic joint venture between the Tata Group and Siemens. This
                            partnership brings together global expertise in engineering and technology to deliver a transformative
                            transit solution for the city. Operating under a 35-year DBFOT (Design-Build-Finance-Operate-Transfer)
                            concession awarded by the Pune Metropolitan Region Development Authority (PMRDA), the project stands as a
                            milestone in Indian infrastructure as the nation's first metro system developed under this specific
                            Public-Private Partnership (PPP) model.
                        </p>
                        <p className="font-montserrat text-base leading-relaxed text-black">
                            The project features a 23.3 km elevated corridor specifically designed to alleviate congestion along one of
                            Pune's most critical commuter arteries. By connecting the high-tech hub of Hinjewadi to the Shivajinagar
                            District Court, the line bridges the gap between major IT zones and the city centre. The corridor includes
                            23 strategically planned stations that serve key residential and commercial neighbourhoods, including Wakad,
                            Balewadi, Baner, and University Circle, ensuring that the metro is accessible to the city's diverse and
                            growing workforce.
                        </p>
                        <p className="font-montserrat text-base leading-relaxed text-black">
                            Technological innovation is at the core of the Line 3 infrastructure. The system utilises an advanced CBTC
                            (Communication Based Train Control) signalling system to ensure maximum safety and operational frequency.
                            To maintain a clean urban skyline, the project employs a 750V DC third-rail electrification system,
                            eliminating the need for overhead wires. Passengers will travel in modern rolling stock supplied by Alstom,
                            designed for comfort and efficiency, with all operations supported by a state-of-the-art maintenance depot
                            located at Maan, Hinjewadi.
                        </p>
                        <p className="font-montserrat text-base leading-relaxed text-black">
                            Puneri Metro Line 3 provides a comfortable and reliable, high-capacity alternative to road travel. The
                            project is engineered to support the daily movement of thousands of commuters, ensuring sustainable
                            economic growth and setting a new benchmark for urban mobility in India.
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
                            <div className="rounded-xl border border-gray-200 p-8">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/about/vison-icons/visionary.png"
                                        alt="Vision"
                                        width={69}
                                        height={69}
                                        className="shrink-0"
                                    />
                                    <div>
                                        <h3 className="mb-3 font-montserrat text-xl font-bold text-black">Vision</h3>
                                        <p className="font-montserrat leading-relaxed text-black" style={{ fontSize: "14px" }}>
                                            To create a future-ready urban transit system that strengthens connectivity, supports city growth,
                                            and improves everyday mobility across Pune.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="rounded-xl border border-gray-200 p-8">
                                <div className="flex items-start gap-6">
                                    <img
                                        src="/about/vison-icons/mission.png"
                                        alt="Mission"
                                        width={69}
                                        height={69}
                                        className="shrink-0"
                                    />
                                    <div>
                                        <h3 className="mb-3 font-montserrat text-xl font-bold text-black">Mission</h3>
                                        <p className="font-montserrat leading-relaxed text-black" style={{ fontSize: "14px" }}>
                                            To deliver safe, reliable, and accessible metro infrastructure through thoughtful design,
                                            sustainable practices, and a commuter-first approach that responds to the needs of a growing city.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Quote Banner ── */}
            <QuoteBanner>
                &ldquo;Puneri Metro is more than transport, it reflects the rhythm of a smarter, faster city, connecting people to
                opportunities with greater ease. Designed for comfort, sustainability and efficiency, it transforms everyday
                travel into a seamless urban experience.&rdquo;
            </QuoteBanner>

        </>
    );
}
