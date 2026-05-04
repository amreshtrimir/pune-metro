import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

const dos = [
    {
        title: 'Entry, Exit & Boarding',
        bullets: [
            'Use designated entry/exit gates and follow station signages.',
            'Allow passengers to alight first, then board in an orderly queue.',
            'Stand behind the platform safety line until the train stops.',
            'Mind the gap while boarding/alighting.',
        ],
    },
    {
        title: 'Tickets & Validation',
        bullets: [
            'Carry a valid ticket (NCMC card / QR ticket / mobile-based ticket).',
            'Tap in and tap out at AFC gates.',
            'Keep your ticket accessible for inspection by metro staff.',
        ],
    },
    {
        title: 'Inside the Train',
        bullets: [
            'Hold handrails/straps while standing.',
            'Offer priority seats to senior citizens, pregnant women, and persons with disabilities.',
            'Move inside the coach to make space during peak hour travel.',
            'Keep your strap / shoulder bag in the front.',
        ],
    },
    {
        title: 'Cleanliness & Safety',
        bullets: [
            'Keep stations and trains clean; use dustbins provided.',
            'Follow announcements and digital displays — especially during peak hours.',
            'Report unattended baggage or suspicious activity to metro staff.',
            'Use emergency intercoms/alarms only in genuine emergencies.',
        ],
    },
];

const donts = [
    {
        title: 'Safety & Security',
        bullets: [
            'Do not carry prohibited items (flammables, explosives, sharp weapons).',
            'Do not cross tracks, enter restricted areas, or trespass near technical areas.',
            'Do not board or deboard after the door-closing alarm.',
        ],
    },
    {
        title: 'Platform & Train Etiquette',
        bullets: [
            'Do not block train doors or lean against them.',
            'Do not rush or push during peak office hours.',
            'Do not sit or stand on platform edges or barriers.',
        ],
    },
    {
        title: 'Conduct & Cleanliness',
        bullets: [
            'No eating, drinking, smoking, spitting, or chewing tobacco/gutkha inside stations or trains.',
            'Avoid loud phone calls, music, or videos on speaker.',
            'No littering, graffiti, or damage to metro property.',
        ],
    },
];

export default function DosAndDonts() {
    return (
        <>
            <Head>
                <title>Do's and Don'ts - Puneri Metro</title>
                <meta name="description" content="Learn about the do's and don'ts for Pune Metro passengers to ensure a safe and comfortable journey." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Do's and Don'ts - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Do&apos;s and Don&apos;ts
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Built for Faster, Smarter, more Comfortable travel
                    </p>
                </div>
            </section>

            {/* ── DO's ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-6 font-montserrat text-2xl font-bold text-black">
                        ✅ Do&apos;s
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {dos.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl p-6"
                                style={{ background: '#E8449A26', minHeight: '260px' }}
                            >
                                <h3 className="mb-4 font-montserrat text-base font-semibold text-black">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                            <span className="font-inter text-sm text-black">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DON'Ts ── */}
            <section className="bg-white pb-10">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <h2 className="mb-6 font-montserrat text-2xl font-bold text-black">
                        ❌ Don&apos;ts
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {donts.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl p-6"
                                style={{ background: '#1a1a1a0d', minHeight: '220px' }}
                            >
                                <h3 className="mb-4 font-montserrat text-base font-semibold text-black">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/50" />
                                            <span className="font-inter text-sm text-black">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Note ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex gap-3 rounded-lg bg-[#fdf0f7] px-6 py-5">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <p className="font-montserrat text-sm font-semibold text-[#e8449a]">
                            Please note: Puneri Metro reserves the right to penalise a passenger who does not follow Metro rules.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

