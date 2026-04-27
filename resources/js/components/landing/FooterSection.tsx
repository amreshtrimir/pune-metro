const footerLinks = [
    'About',
    'Route Map',
    'Environment & Sustainability',
    'Health & Safety',
    'Traffic Management',
    'Vigil Mechanism Policy',
    'Company Info',
    'Social Responsibility',
    'Privacy Policy',
];

function SocialIcons() {
    return (
        <>
            <a href="#" className="flex items-center justify-center rounded-full bg-brand/15 text-brand transition-colors hover:bg-brand/25" style={{ width: '35px', height: '35px' }} aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full bg-brand/15 text-brand transition-colors hover:bg-brand/25" style={{ width: '35px', height: '35px' }} aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full bg-brand/15 text-brand transition-colors hover:bg-brand/25" style={{ width: '35px', height: '35px' }} aria-label="X">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full bg-brand/15 text-brand transition-colors hover:bg-brand/25" style={{ width: '35px', height: '35px' }} aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
        </>
    );
}

export default function FooterSection() {
    return (
        <>
            {/* CTA Banner */}
            <section className="bg-white px-6 py-12 lg:px-16">
                <div
                    className="mx-auto max-w-360 overflow-hidden rounded-2xl"
                    style={{
                        border: '1px solid transparent',
                        background:
                            'linear-gradient(white, white) padding-box, linear-gradient(to bottom, #f91c91 0%, transparent 60%) border-box',
                    }}
                >
                    <div className="relative h-[300px] w-full">
                        <img
                            src="/landing/train-exterior.png"
                            alt="Puneri Metro"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-metro-dark/70" />

                        {/* CTA content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                            <p className="mb-8 max-w-3xl font-montserrat text-sm font-normal leading-relaxed text-white/80 lg:text-base">
                                Whether you're planning your daily commute, exploring the city, or seeking a faster and smarter way to
                                travel, Puneri Metro is here to transform your journey with comfort, efficiency, and modern connectivity.
                            </p>

                            {/* Contact buttons */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:customercare.pmrp@mahametro.org"
                                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-montserrat text-sm font-semibold text-[#9a0052] transition-opacity hover:opacity-90"
                                >
                                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Mail Us: customercare.pmrp@mahametro.org
                                </a>
                                <a
                                    href="tel:18002705501"
                                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-montserrat text-sm font-semibold text-[#9a0052] transition-opacity hover:opacity-90"
                                >
                                    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.9 19.79 19.79 0 01.01 1.27 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                                    </svg>
                                    Call Us: 18002705501
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white py-6">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                    {/* Desktop: two columns | Mobile: single column */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-0">

                        {/* Left column: logo + nav links inline, then divider + copyright */}
                        <div className="flex min-w-0 flex-1 flex-col">
                            {/* Logo + nav links in one row — always horizontal */}
                            <div className="flex items-end gap-x-4">
                                {/* Logo */}
                                <img
                                    src="/assets/pune-metro-log.png"
                                    alt="Pune Metro"
                                    className="h-auto w-[128px] shrink-0"
                                />

                                {/* Vertical divider between logo and links */}
                                <div className="h-8 w-px shrink-0 bg-gray-200" />

                                {/* Nav links */}
                                <div className="flex flex-wrap items-center">
                                    {footerLinks.map((link, i) => (
                                        <span key={link} className="flex items-center">
                                            <a
                                                href="#"
                                                className="whitespace-nowrap font-montserrat text-[11px] text-gray-600 transition-colors hover:text-brand"
                                            >
                                                {link}
                                            </a>
                                            {i < footerLinks.length - 1 && (
                                                <span className="mx-1 text-gray-300">|</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Pink divider */}
                            <div className="my-4 ml-auto h-px w-[95%] bg-brand/30" />

                            {/* Social icons — visible only on mobile, below divider */}
                            <div className="mb-4 flex items-center gap-2 lg:hidden">
                                <SocialIcons />
                            </div>

                            {/* Copyright */}
                            <p className="text-center font-montserrat text-xs text-gray-400">
                                Copyright © 2026 | Puneri Metro Rail Project. | All Rights Reserved.
                            </p>
                        </div>

                        {/* Right column: social icons — desktop only */}
                        <div className="hidden shrink-0 items-end gap-2 pt-8 lg:flex">
                            <SocialIcons />
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}
