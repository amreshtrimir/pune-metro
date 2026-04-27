const directors = [
    { name: 'Dr. Praveer Sinha', role: 'Chairman', image: '/landing/board-section/dr-praveer-sinha.png' },
    { name: 'Dr. Mangu Singh', role: 'Independent Director', image: '/landing/board-section/dr-mangu-singh.png' },
    { name: 'Mr. Sudip Mullick', role: 'Independent Director', image: '/landing/board-section/mr-sudip-mullick.png' },
    { name: 'Ms. Sukriti Sood', role: 'Director', image: '/landing/board-section/ms-sukriti-sood.png' },
    { name: 'Mr. Basil Watters', role: 'Director', image: '/landing/board-section/mr-basil-watters.png' },
];

const others = [
    { name: 'Mr. Deepak Singla', role: 'Nominee Director', image: '/landing/board-section/mr-deepak-singla.png' },
    { name: 'Ms. Anjali Gupta', role: 'Company Secretary', image: '/landing/board-section/ms-anjali-gupta.png' },
];

function DirectorAvatar({ name, role, image }: { name: string; role: string; image: string }) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            {/* Photo */}
            <div className="h-45 w-[160px] overflow-hidden rounded-2xl bg-gray-100">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div>
                <p className="font-montserrat text-sm font-semibold" style={{ color: '#000000' }}>
                    {name}
                </p>
                <p className="font-montserrat text-xs font-normal" style={{ color: '#000000' }}>
                    {role}
                </p>
                <div className="mt-1 flex justify-center">
                    <div className="h-0.5 w-8 rounded-full bg-brand" />
                </div>
            </div>
        </div>
    );
}

export default function BoardSection() {
    return (
        <section id="board" className="bg-white py-20">
            <div className="mx-auto max-w-360 px-6 lg:px-16">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-3 font-montserrat text-3xl font-bold text-gray-900 lg:text-4xl">
                        Board Of Directors
                    </h2>
                    <p className="font-montserrat text-sm text-gray-500">
                        Our team of experts brings years of experience, skill, and dedication to every project.
                    </p>
                </div>

                {/* Main directors row */}
                <div className="mb-10 flex flex-wrap justify-center gap-8">
                    {directors.map((d) => (
                        <DirectorAvatar key={d.name} name={d.name} role={d.role} image={d.image} />
                    ))}
                </div>

                {/* Secondary row */}
                <div className="flex flex-wrap justify-center gap-8">
                    {others.map((d) => (
                        <DirectorAvatar key={d.name} name={d.name} role={d.role} image={d.image} />
                    ))}
                </div>
            </div>
        </section>
    );
}
