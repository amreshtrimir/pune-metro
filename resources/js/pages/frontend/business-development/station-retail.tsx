import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';


export default function StationRetail() {
    return (
        <>
            <Head>
                <title>Station Retail - Puneri Metro</title>
                <meta
                    name="description"
                    content="Explore station retail and business development opportunities with Pune Metro Line 3."
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/items-not-carry/items-not-carry-banner-md.png"
                srcMd="/banners/items-not-carry/items-not-carry-banner-md.png"
                srcLg="/banners/items-not-carry/items-not-carry-banner-lg.png"
                alt="Station Retail - Puneri Metro"
            />

            {/* ── Content Section ── */}
            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading wrap className="mb-6 md:mb-8 flex items-center gap-6">Station Retail – Pune Metro Line 3</PageSectionHeading>

                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
                        {/* Left — Image */}
                        <div className="w-full shrink-0 md:w-1/2">
                            <img
                                src="/station-retail/20260413_142326.jpg"
                                alt="Station Retail – Pune Metro Line 3"
                                className="w-full rounded-2xl object-cover shadow-md"
                            />
                        </div>

                        {/* Right — Content */}
                        <div className="flex-1">
                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                Pune Metro Line 3 (Hinjewadi – Shivajinagar Corridor) is designed to make everyday travel more
                                convenient by offering well-planned retail spaces at metro stations. Commuters will have easy
                                access to essential services such as eateries, cafés, medical stores, confectionery shops, and
                                daily-use accessories, across stations throughout the Line 3 corridor, connecting major IT hubs,
                                residential areas, and commercial centres from Hinjewadi to Shivajinagar.
                            </p>

                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                The retail spaces are thoughtfully placed within station areas to ensure quick access without
                                disrupting passenger movement. Inspired by leading metro systems across India, the focus is on
                                providing clean, accessible, and commuter-friendly retail options that add comfort and value to
                                daily travel.
                            </p>

                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                Pune Metro Line 3 aims to create more than just a transit system—it aims to offer a connected
                                and convenient travel experience for all passengers.
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
        </>
    );
}
