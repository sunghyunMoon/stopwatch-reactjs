import { memo } from 'react';
import LapItem from './LapItem';

const Laps = ({ laps }) => {
    const sortedLaps = [...laps].sort((a, b) => a[1] - b[1]);
    let maxLapNum = laps.length && sortedLaps[sortedLaps.length - 1][0];
    let minLapNum = laps.length && sortedLaps[0][0];
    if (laps.length < 2) {
        maxLapNum = undefined;
        minLapNum = undefined;
    }
    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps.map((lap) => (
                    <LapItem
                        key={lap[0]}
                        lap={lap}
                        color={
                            lap[0] === maxLapNum
                                ? 'text-red-600'
                                : lap[0] === minLapNum
                                ? 'text-green-600'
                                : null
                        }
                    />
                ))}
            </ul>
        </article>
    );
};

export default memo(Laps);
