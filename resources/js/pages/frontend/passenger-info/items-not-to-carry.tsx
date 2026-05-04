import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const imgArms = '/items-not-to-carry/arms.png';
const imgBlade = '/items-not-to-carry/sharp-objects.png';
const imgTools = '/items-not-to-carry/tools-and-equipments.png';
const imgExplosives = '/items-not-to-carry/explosives-and-fireworks.png';
const imgFlammable = '/items-not-to-carry/flammable.png';
const imgAlcohol = '/items-not-to-carry/tobacco-alcohal.png';
const imgChemical = '/items-not-to-carry/chemical.png';
const imgBioHazard = '/items-not-to-carry/offensive.png';
const imgAnimals = '/items-not-to-carry/animal.png';
const imgOther = '/items-not-to-carry/other-items.png';

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

            {/* Decorative icon – bottom-right */}
            <img src={category.icon} alt="" className="absolute right-4 bottom-4 h-32 w-32 object-contain opacity-80 pointer-events-none" />

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
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Items Not to Carry - Puneri Metro" />

            {/* ── Page Title + Intro ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
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
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
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
