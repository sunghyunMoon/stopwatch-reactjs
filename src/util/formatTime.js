const convertTimeString = (time) => {
    return time < 10 ? '0' + time : time;
};

export const formatTime = (centiSec) => {
    // 8540 centisecond = 01:25.40
    const min = parseInt(centiSec / 6000);
    const sec = parseInt((centiSec - min * 6000) / 100);
    const centi = centiSec % 100;
    return `${convertTimeString(min)}:${convertTimeString(
        sec
    )}.${convertTimeString(centi)}`;
};

export default formatTime;
