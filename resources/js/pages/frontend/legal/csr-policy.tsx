import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

export default function CsrPolicy() {
    return (
        <>
            <Head>
                <title>Corporate Social Responsibility Policy - Pune Metro</title>
                <meta
                    name="description"
                    content="Explore PITCMRL's Corporate Social Responsibility Policy and its commitment to community well-being, sustainability, and inclusive growth."
                />
            </Head>

            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Corporate Social Responsibility Policy - Pune Metro"
            />

            <section className="bg-white pt-8 pb-0 md:pt-10">
                <div className="mx-auto max-w-325.75 min-[1440px]:max-w-360 px-6 min-[1303px]:px-8">
                    <PageSectionHeading lineColor="#8e8e8e">Corporate Social Responsibility Policy</PageSectionHeading>
                </div>
            </section>

            <section className="bg-white pt-4 pb-8 md:pb-16">
                <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                    <div className="space-y-2 font-montserrat text-sm leading-relaxed text-black">
                        <p>
                            At Pune IT City Metro Rail Limited (PITCMRL), we believe that building infrastructure is only
                            part of our responsibility. Our commitment extends beyond tracks and stations, to the
                            communities we operate in, the environment we share, and the people whose lives we touch every
                            day.
                        </p>
                        <p>
                            Our Corporate Social Responsibility (CSR) Policy provides the framework for how we invest in
                            society, across areas including livelihood and skill development, healthcare and sanitation,
                            environmental protection, and social development. It reflects our belief that sustainable growth
                            and community well-being must go hand in hand with business progress.
                        </p>
                        <p>
                            Download our CSR Policy document below to understand our approach, objectives, and commitment
                            to responsible corporate citizenship.
                        </p>
                    </div>

                    <div className="mt-8">
                        <a
                            href="/documents/csr-policy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 rounded-lg border border-[#d9d9d9] px-5 py-4 transition-colors hover:border-brand"
                        >
                            <img
                                src="/project-profile-icons/icon-pdf.png"
                                alt="PDF"
                                className="h-10 w-10 object-contain"
                            />
                            <span className="font-montserrat text-sm font-semibold text-black">
                                Download CSR Policy PDF
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
