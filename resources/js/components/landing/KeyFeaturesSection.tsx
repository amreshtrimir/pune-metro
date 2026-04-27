const features = [
    {
        icon: <img src="/landing/key-features-icons/clock-urban-connectivity.png" alt="Clock icon representing urban connectivity" className="h-10 w-10 object-contain" />,
        title: 'Enhancing Urban Connectivity',
    },
    {
        icon: <img src="/landing/key-features-icons/location-commuter-experience.png" alt="Location pin icon representing commuter experience" className="h-10 w-10 object-contain" />,
        title: 'Transforming The Commuter Experience',
    },
    {
        icon: <img src="/landing/key-features-icons/ticket-customer-centric.png" alt="Ticket icon representing customer-centric approach" className="h-10 w-10 object-contain" />,
        title: 'Customer-Centric Approach',
    },
    {
        icon: <img src="/landing/key-features-icons/bus-sustainable-development.png" alt="Bus icon representing sustainable development" className="h-10 w-10 object-contain" />,
        title: 'Sustainable Development',
    },
];

export default function KeyFeaturesSection() {
    return (
        <div id="features">
            {/* ── Top row: pill + heading + description — with bg image ── */}
            <div
                className="relative flex flex-col justify-center"
                style={{
                    backgroundImage: "url('/landing/city-light-bg.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#fff',
                    minHeight: '335.57px',
                    paddingTop: '48px',
                    paddingBottom: '76px', /* 38px for icon circle half + 38px breathing room */
                }}
            >
                <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4 px-6 lg:px-16">
                    {/* Pill badge */}
                    <div className="inline-flex items-center rounded-full px-5 py-1.5" style={{ background: 'rgba(154, 0, 82, 0.1)' }}>
                        <span className="font-montserrat text-xs font-semibold" style={{ color: '#9A0052' }}>
                            Features
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-center font-montserrat font-bold text-gray-900"
                        style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: '1.2' }}
                    >
                        Key Features
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mb-0 max-w-[890px] text-center font-montserrat text-sm leading-relaxed text-gray-500">
                        Puneri Metro Line 3 is designed around how the city moves every day, improving access across major work, residential, and
                        institutional zones while prioritising commuter comfort, safety, and long-term sustainability.
                    </p>
                </div>
            </div>

            {/* ── Cards — icon circles straddle the boundary ── */}
            <div className="bg-white pb-16">
                <div
                    className="relative z-10 mx-auto max-w-[791px] px-4"
                    style={{ marginTop: '-38px' }}
                >
                    <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-col items-center">
                                {/* Icon circle — top half above card */}
                                <div
                                    className="relative z-10 flex shrink-0 items-center justify-center"
                                    style={{
                                        width: '76px',
                                        height: '76px',
                                        marginBottom: '-38px',
                                        background: '#FADAEB',
                                        borderRadius: '50%',
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                {/* Card */}
                                <div
                                    className="flex w-full flex-col items-center px-4 pb-6 pt-12"
                                    style={{
                                        background: '#FADAEB',
                                        minHeight: '179px',
                                        borderBottomRightRadius: '200px',
                                        borderBottomLeftRadius: '200px',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                    }}
                                >
                                    <h3 className="text-center font-montserrat text-xs font-semibold leading-snug text-gray-800">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
