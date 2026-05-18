import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { board } from '@/routes/about';

type Director = {
    name: string;
    role: string;
    image: string;
    bg?: string;
    bio?: string;
};

const directors: Director[] = [
    {
        name: 'Dr. Praveer Sinha',
        role: 'Chairman',
        image: '/landing/board-section/dr-praveer-sinha.png',
    },
    {
        name: 'Dr. Mangu Singh',
        role: 'Independent Director',
        image: '/landing/board-section/dr-mangu-singh.png',
    },
    {
        name: 'Mr. Sudip Mullick',
        role: 'Independent Director',
        image: '/landing/board-section/mr-sudip-mullick.png',
    },
    {
        name: 'Mr. Basil Watters',
        role: 'Director',
        image: '/landing/board-section/mr-basil-watters.png',
    },
    {
        name: 'Ms. Sukriti Sood',
        role: 'Director',
        image: '/landing/board-section/ms-sukriti-sood.png',
    },
    {
        name: 'Mr. Rajan Kapoor',
        role: 'Alternate Director to Mr. Basil Watters',
        image: '/landing/board-section/mr-rajan-kapoor.png',
    },

    {
        name: 'Mr. Anil Kumar Saini',
        role: 'Chief Executive Officer',
        image: '/landing/leadership-section/ceo-anil-kumar-saini-1.png',
        bio: "Mr. Anil Kumar Saini brings over 30 years of leadership experience in rail transport, spanning project management, operations, and business development. He has led major assignments across India's rail and metro sectors, demonstrating strong expertise in execution and strategy. An IIT Roorkee graduate, he has also completed executive programs at Harvard Business School and INSEAD.",
    },
    {
        name: 'Mr. Mitul Jhaveri',
        role: 'Chief Financial Officer',
        image: '/landing/leadership-section/cfo-mitul-jhaveri.png',
    },

    {
        name: 'Ms. Anjali Gupta',
        role: 'Company Secretary',
        image: '/landing/board-section/ms-anjali-gupta.png',
    },
    {
        name: 'Ms. K Manjulekshmi',
        role: 'Director nominated by Pune Metropolitan Region Development Authority',
        image: '/landing/board-section/ms-k-manjulekshmi.png',
    },
];

function DirectorAvatar({
    name,
    role,
    image,
    bg = '#dce9f5',
    onClick,
}: {
    name: string;
    role: string;
    image: string;
    bg?: string;
    onClick?: () => void;
}) {
    return (
        <div className="flex w-full flex-col items-center gap-3 text-center">
            {/* Photo */}
            <div
                className={`group relative h-62.5 w-full overflow-hidden rounded-2xl${onClick ? ' cursor-pointer' : ''}`}
                style={{ backgroundColor: bg }}
                onClick={onClick}
            >
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                />
                {/* Hover overlay — only shown when card is interactive */}
                {onClick && (
                    <div
                        className="absolute bottom-0 left-0 h-34.5 w-full translate-y-2 rounded-b-2xl opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ background: 'linear-gradient(180deg, rgba(154, 0, 82, 0) 0%, rgba(154, 0, 82, 0.5) 100%)' }}
                    >
                        <div className="flex h-full items-end justify-center pb-3">
                            <span className="font-montserrat text-sm font-bold text-white">Know More</span>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <p
                    className="font-montserrat text-sm font-semibold"
                    style={{ color: '#000000' }}
                >
                    {name}
                </p>
                <p
                    className="font-montserrat text-xs font-normal"
                    style={{ color: '#000000' }}
                >
                    {role}
                </p>
            </div>
        </div>
    );
}

function DirectorModal({ director, onClose }: { director: Director; onClose: () => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setVisible(true));

        return () => cancelAnimationFrame(frame);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${visible ? 'bg-black/50' : 'bg-transparent'}`}
            onClick={handleClose}
        >
            <div
                className={`relative flex w-full max-w-4xl flex-col overflow-hidden rounded-[25px] bg-white sm:flex-row transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left — Image */}
                <div
                    className="relative h-64 w-full shrink-0 overflow-hidden rounded-t-[25px] sm:h-auto sm:w-92.5 sm:rounded-l-[25px] sm:rounded-tr-none"
                    style={{ backgroundColor: director.bg ?? '#dce9f5' }}
                >
                    <img
                        src={director.image}
                        alt={director.name}
                        className="h-full w-full object-cover object-top"
                    />
                </div>
                {/* Right — Details */}
                <div className="flex flex-1 flex-col justify-center px-8 py-8 sm:px-10 sm:py-10">
                    <p className="font-montserrat text-base font-semibold text-black">{director.name}</p>
                    <p className="mt-1 font-montserrat text-sm text-black">{director.role}</p>
                    <div
                        className="my-5 h-px w-full"
                        style={{ background: 'linear-gradient(to right, #8e8e8e, transparent)' }}
                    />
                    {director.bio && (
                        <p className="font-montserrat text-sm leading-relaxed text-black">{director.bio}</p>
                    )}
                </div>
                {/* Close button */}
                <button
                    className="absolute right-4 top-4 flex size-8.5 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-50"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1 1L9 9M9 1L1 9" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default function BoardSection({ showHeading = true, showKnowMore = false, interactive = true }: { showHeading?: boolean; showKnowMore?: boolean; interactive?: boolean }) {
    const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>();
    const { ref: rowRef, inView: rowInView } = useInView<HTMLDivElement>();
    const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

    useEffect(() => {
        document.body.style.overflow = selectedDirector ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedDirector]);

    return (
        <section id="board" className="bg-white py-10">
            <div className="mx-auto max-w-360 px-6 lg:px-16">
                {/* Header */}
                {showHeading && (
                <div
                    ref={headerRef}
                    className={`mb-4 transition-all duration-700 ${headerInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                    <div className="text-center">
                        <h1
                            className="mb-0 shrink-0 border-0 text-center font-montserrat font-bold text-black"
                            style={{ fontSize: '30px' }}
                        >
                            Board Of Directors
                        </h1>
                        <p className="font-montserrat text-sm text-black">
                            Our team of experts brings years of experience,
                            skill, and dedication to every project.
                        </p>
                    </div>
                </div>
                )}

                {/* Directors grid */}
                <div
                    ref={rowRef}
                    className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                    {directors.map((d, i) => (
                        <div
                            key={d.name}
                            className={`w-full transition-all duration-500 ${rowInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{
                                transitionDelay: rowInView
                                    ? `${i * 100}ms`
                                    : '0ms',
                            }}
                        >
                            <DirectorAvatar
                                name={d.name}
                                role={d.role}
                                image={d.image}
                                bg={d.bg}
                                onClick={interactive ? () => setSelectedDirector(d) : undefined}
                            />
                        </div>
                    ))}
                </div>
            </div>

                {showKnowMore && (
                    <div className="mt-8 text-center">
                        <a
                            href={board.url()}
                            className="inline-block rounded-md bg-brand-dark px-7 py-3 font-montserrat text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            Know More
                        </a>
                    </div>
                )}
            {selectedDirector && (
                <DirectorModal director={selectedDirector} onClose={() => setSelectedDirector(null)} />
            )}
        </section>
    );
}
