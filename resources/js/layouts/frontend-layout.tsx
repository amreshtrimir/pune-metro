import type { PropsWithChildren } from 'react';
import { Head } from '@inertiajs/react';
import FooterSection from '@/components/landing/FooterSection';
import Navbar from '@/components/landing/Navbar';

export default function FrontendLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=montserrat:400,500,600,700,800" rel="stylesheet" />
            </Head>
            <div className="min-h-screen overflow-x-hidden bg-white font-montserrat">
                <Navbar />
                <main>{children}</main>
                <FooterSection />
            </div>
        </>
    );
}
