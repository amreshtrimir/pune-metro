import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

const csrPolicyContent = [
    'At Pune IT City Metro Rail Limited (PITCMRL), we believe that building infrastructure is only part of our responsibility. Our commitment extends beyond tracks and stations, to the communities we operate in, the environment we share, and the people whose lives we touch every day.',
    'Our Corporate Social Responsibility (CSR) Policy provides the framework for how we invest in society, across areas including livelihood and skill development, healthcare and sanitation, environmental protection, and social development. It reflects our belief that sustainable growth and community well-being must go hand in hand with business progress.',
    'Download our CSR Policy document below to understand our approach, objectives, and commitment to responsible corporate citizenship.',
];

const csrPolicySections = [
    {
        title: 'Corporate Social Responsibility Policy',
        content: csrPolicyContent,
        pdfHref: '/documents/csr-policy.pdf',
        pdfLabel: 'Download CSR Policy PDF',
    },
    {
        title: 'Vigil Mechanism Policy',
        content: [
            'PITCMRL believes in fostering a culture of transparency, integrity and ethical conduct. The Vigil Mechanism Policy provides a safe and confidential channel for employees, directors, business associates and other stakeholders to report genuine concerns about unethical behaviour, fraud or violations of company policy, without fear of retaliation or victimisation. The policy is overseen by an Ethics Counsellor appointed by the Board of Directors and was last amended on February 11, 2025.',
            'Download the full Vigil Mechanism Policy below.',
        ],
        pdfHref: '/documents/pitcmrl-vigil-mechanism-policy-feb-2025.pdf',
        pdfLabel: 'Download Vigil Mechanism Policy PDF',
    },
    {
        title: 'Code of Conduct of Independent Directors',
        content: [
            'PITCMRL is committed to the highest standards of corporate governance. The Code of Conduct for Independent Directors, in accordance with Schedule IV of the Companies Act, 2013, sets out the guidelines of professional conduct, roles, responsibilities and duties expected of Independent Directors on the Board. It ensures that Independent Directors act with integrity, objectivity and in the best interests of the company and its stakeholders.',
            'Download the full Code of Conduct below.',
        ],
        pdfHref: '/documents/code-of-conduct-for-independent-directors.pdf',
        pdfLabel: 'Download Code of Conduct PDF',
    },
];

export default function CsrPolicy() {
    return (
        <>
            <Head>
                <title>
                    Corporate Social Responsibility Policy - Pune Metro Line 3
                </title>
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

            {csrPolicySections.map((section, index) => (
                <section
                    key={`${section.title}-${index}`}
                    className={`bg-white ${index === 0 ? 'pt-8 md:pt-10' : 'pt-4'} pb-8 md:pb-16`}
                >
                    <div className="mx-auto max-w-325.75 px-6 min-[1303px]:px-8 min-[1440px]:max-w-360">
                        <PageSectionHeading lineColor="#8e8e8e">
                            {section.title}
                        </PageSectionHeading>

                        <div className="mt-4 space-y-2 font-montserrat text-sm leading-relaxed text-black">
                            {section.content.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a
                                href={section.pdfHref}
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
                                    {section.pdfLabel}
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
