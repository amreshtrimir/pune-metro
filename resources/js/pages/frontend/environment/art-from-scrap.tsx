import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';



const highlights = [
    {
        image: '/art-from-scrap/item1.png',
        title: 'Ayurvedic Garden',
        description:
            'Built entirely from construction by-products, excavated topsoil, reclaimed borders, and salvaged planters, an Ayurvedic medicinal garden now thrives at our casting yard. This serves as a living example of circular thinking in a construction environment.',
    },
    {
        image: '/art-from-scrap/item-2.png',
        title: 'Topsoil to Farmland',
        description:
            'We preserved and donated 170,450 cubic meters of excavated topsoil to local farmers, converting barren land into fertile agricultural plots. What is considered waste for a metro project becomes wealth for the community.',
    },
    {
        image: '/art-from-scrap/item-3.png',
        title: 'Steel Scrap Reuse',
        description:
            'Approximately 200 tonnes of steel waste were straightened and reused for temporary site works. We are also exploring the use of scrap steel for sculptures and installations that reflect the industrial character of metro construction.',
    },
    {
        image: '/art-from-scrap/item-4.png',
        title: 'Student Workshops',
        description:
            'More than 50 students from Modern School, Pune, participated in hands-on creative sessions using reclaimed materials. This was followed by an environmental rally connecting art, sustainability, and civic action.',
    },
    {
        image: '/art-from-scrap/item-5.png',
        title: 'Recognized Green Spaces',
        description:
            'PITCMRL won 1st Prize in five categories at the 43rd PMC Garden Competition for transforming project land into thriving green zones using conserved topsoil and reclaimed materials.',
    },
];

export default function ArtFromScrap() {
    return (
        <>
            <Head>
                <title>Art from Scrap - Puneri Metro</title>
                <meta
                    name="description"
                    content="Discover how Pune Metro Line 3 turns construction by-products into green spaces, community experiences, and creative installations through the Art from Scrap initiative."
                />
                <meta
                    name="keywords"
                    content="Pune Metro Art from Scrap, PITCMRL Sustainability, Circular Economy Metro, Pune Metro Green Initiative"
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner src="/banners/art-from-scrap.png" alt="Art from Scrap - Puneri Metro" />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="mb-5 flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Where Waste Becomes Something Beautiful
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                    <p className="mb-3 font-montserrat text-sm leading-relaxed text-black">
                        At Puneri Metro Line 3, we believe that nothing should be wasted, not material, not soil, not imagination.
                        Our &lsquo;Art from Scrap&rsquo; initiative turns construction by-products into green spaces, community
                        experiences, and creative installations.
                    </p>
                    <p className="font-montserrat text-xl font-normal text-brand">
                        Our choices matter, because every little action makes a big difference.
                    </p>
                </div>
            </section>

            {/* ── Project Highlights ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-8 font-montserrat text-[30px] font-semibold text-black">Project Highlights</h2>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {highlights.map((item) => (
                            <div key={item.title}>
                                <div className="mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-[249px] w-full object-cover"
                                    />
                                </div>
                                <h3 className="mb-2 font-montserrat text-base font-semibold text-black">{item.title}</h3>
                                <p className="font-montserrat text-sm leading-relaxed text-black">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Collaborate with Us ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-4 font-montserrat text-[30px] font-semibold text-black">Collaborate with Us</h2>
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        We welcome artists, schools, and community groups to partner on Art from Scrap. To get involved, please
                        contact our Environment &amp; Sustainability team at{' '}
                        <a
                            href="mailto:customercare.pmrp@mahametro.org"
                            className="text-brand hover:underline"
                        >
                            customercare.pmrp@mahametro.org
                        </a>
                        .
                    </p>
                </div>
            </section>
        </>
    );
}
