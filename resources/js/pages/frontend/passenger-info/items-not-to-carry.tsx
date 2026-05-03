import { Head } from '@inertiajs/react';

const heroBannerImage = 'https://www.figma.com/api/mcp/asset/99379e71-8b6c-45d7-9b09-cdea830cb1dc';

const imgArms = 'https://www.figma.com/api/mcp/asset/efca72f5-19df-49d5-9787-8f7dd793ec0b';
const imgBlade = 'https://www.figma.com/api/mcp/asset/243f5c69-745f-4570-8487-e059844b7cb7';
const imgTools = 'https://www.figma.com/api/mcp/asset/b18baed4-e4e4-4515-95af-32e922d046a6';
const imgExplosives = 'https://www.figma.com/api/mcp/asset/e7d8514a-a168-4fc6-8dec-b2ca19dd5fda';
const imgFlammable = 'https://www.figma.com/api/mcp/asset/e2e1cd2e-860d-426c-9db3-d93f7a32e33e';
const imgAlcohol = 'https://www.figma.com/api/mcp/asset/874d4647-781f-487b-a14c-4ac501186e8c';
const imgChemical = 'https://www.figma.com/api/mcp/asset/48f565e1-4f39-4dd2-8a42-7c251d75059e';
const imgBioHazard = 'https://www.figma.com/api/mcp/asset/0cc2e27a-617c-4510-b781-19a8b0153164';
const imgAnimals = 'https://www.figma.com/api/mcp/asset/c88fe565-b77e-4286-b650-4a6df59150eb';
const imgOther = 'https://www.figma.com/api/mcp/asset/9cffe592-4ff4-4759-b79b-235a60836e3e';

type Category = {
    number: number;
    title: string;
    items: string[];
    icon: string;
};

const categories: Category[] = [
    {
        number: 1,
        title: 'Arms, Weapons & Firearms',
        items: [
            'Pistols, revolvers, rifles, shotguns',
            'Licensed personal weapons',
            'Ammunition of any kind',
            'Air rifles, air guns, pellet guns',
            'Sports guns, flare guns',
            'Stun guns, shocking devices',
            'Starter pistols, gun lighters',
            'Gun parts and realistic replicas of firearms',
        ],
        icon: imgArms,
    },
    {
        number: 2,
        title: 'Sharp Objects & Bladed Articles',
        items: [
            'Knives with blade length exceeding 10 cm (4 inches)',
            'Scissors with cutting arms exceeding 10 cm',
            'Swords, kukris, daggers',
            'Meat cleavers',
            'Hatchets and axes',
        ],
        icon: imgBlade,
    },
    {
        number: 3,
        title: 'Tools & Equipment Capable of Causing Injury',
        items: [
            'Crowbars, hammers',
            'Saws, large cleavers',
            'Screwdrivers, pliers, wrenches and tools exceeding 17.5 cm (7 inches) in length',
        ],
        icon: imgTools,
    },
    {
        number: 4,
        title: 'Explosives & Fireworks',
        items: [
            'Gunpowder, detonators',
            'Firecrackers, fireworks',
            'Plastic explosives, hand grenades',
            'Realistic replicas of explosive devices',
        ],
        icon: imgExplosives,
    },
    {
        number: 5,
        title: 'Flammable & Inflammable Substances',
        items: [
            'Petrol, diesel, kerosene',
            'All kinds of spirits',
            'Aerosols and highly inflammable liquids',
            'LPG / CNG / gas cylinders',
            'Matchboxes and lighters',
            'Wet batteries',
        ],
        icon: imgFlammable,
    },
    {
        number: 6,
        title: 'Tobacco, Alcohol & Intoxicants',
        items: [
            'Alcoholic beverages',
            'Tobacco, gutkha, pan masala',
            'Electronic cigarettes (e-cigarettes)',
            'Any intoxicating substance',
        ],
        icon: imgAlcohol,
    },
    {
        number: 7,
        title: 'Chemical, Hazardous & Dangerous Materials',
        items: [
            'Radioactive substances',
            'Acids and corrosive materials',
            'Poisonous / toxic substances',
            'Oxidising substances',
            'Compressed, liquefied or dissolved gases',
            'Tear gas',
        ],
        icon: imgChemical,
    },
    {
        number: 8,
        title: 'Offensive, Unsanitary & Bio-Hazard Items',
        items: [
            'Human or animal blood (coagulated or decomposed)',
            'Human remains, ashes, skeletons or body parts',
            'Corpses or carcasses of animals or birds',
            'Raw fish and raw meat',
            'Dry fish with strong odour (e.g. sukka fish, bombil, prawns)',
            'Decayed vegetable or animal matter',
            'Manure of any kind',
            'Oily rags, waste materials',
        ],
        icon: imgBioHazard,
    },
    {
        number: 9,
        title: 'Animals & Birds',
        items: ['All live animals and birds (except authorised security / sniffer dogs deployed for official duties)'],
        icon: imgAnimals,
    },
    {
        number: 10,
        title: 'Other Prohibited Items',
        items: [
            'Gas cylinders of any type',
            'Any item posing a threat to passenger safety, public order, or metro operations',
            'Items prohibited under the Metro Railway (Operation & Maintenance) rules as interpreted by Pune Metro security',
        ],
        icon: imgOther,
    },
];

function CategoryCard({ category }: { category: Category }) {
    return (
        <div className="relative border border-[#d8d8d8] bg-white p-6 md:p-10">
            {/* Pink top-left corner accent */}
            <span className="absolute top-0 left-0 block h-5 w-5 border-t-2 border-l-2 border-[#e8449a]" />

            <div className="flex items-start gap-3">
                {/* Number */}
                <span className="shrink-0 font-montserrat font-semibold text-black text-[24px] md:text-[30px]" style={{ lineHeight: '1.2' }}>
                    {category.number}.
                </span>

                {/* Title + list aligned under the title, not the number */}
                <div className="flex-1">
                    <h2 className="mb-4 font-montserrat font-semibold text-black text-[24px] md:text-[30px]" style={{ lineHeight: '1.2' }}>
                        {category.title}
                    </h2>

                    <ol className="mb-4 list-decimal space-y-1 pl-5">
                        {category.items.map((item) => (
                            <li key={item} className="font-montserrat text-sm leading-[28px] text-black">
                                {item}
                            </li>
                        ))}
                    </ol>

                    {/* Decorative icon – bottom-right */}
                    <div className="flex justify-end">
                        <img src={category.icon} alt={category.title} className="h-32 w-32 object-contain opacity-80" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ItemsNotToCarry() {
    return (
        <>
            <Head>
                <title>Items Not to Carry - Puneri Metro</title>
                <meta
                    name="description"
                    content="Find out which items are prohibited inside Pune Metro premises and trains. Stay safe and follow Pune Metro's restricted items policy."
                />
                <meta
                    name="keywords"
                    content="Pune Metro prohibited items, items not to carry, restricted items, Pune Metro safety rules"
                />
            </Head>

            {/* ── Hero Banner ── */}
            <section>
                <div className="relative max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src={heroBannerImage}
                        alt="Items Not to Carry - Puneri Metro"
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <p className="absolute right-6 bottom-6 font-montserrat text-[clamp(32px,7vw,100px)] font-semibold leading-none text-white/25 select-none md:right-10 md:bottom-10">
                        PUNERI METRO
                    </p>
                </div>
            </section>

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Items Not to Carry
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-4 font-montserrat text-sm leading-relaxed text-black">
                        Please do not carry any restricted or unsafe items inside the metro premises or trains.
                    </p>
                    <p className="mt-2 mb-10 font-inter text-xl capitalize text-brand">
                        Built for Faster, Smarter, more Comfortable travel
                    </p>
                </div>
            </section>

            {/* ── Categories Grid ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1440px] px-6 min-[1441px]:px-0">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {categories.map((category) => (
                            <CategoryCard key={category.number} category={category} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
