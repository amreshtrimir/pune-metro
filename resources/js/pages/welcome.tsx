import { Head } from '@inertiajs/react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import MarqueeBanner from '@/components/landing/MarqueeBanner';
import AboutSection from '@/components/landing/AboutSection';
import RoutesSection from '@/components/landing/RoutesSection';
import KeyFeaturesSection from '@/components/landing/KeyFeaturesSection';
import ExplorePuneSection from '@/components/landing/ExplorePuneSection';
import FacilitiesSection from '@/components/landing/FacilitiesSection';
import LeadershipSection from '@/components/landing/LeadershipSection';
import BoardSection from '@/components/landing/BoardSection';
import FooterSection from '@/components/landing/FooterSection';

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
