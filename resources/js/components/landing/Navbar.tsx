import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import {
    artFromScrap,
    board,
    contact,
    customerService,
    dosAndDonts,
    eiaReports,
    fareTable,
    greenInitiatives,
    itemsNotToCarry,
    keyHighlights,
    lastMileConnectivity,
    lostAndFound,
    overview,
    passengerAmenities,
    photoGallery,
    privacyPolicy,
    projectUpdate,
    routeMap,
    stationAreaMap,
    stationList,
    stationRetail,
    termsAndConditions,
    timeTable,
} from '@/actions/App/Http/Controllers/PagesController';

const quickLinks = [
    // { label: 'Last Mile Connectivity', href: lastMileConnectivity.url() },
    { label: 'Lost & Found', href: lostAndFound.url() },
    { label: 'Metro Stations', href: stationList.url() },
];

type NavLink = {
    label: string;
    href: string;
    children?: { label: string; href: string; external?: boolean }[];
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
            // { label: 'Time Table', href: timeTable.url() },
            // { label: 'Fare Table / Ticket Rules', href: fareTable.url() },
            { label: "Do's and Don'ts", href: dosAndDonts.url() },
            // { label: 'Items Not to Carry', href: itemsNotToCarry.url() },
            { label: 'Offences and Penalties', href: '/documents/offence- penalties.pdf', external: true },
            { label: 'Lost and Found Enquiry', href: lostAndFound.url() },
            { label: 'Customer Service', href: customerService.url() },
            // { label: 'Last Mile Connectivity', href: lastMileConnectivity.url() },
            { label: 'Passenger Amenities', href: passengerAmenities.url() },
            // { label: 'Station Area Map', href: stationAreaMap.url() },

        ],
    },
    {
        label: 'MEDIA',
        href: photoGallery.url(),
        children: [
            { label: 'Photo Gallery', href: photoGallery.url() },
        ],
    },
    {
        label: 'ENVIRONMENT',
        href: eiaReports.url(),
        children: [
            { label: 'EIA Reports', href: eiaReports.url() },
            { label: 'Green Initiatives', href: greenInitiatives.url() },
            // { label: 'Carbon Credit', href: carbonCredit.url() },
            { label: 'Art from Scrap', href: artFromScrap.url() },
        ],
    },
    {
        label: 'ROUTE',
        href: stationList.url(),
        children: [
            { label: 'Station List – with nearby catchments / places', href: stationList.url() },
            { label: 'Route Map ', href: routeMap.url() },
        ],
    },
    {
        label: 'BUSINESS DEVELOPMENT',
        href: stationRetail.url(),
        children: [
            { label: 'Station Retail', href: stationRetail.url() },
        ],
    },
    // { label: 'CAREER', href: '#' },
    // { label: 'BLOG', href: '/blog' },
    { label: 'LEGAL', href: termsAndConditions.url(), children: [
        { label: 'Terms and Conditions', href: termsAndConditions.url() },
        { label: 'Privacy Policy', href: privacyPolicy.url() },
    ] },
    { label: 'CONTACT US', href: contact.url() },
];

function PuneMetroLogo() {
    return (
        <a href="/">
            <img
                src="/assets/pune-metro-log.png"
                alt="Pune Metro"
                className="h-11 w-auto lg:h-18"
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
    const [mobileClosing, setMobileClosing] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const { url } = usePage();

    function openMenu() {
        if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
        setMobileClosing(false);
        setMobileOpen(true);
    }

    function closeMenu() {
        setMobileClosing(true);
        menuTimeoutRef.current = setTimeout(() => {
            setMobileOpen(false);
            setMobileClosing(false);
        }, 200);
    }

    function toggleMenu() {
        if (mobileOpen && !mobileClosing) closeMenu();
        else openMenu();
    }

    useEffect(() => {
        return () => {
            if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
        };
    }, []);

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
        <header className="fixed top-0 z-50 w-full bg-white shadow-md lg:sticky">
            {/* Rows 1+2: Logo + contact */}
            <div className="border-b border-gray-100">
                <div className="mx-auto flex max-w-[1303px] min-[1440px]:max-w-[1440px] items-stretch px-4 min-[1303px]:px-8">
                    <div className="flex items-center py-2.5 pr-8 lg:py-5">
                        <PuneMetroLogo />
                    </div>

                    <div className="hidden flex-1 flex-col justify-between py-4 lg:flex">
                        <div className="flex items-center justify-end gap-3">
                            <a
                                href="mailto:contactPunemetro@tatarealty.in"
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
                                Mail Us: contactPunemetro@tatarealty.in
                            </a>
                            {/* Phone hidden */}
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
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className={`rounded-lg p-2 transition-colors duration-200 ${mobileOpen ? 'bg-brand/10 text-brand' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            <svg
                                className="h-6 w-6 transition-transform duration-200"
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
                <div className="relative mx-auto flex max-w-[1303px] min-[1440px]:max-w-[1440px] items-stretch justify-center px-4 min-[1303px]:px-8">
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
                                        {link.children.map((child) =>
                                            child.external ? (
                                                <a
                                                    key={child.label}
                                                    href={child.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => setDesktopOpen(null)}
                                                    className="block px-5 py-3 font-montserrat text-[11px] font-medium text-black transition-colors hover:bg-brand/10 hover:text-brand"
                                                >
                                                    {child.label}
                                                </a>
                                            ) : (
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
                                            )
                                        )}
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
                <div className={`${mobileClosing ? 'animate-out slide-out-to-top-2 fade-out' : 'animate-in slide-in-from-top-2 fade-in'} duration-200 max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white shadow-lg lg:hidden`}>
                    <div className="border-b border-gray-100 px-4 py-3">
                        <a
                            href="mailto:contactPunemetro@tatarealty.in"
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
                            contactPunemetro@tatarealty.in
                        </a>
                        {/* Phone hidden */}
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
                                            {link.children.map((child) =>
                                                child.external ? (
                                                    <a
                                                        key={child.label}
                                                        href={child.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => closeMenu()}
                                                        className="block py-2 font-montserrat text-xs text-black hover:text-brand"
                                                    >
                                                        {child.label}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        onClick={() =>
                                                            closeMenu()
                                                        }
                                                        className="block py-2 font-montserrat text-xs text-black hover:text-brand"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => closeMenu()}
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
