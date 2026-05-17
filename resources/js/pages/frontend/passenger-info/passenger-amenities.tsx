import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

type AmenitySection = {
    title: string;
    image: string;
    items: string[];
};

type CommonFacility = {
    group: string;
    items: string[];
};

// Section images (downloaded from Figma design)
const imgEnvFriendly = '/pass-amenities/section-env-friendly.png';
const imgEscalator = '/pass-amenities/section-escalator.png';
const imgElevator = '/pass-amenities/section-elevator.png';
const imgLastMile = '/pass-amenities/section-last-mile.png';
const imgTicketing = '/pass-amenities/section-ticketing.png';
const imgSafety = '/pass-amenities/section-safety.png';
const imgRestroom = '/pass-amenities/section-restroom.png';
const imgPlatform = '/pass-amenities/section-platform.png';
const imgCtaTrain = '/pass-amenities/section-cta-train.png';

// Amenity sections ordered left-to-right, top-to-bottom in the 3-column grid
const amenitySections: AmenitySection[] = [
    {
        title: 'Environment-Friendly Features',
        image: imgEnvFriendly,
        items: [
            'Solar panels on station rooftops',
            'Energy-efficient lighting systems',
            'Zero-discharge wastewater management',
            'Green building and eco-friendly practices',
        ],
    },
    {
        title: 'Passenger Movement & Accessibility',
        image: imgEscalator,
        items: [
            'Escalators at entry/exit and platforms',
            'Lifts/elevators for senior citizens, pregnant women and persons with disabilities',
            'Wide staircases with handrails',
        ],
    },
    {
        title: 'Facilities for Persons with Disabilities',
        image: imgElevator,
        items: [
            'Wheelchair-accessible elevators',
            'Tactile pathways for visually impaired passengers',
            'Accessible toilets',
            'Priority seating and boarding assistance',
        ],
    },
    {
        title: 'Last-Mile Connectivity',
        image: imgLastMile,
        items: [
            'Integration with PMPML buses',
            'Integration with private players for additional routes',
            'Auto-rickshaw and cab pickup zones',
            'Pedestrian walkways and foot over bridges',
            'Parking facilities at selected stations',
        ],
    },
    {
        title: 'Ticketing & Entry Facilities',
        image: imgTicketing,
        items: [
            'Ticket counters at stations',
            'Contactless Ticket Vending Machines (CTVMs)',
            'QR-based tickets via Pune Metro App and WhatsApp',
            'National Common Mobility Card (One Pune Card)',
            'Automatic Fare Collection (AFC) gates',
        ],
    },
    {
        title: 'Safety & Security Facilities',
        image: imgSafety,
        items: [
            'CCTV surveillance across stations and platforms',
            '24x7 security personnel including female staff',
            'Separate frisking zones for men and women',
            'Emergency help points and public announcement systems',
            'Fire detection and firefighting systems',
        ],
    },
    {
        title: 'Restroom & Basic Amenities',
        image: imgRestroom,
        items: [
            'Separate restrooms for men and women',
            'Disabled-friendly toilets',
            'Drinking water facilities',
            'Dustbins and waste segregation systems',
        ],
    },
    {
        title: 'Platform & Train Facilities',
        image: imgPlatform,
        items: [
            'Passenger Information Display Systems (PIDS)',
            'Audio announcements in Marathi, Hindi and English',
            'Route maps and directional signage',
            'Designated waiting areas',
        ],
    },
];

const commonFacilities: CommonFacility[] = [
    {
        group: 'Mobility & Accessibility',
        items: ['Escalators', 'Lifts', 'Ramps for wheelchair users'],
    },
    {
        group: 'Waiting & Circulation Areas',
        items: ['Platforms with seating', 'Passenger information display boards'],
    },
    {
        group: 'Security',
        items: ['CCTV Surveillance', 'Security Personnel', 'Emergency help points'],
    },
    {
        group: 'Entry & Exit',
        items: ['Automatic Fare Collection (AFC) gates'],
    },
    {
        group: 'Ticketing',
        items: ['Ticket counters / Contactless Ticket vending machines'],
    },
    {
        group: 'Amenities',
        items: ['Drinking water', 'Dustbins'],
    },
    {
        group: 'Safety & Emergency',
        items: ['Fire-fighting equipment', 'Emergency evacuation'],
    },
];

function SectionCard({ section }: { section: AmenitySection }) {
    return (
        <div>
            <div className="mb-4 overflow-hidden rounded-[10px]">
                <img
                    src={section.image}
                    alt={section.title}
                    className="h-65 w-full object-cover"
                />
            </div>
            <div className="flex gap-3">
                <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                <div>
                    <h2 className="mb-3 font-montserrat text-base font-semibold text-black">{section.title}</h2>
                    <ol className="list-decimal space-y-1 pl-5 font-montserrat text-sm capitalize text-black">
                        {section.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

function CommonFacilityCard({ facility }: { facility: CommonFacility }) {
    return (
        <div className="bg-[#fceef6] px-5 py-4">
            <p className="mb-2 font-montserrat text-base font-semibold text-black">{facility.group}</p>
            <ol className="list-decimal space-y-1 pl-5 font-montserrat text-sm capitalize text-black">
                {facility.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
        </div>
    );
}

function GenderSection({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h2 className="mb-4 font-montserrat text-xl font-semibold text-black sm:text-2xl lg:text-3xl">{title}</h2>
            <div className="bg-[#f0f0f0] px-6 py-4">
                <ol className="grid grid-cols-1 gap-x-8 gap-y-1 list-decimal pl-5 font-montserrat text-sm capitalize text-black sm:grid-cols-2">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default function PassengerAmenities() {
    return (
        <>
            <Head>
                <title>Passenger Amenities - Puneri Metro</title>
                <meta
                    name="description"
                    content="Explore the comprehensive passenger amenities at Pune Metro stations including ticketing, accessibility, safety, last-mile connectivity, and more."
                />
                <meta
                    name="keywords"
                    content="Pune Metro amenities, passenger facilities, accessibility, ticketing, escalators, elevators, PIDS, Pune Metro services"
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/passenger-aminities/passenger-amenities-banner-md.png"
                srcMd="/banners/passenger-aminities/passenger-amenities-banner-md.png"
                srcLg="/banners/passenger-aminities/passenger-amenities-banner-lg.png"
                alt="Passenger Amenities - Puneri Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0 mb-5">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading lineColor="#8e8e8e">Passenger Amenities</PageSectionHeading>

                </div>
            </section>

            {/* ── Amenity Sections (3-column grid with images) ── */}
            <section className="bg-white pb-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {amenitySections.map((section) => (
                            <SectionCard key={section.title} section={section} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Common Facilities ── */}
            <section className="bg-white pb-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-6 font-montserrat text-xl font-semibold text-black sm:text-2xl lg:text-3xl">
                        Common Facilities{' '}
                        <span className="text-sm font-normal">(For Both Males, Females and other special groups)</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {commonFacilities.map((facility) => (
                            <CommonFacilityCard key={facility.group} facility={facility} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Gender-Specific & Special Facilities ── */}
            <section className="bg-white pb-12">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10">
                        <GenderSection
                            title="Facilities Specifically for Males"
                            items={[
                                "Men's restrooms with toilets and urinals",
                                'Separate security frisking by male security personnel',
                            ]}
                        />
                        <GenderSection
                            title="Facilities Specifically for Females"
                            items={[
                                "Women's restrooms with privacy",
                                'Dedicated security frisking area with female security staff',
                                'Clearly marked women-only coach boarding areas',
                                'Panic buttons and safety helplines in many stations',
                            ]}
                        />
                        <GenderSection
                            title="Facilities for Persons with Disabilities"
                            items={[
                                'Accessible toilets for persons with disabilities',
                                'Priority seating in metro trains',
                                'Tactile pathways for visually impaired passengers',
                            ]}
                        />
                        <GenderSection
                            title="Other Facilities"
                            items={['Assistance for senior citizens, pregnant women, and wheelchair users']}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
