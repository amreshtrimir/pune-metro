import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import {
    artFromScrap,
    board,
    carbonCredit,
    dosAndDonts,
    eiaReports,
    fareTable,
    greenInitiatives,
    itemsNotToCarry,
    keyHighlights,
    lastMileConnectivity,
    lostAndFound,
    offencesAndPenalties,
    overview,
    passengerAmenities,
    projectUpdate,
    retailFnb,
    routeMap,
    stationAreaMap,
    timeTable,
} from '@/actions/App/Http/Controllers/PagesController';

const quickLinks = [
    { label: 'Lost & Found', href: '#' },
    { label: 'Raise Concern', href: '#' },
    { label: 'Metro Stations', href: '#' },
];

type NavLink = {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
};

const mainNavLinks: NavLink[] = [
    { label: 'HOME', href: '/' },
    {
        label: 'ABOUT US',
        href: overview.url(),
        children: [
            { label: 'Overview', href: overview.url() },
            { label: 'Board of Directors', href: board.url() },
        ],
    },
    {
        label: 'PROJECT PROFILE',
        href: projectUpdate.url(),
        children: [
            { label: 'Project Update', href: projectUpdate.url() },
            { label: 'Key Highlights', href: keyHighlights.url() },
            { label: 'Route Map', href: routeMap.url() },
        ],
    },
    {
        label: 'PASSENGER INFO',
        href: timeTable.url(),
        children: [
            { label: 'Time Table', href: timeTable.url() },
            { label: 'Fare Table / Ticket Rules', href: fareTable.url() },
            { label: "Do's and Don'ts", href: dosAndDonts.url() },
            { label: 'Items Not to Carry', href: itemsNotToCarry.url() },
            { label: 'Offences and Penalties', href: offencesAndPenalties.url() },
            { label: 'Lost and Found Enquiry', href: lostAndFound.url() },
            { label: 'Last Mile Connectivity', href: lastMileConnectivity.url() },
            { label: 'Retail / F&B', href: retailFnb.url() },
            { label: 'Station Area Map', href: stationAreaMap.url() },
            { label: 'Passenger Amenities', href: passengerAmenities.url() },
        ],
    },
    { label: 'MEDIA', href: '#' },
    {
        label: 'ENVIRONMENT',
        href: eiaReports.url(),
        children: [
            { label: 'EIA Reports', href: eiaReports.url() },
            { label: 'Carbon Credit', href: carbonCredit.url() },
            { label: 'Art from Scrap', href: artFromScrap.url() },
            { label: 'Green Initiatives', href: greenInitiatives.url() },
        ],
    },
    { label: 'ROUTE', href: '#' },
    { label: 'BUSINESS DEVELOPMENT', href: '#' },
    { label: 'CAREER', href: '#' },
    { label: 'BLOG', href: '/blog' },
    { label: 'LEGAL', href: '#' },
    { label: 'CONTACT US', href: '#' },
];

function PuneMetroLogo() {
    return (
        <a href="/">
            <img
                src="/assets/pune-metro-log.png"
                alt="Pune Metro"
                className="h-18 w-auto"
            />
        </a>
    );
}

function isActive(linkHref: string, currentUrl: string): boolean {
    if (linkHref === '/') {
        return currentUrl === '/';
    }

    return currentUrl === linkHref || currentUrl.startsWith(linkHref + '/');
}

function Chevron({ open }: { open: boolean }) {
    return (
        <svg
            className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const { url } = usePage();

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setDesktopOpen(null);
            }
        }
        document.addEventListener('mousedown', handleClick);

        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            {/* Rows 1+2: Logo + contact */}
            <div className="border-b border-gray-100">
                <div className="mx-auto flex max-w-[1440px] items-stretch px-4 min-[1441px]:px-0">
                    <div className="flex items-center py-5 pr-8">
                        <PuneMetroLogo />
                    </div>

                    <div className="hidden flex-1 flex-col justify-between py-4 lg:flex">
                        <div className="flex items-center justify-end gap-3">
                            <a
                                href="mailto:customercare.pmrp@mahametro.org"
                                className="flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 font-montserrat text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                            >
                                <svg
                                    className="h-3.5 w-3.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Mail Us: customercare.pmrp@mahametro.org
                            </a>
                            <a
                                href="tel:18002705501"
                                className="flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 font-montserrat text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                            >
                                <svg
                                    className="h-4 w-4 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.9 19.79 19.79 0 01.01 1.27 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"
                                    />
                                </svg>
                                Call Us: 18002705501
                            </a>
                        </div>

                        <div className="flex items-center justify-end gap-0">
                            {quickLinks.map((link, i) => (
                                <span
                                    key={link.label}
                                    className="flex items-center"
                                >
                                    <a
                                        href={link.href}
                                        className="font-montserrat text-[11px] font-medium text-gray-500 transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </a>
                                    {i < quickLinks.length - 1 && (
                                        <span className="mx-2 text-[10px] font-bold text-brand">
                                            +
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="ml-auto flex items-center lg:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Nav Bar */}
            <nav ref={navRef} className="hidden bg-brand lg:block">
                <div className="relative mx-auto flex max-w-[1440px] items-stretch justify-center px-4 min-[1441px]:px-0">
                    {mainNavLinks.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className="relative flex items-stretch"
                                onMouseEnter={() => setDesktopOpen(link.label)}
                                onMouseLeave={() => setDesktopOpen(null)}
                            >
                                <button
                                    onClick={() =>
                                        setDesktopOpen(
                                            desktopOpen === link.label
                                                ? null
                                                : link.label,
                                        )
                                    }
                                    className={`flex items-center gap-1 px-4 py-3 font-montserrat text-[11px] font-bold tracking-wide whitespace-nowrap text-white transition-colors hover:bg-white/20 ${
                                        isActive(link.href, url)
                                            ? 'bg-brand-dark'
                                            : ''
                                    }`}
                                >
                                    {link.label}
                                    <Chevron
                                        open={desktopOpen === link.label}
                                    />
                                </button>
                                {desktopOpen === link.label && (
                                    <div className="absolute top-full left-0 z-50 min-w-[200px] overflow-hidden rounded-b-xl bg-white shadow-lg">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() =>
                                                    setDesktopOpen(null)
                                                }
                                                className="block px-5 py-3 font-montserrat text-[11px] font-medium text-black transition-colors hover:bg-brand/10 hover:text-brand"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`px-4 py-3 font-montserrat text-[11px] font-bold tracking-wide whitespace-nowrap text-white transition-colors hover:bg-white/20 ${
                                    isActive(link.href, url)
                                        ? 'bg-brand-dark'
                                        : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ),
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white shadow-lg lg:hidden">
                    <div className="border-b border-gray-100 px-4 py-3">
                        <a
                            href="mailto:customercare.pmrp@mahametro.org"
                            className="flex items-center gap-2 py-1.5 font-montserrat text-xs text-brand"
                        >
                            <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            customercare.pmrp@mahametro.org
                        </a>
                        <a
                            href="tel:18002705501"
                            className="flex items-center gap-2 py-1.5 font-montserrat text-xs text-brand"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.9 19.79 19.79 0 01.01 1.27 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"
                                />
                            </svg>
                            18002705501
                        </a>
                    </div>

                    <div className="divide-y divide-gray-50 px-4 py-2">
                        {mainNavLinks.map((link) =>
                            link.children ? (
                                <div key={link.label}>
                                    <button
                                        onClick={() =>
                                            setMobileExpanded(
                                                mobileExpanded === link.label
                                                    ? null
                                                    : link.label,
                                            )
                                        }
                                        className={`flex w-full items-center justify-between py-2.5 font-montserrat text-sm font-semibold tracking-wide transition-colors hover:text-brand ${
                                            isActive(link.href, url)
                                                ? 'text-brand'
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {link.label}
                                        <Chevron
                                            open={mobileExpanded === link.label}
                                        />
                                    </button>
                                    {mobileExpanded === link.label && (
                                        <div className="mb-1 ml-3 border-l-2 border-brand/30 pl-3">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    onClick={() =>
                                                        setMobileOpen(false)
                                                    }
                                                    className="block py-2 font-montserrat text-xs text-black hover:text-brand"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-2.5 font-montserrat text-sm font-semibold tracking-wide transition-colors hover:text-brand ${
                                        isActive(link.href, url)
                                            ? 'text-brand'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                    </div>

                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                        <p className="mb-2 font-montserrat text-[10px] font-bold tracking-wider text-gray-400 uppercase">
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
