import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

type GalleryItem = {
    title: string;
    description: string;
    images: string[];
};

const galleryItems: GalleryItem[] = [
    {
        title: 'PITCMRL Partners with TerraBlu for Carbon Credit Monetisation',
        description:
            'Pune IT City Metro Rail Limited (PITCMRL) has entered into an agreement with TerraBlu Climate Technologies Pvt Ltd for carbon credit registration and monetisation consultancy.',
        images: ['/photo-gallery/accordian-1/image-1.png'],
    },
    {
        title: 'CEO Leads Median Tree Plantation Drive with Quadrant Embassy',
        description:
            'Mr. Anil Kumar Saini, CEO, PITCMRL, spearheaded a Median Tree Plantation Drive in association with Quadrant Embassy reinforcing the vision of a city that\u2019s not just well-connected, but environmentally conscious.',
        images: [
            '/photo-gallery/accordian-2/photo-1.png',
            '/photo-gallery/accordian-2/photo-2.png',
            '/photo-gallery/accordian-2/photo-3.png',
            '/photo-gallery/accordian-2/photo-4.png',
            '/photo-gallery/accordian-2/photo-5.png',
            '/photo-gallery/accordian-2/photo-6.png',
            '/photo-gallery/accordian-2/photo-7.png',
            '/photo-gallery/accordian-2/photo-8.png',
        ],
    },
    {
        title: 'PITCMRL Team Donates Blood \u0026 Plants Saplings at OCC Building',
        description:
            'Our team at PITCMRL, OCC Building came together to donate blood and plant saplings because one act gives someone a second chance at life, and the other gives the city a breath of fresh air.',
        images: [
            '/photo-gallery/accordian-3/photo-1.png',
            '/photo-gallery/accordian-3/photo-2.png',
            '/photo-gallery/accordian-3/photo-3.png',
            '/photo-gallery/accordian-3/photo-4.png',
            '/photo-gallery/accordian-3/photo-5.png',
            '/photo-gallery/accordian-3/photo-6.png',
            '/photo-gallery/accordian-3/photo-7.png',
            '/photo-gallery/accordian-3/photo-8.png',
        ],
    },
];

function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

export default function PhotoGallery() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    function toggle(index: number) {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    }

    return (
        <>
            <Head>
                <title>Photo Gallery - Puneri Metro</title>
                <meta
                    name="description"
                    content="Explore the photo gallery of Pune IT City Metro Rail Limited showcasing key events, green initiatives, and community activities."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <PageHeroBanner src="/photo-gallery/banner-photo-gallery.png" alt="Photo Gallery - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading>Photo Gallery</PageSectionHeading>
                </div>
            </section>

            {/* ── Accordion Gallery ── */}
            <section className="bg-white py-8">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex flex-col gap-3">
                        {galleryItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-[5px]"
                                >
                                    {/* Accordion Header */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        className="flex w-full items-center justify-between bg-[rgba(232,68,154,0.15)] px-8 py-6 text-left"
                                    >
                                        <span className="font-montserrat text-base font-semibold text-black sm:text-xl lg:text-2xl">
                                            {item.title}
                                        </span>
                                        <ChevronDownIcon
                                            className={`size-8 shrink-0 text-black transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Accordion Content */}
                                    {isOpen && (
                                        <div className="bg-[rgba(232,68,154,0.15)] px-8 pb-8">
                                            <p className="mb-6 font-montserrat text-xs leading-relaxed text-black sm:text-sm">
                                                {item.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                                {item.images.map((src, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className="aspect-square overflow-hidden border border-[#cacaca]"
                                                    >
                                                        <img
                                                            src={src}
                                                            alt={`${item.title} photo ${imgIndex + 1}`}
                                                            className="size-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="bg-white pb-16">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="relative overflow-hidden rounded-[25px]">
                        <img
                            src="/pass-amenities/section-cta-train.png"
                            alt="Pune Metro train"
                            className="h-75 w-full object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-linear-to-t from-black/80 to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center">
                            <p className="max-w-3xl font-montserrat text-sm font-medium text-white">
                                {`Whether you're planning your daily commute, exploring the city, or seeking a faster and smarter way to travel, Puneri Metro is here to transform your journey with comfort, efficiency, and modern connectivity.`}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:customercare.pmrp@mahametro.org"
                                    className="flex items-center gap-2 rounded-full border border-white bg-white px-6 py-2.5 font-montserrat text-sm font-medium text-[#e8449a] transition-opacity hover:opacity-90"
                                >
                                    Mail Us: customercare.pmrp@mahametro.org
                                </a>
                                <a
                                    href="tel:18002705501"
                                    className="flex items-center gap-2 rounded-full border border-white bg-white px-6 py-2.5 font-montserrat text-sm font-medium text-[#e8449a] transition-opacity hover:opacity-90"
                                >
                                    Call Us: 18002705501
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
