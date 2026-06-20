import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const retailSections = [
    {
        heading: 'STATION RETAIL - IT/ITES--Hinjewadi IT Zone',
        images: [
            {
                src: '/station-retail-sections/Bisleri.png',
                alt: 'Bisleri retail opportunity at Pune Metro stations',
            },
            {
                src: '/station-retail-sections/Funfair-toys.png',
                alt: 'Funfair toys retail opportunity at Pune Metro stations',
            },
            {
                src: '/station-retail-sections/burger-king.png',
                alt: 'Burger King food and beverage opportunity at Pune Metro stations',
            },
        ],
    },
    {
        heading: 'STATION RETAIL - Property Development / Large format Retail',
        images: [
            {
                src: '/station-retail-sections/star.png',
                alt: 'Star retail opportunity at Pune Metro stations',
            },
            {
                src: '/station-retail-sections/Zudio.png',
                alt: 'Zudio retail opportunity at Pune Metro stations',
            },
            {
                src: '/station-retail-sections/station-food.png',
                alt: 'Station food retail opportunity at Pune Metro stations',
            },
        ],
    },
];

const partnerLogos = [
    {
        src: '/station-retail-sections/Logos/7-eleven.png',
        alt: '7-Eleven',
    },
    {
        src: '/station-retail-sections/Logos/Amul.png',
        alt: 'Amul',
    },
    {
        src: '/station-retail-sections/Logos/Burger-King.png',
        alt: 'Burger King',
    },
    {
        src: '/station-retail-sections/Logos/Decathlon.png',
        alt: 'Decathlon',
    },
    {
        src: '/station-retail-sections/Logos/JK-jamboking.png',
        alt: 'Jumbo King',
    },
    {
        src: '/station-retail-sections/Logos/Masaldani.png',
        alt: 'Masaldani',
    },
    {
        src: '/station-retail-sections/Logos/Mi-chaiwala.png',
        alt: 'Mi Chaiwala',
    },
    {
        src: '/station-retail-sections/Logos/Reliance-Trends.png',
        alt: 'Reliance Trends',
    },
    {
        src: '/station-retail-sections/Logos/a-tata-and-tesco-enterprise-star.png',
        alt: 'Star Bazaar',
    },
    {
        src: '/station-retail-sections/Logos/appa-Coffee.png',
        alt: 'Appa Coffee',
    },
    {
        src: '/station-retail-sections/Logos/baskin-robbins.png',
        alt: 'Baskin Robbins',
    },
    {
        src: '/station-retail-sections/Logos/chitale.png',
        alt: 'Chitale',
    },
    {
        src: '/station-retail-sections/Logos/cottonking.png',
        alt: 'Cottonking',
    },
    {
        src: '/station-retail-sections/Logos/dimsum-mumo-express.png',
        alt: 'Dimsum Momo Express',
    },
    {
        src: '/station-retail-sections/Logos/kannu-ki-chai.png',
        alt: 'Kannu Ki Chai',
    },
    {
        src: '/station-retail-sections/Logos/mcdonalds.png',
        alt: "McDonald's",
    },
    {
        src: '/station-retail-sections/Logos/quick-mart.png',
        alt: 'Quick Mart',
    },
    {
        src: '/station-retail-sections/Logos/tATA-REALTY-AND-INFRASTRUCTURE-LTD.png',
        alt: 'Tata Realty and Infrastructure Limited',
    },
    {
        src: '/station-retail-sections/Logos/westside.png',
        alt: 'Westside',
    },
    {
        src: '/station-retail-sections/Logos/zudio-1.png',
        alt: 'Zudio',
    },
];

const firstSectionLogoPaths = [
    '/station-retail-sections/Logos/Amul.png',
    '/station-retail-sections/Logos/Mi-chaiwala.png',
    '/station-retail-sections/Logos/Masaldani.png',
    '/station-retail-sections/Logos/7-eleven.png',
    '/station-retail-sections/Logos/quick-mart.png',
    '/station-retail-sections/Logos/JK-jamboking.png',
    '/station-retail-sections/Logos/dimsum-mumo-express.png',
    '/station-retail-sections/Logos/cottonking.png',
    '/station-retail-sections/Logos/kannu-ki-chai.png',
    '/station-retail-sections/Logos/appa-Coffee.png',
    '/station-retail-sections/Logos/baskin-robbins.png',
    '/station-retail-sections/Logos/chitale.png',
    '/station-retail-sections/Logos/mcdonalds.png',
];

const firstSectionLogos = firstSectionLogoPaths
    .map((logoPath) => partnerLogos.find((logo) => logo.src === logoPath))
    .filter((logo): logo is (typeof partnerLogos)[number] => Boolean(logo));

const secondSectionLogos = partnerLogos.filter(
    (logo) => !firstSectionLogoPaths.includes(logo.src),
);

export default function StationRetail() {
    return (
        <>
            <Head>
                <title>Station Retail - Pune Metro Line 3</title>
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
                alt="Station Retail - Pune Metro"
            />

            {/* ── Content Section ── */}
            <section className="bg-white py-8 md:py-10">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <PageSectionHeading
                        wrap
                        className="mb-6 flex items-center gap-6 md:mb-8"
                    >
                        Station Retail – Pune Metro Line 3
                    </PageSectionHeading>

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
                                Pune Metro Line 3 (Hinjewadi – Shivajinagar
                                Corridor) is designed to make everyday travel
                                more convenient by offering well-planned retail
                                spaces at metro stations. Commuters will have
                                easy access to essential services such as
                                eateries, cafés, medical stores, confectionery
                                shops, and daily-use accessories, across
                                stations throughout the Line 3 corridor,
                                connecting major IT hubs, residential areas, and
                                commercial centres from Hinjewadi to
                                Shivajinagar.
                            </p>

                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                The retail spaces are thoughtfully placed within
                                station areas to ensure quick access without
                                disrupting passenger movement. Inspired by
                                leading metro systems across India, the focus is
                                on providing clean, accessible, and
                                commuter-friendly retail options that add
                                comfort and value to daily travel.
                            </p>

                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                Pune Metro Line 3 aims to create more than just
                                a transit system—it aims to offer a connected
                                and convenient travel experience for all
                                passengers.
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

            {retailSections.map((section, sectionIndex) => {
                const sectionLogos =
                    sectionIndex === 0 ? firstSectionLogos : secondSectionLogos;
                const repeatedLogos = [...sectionLogos, ...sectionLogos];
                const repeatedFirstMobileLogoRow = [
                    ...sectionLogos.filter((_, index) => index % 2 === 0),
                    ...sectionLogos.filter((_, index) => index % 2 === 0),
                ];
                const repeatedSecondMobileLogoRow = [
                    ...sectionLogos.filter((_, index) => index % 2 === 1),
                    ...sectionLogos.filter((_, index) => index % 2 === 1),
                ];

                return (
                    <section
                        key={section.heading}
                        className="bg-white py-8 md:py-10"
                    >
                        <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                            <PageSectionHeading
                                wrap
                                className="mb-6 flex items-center gap-6 md:mb-8"
                            >
                                {section.heading}
                            </PageSectionHeading>

                            <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
                                {section.images.map((image) => (
                                    <figure
                                        key={image.src}
                                        className="overflow-hidden rounded-lg bg-gray-100"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="aspect-[4/3] w-full object-cover"
                                            loading="lazy"
                                        />
                                    </figure>
                                ))}
                            </div>

                            <div className="mt-6 overflow-hidden md:mt-8">
                                <div className="hidden sm:block">
                                    <div className="animate-station-retail-logo-marquee flex w-max items-center gap-6">
                                        {repeatedLogos.map((logo, index) => (
                                            <div
                                                key={`${section.heading}-${logo.src}-${index}`}
                                                className="flex h-36 w-60 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-7 shadow-sm"
                                            >
                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    className="max-h-24 max-w-48 object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 sm:hidden">
                                    {[
                                        repeatedFirstMobileLogoRow,
                                        repeatedSecondMobileLogoRow,
                                    ].map((logos, rowIndex) => (
                                        <div
                                            key={rowIndex}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                className={`flex w-max items-center gap-4.5 ${
                                                    rowIndex === 0
                                                        ? 'animate-station-retail-logo-marquee'
                                                        : 'animate-station-retail-logo-marquee-reverse'
                                                }`}
                                            >
                                                {logos.map((logo, index) => (
                                                    <div
                                                        key={`${section.heading}-${logo.src}-${rowIndex}-${index}`}
                                                        className="flex h-28 w-46 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-5 shadow-sm"
                                                    >
                                                        <img
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            className="max-h-18 max-w-36 object-contain"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            <style>{`
                @keyframes station-retail-logo-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes station-retail-logo-marquee-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-station-retail-logo-marquee {
                    animation: station-retail-logo-marquee 38s linear infinite;
                }

                .animate-station-retail-logo-marquee-reverse {
                    animation: station-retail-logo-marquee-reverse 36s linear infinite;
                }

                .animate-station-retail-logo-marquee:hover,
                .animate-station-retail-logo-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    );
}
