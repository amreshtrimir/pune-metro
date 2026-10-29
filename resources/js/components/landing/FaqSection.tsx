import { Plus, Search, X } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import type { PageFaq } from '@/types/cms';

/** Pages with more FAQs than this get a search box and a "show all" toggle. */
const COLLAPSED_COUNT = 8;
const SEARCH_THRESHOLD = 6;

// Answers are sanitized HTML (see FaqService), so a tag strip is enough for matching and works during SSR.
const plainText = (html: string) => html.replace(/<[^>]+>/g, ' ');

/**
 * The FAQs assigned to the current page, shown as an accordion before the footer.
 */
export default function FaqSection({ faqs }: { faqs: PageFaq[] }) {
    if (faqs.length === 0) {
        return null;
    }

    // Keyed so each page's FAQs mount fresh: the reveal re-runs and no answer stays open from the previous page.
    return <FaqAccordion key={faqs.map((f) => f.id).join('-')} faqs={faqs} />;
}

function FaqAccordion({ faqs }: { faqs: PageFaq[] }) {
    const { ref, inView } = useInView<HTMLElement>();
    const [openId, setOpenId] = useState<number | null>(null);
    const [query, setQuery] = useState('');
    const [showAll, setShowAll] = useState(false);

    const needle = query.trim().toLowerCase();
    const isLong = faqs.length > COLLAPSED_COUNT;
    const matches = needle
        ? faqs.filter((f) =>
              `${f.question} ${plainText(f.answer)}`
                  .toLowerCase()
                  .includes(needle),
          )
        : faqs;
    const visible =
        needle || showAll || !isLong
            ? matches
            : matches.slice(0, COLLAPSED_COUNT);

    return (
        <section
            ref={ref}
            aria-labelledby="page-faqs-heading"
            className={`bg-white pt-0 pb-10 transition-all duration-700 md:-mt-8 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
            <div className="mx-auto max-w-[1303px] px-6 min-[1303px]:px-8 min-[1440px]:max-w-[1440px]">
                {/* Same look as PageSectionHeading, as an h2 because the page already has an h1 */}
                <div className="flex items-center gap-6">
                    <h2
                        id="page-faqs-heading"
                        className="mb-0 shrink-0 border-0 font-montserrat text-xl font-bold text-black sm:text-2xl lg:text-3xl"
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
                <p className="font-inter mt-3 text-sm text-black">
                    Quick answers to common questions about travelling on Pune
                    Metro Line 3.
                </p>

                {faqs.length > SEARCH_THRESHOLD && (
                    <div className="mx-auto mt-8 max-w-xl">
                        <div className="relative">
                            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search questions…"
                                aria-label="Search questions"
                                className="font-inter w-full rounded-full border border-gray-200 bg-white py-3 pr-10 pl-11 text-sm text-black transition-colors outline-none placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 [&::-webkit-search-cancel-button]:appearance-none"
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery('')}
                                    aria-label="Clear search"
                                    className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
                                >
                                    <X className="size-4" />
                                </button>
                            )}
                        </div>
                        {/* Result count is announced to screen readers only */}
                        <p aria-live="polite" className="sr-only">
                            {needle ? `${matches.length} results` : ''}
                        </p>
                    </div>
                )}

                <div className="mt-8">
                    {visible.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-12 text-center">
                            <p className="font-montserrat text-base font-semibold text-black">
                                No questions match “{query.trim()}”
                            </p>
                            <button
                                type="button"
                                onClick={() => setQuery('')}
                                className="font-inter mt-3 text-sm font-medium text-brand-dark underline-offset-4 hover:underline"
                            >
                                Clear search
                            </button>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-3">
                            {visible.map((faq, index) => {
                                const isOpen = openId === faq.id;

                                return (
                                    <li
                                        key={faq.id}
                                        style={{
                                            animationDelay: `${Math.min(index, 8) * 40}ms`,
                                        }}
                                        className={`rounded-2xl border transition-all duration-300 motion-safe:animate-in motion-safe:fill-mode-backwards motion-safe:fade-in motion-safe:slide-in-from-bottom-1 ${
                                            isOpen
                                                ? 'border-brand/40 bg-white shadow-sm'
                                                : 'border-gray-200 bg-white hover:border-brand/30 hover:shadow-sm'
                                        }`}
                                    >
                                        <h3>
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={`faq-panel-${faq.id}`}
                                                onClick={() =>
                                                    setOpenId(
                                                        isOpen ? null : faq.id,
                                                    )
                                                }
                                                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-montserrat text-base font-semibold text-black focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none"
                                            >
                                                {faq.question}
                                                <span
                                                    className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                                        isOpen
                                                            ? 'rotate-45 bg-brand text-white'
                                                            : 'bg-brand/10 text-brand'
                                                    }`}
                                                >
                                                    <Plus className="size-4" />
                                                </span>
                                            </button>
                                        </h3>
                                        <div
                                            id={`faq-panel-${faq.id}`}
                                            role="region"
                                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div
                                                    className="font-inter mx-5 mb-5 text-sm leading-relaxed text-black [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6"
                                                    dangerouslySetInnerHTML={{
                                                        __html: faq.answer,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {!needle && isLong && (
                        <div className="mt-6 text-center">
                            <button
                                type="button"
                                onClick={() => setShowAll((v) => !v)}
                                className="inline-flex items-center rounded-md bg-brand-dark px-7 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                {showAll
                                    ? 'Show fewer questions'
                                    : 'Show all questions'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
