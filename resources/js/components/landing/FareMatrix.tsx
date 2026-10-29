import { useState } from 'react';
import { cn } from '@/lib/utils';

export type FareStation = { en: string; mr: string };

type Props = {
    stations: FareStation[];
    /** fares[row][column] is the fare in rupees between stations[row] and stations[column]. */
    fares: number[][];
};

/** Colours of the official fare chart artwork. */
const FARE_COLORS: Record<number, string> = {
    12: '#c5c6c6',
    25: '#c0dff5',
    37: '#b2d5ab',
    43: '#fdf5b2',
    49: '#afcbeb',
    62: '#f5b2b6',
};
const SAME_STATION_COLOR = '#cc348b';
const LEGEND_FARES = Object.keys(FARE_COLORS).map(Number);

export default function FareMatrix({ stations, fares }: Props) {
    const [hover, setHover] = useState<{ row: number; col: number } | null>(
        null,
    );

    return (
        <div>
            <ul
                className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2"
                aria-label="Fare colour key"
            >
                {LEGEND_FARES.map((fare) => (
                    <li
                        key={fare}
                        className="flex items-center gap-2 font-montserrat text-sm font-semibold text-black"
                    >
                        <span
                            className="size-5 rounded border border-black/10"
                            style={{ background: FARE_COLORS[fare] }}
                        />
                        ₹{fare}
                    </li>
                ))}
                <li className="flex items-center gap-2 font-montserrat text-xs text-gray-600">
                    <span
                        className="size-5 rounded border border-black/10"
                        style={{ background: SAME_STATION_COLOR }}
                    />
                    Same station
                </li>
            </ul>

            <div
                className="max-h-[78vh] overflow-auto rounded-3xl border border-gray-200 bg-white"
                onMouseLeave={() => setHover(null)}
            >
                <table className="border-separate border-spacing-0">
                    <caption className="sr-only">
                        Fare in rupees between every pair of Pune Metro Line 3
                        stations. Find the starting station in the left column
                        and the destination in the top row.
                    </caption>
                    <thead>
                        <tr>
                            <th className="sticky top-0 left-0 z-30 min-w-[160px] border-r border-b border-gray-300 bg-white p-3 text-left align-top md:min-w-[260px]">
                                <span className="block font-montserrat text-base font-bold text-black">
                                    स्थानक
                                </span>
                                <span className="block font-montserrat text-sm text-black">
                                    Stations
                                </span>
                                <span className="font-inter mt-2 block text-xs text-gray-600">
                                    From ↓ &nbsp; To →
                                </span>
                            </th>
                            {stations.map((station, col) => (
                                <th
                                    key={station.en}
                                    scope="col"
                                    className={cn(
                                        'sticky top-0 z-20 h-72 w-14 min-w-14 border-r border-b border-gray-300 bg-white px-1 py-3 align-bottom transition-colors',
                                        hover?.col === col && 'bg-[#fbe3f0]',
                                    )}
                                >
                                    <div className="mx-auto flex rotate-180 gap-1.5 text-left [writing-mode:vertical-rl]">
                                        <span className="font-montserrat text-xs leading-tight font-bold text-black">
                                            {station.en}
                                        </span>
                                        <span className="font-montserrat text-[13px] leading-tight text-black">
                                            {station.mr}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {stations.map((from, row) => (
                            <tr key={from.en}>
                                <th
                                    scope="row"
                                    className={cn(
                                        'sticky left-0 z-10 min-w-[160px] border-r border-b border-gray-300 bg-white px-3 py-1.5 text-left transition-colors md:min-w-[260px]',
                                        hover?.row === row && 'bg-[#fbe3f0]',
                                    )}
                                >
                                    <span className="block font-montserrat text-sm leading-tight text-black">
                                        {from.mr}
                                    </span>
                                    <span className="block font-montserrat text-xs leading-tight font-bold text-black">
                                        {from.en}
                                    </span>
                                </th>
                                {stations.map((to, col) => {
                                    const isSame = row === col;
                                    const isHovered =
                                        hover?.row === row && hover.col === col;

                                    return (
                                        <td
                                            key={to.en}
                                            title={
                                                isSame
                                                    ? from.en
                                                    : `${from.en} → ${to.en}: ₹${fares[row][col]}`
                                            }
                                            onMouseEnter={() =>
                                                setHover({ row, col })
                                            }
                                            className={cn(
                                                'h-12 w-14 min-w-14 border-r border-b border-white/70 text-center font-montserrat text-sm font-semibold',
                                                isSame
                                                    ? 'text-white'
                                                    : 'text-black',
                                                isHovered &&
                                                    'ring-2 ring-black ring-inset',
                                            )}
                                            style={{
                                                background: isSame
                                                    ? SAME_STATION_COLOR
                                                    : FARE_COLORS[
                                                          fares[row][col]
                                                      ],
                                            }}
                                        >
                                            {fares[row][col]}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
