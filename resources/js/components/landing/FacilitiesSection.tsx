import { useInView } from '@/hooks/useInView';

const facilities = [
    {
        icon: '/landing/facilities-icons/last-mile-connectivity.png',
        title: 'Last Mile Connectivity',
        items: ['Cycle Connectivity', 'Rapido / Uber Access', 'PMPML Integration', 'Auto Rickshaw Support', 'MSRTC Connectivity'],
    },
    {
        icon: '/landing/facilities-icons/passenger-comfort.png',
        title: 'Passenger Comfort',
        items: ['Air-conditioned Coaches', 'Spacious Interiors', 'Smooth Boarding'],
    },
    {
        icon: '/landing/facilities-icons/accessibility.png',
        title: 'Accessibility',
        items: ['Lifts & Escalators', 'Tactile Flooring', 'Inclusive Access'],
    },
    {
        icon: '/landing/facilities-icons/smart-features.png',
        title: 'Smart Features',
        items: ['Real-time Updates', 'Digital Displays', 'Audio Announcements'],
    },
    {
        icon: '/landing/facilities-icons/convenience-services.png',
        title: 'Convenience & Services',
        items: ['Clean Spaces', 'Easy Movement', 'Commuter Amenities'],
    },
    {
        icon: '/landing/facilities-icons/ticketing-entry.png',
        title: 'Ticketing & Entry',
        items: ['Smart Card Access', 'QR Ticketing', 'Automated Gates'],
    },
];

export default function FacilitiesSection() {
    const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>();
    const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>();

    return (
        <section id="facilities" className="bg-white py-20">
            <div className="mx-auto max-w-360 px-6 lg:px-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Left: sticky header */}
                    <div ref={leftRef} className={`lg:sticky lg:top-24 lg:self-start transition-all duration-700 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="mb-4 inline-flex items-center rounded-full bg-brand/10 px-4 py-1.5">
                            <span className="font-montserrat text-xs font-semibold text-brand">
                                Metro Facilities
                            </span>
                        </div>
                        <h2 className="mb-4 font-montserrat text-3xl font-bold text-gray-900 lg:text-4xl">
                            Facilities
                        </h2>
                        <p className="font-montserrat text-sm leading-relaxed text-gray-600">
                            Enjoy modern station facilities designed for comfort,
                            convenience and accessibility at every step. From clean
                            spaces to smart services, Puneri Metro ensures a safe and
                            hassle-free travel experience.
                        </p>
                    </div>

                    {/* Right: 2-column card grid */}
                    <div className="lg:col-span-2">
                        <div ref={cardsRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
                            {facilities.map((facility, i) => (
                                <div
                                    key={facility.title}
                                    className={`flex h-full flex-col rounded-2xl p-5 transition-all duration-500 hover:shadow-md ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ background: '#FEE9F4', transitionDelay: cardsInView ? `${i * 80}ms` : '0ms' }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="mb-3 flex items-center justify-center rounded-xl"
                                        style={{ width: '44px', height: '44px', background: '#E8449A' }}
                                    >
                                        <img src={facility.icon} alt={facility.title} className="h-5 w-5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                                    </div>

                                    <h3 className="mb-2 font-montserrat text-sm font-semibold text-gray-900">
                                        {facility.title}
                                    </h3>

                                    <ul className="space-y-1">
                                        {facility.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 font-montserrat text-xs text-gray-500"
                                            >
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
