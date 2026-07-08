import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';


export default function NonFareBusinessRevenue() {
    return (
        <>
            <Head>
                <title>Non-Fare Business Revenue - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Explore station retail and business development opportunities with Pune Metro Line 3."
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcMd="/banners/non-fare-business/non-fare-business-banner-md.png"
                srcLg="/banners/non-fare-business/non-fare-business-banner-lg.png"
                alt="Non-Fare Business Revenue - Pune Metro"
            />

            {/* ── Content Section ── */}
            <section className="bg-white py-8 md:py-10">

        <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Business Opportunities at Pune Metro Line 3
                    </PageSectionHeading>
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                        {/* Left — Image */}
                        <div className="w-full shrink-0 md:w-1/2">
                            <img
                                src="/banners/non-fare-business/non-fare-buisness-side-image.jpg"
                                alt=" Business Opportunities at Pune Metro – Line 3"
                                className="w-full rounded-2xl object-cover shadow-md"
                            />
                        </div>

                        {/* Right — Content */}
                        <div className="flex-1">
                            <h3 className="mb-4 text-2xl leading-tight font-semibold text-black">
                                Station Retail & Commercial Spaces |
                                Shivajinagar to Hinjewadi Corridor
                            </h3>

                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                Pune Metro Line 3 offers a unique opportunity
                                for brands and businesses to establish a
                                presence across one of Pune's most vibrant and
                                rapidly growing transit corridors. With
                                thousands of daily commuters and strategic
                                station locations, our retail spaces provide
                                exceptional visibility and customer access.
                            </p>

                            <p className="font-montserrat text-sm font-semibold text-black">
                                For retail enquiries, please contact:
                            </p>
                            <a
                                href="mailto:contactpunerimetro@tatarealty.in"
                                className="font-montserrat text-sm text-brand hover:underline"
                            >
                                contactpunerimetro@tatarealty.in
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Available Retail Space Formats ── */}
            <section className="bg-white py-10 md:py-12">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Available Retail Space Formats
                    </PageSectionHeading>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div
                            className="rounded-3xl p-6 lg:p-7"
                            style={{ background: '#E8449A26', minHeight: '330px' }}
                        >
                            <h4 className="mb-3 font-montserrat text-lg font-semibold text-black md:text-2xl">
                                Standard Format Spaces
                            </h4>
                            <p className="mb-2 text-sm font-semibold text-black">
                                Area: 150 sq. ft. to 1,000 sq. ft.
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li className="font-montserrat text-sm text-black">Quick Service Restaurants (QSR)</li>
                                <li className="font-montserrat text-sm text-black">Cafés and Kiosks</li>
                                <li className="font-montserrat text-sm text-black">Convenience Stores</li>
                                <li className="font-montserrat text-sm text-black">Specialty Retail</li>
                                <li className="font-montserrat text-sm text-black">Concessionaires</li>
                                <li className="font-montserrat text-sm text-black">Service Outlets</li>
                            </ul>
                        </div>

                        <div
                            className="rounded-3xl p-6 lg:p-7"
                            style={{ background: '#E8449A26', minHeight: '330px' }}
                        >
                            <h4 className="mb-3 font-montserrat text-lg font-semibold text-black md:text-2xl">
                                Mid Format Spaces
                            </h4>
                            <p className="mb-2 text-sm font-semibold text-black">
                                Area: 2,000 sq. ft. to 5,000 sq. ft.
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li className="font-montserrat text-sm text-black">Family Restaurants</li>
                                <li className="font-montserrat text-sm text-black">Food Courts</li>
                                <li className="font-montserrat text-sm text-black">Fashion & Apparel Stores</li>
                                <li className="font-montserrat text-sm text-black">Lifestyle and Electronics Retail</li>
                                <li className="font-montserrat text-sm text-black">Pharmacy & Wellness Stores</li>
                                <li className="font-montserrat text-sm text-black">Specialty Supermarkets</li>
                            </ul>
                        </div>

                        <div
                            className="rounded-3xl p-6 lg:p-7"
                            style={{ background: '#E8449A26', minHeight: '330px' }}
                        >
                            <h4 className="mb-3 font-montserrat text-lg font-semibold text-black md:text-2xl">
                                Large Format Spaces
                            </h4>
                            <p className="mb-2 text-sm font-semibold text-black">
                                Area: 10,000 sq. ft. to 30,000 sq. ft.
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li className="font-montserrat text-sm text-black">Hypermarkets</li>
                                <li className="font-montserrat text-sm text-black">Supermarkets</li>
                                <li className="font-montserrat text-sm text-black">Destination Retail Stores</li>
                                <li className="font-montserrat text-sm text-black">Large Format F&amp;B Concepts</li>
                                <li className="font-montserrat text-sm text-black">Entertainment &amp; Family Recreation Centres</li>
                                <li className="font-montserrat text-sm text-black">Anchor Retail Developments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Pune Metro Line 3? ── */}
            <section className="bg-white py-10 md:py-12">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Why Choose Pune Metro Line 3?
                    </PageSectionHeading>
                    <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                        Prime locations across Pune&apos;s high-growth corridor from Shivajinagar to Hinjewadi
                    </p>
                    <ul className="list-disc space-y-2 pl-5">
                        <li className="font-montserrat text-sm text-black">Access to a large and diverse commuter base</li>
                        <li className="font-montserrat text-sm text-black">High visibility and footfall</li>
                        <li className="font-montserrat text-sm text-black">Flexible retail formats to suit varied business requirements</li>
                        <li className="font-montserrat text-sm text-black">Opportunities for both retail and internal station advertising</li>
                    </ul>
                </div>
            </section>

        </>
    );
}
