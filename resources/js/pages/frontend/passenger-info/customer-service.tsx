import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const commitments = [
    'We strive to maintain the highest standards of cleanliness, safety, and accessibility across all stations and trains.',
    'Our trained staff are dedicated to courteous service, prompt assistance, and clear communication at all touchpoints.',
    'We actively listen to customer feedback and continuously improve our services based on passenger needs.',
    'Technology-driven solutions are adopted to ensure seamless ticketing, real-time information, and ease of travel.',
    'Passenger safety remains our top priority through robust systems and proactive monitoring.',
    'We are committed to inclusive services, ensuring convenience for senior citizens, women, and persons with disabilities.',
    'Transparency, accountability, and service excellence guide our day-to-day operations.',
    'Through these efforts, Puneri Metro Line 3 aims to build lasting trust and deliver a world-class urban transit experience.',
];

export default function CustomerService() {
    return (
        <>
            <Head>
                <title>Customer Service - Puneri Metro</title>
                <meta
                    name="description"
                    content="Learn about Puneri Metro Line 3's commitment to safe, reliable, and comfortable travel experience for every passenger."
                />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Customer Service - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Customer Service
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Built for Faster, Smarter, more Comfortable travel
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">

                    {/* Intro */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <p className="font-inter text-sm text-gray-700">
                            At Puneri Metro Line 3, our customers are at the heart of everything we do. We are committed to providing a safe, reliable, and comfortable travel experience for every passenger. Our services are designed to be punctual, efficient, and responsive to the daily mobility needs of Pune&apos;s citizens.
                        </p>
                    </div>

                    {/* Commitments */}
                    <div className="mb-8 flex gap-3">
                        {/* <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" /> */}
                        <ul className="space-y-3 ml-2.5">
                            {commitments.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                    <span className="font-inter text-sm text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="flex gap-3 rounded-lg bg-[#fdf0f7] px-6 py-5">
                        {/* <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" /> */}
                        <div>
                            <h2 className="mb-2 font-montserrat text-base font-semibold text-black">Contact Us</h2>
                            <p className="font-inter text-sm text-gray-700">
                                If you have any feedback or complaints, you can reach us on our helpline{' '}
                                <span className="font-semibold text-black">(xxxxxxxx)</span>, write to us at{' '}
                                <a href="mailto:xxxxx@punerimetro.com" className="font-semibold text-brand hover:underline">
                                    xxxxx@punerimetro.com
                                </a>
                                , or visit our Customer Care Centre at any metro station.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
