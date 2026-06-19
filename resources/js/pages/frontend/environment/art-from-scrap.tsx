import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const artInstallations = [
    {
        image: '/art-from-scrap/item-new-1.png',
        title: 'Spiral of Progress',
        measurements: [
            {
                label: 'Medium',
                value: 'Reclaimed GI Construction Scrap, Mild Steel, Mixed Metals',
            },
            {
                label: 'Height',
                value: '14 Feet',
            },
        ],
        paragraphs: [
            'A city does not grow in a straight line. It rises in spirals, always circling back to its roots even as it climbs toward its future.',
            "Two ribbons of metal coil upward in a continuous double helix, etched with the icons of Pune's living identity: its workshops, its two-wheelers, its craftspeople and its everyday rhythms. At the peak, a Pune Metro train emerges, poised and purposeful, fourteen feet above the ground.",
            'Every sheet of metal is GI scrap recovered directly from the construction of this metro station, now returned to public life as permanent art. A reflecting pool at the base doubles the spiral downward, reminding us that a city’s greatest journeys are always rooted in what it has already built.',
        ],
        quote: '"We built this station. Then we built its memory, from the same material."',
    },
    {
        image: '/art-from-scrap/item-new-2.png',
        title: 'Confluence',
        measurements: [
            {
                label: 'Medium',
                value: 'Reclaimed GI Construction Scrap, Mild Steel, Mixed Metals',
            },
            {
                label: 'Height',
                value: '17 Feet',
            },
        ],
        paragraphs: [
            'Confluence is about connection. Between people and their city, between where we have come from and where we are going.',
            'Two organic forms rise together to create an arch and a gateway, the same threshold every Pune Metro commuter crosses each day. At the heart of the sculpture, a circular void frames the sky, the station and the city beyond, inviting you to look through, not just at.',
            'Every panel is GI scrap recovered from the construction of this metro station, material that built the platforms and shelters you stand within today. Shaped, welded and transformed, that same material now stands as permanent art.',
        ],
        quote: '"A city is not made of steel and concrete alone. It is made of every connection it dares to create."',
    },
    {
        image: '/art-from-scrap/item-new-3.png',
        title: 'Murmuration',
        measurements: [
            {
                label: 'Medium',
                value: 'Reclaimed GI Construction Scrap, Mild Steel, Mixed Metals',
            },
            {
                label: 'Installation',
                value: '100+ Hand-Cut Birds',
            },
            {
                label: 'Wingspan',
                value: '1.5 ft / 2.5 ft / 3 ft',
            },
            {
                label: 'Presentation',
                value: 'Suspended Ceiling Installation',
            },
        ],
        paragraphs: [
            'Look up. Above you, more than a hundred birds are frozen mid-flight, wings angled, each caught in its own private moment of motion.',
            "Murmuration draws from the natural phenomenon of birds moving together in vast formations, a metaphor for a city's daily pulse: thousands of individual journeys moving through the same spaces. Birds vary in wingspan from 1.5 to 3 feet, making the station ceiling feel like an open, infinite sky.",
            'Each bird has been individually cut and shaped from GI scrap recovered from the construction of this metro station. Nothing was wasted. Everything was transformed.',
        ],
        quote: '"A city in motion is its own kind of murmuration. A thousand journeys, one magnificent flow."',
    },
];

export default function ArtFromScrap() {
    return (
        <>
            <Head>
                <title>Art from Scrap - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Discover how Pune Metro Line 3 turns construction by-products into green spaces, community experiences, and creative installations through the Art from Scrap initiative."
                />
                <meta
                    name="keywords"
                    content="Pune Metro Line 3 Art from Scrap, PITCMRL Sustainability, Circular Economy Metro, Pune Metro Line 3 Green Initiative"
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/environment/environment-banner-md.png"
                srcMd="/banners/environment/environment-banner-md.png"
                srcLg="/banners/environment/environment-banner-lg.png"
                alt="Art from Scrap - Pune Metro"
            />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-8 pb-8 md:pt-10 md:pb-10">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <PageSectionHeading
                        wrap
                        className="mb-5 flex items-center gap-6"
                    >
                        Where Waste Becomes Something Beautiful
                    </PageSectionHeading>
                    <p className="mb-3 font-montserrat text-sm leading-relaxed text-black">
                        At Pune Metro Line 3, we believe that nothing should be
                        wasted, not material, not soil, not imagination. Our
                        &lsquo;Art from Scrap&rsquo; initiative turns
                        construction by-products into green spaces, community
                        experiences, and creative installations.
                    </p>
                    <p className="font-montserrat text-xl font-normal text-brand">
                        Our choices matter, because every little action makes a
                        big difference.
                    </p>
                </div>
            </section>

            {/* ── Art Installations ── */}
            <section className="bg-white pb-8 md:pb-16">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <div className="space-y-8 md:space-y-10">
                        {artInstallations.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(320px,370px)_minmax(0,1fr)] lg:items-center lg:gap-9"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="aspect-[370/446] w-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h2 className="mb-3 font-montserrat text-base leading-snug font-bold text-black uppercase">
                                        {item.title}
                                    </h2>

                                    <div className="mb-4 space-y-0.5 font-montserrat text-sm leading-relaxed text-black">
                                        {item.measurements.map(
                                            (measurement) => (
                                                <p key={measurement.label}>
                                                    <span className="font-bold">
                                                        {measurement.label}:
                                                    </span>{' '}
                                                    {measurement.value}
                                                </p>
                                            ),
                                        )}
                                    </div>

                                    <div className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                                        {item.paragraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                        <p className="font-semibold text-[#ff3f97] italic">
                                            {item.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Collaborate with Us ── */}
            <section className="bg-white pb-8">
                <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                    <h2 className="mb-4 font-montserrat text-xl font-semibold text-black md:text-[30px]">
                        Collaborate with Us
                    </h2>
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        We welcome artists, schools, and community groups to
                        partner on Art from Scrap. To get involved, please
                        contact our Environment &amp; Sustainability team at{' '}
                        <a
                            href="mailto:contactpunerimetro@tatarealty.in"
                            className="text-brand hover:underline"
                        >
                            contactpunerimetro@tatarealty.in
                        </a>
                        .
                    </p>
                </div>
            </section>
        </>
    );
}
