import { Head } from '@inertiajs/react';
import LeadershipSection from '@/components/landing/LeadershipSection';

const teamMembers = [
    {
        image: '/about/leader-image/praveen-sinha.png',
        name: 'Dr. Praveen Sinha',
        designation: 'Chairman',
        content:
            "Dr. Praveer Sinha is the CEO & Managing Director of Tata Power, leading its transformation from a traditional utility into a sustainable, technology-driven, customer-focused green energy company. With over 40 years of experience across the power sector, he has championed clean energy innovation, including establishing India’s first international clean energy incubator. He also advises the MIT Energy Initiative and contributes to national power sector reforms. Recognized as Best CEO (Power Sector) by Business Today, Fortune India, and Forbes in 2023, he holds an Electrical Engineering degree, a master’s in business law, a doctorate from IIT Delhi, and completed AMP at IIM Ahmedabad. He is also a visiting Research Associate at MIT, USA.",
    },
    {
        image: '/about/leader-image/mangu-singh.png',
        name: 'Dr. Mangu Singh',
        designation: 'Independent Director',
        content:
            'Dr. Mangu Singh, a Civil Engineering graduate from the University of Roorkee (1979), joined IRSE and built a distinguished career in Indian Railways. As MD of Delhi Metro Rail Corporation for over a decade, he led major metro projects across India, overseeing complex infrastructure including ~200 km of tunnels and 70 stations. With 33+ years of experience, he also led Delhi Metro’s CDM project with UNFCCC, earning carbon credits. He has received multiple honors, including the Railway Week Award (1996) and distinguished alumni awards from IIT Roorkee and NAIR, and served as President of CoMET in 2019 and member of UITP’s Policy Board.',
    },
    {
        image: '/about/leader-image/leader-4.png',
        name: 'Mr. Sudip Mullick',
        designation: 'Independent Director',
        content: 'Mr. Sudip Mullick is a Partner at Economic Laws Practice, specializing in real estate, construction (contracts & disputes), and hospitality. Previously at Khaitan & Co. for nearly 30 years, he helped establish its Mumbai office and served on its national executive committee. A Calcutta University law graduate, he is widely recognized in Chambers, Legal 500, Benchmark Litigation, and named an Elite Practitioner by Asia Law (2024–25). He also serves as an independent director on several boards and completed a leadership program at Harvard University in 2017.',
    },
    {
        image: '/about/leader-image/leader-1.png',
        name: 'Mr. Basil Watters',
        designation: 'Director',
        content: 'A Project Finance expert with 20 years of experience at a major international London-based law firm, an international development bank in United Kingdom and India, and with the financial arm of one of the Europe’s largest and successful global engineering companies. He was lived worked in the United Kingdom, India and Germany, and worked as an external counsel, internal counsel and also as Chief Operations Officer for South Asia, and latterly as debt and equity provider, demonstrating large skills set in a variety of roles.',
    },
    {
        image: '/about/leader-image/leader-2.png',
        name: 'Ms. Sukriti Sood',
        designation: 'Director',
        content: 'Ms. Sukriti Sood has over 18 years of experience across financial services. She has been with Siemens Financial Services (SFS) since 2013 and has worked across both debt and equity businesses. Currently she leads the India business for equity investments for SFS. She has done her Civil Engineering from Delhi College of Engineering, her MBA from SP Jain Institute of Management & Research, Mumbai and her Masters in Finance from London Business School, UK.',
    },
    {
        image: '/about/leader-image/leader-3.png',
        name: 'Mr. Deepak Singla',
        designation: 'Nominee Director',
        content: 'Deepak Singla, a commerce graduate from Kurukshetra University, is a Chartered Accountant and CFA who previously worked at Nestlé India. He cleared the IAS exam in 2012 and has ~10 years of experience in urban and rural administration, serving in roles such as SDO (Umred, Yavatmal), CEO Zila Parishad Yavatmal, Commissioner–Water Conservation (Aurangabad), Collector–Gadchiroli, and MD Tribal Development Corporation (Nashik). Since November 2022, he has been Additional Commissioner at Pune Metropolitan Region Development Corporation.',
    },
];

export default function Board() {
    return (
        <>
            <Head>
                <title>Board of Directors - Puneri Metro</title>
                <meta
                    name="description"
                    content="Meet the Board of Directors of Pune IT City Metro Rail Limited (PITCMRL) — the leaders guiding Pune Metro Line 3."
                />
            </Head>

            {/* ── Page Hero Banner ── */}
            <section>
                <div className="max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src="/about/about-banner.png"
                        alt="Board of Directors - Puneri Metro"
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                </div>
            </section>

            {/* ── Page Title ── */}
            <section className="bg-white pt-16 pb-0">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="flex items-center gap-6">
                        <h1 className="mb-0 shrink-0 border-0 font-montserrat font-bold text-black" style={{ fontSize: '40px' }}>
                            Board of Directors
                        </h1>
                        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, #d1d5db, transparent)' }} />
                    </div>
                </div>
            </section>

            {/* ── Leadership Section ── */}
            <LeadershipSection showCeoTitle={false} showCfoTitle={false} />

            {/* ── Board Member Cards ── */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-360 px-6 min-[1441px]:px-0">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="flex flex-col">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full max-w-[383px] object-cover"
                                />
                                <div className="mt-4">
                                    <p className="font-montserrat font-semibold text-black" style={{ fontSize: '16px' }}>
                                        {member.name}
                                    </p>
                                    <p className="mt-1 font-montserrat text-gray-500" style={{ fontSize: '14px' }}>
                                        {member.designation}
                                    </p>
                                    <p className="mt-3 font-montserrat leading-relaxed text-gray-700" style={{ fontSize: '14px' }}>
                                        {member.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
