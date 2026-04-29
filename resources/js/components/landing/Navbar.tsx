import { useState } from 'react';

const quickLinks = [
    { label: 'Lost & Found', href: '#' },
    { label: 'Raise Concern', href: '#' },
    { label: 'Metro Stations', href: '#' },
];

const mainNavLinks = [
    { label: 'HOME', href: '/', active: true },
    { label: 'ABOUT US', href: '#about' },
    { label: 'PROJECT PROFILE', href: '#' },
    { label: 'PASSENGER INFO', href: '#' },
    { label: 'MEDIA', href: '#' },
    { label: 'ENVIRONMENT', href: '#environment' },
    { label: 'ROUTE', href: '#routes' },
    { label: 'BUSINESS DEVELOPMENT', href: '#' },
    { label: 'CAREER', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'LEGAL', href: '#' },
    { label: 'CONTACT US', href: '#' },
];

function PuneMetroLogo() {
    return (
        <a href="/">
            <img src="/assets/pune-metro-log.png" alt="Pune Metro" className="h-18 w-auto" />
        </a>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            {/* ── Rows 1 + 2 combined: Logo spans both rows ── */}
            <div className="border-b border-gray-100">
                <div className="mx-auto flex max-w-[1440px] items-stretch px-4 lg:px-8">

                    {/* Logo — left, vertically centred across both rows */}
                    <div className="flex items-center py-5 pr-8">
                        <PuneMetroLogo />
                    </div>

                    {/* Right side — stacked: contact on top, quick links below */}
                    <div className="hidden flex-1 flex-col justify-between py-4 lg:flex">
                        {/* Top: Contact buttons */}
                        <div className="flex items-center justify-end gap-3">
                            <a
                                href="mailto:customercare.pmrp@mahametro.org"
                                className="flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 font-montserrat text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                            >
                                <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Mail Us: customercare.pmrp@mahametro.org
                            </a>
                            <a
                                href="tel:18002705501"
                                className="flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 font-montserrat text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                            >
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Phone handset */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.9 19.79 19.79 0 01.01 1.27 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                                </svg>
                                Call Us: 18002705501
                            </a>
                        </div>

                        {/* Bottom: Quick links */}
                        <div className="flex items-center justify-end gap-0">
                            {quickLinks.map((link, i) => (
                                <span key={link.label} className="flex items-center">
                                    <a
                                        href={link.href}
                                        className="font-montserrat text-[11px] font-medium text-gray-500 transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </a>
                                    {i < quickLinks.length - 1 && (
                                        <span className="mx-2 text-[10px] font-bold text-brand">+</span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="ml-auto flex items-center lg:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Row 3: Main Nav Bar (pink) ── hidden on small screens */}
            <nav className="hidden overflow-x-auto bg-brand lg:block">
                <div className="mx-auto flex max-w-[1440px] items-stretch justify-center">
                    {mainNavLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`whitespace-nowrap px-4 py-3 font-montserrat text-[11px] font-bold tracking-wide text-white transition-colors hover:bg-white/20 ${
                                link.active ? 'bg-brand-dark' : ''
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ── Mobile / tablet Menu ── */}
            {mobileOpen && (
                <div className="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white shadow-lg lg:hidden">
                    {/* Contact info */}
                    <div className="border-b border-gray-100 px-4 py-3">
                        <a href="mailto:customercare.pmrp@mahametro.org" className="flex items-center gap-2 py-1.5 font-montserrat text-xs text-brand">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            customercare.pmrp@mahametro.org
                        </a>
                        <a href="tel:18002705501" className="flex items-center gap-2 py-1.5 font-montserrat text-xs text-brand">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.9 19.79 19.79 0 01.01 1.27 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                            </svg>
                            18002705501
                        </a>
                    </div>

                    {/* Main nav links */}
                    <div className="divide-y divide-gray-50 px-4 py-2">
                        {mainNavLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2.5 font-montserrat text-sm font-semibold tracking-wide transition-colors hover:text-brand ${
                                    link.active ? 'text-brand' : 'text-gray-700'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Quick links */}
                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                        <p className="mb-2 font-montserrat text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Quick Links
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-montserrat text-xs text-gray-500 hover:text-brand"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
