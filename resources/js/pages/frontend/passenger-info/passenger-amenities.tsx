import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const imgGallery1 = '/pass-amenities/gallery-1.png';
const imgGallery2 = '/pass-amenities/gallery-2.png';
const imgGallery3 = '/pass-amenities/gallery-3.png';
const imgGallery4 = '/pass-amenities/gallery-4.png';
const imgGallery5 = '/pass-amenities/gallery-5.png';
const imgGallery6 = '/pass-amenities/gallery-6.png';
const imgGallery7 = '/pass-amenities/gallery-7.png';
const imgGallery8 = '/pass-amenities/gallery-8.png';
const imgGallery9 = '/pass-amenities/gallery-9.png';

type Section = {
    title: string;
    pills: string[];
};

const amenitySections: Section[] = [
    {
        title: 'Ticketing & Entry Facilities',
        pills: [
            'Ticket counters at stations',
            'Contactless Ticket Vending Machines (CTVMs)',
            'National Common Mobility Card (One Pune Card)',
            'Automatic Fare Collection (AFC) gates',
            'QR-based tickets via Pune Metro App and WhatsApp',
        ],
    },
    {
        title: 'Passenger Movement & Accessibility',
        pills: [
            'Escalators at entry/exit and platforms',
            'Lifts/elevators for senior citizens, pregnant women and persons with disabilities',
            'Wide staircases with handrails',
        ],
    },
    {
        title: 'Facilities for Persons with Disabilities',
        pills: [
            'Wheelchair-accessible elevators',
            'Tactile pathways for visually impaired passengers',
            'Accessible toilets',
            'Priority seating and boarding assistance',
        ],
    },
    {
        title: 'Restroom & Basic Amenities',
        pills: [
            'Separate restrooms for men and women',
            'Disabled-friendly toilets',
            'Drinking water facilities',
            'Dustbins and waste segregation systems',
        ],
    },
    {
        title: 'Safety & Security Facilities',
        pills: [
            'CCTV surveillance across stations and platforms',
            '24x7 security personnel including female staff',
            'Separate frisking zones for men and women',
            'Emergency help points and public announcement systems',
            'Fire detection and firefighting systems',
        ],
    },
    {
        title: 'Platform & Train Facilities',
        pills: [
            'Passenger Information Display Systems (PIDS)',
            'Audio announcements in Marathi, Hindi and English',
            'Route maps and directional signage',
            'Designated waiting areas',
        ],
    },
    {
        title: 'Last-Mile Connectivity',
        pills: [
            'Integration with PMPML buses',
            'Integration with private players for additional routes',
            'Auto-rickshaw and cab pickup zones',
            'Pedestrian walkways and foot over bridges',
            'Parking facilities at selected stations',
        ],
    },
    {
        title: 'Environment-Friendly Features',
        pills: [
            'Solar panels on station rooftops',
            'Energy-efficient lighting systems',
            'Zero-discharge wastewater management',
            'Green building and eco-friendly practices',
        ],
    },
];

const commonFacilities = [
    {
        group: 'Ticketing',
        pills: ['Ticket counters / Contactless Ticket vending machines'],
    },
    {
        group: 'Entry & Exit',
        pills: ['Automatic Fare Collection (AFC) gates'],
    },
    {
        group: 'Waiting & Circulation Areas',
        pills: ['Platforms with seating', 'Passenger information display boards'],
    },
    {
        group: 'Security',
        pills: ['CCTV surveillance', 'Security personnel', 'Emergency help points'],
    },
    {
        group: 'Mobility & Accessibility',
        pills: ['Escalators', 'Lifts', 'Ramps for wheelchair users'],
    },
    {
        group: 'Amenities',
        pills: ['Drinking water', 'Dustbins'],
    },
    {
        group: 'Safety & Emergency',
        pills: ['Fire-fighting equipment', 'Emergency evacuation'],
    },
];

const galleryImages = [
    { src: imgGallery1, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery2, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery3, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery4, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery5, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery6, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery7, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery8, alt: 'Pune Metro passenger amenities' },
    { src: imgGallery9, alt: 'Pune Metro passenger amenities' },
];

function Pill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-[#d8d8d8] bg-[#f5f5f5] px-4 py-2 font-montserrat text-sm capitalize text-black">
            {label}
        </span>
    );
}

function AmenitySection({ section }: { section: Section }) {
    return (
        <div className="mb-8 flex gap-3">
            <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
            <div>
                <h2 className="mb-3 font-montserrat text-base font-semibold text-black">{section.title}</h2>
                <div className="flex flex-wrap gap-3">
                    {section.pills.map((pill) => (
                        <Pill key={pill} label={pill} />
                    ))}
                </div>
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
            <PageHeroBanner src="/banners/amenniteis.png" alt="Passenger Amenities - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Passenger Amenities
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Built for Faster, Smarter, more Comfortable travel
                    </p>
                </div>
            </section>

            {/* ── Amenity Sections ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    {amenitySections.map((section) => (
                        <AmenitySection key={section.title} section={section} />
                    ))}
                </div>
            </section>

            {/* ── Common Facilities ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-6 font-montserrat text-3xl font-semibold text-black">
                        Common Facilities{' '}
                        <span className="text-base font-normal">(For Both Males, Females and other special groups)</span>
                    </h2>
                    <div className="flex flex-col gap-8">
                        {[
                            commonFacilities.slice(0, 2),
                            commonFacilities.slice(2, 4),
                            commonFacilities.slice(4, 7),
                        ].map((row, rowIdx) => (
                            <div key={rowIdx} className="flex gap-8">
                                {row.map((item) => (
                                    <div key={item.group} className="flex-1">
                                        <div className="flex gap-3">
                                            <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                                            <div>
                                                <p className="mb-3 font-montserrat text-base font-semibold text-black">{item.group}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.pills.map((pill) => (
                                                        <Pill key={pill} label={pill} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Photo Gallery ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryImages.map((image) => (
                            <div key={image.src} className="overflow-hidden rounded-[10px]">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-[280px] w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Gender-Specific Facilities ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="grid grid-cols-1 gap-10">
                        {/* Males */}
                        <div>
                            <h2 className="mb-4 font-montserrat text-3xl font-semibold text-black">
                                Facilities Specifically for Males
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Men's restrooms with toilets and urinals",
                                    'Separate security frisking by male security personnel',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 block h-6 w-[3px] flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-montserrat text-sm font-semibold text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Females */}
                        <div>
                            <h2 className="mb-4 font-montserrat text-3xl font-semibold text-black">
                                Facilities Specifically for Females
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Women's restrooms with privacy",
                                    'Dedicated security frisking area with female security staff',
                                    'Clearly marked women-only coach boarding areas',
                                    'Panic buttons and safety helplines in many stations',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 block h-6 w-[3px] flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-montserrat text-sm font-semibold text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Persons with Disabilities */}
                        <div>
                            <h2 className="mb-4 font-montserrat text-3xl font-semibold text-black">
                                Facilities for Persons with Disabilities
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    'Accessible toilets for persons with disabilities',
                                    'Priority seating in metro trains',
                                    'Tactile pathways for visually impaired passengers',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 block h-6 w-[3px] flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-montserrat text-sm font-semibold text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Other Facilities */}
                        <div>
                            <h2 className="mb-4 font-montserrat text-3xl font-semibold text-black">Other Facilities</h2>
                            <ul className="space-y-3">
                                {['Assistance for senior citizens, pregnant women, and wheelchair users'].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 block h-6 w-[3px] flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-montserrat text-sm font-semibold text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
