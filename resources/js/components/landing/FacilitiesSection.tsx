const facilities = [
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Last Mile Connectivity',
        items: ['Cycle Connectivity', 'Rapido / Uber Access', 'PMPML Integration', 'Auto Rickshaw Support', 'MSRTC Connectivity'],
    },
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'Passenger Comfort',
        items: ['Air-conditioned Coaches', 'Spacious Interiors', 'Smooth Boarding'],
    },
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Accessibility',
        items: ['Lifts & Escalators', 'Tactile Flooring', 'Inclusive Access'],
    },
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
            </svg>
        ),
        title: 'Smart Features',
        items: ['Real-time Updates', 'Digital Displays', 'Audio Announcements'],
    },
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Convenience & Services',
        items: ['Clean Spaces', 'Easy Movement', 'Commuter Amenities'],
    },
    {
        icon: (
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        title: 'Ticketing & Entry',
        items: ['Smart Card Access', 'QR Ticketing', 'Automated Gates'],
    },
];

export default function FacilitiesSection() {
    return (
        <section id="facilities" className="bg-white py-20">
            <div className="mx-auto max-w-360 px-6 lg:px-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Left: sticky header */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
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
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {facilities.map((facility) => (
                                <div
                                    key={facility.title}
                                    className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-shadow hover:shadow-md"
                                >
                                    {/* Icon */}
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                                        {facility.icon}
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
