import type { MarqueeItem } from '@/types/cms';

type Props = {
    items: MarqueeItem[];
};

export default function MarqueeBanner({ items }: Props) {
    if (items.length === 0) {
        return null;
    }

    const texts = items.map((item) => item.text);
    const repeated = [...texts, ...texts];

    return (
        <div className="overflow-hidden bg-[#f5f0c8] py-2.5" style={{ height: '38px' }}>
            <div className="flex animate-marquee items-center whitespace-nowrap">
                {repeated.map((text, i) => (
                    <span key={i} className="flex items-center">
                        <span className="font-montserrat text-xs font-semibold text-[#2a2a2a]">
                            {text}
                        </span>
                        <span className="mx-5 text-sm font-bold text-[#2a2a2a]">+</span>
                    </span>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
