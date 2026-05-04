import type { PropsWithChildren } from 'react';
import { useInView } from '@/hooks/useInView';

export default function QuoteBanner({ children }: PropsWithChildren) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`px-6 py-12 transition-all duration-700 min-[1303px]:px-8 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
            <div
                className="mx-auto rounded-2xl px-10 py-10 text-center"
                style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(to bottom, #f91c91 0%, transparent 100%) border-box',
                    border: '1px solid transparent',
                    borderBottom: 'none',
                    maxWidth: '1440px',
                }}
            >
                <p className="font-montserrat text-lg font-normal leading-loose text-brand lg:text-xl">
                    {children}
                </p>
            </div>
        </div>
    );
}
