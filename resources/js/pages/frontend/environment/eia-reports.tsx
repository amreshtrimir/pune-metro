import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const eiaAboutImage = '/evvironment/eia-report/about-eia.png';

const keyReports = [
    {
        icon: '/evvironment/eia-report-key-section-icons/environment-1.png',
        title: 'Environmental Impact Assessment Report',
        description:
            'The full project Alignment serves as a cornerstone for urban decarbonization. By integrating the construction and operational phases, resulting in a massive To further ensure long-term sustainability, the project includes a robust renewable energy strategy with 7.67 MW of solar power currently planned for installation.',
    },
    {
        icon: '/evvironment/eia-report-key-section-icons/environment-2.png',
        title: 'Environmental Management Plan (EMP) Report',
        description:
            'Our commitment to operational excellence is reflected in our regulations. This is achieved through a heavy investment in human capital, totaling 3,880 man-hours of environment-specific training for our workforce. Beyond the site boundaries, we actively foster local stewardship by engaging with over 50 students through community outreach and environmental education initiatives.',
    },
    {
        icon: '/evvironment/eia-report-key-section-icons/environment-3.png',
        title: 'Key Environmental Reports & Performance Report',
        description:
            'The latest monitoring cycle highlights significant resource efficiency and carbon mitigation. In the past fiscal year, we utilized 19,85,786 kWh of grid electricity while successfully saving 7,94,314 litres of diesel. Our water conservation efforts have been equally impactful, with 7,696 KL recycled via STP and an additional 23,205 KL saved through optimized chemical processes, collectively avoiding approximately 675 tCO₂e.',
    },
    {
        icon: '/evvironment/eia-report-key-section-icons/environment-4.png',
        title: 'Tree Felling & Transplantation Report',
        description:
            "We prioritize the preservation of the city's green lung, successfully conserving over 800 existing trees within the project zone. In FY 2025-26 alone, we added 500+ new trees to the landscape. This dedication to urban forestry was recognized at the 43rd PMC Garden Competition, where our initiatives secured 1st Prize across five distinct categories.",
    },
    {
        icon: '/evvironment/eia-report-key-section-icons/environment-5.png',
        title: 'Construction & Demolition Waste Management Report',
        description:
            'Adhering to a strict "Zero Landfill" policy, our waste management strategy emphasizes the circular economy. By optimizing our material stream, we have eliminated the use of 16,32,200 cement bags and successfully reused ~200 tonnes of steel. Furthermore, we maintain a rigorous plastic recovery programme, collecting roughly 1,000 kg of single-use plastic every month to prevent environmental contamination.',
    },
];

export default function EiaReports() {
    return (
        <>
            <Head>
                <title>EIA Reports - Pune Metro</title>
                <meta
                    name="description"
                    content="Explore the Environmental Impact Assessment (EIA) reports for Pune Metro Line 3, covering compliance, sustainability, and environmental stewardship."
                />
                <meta
                    name="keywords"
                    content="Pune Metro EIA, Environmental Impact Assessment, Pune Metro Environment, PITCMRL EIA, Metro Line 3 Sustainability"
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/environment/environment-banner-md.png"
                srcMd="/banners/environment/environment-banner-md.png"
                srcLg="/banners/environment/environment-banner-lg.png"
                alt="Pune Metro Environment"
            />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading wrap className="mb-6 flex items-center gap-6">Environmental Impact Assessment (EIA) Reports</PageSectionHeading>
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Pune Metro Line 3 is committed to transparent, science-led environmental governance. Our Environmental
                        Impact Assessment (EIA) reports document all significant environmental reviews, mitigation measures and
                        compliance updates throughout the project lifecycle.
                    </p>
                </div>
            </section>

            {/* ── About EIA ── */}
            <section className="bg-white py-8 md:py-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
                        {/* Left: Image */}
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={eiaAboutImage}
                                alt="Environmental Impact Assessment"
                                className="h-full min-h-[220px] w-full object-cover md:min-h-[400px]"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Right: Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="mb-4 font-montserrat text-xl font-semibold text-black md:mb-5 md:text-[30px]">About EIA</h2>
                            <p className="mb-5 font-montserrat text-sm leading-relaxed text-black">
                                Before making decisions, we systematically evaluate the environmental consequences of a proposed
                                project through an EIA. For Pune Metro Line 3, EIA forms the backbone of our environmental
                                planning, ensuring every phase of construction and operations respects ecological limits and
                                regulatory requirements.
                            </p>
                            <p className="font-montserrat text-sm leading-relaxed text-black">
                                PITCMRL conducts rigorous environmental impact assessments at every stage, covering air quality,
                                noise, vibration, ecology, water resources and socio-economic impact. All studies comply fully with
                                the Ministry of Environment, Forest and Climate Change of India (MoEFCC) and Maharashtra Pollution
                                Control Board (PCB) norms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Key Reports ── */}
            <section className="bg-white pb-8 md:pb-20">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-4 font-montserrat text-xl font-semibold text-black md:text-[30px]">Key Reports</h2>
                    <p className="mb-6 font-montserrat text-sm leading-relaxed text-black md:mb-10">
                        Our commitment to a greener urban future is backed by measurable action. Explore the key reports and data
                        driving our environmental stewardship for the Pune Metro Line 3 Project.
                    </p>

                    <div className="space-y-4">
                        {keyReports.map((report) => (
                            <div
                                key={report.title}
                                className="group relative border border-gray-200 bg-white p-5 transition-colors hover:border-[#e8449a] md:p-6 md:pl-20"
                            >
                                {/* Corner accent */}
                                <div className="absolute top-0 left-0 size-5 border-t-2 border-l-2 border-[#e8449a]" />

                                {/* Icon + title row on mobile, icon absolute on desktop */}
                                <div className="mb-2 flex items-center gap-3 md:contents">
                                    <div className="shrink-0 md:absolute md:top-6 md:left-6">
                                        <img src={report.icon} alt="" className="size-10 object-contain md:size-[46px]" />
                                    </div>
                                    <h3 className="font-montserrat text-base font-semibold text-black md:hidden">{report.title}</h3>
                                </div>
                                <h3 className="mb-2 hidden font-montserrat text-base font-semibold text-black md:block">{report.title}</h3>
                                <p className="font-montserrat text-sm leading-relaxed text-black">{report.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
