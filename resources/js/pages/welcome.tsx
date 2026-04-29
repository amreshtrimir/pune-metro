import { Head } from '@inertiajs/react';
import AboutSection from '@/components/landing/AboutSection';
import BoardSection from '@/components/landing/BoardSection';
import ExplorePuneSection from '@/components/landing/ExplorePuneSection';
import FacilitiesSection from '@/components/landing/FacilitiesSection';
import FooterSection from '@/components/landing/FooterSection';
import HeroSection from '@/components/landing/HeroSection';
import KeyFeaturesSection from '@/components/landing/KeyFeaturesSection';
import LeadershipSection from '@/components/landing/LeadershipSection';
import MarqueeBanner from '@/components/landing/MarqueeBanner';
import Navbar from '@/components/landing/Navbar';
import RoutesSection from '@/components/landing/RoutesSection';

export default function Welcome() {
    return (
        <>
            <Head title="Puneri Metro - Transforming Urban Mobility">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=montserrat:400,500,600,700,800"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen overflow-x-hidden bg-white font-montserrat">
                <Navbar />
                <HeroSection />
                <MarqueeBanner />
                <AboutSection />
                <RoutesSection />
                <KeyFeaturesSection />
                <ExplorePuneSection />
                <FacilitiesSection />
                <LeadershipSection />
                <BoardSection />
                <FooterSection />
            </div>
        </>
    );
}
