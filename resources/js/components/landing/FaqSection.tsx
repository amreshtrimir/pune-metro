import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import type { PageFaq } from '@/types/cms';

/**
 * Accordion of the FAQs assigned to the current page. Answers are sanitized HTML (see FaqService).
 */
export default function FaqSection({ faqs }: { faqs: PageFaq[] }) {
    if (faqs.length === 0) {
        return null;
    }

    // Keyed so each page's FAQs mount fresh: the reveal re-runs and no answer stays open from the previous page.
    return <FaqAccordion key={faqs.map((f) => f.id).join('-')} faqs={faqs} />;
}

function FaqAccordion({ faqs }: { faqs: PageFaq[] }) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section
            ref={ref}
            aria-labelledby="page-faqs-heading"
            className={`px-6 py-12 transition-all duration-700 min-[1303px]:px-8 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
            <div className="mx-auto" style={{ maxWidth: '1440px' }}>
                <div className="flex items-center gap-6">
                    <h2
                        id="page-faqs-heading"
                        className="shrink-0 font-montserrat text-xl font-bold text-black sm:text-2xl lg:text-3xl"
                    >
                        Frequently Asked Questions
                    </h2>
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                'linear-gradient(to right, #d1d5db, transparent)',
                        }}
                    />
                </div>

                <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div key={faq.id}>
                                <h3>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${faq.id}`}
                                        onClick={() =>
                                            setOpenId(isOpen ? null : faq.id)
                                        }
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-montserrat text-base font-semibold text-black transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none lg:text-lg"
                                    >
                                        {faq.question}
                                        <ChevronDown
                                            className={`size-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={`faq-panel-${faq.id}`}
                                    role="region"
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div
                                            className="font-inter px-6 pb-5 text-sm leading-relaxed text-black [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6"
                                            dangerouslySetInnerHTML={{
                                                __html: faq.answer,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
