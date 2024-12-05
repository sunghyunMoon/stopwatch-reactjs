import formatTime from '../util/formatTime';

const LapItem = ({ lap, color }) => {
    const [lapNum, lapTime] = lap;
    return (
        <li className={`${color} flex justify-between py-2 px-3 border-b-2`}>
            <span>랩 {lapNum}</span>
            <span>{formatTime(lapTime)}</span>
        </li>
    );
};

export default LapItem;
