const directors = [
    { name: 'Dr. Praveer Sinha', role: 'Chairman' },
    { name: 'Dr. Mangu Singh', role: 'Independent Director' },
    { name: 'Mr. Sudip Mullick', role: 'Independent Director' },
    { name: 'Ms. Sukriti Sood', role: 'Director' },
    { name: 'Mr. Basil Watters', role: 'Director' },
];

const others = [
    { name: 'Mr. Deepak Singla', role: 'Nominee Director' },
    { name: 'Ms. Anjali Gupta', role: 'Company Secretary' },
];

function DirectorAvatar({ name, role }: { name: string; role: string }) {
    const initials = name
        .split(' ')
        .filter((w) => w.length > 2)
        .slice(-2)
        .map((w) => w[0])
        .join('');

    return (
        <div className="flex flex-col items-center gap-3 text-center">
            {/* Photo placeholder */}
            <div className="flex h-45 w-[160px] items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                <span className="font-montserrat text-3xl font-bold text-gray-400">
                    {initials}
                </span>
            </div>
            <div>
                <p className="font-montserrat text-sm font-semibold text-gray-900">
                    {name}
                </p>
                <p className="font-montserrat text-xs font-normal text-gray-500">
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
                        <DirectorAvatar key={d.name} name={d.name} role={d.role} />
                    ))}
                </div>

                {/* Secondary row */}
                <div className="flex flex-wrap justify-center gap-8">
                    {others.map((d) => (
                        <DirectorAvatar key={d.name} name={d.name} role={d.role} />
                    ))}
                </div>
            </div>
        </section>
    );
}
