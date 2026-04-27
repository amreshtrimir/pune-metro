interface LeaderProps {
    role: string;
    roleShort: string;
    name: string;
    bio: string;
    image: string;
    reverse?: boolean;
}

function LeaderCard({ role, roleShort, name, bio, image, reverse = false }: LeaderProps) {
    return (
        <div className={`grid grid-cols-1 items-start gap-0 lg:grid-cols-2 ${reverse ? '' : ''}`}>
            {/* Title side */}
            <div className={`relative flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white px-8 py-16 lg:px-16 lg:py-24 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Watermark role text */}
                <p className="pointer-events-none absolute bottom-4 left-4 select-none font-montserrat text-8xl font-bold text-black/5 lg:text-[10rem]">
                    {roleShort}
                </p>
                <h2 className="relative font-montserrat text-3xl font-bold leading-snug text-gray-900 lg:text-4xl">
                    {role.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h2>
            </div>

            {/* Photo + bio side */}
            <div className={`flex flex-col ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Photo */}
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-[320px] w-full object-cover object-top lg:h-[380px]"
                    />
                </div>

                {/* Bio */}
                <div className="bg-white px-8 py-8 lg:px-12">
                    <p className="mb-2 font-montserrat text-base font-semibold text-gray-900">
                        {name}
                    </p>
                    <p className="font-montserrat text-sm font-normal leading-relaxed text-gray-600">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function LeadershipSection() {
    return (
        <section id="leadership" className="overflow-hidden">
            <LeaderCard
                role="Chief Executive Officer"
                roleShort="CEO"
                name="Mr. Anil Kumar Saini"
                bio="Mr. Anil Kumar Saini brings over 30 years of leadership experience in rail transport, spanning project management, operations, and business development. He has led major assignments across India's rail and metro sectors, demonstrating strong expertise in execution and strategy. An IIT Roorkee graduate, he has also completed executive programs at Harvard Business School and INSEAD."
                image="/landing/ceo-photo.png"
            />

            <LeaderCard
                role="Chief Financial Officer"
                roleShort="CFO"
                name="Mr. Mitul Jhaveri"
                bio="Mr. Mitul Jhaveri has an overall experience of 22+ years in Corporate and Trade Finance, Business Finance, M&A Advisory, Project Finance and Equity Finance. He joined Siemens in the year 2007 and currently working in the equity finance group of Siemens Financial Services. He has previously worked with ICICI Bank and Indian Oil Corporation in their International Banking and Finance divisions respectively."
                image="/landing/metro-interior.png"
                reverse
            />

            {/* Vision / Quote banner */}
            <div className="bg-brand-dark px-6 py-16 text-center lg:px-16">
                <p className="mx-auto max-w-4xl font-montserrat text-base font-normal italic leading-loose text-white lg:text-lg">
                    "Puneri Metro is more than transport; it reflects the rhythm of a smarter, faster city, connecting people to
                    opportunities with greater ease. Designed for comfort, sustainability and efficiency, it transforms everyday
                    travel into a seamless urban experience."
                </p>
            </div>
        </section>
    );
}
