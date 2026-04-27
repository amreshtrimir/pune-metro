export default function AboutSection() {
    return (
        <section id="about" className="bg-white py-20">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* ── Left: Images with rotated labels ── */}
                    <div className="relative px-8 pb-16 pt-8">

                        {/* Top label: ADVANCED SAFETY & SECURITY */}
                        <p className="mb-2 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-brand">
                            Advanced Safety &amp; Security
                        </p>

                        {/* Left rotated label: ECO-FRIENDLY TRANSPORTATION */}
                        <span
                            className="absolute font-montserrat text-[9px] font-semibold uppercase tracking-widest text-brand"
                            style={{
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                left: 0,
                                top: '50%',
                                translate: '0 -50%',
                            }}
                        >
                            Eco-Friendly Transportation
                        </span>

                        {/* Large grayscale image */}
                        <div className="overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/landing/metro-interior.png"
                                alt="Metro Interior"
                                className="h-72 w-full object-cover grayscale"
                            />
                        </div>

                        {/* Right rotated label: FAST & TIME-SAVING TRAVEL */}
                        <span
                            className="absolute font-montserrat text-[9px] font-semibold uppercase tracking-widest text-brand"
                            style={{
                                writingMode: 'vertical-rl',
                                right: '14px',
                                top: '30%',
                            }}
                        >
                            Fast &amp; Time-Saving Travel
                        </span>

                        {/* Smaller overlapping color image */}
                        <div className="relative z-10 -mt-10 ml-auto w-[60%] overflow-hidden rounded-xl shadow-xl">
                            <img
                                src="/landing/train-side.jpg"
                                alt="Pune Metro Train"
                                className="h-48 w-full object-cover"
                            />
                        </div>

                        {/* Far-right rotated label: SMART TICKETING OPTIONS */}
                        <span
                            className="absolute font-montserrat text-[9px] font-semibold uppercase tracking-widest text-brand"
                            style={{
                                writingMode: 'vertical-rl',
                                right: 0,
                                bottom: '18%',
                            }}
                        >
                            Smart Ticketing Options
                        </span>

                        {/* Bottom label: COMFORTABLE & AIR-CONDITIONED COACHES */}
                        <p className="mt-2 font-montserrat text-[10px] font-semibold uppercase tracking-widest text-brand">
                            Comfortable &amp; Air-Conditioned Coaches
                        </p>
                    </div>

                    {/* ── Right: Text ── */}
                    <div className="lg:pl-4">
                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5">
                            <span className="font-montserrat text-xs font-medium text-brand">
                                About Us
                            </span>
                        </div>

                        {/* Outlined year — exact Figma specs */}
                        <p
                            className="mb-3 font-montserrat"
                            style={{
                                fontSize: '60px',
                                fontWeight: 800,
                                lineHeight: '54px',
                                letterSpacing: '3px',
                                color: 'transparent',
                                WebkitTextStroke: '1px #1a1a2e',
                            }}
                        >
                            2026
                        </p>

                        <h2 className="mb-5 font-montserrat text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                            Moving Pune Forward
                        </h2>

                        <p className="mb-4 font-montserrat text-base leading-relaxed text-gray-700">
                            Fast, safe and reliable metro travel connecting the city like never before.
                        </p>

                        <p className="mb-8 font-montserrat text-sm leading-relaxed text-gray-500">
                            Puneri IT City Metro Rail Limited (PITCMRL), popularly known as Pune Metro Line 3, is a Special Purpose Vehicle (SPV) established through a strategic joint venture between the Tata Group and Siemens. The company is responsible for the design, construction, financing, operation and transfer of the Hinjewadi–Shivajinagar metro corridor. This project is being executed under a 35-year DBFOT (Design–Build–Finance–Operate–Transfer) concession awarded by the Pune Metropolitan Region Development Authority (PMRDA).
                        </p>

                        <a
                            href="#"
                            className="inline-block rounded-md bg-brand-dark px-7 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            Know More
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
