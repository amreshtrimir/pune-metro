import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';


const constructionImage = 'https://www.figma.com/api/mcp/asset/da09091d-d2e9-4f58-ac53-f42c5fcb5821';
const operationalImage = 'https://www.figma.com/api/mcp/asset/e1b57b64-4888-4bc1-98fe-6f44e38df90b';

const impactStats = [
    {
        value: '~3,950 tCO₂e',
        label: 'saved through grid electricity use (construction phase, cumulative)',
    },
    {
        value: '~1,924 tCO₂e',
        label: 'saved via energy-efficient equipment (construction phase, cumulative)',
    },
    {
        value: '~11,480 tCO₂',
        label: 'per year saved through solar energy (operational phase)',
    },
    {
        value: '~1,28,433 tCO₂e',
        label: 'per year reduced through modal shift (operational phase)',
    },
];

export default function CarbonCredit() {
    return (
        <>
            <Head>
                <title>Carbon Credit - Puneri Metro</title>
                <meta
                    name="description"
                    content="Discover how Pune Metro Line 3 measures and reduces its carbon impact across construction and operations, and its journey towards carbon credit registration."
                />
                <meta
                    name="keywords"
                    content="Pune Metro Carbon Credit, PITCMRL Carbon Reduction, Pune Metro ESG, Metro Line 3 Sustainability, Carbon Impact"
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner src="/banners/esg-environment-banner/esg-banner.png" alt="Pune Metro Carbon Credit" />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="mb-6 flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Measuring Our Carbon Impact
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        Every efficiency gained, every litre of diesel avoided, every vehicle taken off the road, PITCMRL tracks
                        and quantifies it all. Here is our verified carbon reduction story, across construction and operations.
                    </p>
                </div>
            </section>

            {/* ── Construction Phase Savings ── */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Left: Image */}
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={constructionImage}
                                alt="Construction Phase"
                                className="h-full min-h-[400px] w-full object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex flex-col justify-start">
                            <h2 className="mb-4 font-montserrat text-[30px] font-semibold text-black">
                                Construction Phase Savings
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                PITCMRL has embedded sustainability at every stage of construction, delivering measurable carbon
                                savings through energy choices and material innovation.
                            </p>

                            {/* Energy Efficiency */}
                            <h3 className="mb-2 font-montserrat text-base font-semibold text-black">
                                Energy Efficiency &amp; Power Use
                            </h3>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                The shift from diesel generator (DG) sets to grid electricity has resulted in an annual reduction
                                of approximately 675 tCO₂e, with cumulative savings reaching nearly 3,950 tCO₂e. In parallel,
                                the deployment of energy-efficient equipment and LED lighting has contributed an additional 461
                                tCO₂e annually, taking cumulative savings to around 1,924 tCO₂e.
                            </p>

                            {/* Low-Carbon Materials */}
                            <h3 className="mb-2 font-montserrat text-base font-semibold text-black">
                                Low-Carbon Materials &amp; Sourcing
                            </h3>
                            <p className="mb-3 font-montserrat text-sm leading-relaxed text-black">
                                Material selection has played a key role in reducing embodied carbon:
                            </p>
                            <ul className="space-y-2 font-montserrat text-sm leading-relaxed text-black">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>GGBS over Cement:</strong> Over 57,831 MT of Ground Granulated Blast Furnace Slag
                                        (GGBS) has been used in place of conventional cement, significantly lowering emissions.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>M-Sand over River Sand:</strong> Approximately 4,25,588 MT of M-Sand has replaced
                                        river sand, eliminating the need for dredging and reducing transport-related emissions.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Local Sourcing:</strong> All raw materials have been sourced within a 400 km radius,
                                        minimizing supply chain carbon footprint.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Operational Phase ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Left: Content */}
                        <div className="flex flex-col justify-start">
                            <h2 className="mb-4 font-montserrat text-[30px] font-semibold leading-tight text-black">
                                Operational Phase: Enabling Sustainable Mobility
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                Post-commissioning, PITCMRL continues to deliver substantial environmental benefits through cleaner
                                operations and modal shift.
                            </p>

                            {/* Modal Shift Impact */}
                            <h3 className="mb-2 font-montserrat text-base font-semibold text-black">Modal Shift Impact</h3>
                            <p className="mb-3 font-montserrat text-sm leading-relaxed text-black">
                                With an estimated 1,58,431 vehicles removed from Pune's roads daily, the system is significantly
                                reducing congestion and emissions. Based on an average trip length of 8.89 km:
                            </p>
                            <ul className="mb-6 space-y-2 font-montserrat text-sm leading-relaxed text-black">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        Daily fuel savings amount to approximately 1,26,733 litres of petrol and 24,314 litres of
                                        diesel
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>This translates into an annual carbon reduction of around 1,28,433 tCO₂e</span>
                                </li>
                            </ul>

                            {/* Renewable Energy */}
                            <h3 className="mb-2 font-montserrat text-base font-semibold text-black">
                                Renewable Energy Integration
                            </h3>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                The project generates nearly 1.4 crore kWh of solar power annually, leading to carbon savings of
                                approximately 11,480 tCO₂ per year.
                            </p>

                            {/* Regenerative Braking */}
                            <h3 className="mb-2 font-montserrat text-base font-semibold text-black">Regenerative Braking</h3>
                            <p className="font-montserrat text-sm leading-relaxed text-black">
                                Advanced regenerative braking systems recover nearly 51% of braking energy per trip, reducing
                                overall energy consumption and lowering the carbon intensity of operations.
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={operationalImage}
                                alt="Operational Phase"
                                className="h-full min-h-[400px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Total Carbon Impact Summary ── */}
            <section className="bg-gradient-to-b from-[#f3f3f3] to-white py-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">Total Carbon Impact Summary</h2>
                    <p className="mb-10 font-montserrat text-sm leading-relaxed text-black">
                        PITCMRL's integrated sustainability approach has resulted in significant, quantifiable carbon reductions:
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 bg-white sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                        {impactStats.map((stat, i) => (
                            <div key={i} className="flex flex-col justify-center px-6 py-8">
                                <p className="mb-2 font-montserrat text-[28px] font-medium leading-tight text-black">
                                    {stat.value}
                                </p>
                                <p className="font-montserrat text-sm leading-relaxed text-black">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Carbon crediting paragraph */}
                    <p className="mt-10 font-montserrat text-sm leading-relaxed text-black">
                        PITCMRL is actively exploring the registration of these verified reductions under recognised carbon
                        crediting frameworks. This will further strengthen its commitment to transparency, accountability, and
                        long-term climate leadership by building a credible and auditable record of its environmental impact.
                    </p>
                </div>
            </section>

        </>
    );
}
