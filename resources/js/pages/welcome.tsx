import { Head } from '@inertiajs/react';
import AboutSection from '@/components/landing/AboutSection';
import BoardSection from '@/components/landing/BoardSection';
import ExplorePuneSection from '@/components/landing/ExplorePuneSection';
import FacilitiesSection from '@/components/landing/FacilitiesSection';
import HeroSection from '@/components/landing/HeroSection';
import KeyFeaturesSection from '@/components/landing/KeyFeaturesSection';
import LeadershipSection from '@/components/landing/LeadershipSection';
import MarqueeBanner from '@/components/landing/MarqueeBanner';
import QuoteBanner from '@/components/landing/QuoteBanner';
import RoutesSection from '@/components/landing/RoutesSection';


export default function Welcome() {
    return (
        <>
            <Head title="Puneri Metro - Transforming Urban Mobility" />
            <HeroSection />
            <MarqueeBanner />
            <AboutSection />
            <RoutesSection />
            <KeyFeaturesSection />
            <ExplorePuneSection />
            <FacilitiesSection />
            <LeadershipSection />
            <QuoteBanner>
                &ldquo;Puneri Metro is more than transport, it reflects the rhythm of a smarter, faster city, connecting people to
                opportunities with greater ease. Designed for comfort, sustainability and efficiency, it transforms everyday
                travel into a seamless urban experience.&rdquo;
            </QuoteBanner>
            <BoardSection />
        </>
    );
}
