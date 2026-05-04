import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms and Conditions - Puneri Metro</title>
                <meta name="description" content="Read the terms and conditions for using Pune Metro services and facilities." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Terms and Conditions - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Terms and Conditions
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Please read these terms carefully before using our services
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="space-y-6 font-inter text-base leading-relaxed text-black">
                        <p>
                            By accessing and using this website, users agree to use the information and services provided for lawful and general
                            reference purposes only. The content available on this website is intended to provide information related to Puneri Metro
                            Line 3, its project updates, passenger services, and related communication.
                        </p>
                        <p>
                            All content, including text, images, graphics, documents, and other materials published on this website, is for
                            informational purposes and may be revised, updated, or modified without prior notice. While every effort is made to keep
                            the information accurate and current, no guarantee is made regarding completeness or accuracy at all times.
                        </p>
                        <p>
                            Users are advised not to misuse the website, attempt unauthorized access, interfere with website functionality, or use any
                            material for unlawful purposes. Any misuse of forms, digital services, or communication features provided through the
                            website may lead to restricted access.
                        </p>
                        <p>
                            All intellectual property rights related to website content remain with the authorized project entity or respective content
                            owners. Reproduction, distribution, or commercial use of website material without prior permission is not permitted.
                        </p>
                        <p>
                            Links to external websites, where provided, are for convenience only. The website is not responsible for the content,
                            accuracy, or availability of third-party websites.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
