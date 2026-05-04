import { Head } from '@inertiajs/react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy - Puneri Metro</title>
                <meta name="description" content="Read Pune Metro's privacy policy to understand how we collect, use, and protect your personal information." />
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner src="/banners/items-not-tocarry.png" alt="Privacy Policy - Puneri Metro" />

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat text-[28px] font-bold text-black md:text-[40px]">
                            Privacy Policy
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }} />
                    </div>
                    <p className="mt-3 mb-10 font-inter text-xl capitalize text-brand">
                        Your privacy is important to us
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <div className="space-y-8 font-inter text-base leading-relaxed text-black">

                        {/* Intro */}
                        <div className="space-y-4">
                            <p>
                                Pune IT City Metro Rail Limited ("PITCMRL") is committed to protecting the privacy and personal data of users ("you",
                                "your") who access and use this website. This Privacy Policy explains what information we collect and how we use,
                                process, or transfer Personal Information ("PI") in the conduct of our activities and internal administration.
                                PITCMRL will not sell, rent, publish, or trade any of your personal information to any individual or organisation
                                under any circumstances. The information provided on this website is solely in the interest of the public to provide
                                information about Puneri Metro Line 3 and PITCMRL.
                            </p>
                            <p>
                                This website is controlled by Pune IT City Metro Rail Limited (PITCMRL), the Special Purpose Vehicle established for
                                the implementation of Puneri Metro Line 3, which is solely authorised to manage and control this website.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">1. Information Collection and Processing</h2>
                            <p>We may collect the following information when you use this website:</p>

                            <div className="space-y-3 pl-4">
                                <div>
                                    <h3 className="font-montserrat text-sm font-bold text-black">a) Personal Data</h3>
                                    <p className="mt-1">
                                        Personal data such as name, contact details (email address, phone number), and other information voluntarily
                                        provided by you through enquiry forms, feedback forms, survey forms, email communications, or other
                                        interactions on the website.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-montserrat text-sm font-bold text-black">b) Non-Personally Identifiable Information</h3>
                                    <p className="mt-1">
                                        Technical and usage-related information such as IP address, browser type, device information, pages visited,
                                        date and time of access, and other analytical data collected automatically through cookies and similar
                                        technologies. This information may be used to track website traffic and prepare internal reports. It is not
                                        linked to any personal information and will not be shared with any third party.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">2. Purpose of Processing</h2>
                            <p>Personal data collected by PITCMRL shall be processed only for lawful purposes, including:</p>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Responding to queries, requests, or feedback</li>
                                <li>Providing information related to Puneri Metro Line 3 services, operations, or initiatives</li>
                                <li>Improving website content, functionality, and user experience</li>
                                <li>Ensuring website security and preventing misuse</li>
                                <li>Complying with applicable laws, regulations, and statutory obligations</li>
                            </ul>
                            <p>
                                The website may use social media platforms such as Facebook, YouTube, Instagram, X, LinkedIn, etc. to share project
                                updates, public information, and videos for the convenience of commuters and the general public. PITCMRL shall not be
                                responsible for any errors, inconveniences, or objections arising from the use of such third-party platforms.
                            </p>
                            <p>
                                Personal data shall be processed only to the extent necessary and shall not be retained longer than required.
                                Information may be shared with third parties strictly as per contractual agreements.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">3. Consent</h2>
                            <p>
                                By accessing or using this website and voluntarily providing your personal data, you consent to the collection, use,
                                processing, and storage of such data in accordance with this Privacy Policy and applicable laws.
                            </p>
                            <p>
                                By accessing this website, users agree that PITCMRL shall not be liable for any direct or indirect loss arising from
                                the use or inability to use the website or its content.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">4. Cookies and Tracking Technologies</h2>
                            <p>
                                This website may use cookies and similar technologies to enhance user experience and analyse website traffic. Cookies
                                do not collect personal information.
                            </p>
                            <p>
                                You may manage or disable cookies through your browser settings; however, some website features may not function as
                                intended.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">5. Disclosure and Sharing of Information</h2>
                            <p>PITCMRL does not sell or rent personal data. Personal data may be shared only:</p>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>With affiliates or authorised service providers for legitimate operational purposes</li>
                                <li>When required by law, regulation, court order, or statutory authority</li>
                                <li>To protect the rights, safety, and security of PITCMRL, users, or the public</li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">6. Data Security</h2>
                            <p>
                                PITCMRL has implemented reasonable technical and organisational measures to protect personal data from unauthorized
                                access, disclosure, alteration, or destruction. However, absolute security cannot be guaranteed.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">7. External Links</h2>
                            <p>
                                This website may contain links to third-party websites. PITCMRL is not responsible for the privacy practices or
                                content of such websites. Users are advised to review their privacy policies independently.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">8. Changes to Privacy Policy</h2>
                            <p>
                                PITCMRL reserves the right to update or modify this Privacy Policy at any time. Changes will be effective upon
                                publication on the website.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="space-y-4">
                            <h2 className="font-montserrat text-xl font-bold text-black">9. Contact Information</h2>
                            <p>For any questions or concerns regarding this Privacy Policy, please contact:</p>
                            <div className="mt-2 space-y-1">
                                <p className="font-medium text-black">Pune IT City Metro Rail Limited (PITCMRL)</p>
                                <a
                                    href="mailto:customercare.pmrp@mahametro.org"
                                    className="block text-brand hover:underline"
                                >
                                    customercare.pmrp@mahametro.org
                                </a>
                                <a href="tel:18002705501" className="block text-brand hover:underline">
                                    1800 270 5501
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
