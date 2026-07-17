const stations = [
    { id: 1, station: 'PMR-01', name: 'Maan', minArea: 1092, maxArea: 32000 },
    {
        id: 2,
        station: 'PMR-02',
        name: 'Maan - MIDC Circle, Phase II',
        minArea: 100,
        maxArea: 323,
    },
    {
        id: 3,
        station: 'PMR-03',
        name: 'Maan Bus Depot',
        minArea: 200,
        maxArea: 460,
    },
    {
        id: 4,
        station: 'PMR-04',
        name: 'Hinjawadi Phase-II Circle-II',
        minArea: 250,
        maxArea: 377,
    },
    {
        id: 5,
        station: 'PMR-05',
        name: 'Hinjawadi Phase-II Circle-I',
        minArea: 100,
        maxArea: 250,
    },
    {
        id: 6,
        station: 'PMR-06',
        name: 'Padmabhushan Chowk',
        minArea: 300,
        maxArea: 472,
    },
    {
        id: 7,
        station: 'PMR-07',
        name: 'Shree Shiv Chhatrapati Shivaji Maharaj Chowk, Hinjawadi',
        minArea: 200,
        maxArea: 430,
    },
    {
        id: 8,
        station: 'PMR-08',
        name: 'Hinjawadi Phase - I',
        minArea: 377,
        maxArea: 474,
    },
    {
        id: 9,
        station: 'PMR-09',
        name: 'Wakad Chowk',
        minArea: 100,
        maxArea: 5000,
    },
    {
        id: 10,
        station: 'PMR-10',
        name: 'Shree Shiv Chhatrapati Sports Complex, Mahalunge',
        minArea: 323,
        maxArea: 474,
    },
    {
        id: 11,
        station: 'PMR-11',
        name: 'Mitcon Balewadi',
        minArea: 215,
        maxArea: 431,
    },
    {
        id: 12,
        station: 'PMR-12',
        name: 'R K Laxman Museum Balewadi',
        minArea: 100,
        maxArea: 463,
    },
    {
        id: 13,
        station: 'PMR-13',
        name: 'Balewadi High Street',
        minArea: 107,
        maxArea: 5577,
    },
    {
        id: 14,
        station: 'PMR-14',
        name: 'Balewadi Phata',
        minArea: 323,
        maxArea: 463,
    },
    {
        id: 15,
        station: 'PMR-15',
        name: 'Baner Gaon',
        minArea: 323,
        maxArea: 474,
    },
    {
        id: 16,
        station: 'PMR-16',
        name: 'Baner Pashan Link Road',
        minArea: 100,
        maxArea: 200,
    },
    { id: 17, station: 'PMR-17', name: 'Aundh', minArea: 487, maxArea: 14700 },
    {
        id: 18,
        station: 'PMR-18',
        name: 'Sakalnagar',
        minArea: 323,
        maxArea: 473,
    },
    {
        id: 19,
        station: 'PMR-19',
        name: 'Savitribai Phule Pune University',
        minArea: 100,
        maxArea: 215,
    },
    {
        id: 20,
        station: 'PMR-20',
        name: 'Bhosalenagar – RBI',
        minArea: 100,
        maxArea: 26555,
    },
    {
        id: 21,
        station: 'PMR-21',
        name: 'Agriculture College',
        minArea: 200,
        maxArea: 14886,
    },
    {
        id: 22,
        station: 'PMR-22',
        name: 'Shivaji Nagar',
        minArea: 2239,
        maxArea: 26910,
    },
    {
        id: 23,
        station: 'PMR-23',
        name: 'District Court, Pune',
        minArea: 170,
        maxArea: 2002,
    },
];

export default function StationTableList() {
    return (
        <div style={{ overflowX: 'auto', padding: '16px' }}>
            <table className="w-full border-collapse text-sm text-black">
                <thead className="bg-[#E8449A26]">
                    <tr>
                        {[
                            'S.No.',
                            'Station',
                            'Station Name',
                            'Min Area (Sqft)',
                            'Max Area (Sqft)',
                        ].map((h) => (
                            <th
                                key={h}
                                className="border border-gray-300 px-3 py-2 text-left"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {stations.map((s) => (
                        <tr
                            key={s.id}
                            className="odd:bg-gray-50 hover:bg-blue-50"
                        >
                            <td className="border border-gray-300 px-3 py-2">
                                {s.id}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                                {s.station}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                                {s.name}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                                {s.minArea.toLocaleString('en-IN')}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                                {s.maxArea.toLocaleString('en-IN')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'sans-serif',
        fontSize: '14px',
    },
    th: {
        border: '1px solid #ddd',
        padding: '10px 12px',
        backgroundColor: '#1f4e79',
        color: '#fff',
        textAlign: 'left',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px 12px',
    },
    tr: {
        backgroundColor: '#f9f9f9',
    },
};
