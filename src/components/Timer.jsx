import formatTime from '../util/formatTime';

const Timer = ({ centisecond }) => {
    return (
        <h1
            id="timer"
            className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words"
        >
            {formatTime(centisecond)}
        </h1>
    );
};

export default Timer;
