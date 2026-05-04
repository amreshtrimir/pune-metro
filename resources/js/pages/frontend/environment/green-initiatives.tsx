import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';


const imgEnergy1 = '/evvironment/green-initiative/energy-conservation-1.png';
const imgEnergy2 = '/evvironment/green-initiative/energy-conservation-2.png';
const imgWater = '/evvironment/green-initiative/water-conservation-1.png';
const imgResource = '/evvironment/green-initiative/resource-conservation-1.png';
const imgWaste = '/evvironment/green-initiative/waste-management.png';
const imgPlantation = '/evvironment/green-initiative/plantation-and-recognition.png';

export default function GreenInitiatives() {
    return (
        <>
            <Head>
                <title>Green Initiatives - Puneri Metro</title>
                <meta
                    name="description"
                    content="Discover how Pune Metro Line 3 embeds sustainability into every phase — from energy conservation and water management to waste reduction and community engagement."
                />
                <meta
                    name="keywords"
                    content="Pune Metro Green Initiatives, PITCMRL Sustainability, Energy Conservation, Water Conservation, Pune Metro Environment"
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/esg-environment-banner/green-initiative-banner.png" alt="Green Initiatives - Puneri Metro" />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="mb-3 flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Green Initiatives
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                    <p className="mb-3 font-montserrat text-xl font-normal text-brand">Green at Every Step</p>
                    <p className="font-montserrat text-sm leading-relaxed text-black">
                        From construction sites to station design, Puneri Metro Line 3 embeds sustainability into every phase.
                        Here&rsquo;s what we&rsquo;re doing across energy, water, waste, and biodiversity.
                    </p>
                </div>
            </section>

            {/* ── Energy Conservation ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Images */}
                        <div className="flex h-full flex-col gap-4">
                            <div className="flex-1 overflow-hidden rounded-lg">
                                <img
                                    src={imgEnergy1}
                                    alt="Energy Conservation"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex-1 overflow-hidden rounded-lg">
                                <img
                                    src={imgEnergy2}
                                    alt="Energy Conservation"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">
                                Energy Conservation
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                The Puneri Metro Line 3 is an energy-conscious ecosystem that minimizes consumption and maximizes
                                recovery at every stage of construction and operation.
                            </p>

                            <div className="space-y-5">
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">LED Lighting</h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        Energy-efficient LED fixtures across all sites saved 1,05,548 kWh in FY 2025–26.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        Energy-Efficient Equipment
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        VFD-lifting equipment and VRD-fitted welding, cutting &amp; bending machines saved
                                        5,38,164 kWh in FY 2025-26. The combined CO₂e reduction is around 461 tonnes.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        Grid over Diesel
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        19,85,786 kWh of grid electricity used in FY 2025–26, saving 7,94,314 litres of diesel and
                                        reducing ~675 tonnes of CO₂e. Cumulative: 1,16,18,585 KWH used, 46,47,434 litres diesel
                                        saved and approximately 3,950 tonnes CO₂e avoided.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        Regenerative Braking
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        All rolling stock is fitted with regenerative braking, recovering around 51% of braking
                                        energy to power onboard systems (30–40% net electricity saving per trip).
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        VVF Drive Systems
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        92 escalators (11–50 kW) and 94 lifts (11/13 kW) fitted with Variable Voltage Frequency
                                        drives – achieving ~30% energy savings. Escalators auto-shift to standby at 0.2 m/s when
                                        idle; lifts auto-home with lights off.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">Solar Power</h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        MoU with Tata Power for 7.67 MW of rooftop solar being installed across all stations and
                                        the depot, generating ~1.4 crore kWh/year.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        Fly Ash Bricks &amp; AAC Blocks
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        Used in station building envelopes for better insulation, directly reducing operational
                                        energy consumption.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        High-Performance Glass
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        15–20% recycled content with low U-value, improving energy efficiency of stations and depot
                                        buildings.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-1 font-montserrat text-base font-semibold text-black">
                                        LED Stations &amp; SMS
                                    </h3>
                                    <p className="font-montserrat text-sm leading-relaxed text-black">
                                        40% reduction in Lighting Power Density (LPD) has been achieved across all stations,
                                        depot, and ancillary buildings. The Centralized Station Management System (SMS) enables
                                        real-time energy monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Water Conservation ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Content */}
                        <div>
                            <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">
                                Water Conservation
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                Water is one of our most precious shared resources. From the first day of construction to our
                                long-term daily operations, the Puneri Metro Line 3 Project employs a circular water management
                                strategy to minimize freshwater intake and maximize reuse.
                            </p>

                            <p className="mb-4 font-montserrat text-sm leading-relaxed text-black">
                                Our construction sites operate with high water-efficiency standards, ensuring that we reuse as much
                                as we consume.
                            </p>

                            <div className="space-y-5">
                                <div>
                                    <h3 className="mb-2 font-montserrat text-base font-semibold text-black">
                                        During Construction (FY 2025-26)
                                    </h3>
                                    <ul className="space-y-2 font-montserrat text-sm leading-relaxed text-black">
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>Wastewater Recycling:</strong> In the past fiscal year, we recycled 7,696
                                                KL of water through Sewage Treatment Plants (STP) for flushing at labor camps. To
                                                date, our cumulative STP recycling has reached 76,109 KL, supporting site cleaning
                                                and dust suppression.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>RO System Efficiency:</strong> We don&rsquo;t let &ldquo;reject&rdquo;
                                                water go to waste. Last year, we diverted 3,296 KL (reaching a cumulative total of
                                                26,496 KL) from our RO systems to be used for road cleaning and general camp
                                                maintenance.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>Chemical Innovation:</strong> By using advanced admixtures and curing
                                                compounds (over 2.9 lakh litres), we have reduced the need for traditional
                                                water-intensive curing. This has saved 23,205 KL of water annually and a massive
                                                73,015 KL cumulatively.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="mb-2 font-montserrat text-base font-semibold text-black">
                                        During Operations
                                    </h3>
                                    <ul className="space-y-2 font-montserrat text-sm leading-relaxed text-black">
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>Zero Liquid Discharge (ZLD) at Depot:</strong> Our main depot is designed
                                                for total self-sufficiency. 100% of the water used for toilet flushing and 90% of
                                                horticulture requirements will be met using treated wastewater.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>Rainwater Harvesting:</strong> Every station across the alignment is
                                                equipped with rainwater harvesting systems designed to capture 50% of the total
                                                runoff volume, recharging local groundwater tables.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                            <span>
                                                <strong>Ultra-Efficient Fixtures:</strong> By installing motion-sensor fixtures and
                                                high-efficiency low-flow technology, we have achieved a 40% reduction in baseline
                                                water consumption across all facilities.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={imgWater}
                                alt="Water Conservation"
                                className="h-full max-h-[600px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Resource Conservation ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Image */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={imgResource}
                                alt="Resource Conservation"
                                className="h-full max-h-[500px] w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">
                                Resource Conservation
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                The project prioritizes low-impact materials to reduce the embodied carbon of its structures while
                                supporting the local economy.
                            </p>

                            <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Alternative Aggregates:</strong> By utilizing 4,25,588 MT of Manufactured Sand
                                        (M-Sand) in place of river sand, the project has eliminated the need for carbon-intensive
                                        dredging.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Green Concrete:</strong> The inclusion of 57,831 MT of Ground Granulated
                                        Blast-furnace Slag (GGBS) as a cement alternative significantly lowers the environmental
                                        footprint of the project&rsquo;s concrete works.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Low-Carbon Logistics:</strong> To minimize transport-related emissions, all major
                                        raw materials—including steel, cement, and aggregates—are sourced from within a 400 km
                                        radius of the project site.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Soil Revitalization:</strong> Approximately 1,70,450 cubic meters of topsoil have
                                        been preserved or utilized. This includes 60,000 cum donated to farmers to convert barren
                                        land into fertile plots and 1,00,000 cum reserved for onsite landscaping.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Waste Management ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Content */}
                        <div>
                            <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">Waste Management</h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                The project adheres to a strict &ldquo;Zero Landfill&rdquo; philosophy, ensuring that
                                construction byproducts are treated as valuable resources.
                            </p>

                            <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Bulk Logistics:</strong> By delivering cement via bulk tankers directly into silos,
                                        the project eliminated the use of 1,632,200 plastic bags in FY 2025-26, bringing the
                                        cumulative total to over 3.6 million bags.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Material Recovery:</strong> Approximately 200 tonnes of steel waste have been
                                        straightened and reused for temporary on-site activities.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Strategic Recycling:</strong> All waste streams are diverted from landfills through
                                        authorized partnerships: Construction &amp; Demolition (C&amp;D) waste is used for approved
                                        land filling, food waste is provided to piggery farms, and hazardous materials are handled
                                        by MPCB-approved recyclers.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Plastic Mitigation:</strong> Monthly collection drives across all PML 3 stations
                                        recover approximately 1,000 kg of single-use plastic per month for recycling.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={imgWaste}
                                alt="Waste Management"
                                className="h-full max-h-[500px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Plantation & Recognition ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {/* Image */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={imgPlantation}
                                alt="Plantation and Recognition"
                                className="h-full max-h-[500px] w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">
                                Plantation &amp; Recognition
                            </h2>
                            <p className="mb-6 font-montserrat text-sm leading-relaxed text-black">
                                A &ldquo;green-first&rdquo; engineering approach ensures that the project coexists harmoniously
                                with the city&rsquo;s existing flora.
                            </p>

                            <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Tree Conservation:</strong> Through revised construction methods—such as adjusting
                                        crane placements and refining alignments—over 800 trees have been conserved.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Active Afforestation:</strong> In FY 2025-26, the project added 500+ trees to the
                                        urban canopy.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                                    <span>
                                        <strong>Award-Winning Excellence:</strong> The project&rsquo;s commitment to forestry
                                        earned 1st Prize in five categories at the 43rd Annual PMC Garden Department Competition.
                                        This includes the management of over 4,400 trees and the successful transplantation of 600
                                        mature trees across MIDC Phase 3 and other key locations like Panchavati Uddyan, Animal
                                        Husbandry etc.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Community & Awareness ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-3 font-montserrat text-[30px] font-semibold text-black">
                        Community &amp; Awareness
                    </h2>
                    <p className="mb-5 font-montserrat text-sm leading-relaxed text-black">
                        Sustainability at PML 3 is driven by a highly trained workforce and an engaged community.
                    </p>
                    <ul className="space-y-3 font-montserrat text-sm leading-relaxed text-black">
                        <li className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                            <span>
                                <strong>Workforce Expertise:</strong> The project team has completed 3,880 man-hours of
                                environment-specific capacity building to ensure rigorous adherence to international best
                                practices.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black" />
                            <span>
                                <strong>Student Engagement:</strong> To foster future stewardship, the project recently
                                conducted an environmental training program and rally at Modern School, Pune, involving over 50
                                students in the mission for a cleaner, greener city.
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
