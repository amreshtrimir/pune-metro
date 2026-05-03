import { Head } from '@inertiajs/react';

const heroBannerImage = 'https://www.figma.com/api/mcp/asset/25c3a191-10bf-400a-bb74-bfeff199170d';

const highlights = [
    {
        image: 'https://www.figma.com/api/mcp/asset/6898e370-3766-4c3d-abd2-955d3e097051',
        title: 'Ayurvedic Garden',
        description:
            'Built entirely from construction by-products, excavated topsoil, reclaimed borders, and salvaged planters, an Ayurvedic medicinal garden now thrives at our casting yard. This serves as a living example of circular thinking in a construction environment.',
    },
    {
        image: 'https://www.figma.com/api/mcp/asset/1d903b32-dafa-450b-9241-a426a62bcef7',
        title: 'Topsoil to Farmland',
        description:
            'We preserved and donated 170,450 cubic meters of excavated topsoil to local farmers, converting barren land into fertile agricultural plots. What is considered waste for a metro project becomes wealth for the community.',
    },
    {
        image: 'https://www.figma.com/api/mcp/asset/e0b30048-0cd7-4fbf-a602-bd758e7ebc20',
        title: 'Steel Scrap Reuse',
        description:
            'Approximately 200 tonnes of steel waste were straightened and reused for temporary site works. We are also exploring the use of scrap steel for sculptures and installations that reflect the industrial character of metro construction.',
    },
    {
        image: 'https://www.figma.com/api/mcp/asset/c535b0eb-cece-4a2d-879d-fab5dad92fc5',
        title: 'Student Workshops',
        description:
            'More than 50 students from Modern School, Pune, participated in hands-on creative sessions using reclaimed materials. This was followed by an environmental rally connecting art, sustainability, and civic action.',
    },
    {
        image: 'https://www.figma.com/api/mcp/asset/729d251b-2132-453f-b505-d0a6a0d0146d',
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
            <section>
                <div className="relative max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src={heroBannerImage}
                        alt="Art from Scrap - Puneri Metro"
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <p className="absolute right-10 bottom-10 font-montserrat text-[clamp(48px,7vw,100px)] font-semibold leading-none text-white/25 select-none">
                        PUNERI METRO
                    </p>
                </div>
            </section>

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-10">
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
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
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
                    <h2 className="mb-8 font-montserrat text-[30px] font-semibold text-black">Project Highlights</h2>

                    {/* Row 1: 3 columns */}
                    <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {highlights.slice(0, 3).map((item) => (
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

                    {/* Row 2: 2 columns */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {highlights.slice(3).map((item) => (
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
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
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
