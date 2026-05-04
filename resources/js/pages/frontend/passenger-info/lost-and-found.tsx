import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

export default function LostAndFound() {
    return (
        <>
            <Head>
                <title>Lost and Found Enquiry - Puneri Metro</title>
                <meta name="description" content="Submit a lost and found enquiry for items misplaced at Pune Metro stations or trains." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Lost and Found Enquiry - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Lost and Found Enquiry
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
                            Puneri Metro advises all passengers to remain mindful of their belongings during the journey. Passengers are responsible for their personal items at all times.
                        </p>
                    </div>

                    {/* How to report */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <div>
                            <h2 className="mb-2 font-montserrat text-base font-semibold text-black">If you lose an item while traveling on Pune Metro</h2>
                            <ul className="space-y-2">
                                {[
                                    'Visit the Customer Care Centre at any metro station immediately or call the helpline to report the loss (xxxxxxxxxxxxx).',
                                    'Provide complete details such as item description, date and time, and station/location.',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-inter text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Claiming belongings */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <div>
                            <h2 className="mb-2 font-montserrat text-base font-semibold text-black">Claiming Your Belongings</h2>
                            <p className="mb-2 font-inter text-sm text-gray-700">All recovered items are stored in the Lost &amp; Found Office for up to 90 days. Passengers can claim their belongings by providing:</p>
                            <ul className="space-y-2">
                                {[
                                    'Complete and accurate details',
                                    'Valid ID proof — Passport, Aadhaar Card, PAN Card',
                                    'Supporting documents (if required)',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-inter text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Disposal policy */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <div>
                            <h2 className="mb-2 font-montserrat text-base font-semibold text-black">Disposal of Unclaimed Items</h2>
                            <ul className="space-y-2">
                                {[
                                    'Unclaimed items are donated to NGOs after 90 days.',
                                    'Perishable items will be destroyed at the end of the business day.',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                        <span className="font-inter text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Valuable items */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <div>
                            <h2 className="mb-2 font-montserrat text-base font-semibold text-black">Valuable Items</h2>
                            <p className="font-inter text-sm text-gray-700">
                                Valuable items will be handed over to the police authority. Passengers must retrieve such items through the police with critical identification documents such as Passport, Driving Licence, PAN Card &amp; supporting documents (if required) as per procedure.
                            </p>
                        </div>
                    </div>

                    {/* Commitment */}
                    <div className="flex gap-3 rounded-lg bg-[#fdf0f7] px-6 py-5">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <p className="font-montserrat text-base font-semibold text-[#e8449a]">
                            Commitment to our passengers: We will do our best to reunite you with your belongings.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
