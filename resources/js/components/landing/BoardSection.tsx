import { useInView } from '@/hooks/useInView';
import { board } from '@/routes/about';

const directors = [
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
        name: 'Mr. John Doe',
        role: 'Nominee Director',
        image: '/landing/board-section/placeholder-director.png',
    },

    {
        name: 'Mr. Anil Kumar Saini',
        role: 'Chief Executive Officer',
        image: '/landing/leadership-section/ceo-anil-kumar-saini-1.png',
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
];

function DirectorAvatar({
    name,
    role,
    image,
    bg = '#dce9f5',
}: {
    name: string;
    role: string;
    image: string;
    bg?: string;
}) {
    return (
        <div className="flex w-full flex-col items-center gap-3 text-center">
            {/* Photo */}
            <div className="h-56 w-full overflow-hidden rounded-2xl" style={{ backgroundColor: bg }}>
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                />
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

export default function BoardSection({ showHeading = true, showKnowMore = false }: { showHeading?: boolean; showKnowMore?: boolean }) {
    const { ref: headerRef, inView: headerInView } =
        useInView<HTMLDivElement>();
    const { ref: rowRef, inView: rowInView } = useInView<HTMLDivElement>();

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
                    className="grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
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
        </section>
    );
}
