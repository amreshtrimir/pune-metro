import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Puneri Metro</title>
                <meta
                    name="description"
                    content="Get in touch with PITCMRL – Pune IT City Metro Rail Limited. Find our office address, email, and location at Maan, Hinjawadi, Pune."
                />
                <meta name="keywords" content="Pune Metro Contact, PITCMRL, Pune Metro Line 3, Hinjawadi Metro Office" />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner
                src="/banners/contact-banner/contact-banner-md.png"
                srcMd="/banners/contact-banner/contact-banner-md.png"
                srcLg="/banners/contact-banner/contact-banner-lg.png"
                alt="Contact Us - Puneri Metro"
            />

            {/* ── Contact Section ── */}
            <section className="bg-white py-12 lg:py-16">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading className="mb-10 flex items-center gap-6">Contact Us</PageSectionHeading>

                    {/* ── Row 1: Info Cards ── */}
                    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Address Card */}
                        <div
                            className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
                            style={{
                                border: '1px solid transparent',
                                background:
                                    'linear-gradient(white, white) padding-box, linear-gradient(to bottom, #f91c91 0%, transparent 80%) border-box',
                            }}
                        >
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 font-montserrat text-xs font-semibold uppercase tracking-widest text-brand">
                                    Office Address
                                </p>
                                <p className="font-montserrat text-sm font-semibold leading-snug text-gray-900">
                                    Pune IT City Metro Rail Limited
                                </p>
                                <p className="mt-1.5 font-montserrat text-sm leading-relaxed text-gray-600">
                                    Tehsil-Mulshi, Pune Metro Line 3 Car Depot OCC Building,
                                    <br />
                                    Survey No. 191, Village-Maan, Phase 3,
                                    <br />
                                    Hinjawadi, Pune,Maharashtra 411057
                                </p>


                            </div>
                        </div>

                        {/* Email Card */}
                        <div
                            className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
                            style={{
                                border: '1px solid transparent',
                                background:
                                    'linear-gradient(white, white) padding-box, linear-gradient(to bottom, #f91c91 0%, transparent 80%) border-box',
                            }}
                        >
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 font-montserrat text-xs font-semibold uppercase tracking-widest text-brand">
                                    Email Us
                                </p>
                                <a
                                    href="mailto:contactpunerimetro@tatarealty.in"
                                    className="font-montserrat text-sm font-medium text-gray-800 underline-offset-2 transition-colors hover:text-brand hover:underline"
                                >
                                    contactpunerimetro@tatarealty.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Row 2: Image + Map side by side ── */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Building / Depot Image */}
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="/contact-page/contact-left-new.jpeg"
                                alt="Pune Metro Line 3 – OCC Building, Hinjawadi"
                                className="h-full min-h-80 w-full object-cover"
                            />
                        </div>

                        {/* Google Map */}
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <iframe
                                src="https://maps.google.com/maps?q=Pune+IT+City+Metro+Rail+Limited+OCC+Building+Maan+Hinjawadi+Pune+Maharashtra+411057&output=embed&z=15"
                                width="100%"
                                height="100%"
                                className="min-h-80 lg:min-h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="PITCMRL Office Location – Maan, Hinjawadi, Pune"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
