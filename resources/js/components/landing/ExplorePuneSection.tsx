import { useCallback, useEffect, useRef, useState } from 'react';
import type { ExplorePunePlace } from '@/types/cms';

const AUTOPLAY_INTERVAL = 3000;

const places = [
    {
        name: 'Shreemant Dagdusheth Halwai Ganpati Temple',
        image: '/landing/place-section/dagdusheth-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #7c3000 0%, #b45309 100%)',
    },
    {
        name: 'Aga Khan Palace - Historical Monument',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    },
    {
        name: 'Sinhagad Fort - Historic Hill Fort',
        image: '/landing/place-section/sinhagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
    },
    {
        name: 'Parvati Hill - Temple Hill',
        image: '/landing/place-section/parvati-hill-temple.png',
        fallbackBg: 'linear-gradient(135deg, #3b0764 0%, #4c1d95 100%)',
    },
    {
        name: 'Shaniwar Wada - Fortification',
        image: '/landing/place-section/shaniwar-wada.png',
        fallbackBg: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    },
    {
        name: 'Rajiv Gandhi Zoological Park',
        image: '/landing/place-section/rajiv-gandhi-zoological-park.png',
        fallbackBg: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
    },
    {
        name: 'Osho Ashram - Spiritual Retreat',
        image: '/landing/place-section/aga-khan-palace.png',
        fallbackBg: 'linear-gradient(135deg, #451a03 0%, #92400e 100%)',
    },
    {
        name: 'Pune Okayama Friendship Garden',
        image: '/landing/place-section/pune-okayama-garden.png',
        fallbackBg: 'linear-gradient(135deg, #052e16 0%, #166534 100%)',
    },
    {
        name: 'Kasba Ganpati Temple - Heritage Site',
        image: '/landing/place-section/kasba-ganpati-temple.png',
        fallbackBg: 'linear-gradient(135deg, #4a1942 0%, #86198f 100%)',
    },
    {
        name: 'National War Museum - Pune',
        image: '/landing/place-section/national-war-museum.png',
        fallbackBg: 'linear-gradient(135deg, #1c1917 0%, #57534e 100%)',
    },
    {
        name: 'Lohagad Fort - Trekking Destination',
        image: '/landing/place-section/lohagad-fort.png',
        fallbackBg: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    },
    {
        name: 'Chaturshringi Temple - Sacred Site',
        image: '/landing/place-section/chaturshringi-temple.png',
        fallbackBg: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)',
    },
    {
        name: 'Saras Baug Garden - Ganesh Temple',
        image: '/landing/place-section/saras-baug-garden.png',
        fallbackBg: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    },
    {
        name: 'Empress Botanical Garden',
        image: '/landing/place-section/empress-botanical-garden.png',
        fallbackBg: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)',
    },
    {
        name: 'Vishrambaug Wada - Peshwa Palace',
        image: '/landing/place-section/vishrambaug-wada.png',
        fallbackBg: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)',
    },
    {
        name: 'Bund Garden - River Park',
        image: '/landing/place-section/bund-garden.png',
        fallbackBg: 'linear-gradient(135deg, #042f2e 0%, #0f766e 100%)',
    },
    {
        name: 'Pune Railway Station - Heritage',
        image: '/landing/place-section/pune-railway-station.png',
        fallbackBg: 'linear-gradient(135deg, #1e3a5f 0%, #0369a1 100%)',
    },
    {
        name: 'Taljai Hill - Nature Reserve',
        image: '/landing/place-section/taljai-hill.png',
        fallbackBg: 'linear-gradient(135deg, #14532d 0%, #4ade80 100%)',
    },
    {
        name: 'Phursungi Village - Rural Charm',
        image: '/landing/place-section/phursungi-village.png',
        fallbackBg: 'linear-gradient(135deg, #422006 0%, #d97706 100%)',
    },
    {
        name: 'Khadakwasla Dam - Scenic Reservoir',
        image: '/landing/place-section/khadakwasla-dam.png',
        fallbackBg: 'linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)',
    },
];

interface PlaceDetail {
    category: string;
    nearestStation: string;
    distanceFromStation: string;
    distanceNote?: string;
    about: string;
    highlights: string;
    googleMapsLink: string;
}

const placeDetails: Record<string, PlaceDetail> = {
    'Shreemant Dagdusheth Halwai Ganpati Temple': {
        category: 'Famous Temple',
        nearestStation: 'PMR 23 — District Court',
        distanceFromStation: 'Approx. 2 km — 25 min walk / 8 min by auto',
        distanceNote: 'Auto rickshaw available from District Court station',
        about: "One of Pune's most celebrated temples, dedicated to Lord Ganesha and established in 1893 by Dagdusheth Halwai. The idol is adorned with gold ornaments and attracts thousands of devotees daily. A landmark destination during Ganesh Chaturthi, featuring grand cultural celebrations.",
        highlights: 'Established 1893 | Gold-adorned idol | Ganesh Chaturthi | Cultural events',
        googleMapsLink: 'https://maps.google.com/?q=Dagdusheth+Halwai+Ganpati+Pune',
    },
    'Aga Khan Palace - Historical Monument': {
        category: 'Heritage & History',
        nearestStation: 'PMR 20 — Baner',
        distanceFromStation: '15 min auto-rickshaw',
        distanceNote: 'Easily accessible by local transport',
        about: 'Built in 1892, Aga Khan Palace is a landmark of Indian history and a monument of love and compassion. It served as a prison for Mahatma Gandhi and Kasturba Gandhi during the freedom movement and is now a museum.',
        highlights: 'Gandhiji memorial | Italian arches | Manicured gardens | Historical museum',
        googleMapsLink: 'https://maps.google.com/?q=Aga+Khan+Palace+Pune',
    },
    'Sinhagad Fort - Historic Hill Fort': {
        category: 'Historic Fort & Trekking',
        nearestStation: 'PMR 01 — Hinjewadi Phase 3',
        distanceFromStation: '45 min cab ride',
        distanceNote: 'Accessible by cab/private vehicle',
        about: "Sinhagad Fort, meaning 'Lion's Fort', is a historic fortification located about 30 km south-west of Pune. Famous for the Battle of Sinhagad (1670), the fort offers panoramic views of the Sahyadri mountain range.",
        highlights: 'Panoramic Sahyadri views | Historic battle site | Trekking trails | Monsoon tourism',
        googleMapsLink: 'https://maps.google.com/?q=Sinhagad+Fort+Pune',
    },
    'Parvati Hill - Temple Hill': {
        category: 'Temple & Heritage',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '20 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'Parvati Hill is one of the oldest heritage structures in Pune, perched atop a hill 2,100 ft above sea level. The hilltop houses several ancient temples dedicated to Parvati, Vishnu, Kartikeya, and Devdeveshwar.',
        highlights: 'Panoramic city views | Ancient temples | Heritage hilltop | 108 stone steps',
        googleMapsLink: 'https://maps.google.com/?q=Parvati+Hill+Pune',
    },
    'Shaniwar Wada - Fortification': {
        category: 'Historical Monument',
        nearestStation: 'PMR 23 — District Court',
        distanceFromStation: 'Approx. 2 km — 8 min by auto',
        distanceNote: 'Auto rickshaw recommended from District Court station',
        about: "A magnificent 18th-century fortification and the historical seat of the Peshwa rulers of the Maratha Confederacy. Built in 1732 by Peshwa Bajirao I, the palace complex is one of Pune's most iconic landmarks and a symbol of Maratha heritage and architecture.",
        highlights: 'Built 1732 | Peshwa heritage | Maratha history | Sound & Light Show',
        googleMapsLink: 'https://maps.google.com/?q=Shaniwar+Wada+Pune',
    },
    'Rajiv Gandhi Zoological Park': {
        category: 'Wildlife & Nature',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '20 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'Rajiv Gandhi Zoological Park in Katraj, Pune, is one of the most visited wildlife parks in Maharashtra. It houses leopards, bears, exotic birds, and a snake park spread across a large natural habitat.',
        highlights: 'Snake park | Katraj Lake | Diverse wildlife | Family attraction',
        googleMapsLink: 'https://maps.google.com/?q=Rajiv+Gandhi+Zoological+Park+Pune',
    },
    'Osho Ashram - Spiritual Retreat': {
        category: 'Spirituality & Wellness',
        nearestStation: 'PMR 20 — Baner',
        distanceFromStation: '20 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'Osho International Meditation Resort is a unique meditative retreat in Koregaon Park, Pune. Spanning 40 acres, it offers a blend of meditation, relaxation, and personal growth programs attracting visitors from around the world.',
        highlights: 'Meditation resort | Pyramid auditorium | World-class facilities | International visitors',
        googleMapsLink: 'https://maps.google.com/?q=Osho+Ashram+Pune',
    },
    'Pune Okayama Friendship Garden': {
        category: 'Gardens & Nature',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '15 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'The Pune Okayama Friendship Garden, also known as Pu La Deshpande Garden, is a beautifully designed Japanese-inspired garden. Built to commemorate the friendship between Pune and Okayama, Japan.',
        highlights: 'Japanese-style garden | Friendship bridge | Seasonal flowers | Peaceful ambience',
        googleMapsLink: 'https://maps.google.com/?q=Pune+Okayama+Friendship+Garden',
    },
    'Kasba Ganpati Temple - Heritage Site': {
        category: 'Famous Temple',
        nearestStation: 'PMR 23 — District Court',
        distanceFromStation: 'Approx. 1.2 km — 17 min walk / 5 min by auto',
        distanceNote: 'Auto rickshaw available from District Court station',
        about: "One of Pune's oldest and most revered Ganpati temples, Kasba Ganpati is the Gramadevata (presiding deity) of Pune. The temple holds immense religious significance and is the first Manacha Ganpati — the temple of highest honour during Ganesh Chaturthi celebrations.",
        highlights: 'Gramadevata of Pune | First Manacha Ganpati | Ganesh Chaturthi | Walking distance',
        googleMapsLink: 'https://maps.google.com/?q=Kasba+Ganpati+Temple+Pune',
    },
    'National War Museum - Pune': {
        category: 'Museums & Defence',
        nearestStation: 'PMR 23 — Shivajinagar District Court',
        distanceFromStation: '5 min walk',
        distanceNote: 'Directly accessible from station exit',
        about: "The National War Museum in Pune is a tribute to India's armed forces, displaying war memorabilia, tanks, aircraft, and weapons from various conflicts. A must-visit for history and defence enthusiasts.",
        highlights: 'War memorabilia | Tanks & aircraft | Defence history | Patriotic landmark',
        googleMapsLink: 'https://maps.google.com/?q=National+War+Museum+Pune',
    },
    'Lohagad Fort - Trekking Destination': {
        category: 'Historic Fort & Trekking',
        nearestStation: 'PMR 01 — Hinjewadi Phase 3',
        distanceFromStation: '60 min cab ride',
        distanceNote: 'Accessible by cab/private vehicle',
        about: 'Lohagad Fort is a historic hill fort near Malavli at an altitude of 3,389 feet. Famous for its scenic beauty and Maratha heritage, it was held by Shivaji Maharaj and later by Nana Fadnavis.',
        highlights: 'Hill trekking | Panoramic views | Historic Maratha fort | Monsoon greenery',
        googleMapsLink: 'https://maps.google.com/?q=Lohagad+Fort+Pune',
    },
    'Chaturshringi Temple - Sacred Site': {
        category: 'Famous Temple & Hilltop Shrine',
        nearestStation: 'PMR 17 — Aundh',
        distanceFromStation: 'Approx. 3 km — 10 min by auto',
        distanceNote: 'Auto rickshaw recommended from Aundh station',
        about: 'A revered hilltop temple dedicated to Goddess Chaturshrungi, the presiding deity of Pune, located on Senapati Bapat Road. The temple sits on a mountain with four peaks and requires climbing 170 steps to reach the shrine. The natural idol (swayambhu) is especially celebrated during Navratri.',
        highlights: 'Presiding deity of Pune | 170 steps | Navratri festival | Hilltop views',
        googleMapsLink: 'https://maps.google.com/?q=Chaturshringi+Temple+Pune',
    },
    'Saras Baug Garden - Ganesh Temple': {
        category: 'Gardens & Temples',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '20 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'Saras Baug is a beautiful garden in Pune, known for its Prasanna Ganapati temple, a serene lake, and lush greenery. A popular recreational spot for families and devotees alike.',
        highlights: 'Prasanna Ganapati temple | Scenic lake | Lush gardens | Family picnic spot',
        googleMapsLink: 'https://maps.google.com/?q=Saras+Baug+Pune',
    },
    'Empress Botanical Garden': {
        category: 'Gardens & Nature',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '10 min walk',
        distanceNote: 'Short walk from station exit',
        about: 'The Empress Botanical Garden is a 39-acre botanical garden in Pune established in 1881. Home to a rich variety of trees, plants, and exotic species, it is a green oasis in the heart of the city.',
        highlights: 'Exotic plant collection | 39-acre green space | Heritage botanical garden | Family park',
        googleMapsLink: 'https://maps.google.com/?q=Empress+Botanical+Garden+Pune',
    },
    'Vishrambaug Wada - Peshwa Palace': {
        category: 'Heritage & History',
        nearestStation: 'PMR 23 — Shivajinagar District Court',
        distanceFromStation: '10 min walk',
        distanceNote: 'Short walk from station exit',
        about: 'Vishrambaug Wada is a historic Peshwa palace in Pune, known for its exquisite wooden carvings and Peshwa-era architecture. Built in 1807 by Peshwa Baji Rao II, it is now a heritage site under the Archaeological Survey of India.',
        highlights: 'Peshwa-era architecture | Wooden carvings | Heritage palace | Cultural significance',
        googleMapsLink: 'https://maps.google.com/?q=Vishrambaug+Wada+Pune',
    },
    'Bund Garden - River Park': {
        category: 'Parks & Recreation',
        nearestStation: 'PMR 21 — Aundh',
        distanceFromStation: '25 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: 'Bund Garden is a charming riverside park in Pune along the Mula-Mutha River. A popular recreational destination featuring lush lawns, boating facilities, and a pleasant riverside ambience.',
        highlights: 'Riverside park | Boating facilities | Lush lawns | Picnic destination',
        googleMapsLink: 'https://maps.google.com/?q=Bund+Garden+Pune',
    },
    'Pune Railway Station - Heritage': {
        category: 'Heritage & Transport',
        nearestStation: 'PMR 23 — Shivajinagar District Court',
        distanceFromStation: '15 min walk',
        distanceNote: 'Short walk from station exit',
        about: 'Pune Railway Station, formally known as Pune Junction, is a historic railway station and one of the busiest in Maharashtra. Its classic colonial architecture and strategic location make it a landmark of Pune.',
        highlights: 'Colonial architecture | Busy transit hub | Heritage building | City gateway',
        googleMapsLink: 'https://maps.google.com/?q=Pune+Railway+Station',
    },
    'Taljai Hill - Nature Reserve': {
        category: 'Nature Reserve & Trekking',
        nearestStation: 'PMR 22 — Deccan Gymkhana',
        distanceFromStation: '30 min auto-rickshaw',
        distanceNote: 'Accessible by local transport',
        about: "Taljai Hill is a nature reserve and forest area in Pune, offering scenic trekking trails and a peaceful environment away from the city's bustle. Home to diverse flora and fauna, it is a nature lover's paradise.",
        highlights: 'Nature trails | Panoramic city views | Biodiversity | Morning walks',
        googleMapsLink: 'https://maps.google.com/?q=Taljai+Hill+Pune',
    },
    'Phursungi Village - Rural Charm': {
        category: 'Rural & Cultural',
        nearestStation: 'PMR 01 — Hinjewadi Phase 3',
        distanceFromStation: '45 min cab ride',
        distanceNote: 'Accessible by cab/private vehicle',
        about: 'Phursungi Village offers a glimpse into the rural heritage of Pune, with traditional architecture, local festivals, and agrarian culture. It represents the cultural roots of the region amidst the growing urban landscape.',
        highlights: 'Rural heritage | Traditional culture | Local festivals | Agrarian landscape',
        googleMapsLink: 'https://maps.google.com/?q=Phursungi+Pune',
    },
    'Khadakwasla Dam - Scenic Reservoir': {
        category: 'Lakes & Reservoirs',
        nearestStation: 'PMR 01 — Hinjewadi Phase 3',
        distanceFromStation: '50 min cab ride',
        distanceNote: 'Accessible by cab/private vehicle',
        about: 'Khadakwasla Dam is a scenic reservoir located near Pune, known for its picturesque surroundings and stunning views of the Sahyadri hills. It is one of the main water sources for Pune and a popular picnic destination.',
        highlights: 'Scenic reservoir | Sahyadri backdrop | Picnic destination | Water sports',
        googleMapsLink: 'https://maps.google.com/?q=Khadakwasla+Dam+Pune',
    },
};

function PlaceModal({
    place,
    onClose,
}: {
    place: ExplorePunePlace;
    onClose: () => void;
}) {
    const rows: { label: string; type: 'text' | 'distance' | 'link'; value: string; note?: string }[] = [
        { label: 'Nearest Metro Station', type: 'text', value: place.nearest_station },
        ...(place.other_nearby_mahametro_stations
            ? [{ label: 'Other Nearby MahaMetro Station(s)', type: 'text' as const, value: place.other_nearby_mahametro_stations }]
            : []),
        { label: 'Distance from Station', type: 'distance', value: place.distance_from_station, note: place.distance_note ?? undefined },
        { label: 'About', type: 'text', value: place.about },
        { label: 'Highlights', type: 'text', value: place.highlights },
        ...(place.google_maps_link ? [{ label: 'Google Maps Link', type: 'link' as const, value: place.google_maps_link }] : []),
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 md:items-center md:p-6"
            onClick={onClose}
        >
            <div
                className="relative w-full max-h-[88vh] overflow-y-auto rounded-t-[25px] bg-white shadow-2xl md:max-w-250 md:max-h-[90vh] md:rounded-[25px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Drag handle (mobile only) */}
                <div className="flex justify-center pt-3 pb-1 md:hidden">
                    <div className="h-1 w-10 rounded-full bg-gray-300" />
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition hover:bg-gray-50 hover:text-gray-600"
                    aria-label="Close"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-5 pr-12 md:p-10 md:pr-16">
                    <>
                        {/* Category pill */}
                        <div className="mb-3 inline-flex items-center rounded-full bg-[#fadaeb] px-4 py-1">
                            <span className="font-montserrat text-sm font-medium text-brand">{place.category}</span>
                        </div>

                        {/* Title */}
                        <h2 className="mb-5 font-montserrat text-xl font-semibold text-black md:text-[26px]">
                            {place.name}
                        </h2>

                        {/* Details table */}
                        <div className="overflow-hidden rounded-xl border border-gray-100">
                            {rows.map(({ label, type, value, note }, i) => (
                                <div
                                    key={label}
                                    className={`flex flex-col md:flex-row ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f3f3]'}`}
                                >
                                    <div className="md:w-47.5 shrink-0 border-b border-gray-100 px-4 pt-3 pb-1 font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400 md:border-b-0 md:border-r md:px-6 md:py-4 md:text-sm md:font-medium md:normal-case md:tracking-normal md:text-black">
                                        {label}
                                    </div>
                                    <div className="flex-1 px-4 pb-3 pt-1 font-montserrat text-sm text-black md:px-6 md:py-4">
                                        {type === 'link' ? (
                                            <a
                                                href={value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-brand underline underline-offset-2 hover:text-brand/80"
                                            >
                                                View on Google Maps
                                            </a>
                                        ) : type === 'distance' ? (
                                            <>
                                                <span className="font-semibold">{value}</span>
                                                {note && <span className="font-normal text-gray-500"> ({note})</span>}
                                            </>
                                        ) : (
                                            <span className="font-medium">{value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}

export default function ExplorePuneSection({ places }: { places: ExplorePunePlace[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPausedRef = useRef(false);
    const [selectedPlace, setSelectedPlace] = useState<ExplorePunePlace | null>(null);

    // Lock body scroll and pause slider when modal is open
    useEffect(() => {
        if (selectedPlace) {
            document.body.style.overflow = 'hidden';
            isPausedRef.current = true;
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedPlace]);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedPlace(null);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const getCardWidth = useCallback(() => {
        if (!scrollRef.current) {
            return 0;
        }

        const w = window.innerWidth;
        const offsetWidth = scrollRef.current.offsetWidth;

        if (w < 640) {
            // 1.5 visible cards: card is 62% wide, gap-3 = 12 px
            return Math.round(offsetWidth * 0.75) + 12;
        }

        const visibleCards = w < 1024 ? 2 : 4;
        const GAP = w < 1024 ? 16 : 0;

        return (offsetWidth - GAP * (visibleCards - 1)) / visibleCards + GAP;
    }, []);

    // When scrollLeft reaches the midpoint (start of the cloned second half),
    // instantly snap back by half — both halves are identical so no visual jump.
    const checkAndReset = useCallback(() => {
        if (!scrollRef.current) {
            return;
        }

        const { scrollLeft, scrollWidth } = scrollRef.current;

        if (scrollLeft >= scrollWidth / 2) {
            scrollRef.current.scrollLeft = scrollLeft - scrollWidth / 2;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
        }

        autoplayTimerRef.current = setInterval(() => {
            if (isPausedRef.current || !scrollRef.current) {
                return;
            }

            scrollRef.current.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
            // Wait for the smooth-scroll animation to finish, then silently reset if needed
            setTimeout(checkAndReset, 600);
        }, AUTOPLAY_INTERVAL);
    }, [getCardWidth, checkAndReset]);

    useEffect(() => {
        startAutoplay();

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
            }
        };
    }, [startAutoplay]);

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) {
            return;
        }

        scrollRef.current.scrollBy({ left: dir === 'right' ? getCardWidth() : -getCardWidth(), behavior: 'smooth' });
        setTimeout(checkAndReset, 600);
        startAutoplay();
    };

    return (
        <section id="explore" className="relative overflow-x-clip lg:overflow-x-visible">
            {/* ── Rows 1 & 2 background wrapper ── */}
            <div
                className="relative"
                style={{
                    backgroundImage: "url('/landing/places-sectin-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 24, 0.82)' }} />

                {/* ── Row 1: pill + heading | description + nav buttons ── */}
                <div className="relative z-10 mx-auto max-w-360 px-6 pt-10 md:pt-16 lg:px-16 lg:pt-28">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Left: pill + heading */}
                        <div className="flex flex-col gap-3">
                            <div className="inline-flex w-fit items-center rounded-full px-5 py-1.5" style={{ background: '#F91C9163' }}>
                                <span className="font-montserrat text-xs font-semibold text-white">Places</span>
                            </div>
                            <h2
                                className="font-montserrat font-bold text-white"
                                style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.1' }}
                            >
                                Explore Pune
                            </h2>
                        </div>

                        {/* Right: description + nav buttons */}
                        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
                            <p className="max-w-lg font-montserrat text-sm leading-relaxed text-white/70">
                                Explore Pune seamlessly, with a faster, smoother and more comfortable way to get around the city. Designed to make everyday commutes and city access more convenient.
                            </p>
                            <div className="flex shrink-0 items-center gap-3">
                                <button
                                    onClick={() => scroll('left')}
                                    aria-label="Previous"
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white/60 transition hover:border-white/60 hover:text-white"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    aria-label="Next"
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Row 2: scroll hint ── */}
                <div className="relative z-10 mx-auto flex max-w-360 flex-col justify-end px-6 pb-8 pt-6 md:pb-16 lg:mt-10 lg:min-h-50 lg:px-16 lg:pb-12">
                    <div className="hidden flex-col gap-2 lg:flex">
                        <span className="font-montserrat text-xs font-semibold tracking-widest text-white/40 uppercase">
                            Scroll Right
                        </span>
                        <svg className="h-4 w-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 32 16" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28M22 2l6 6-6 6" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ── Row 3: slides (no bg image) ── */}
            <div className="mx-auto -mt-10 w-full md:-mt-14 lg:-mt-40" style={{ maxWidth: '1312px' }}>
                <div className="w-full pb-10 lg:ml-auto lg:pb-12" style={{ maxWidth: '1100px' }}>
                <div
                    ref={scrollRef}
                    onMouseEnter={() => {
                        isPausedRef.current = true;
                    }}
                    onMouseLeave={() => {
                        isPausedRef.current = false;
                    }}
                    className="flex overflow-x-auto touch-pan-x snap-x snap-mandatory scroll-pl-4 pl-4 gap-3 sm:scroll-pl-6 sm:pl-6 sm:gap-4 lg:scroll-pl-0 lg:pl-0 lg:gap-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {[...places, ...places].map((place, index) => (
                        <div
                            key={`${place.id}-${index}`}
                            style={{ background: place.fallback_bg ?? undefined }}
                            className="group relative h-80 min-[390px]:h-112 w-[75%] shrink-0 snap-start cursor-pointer overflow-hidden sm:h-100 sm:w-[calc(50%-12px)] lg:w-[25%]"
                            onClick={() => setSelectedPlace(place)}
                        >
                            {/* Photo */}
                            {place.media?.url && (
                                <img
                                    src={place.media.url}
                                    alt={place.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            )}

                            {/* Bottom gradient overlay */}
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                            />

                            {/* Card footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="font-montserrat text-sm font-bold leading-snug text-white">
                                    {place.name}
                                </h3>
                                <svg className="mt-3 h-4 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 32 16" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M0 8h28M22 2l6 6-6 6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            {/* ── Place Detail Modal ── */}
            {selectedPlace && (
                <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
            )}
        </section>
    );
}
