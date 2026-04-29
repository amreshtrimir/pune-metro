import { useInView } from '@/hooks/useInView';

export default function AboutSection() {
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <section id="about" ref={ref} className="bg-white py-20">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* ── Left: Image ── */}
                    <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="rounded-xl shadow-lg">
                            <img
                                src="/landing/metro-interior.png"
                                alt="Metro Interior"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* ── Right: Text ── */}
                    <div className={`lg:pl-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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
