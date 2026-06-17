import { Head } from '@inertiajs/react';
import AboutSection from '@/components/landing/AboutSection';
import BoardSection from '@/components/landing/BoardSection';
import ExplorePuneSection from '@/components/landing/ExplorePuneSection';
import FacilitiesSection from '@/components/landing/FacilitiesSection';
import HeroSection from '@/components/landing/HeroSection';
import KeyFeaturesSection from '@/components/landing/KeyFeaturesSection';

import MarqueeBanner from '@/components/landing/MarqueeBanner';
import QuoteBanner from '@/components/landing/QuoteBanner';
import RoutesSection from '@/components/landing/RoutesSection';
import type { BoardMember, ExplorePunePlace, MarqueeItem } from '@/types/cms';

type Props = {
    canRegister: boolean;
    members: BoardMember[];
    explorePlaces: ExplorePunePlace[];
    marqueeItems: MarqueeItem[];
};

export default function Welcome({ members, explorePlaces, marqueeItems }: Props) {
    return (
        <>
            <Head title="Pune Metro Line 3 - Transforming Urban Mobility" />
            <HeroSection />
            <MarqueeBanner items={marqueeItems} />
            <AboutSection />
            <RoutesSection />
            <KeyFeaturesSection />
            <ExplorePuneSection places={explorePlaces} />
            <FacilitiesSection />
            {/* <LeadershipSection /> */}

            {/* <BoardSection interactive={false} showKnowMore={true} members={members} /> */}
            <QuoteBanner>
                &ldquo;Pune Metro Line 3 is more than transport, it reflects the rhythm of a smarter, faster city, connecting people to
                opportunities with greater ease. Designed for comfort, sustainability and efficiency, it transforms everyday
                travel into a seamless urban experience.&rdquo;
            </QuoteBanner>
        </>
    );
}
