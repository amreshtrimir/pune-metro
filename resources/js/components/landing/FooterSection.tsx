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

export default function FooterSection() {
    return (
        <>
            {/* CTA Banner */}
            <section className="relative overflow-hidden">
                <div className="relative h-[300px] w-full overflow-hidden">
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
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Mail Us: customercare.pmrp@mahametro.org
                            </a>
                            <a
                                href="tel:18002705501"
                                className="flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us: 18002705501
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-metro-dark pt-10 pb-6">
                <div className="mx-auto max-w-360 px-6 lg:px-16">
                    {/* Logo + Nav */}
                    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16V8a4 4 0 014-4h8a4 4 0 014 4v8l2 4H2l2-4zm2 0h12V8a2 2 0 00-2-2H8a2 2 0 00-2 2v8zm2 2v1h1v-1H8zm7 0v1h1v-1h-1z" />
                                </svg>
                            </div>
                            <span className="font-montserrat text-lg font-bold leading-tight text-white">
                                puneri<br />
                                <span className="text-brand">metros</span>
                            </span>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {/* Facebook */}
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                                aria-label="Facebook"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            {/* Twitter/X */}
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                                aria-label="Twitter"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                                aria-label="Instagram"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                                aria-label="YouTube"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-white/10" />

                    {/* Footer nav links */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {footerLinks.map((link, i) => (
                            <span key={link} className="flex items-center gap-4">
                                <a
                                    href="#"
                                    className="font-montserrat text-xs text-white/60 transition-colors hover:text-white"
                                >
                                    {link}
                                </a>
                                {i < footerLinks.length - 1 && (
                                    <span className="text-white/20">|</span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="mt-4">
                        <p className="font-montserrat text-xs text-white/40">
                            Copyright © 2026 | Puneri Metro Rail Project. | All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
