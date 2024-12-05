import { useState, useRef, useCallback } from 'react';

const useTimer = () => {
    const [centisecond, setCentisecond] = useState(0);
    const [lapCount, setLapCount] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [timerInterval, setTimerInterval] = useState(null);
    const [laps, setLaps] = useState([]);

    let prevLap = useRef(0);

    const start = useCallback(() => {
        let _interval = setInterval(() => {
            setCentisecond((prev) => prev + 1);
        }, 10);
        setTimerInterval(_interval);
        setIsRunning((prev) => !prev);
    }, []);

    const pause = useCallback(() => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setIsRunning((prev) => !prev);
    }, [timerInterval]);

    const createLap = useCallback(() => {
        setLapCount((prev) => prev + 1);
        const lapTime = centisecond - prevLap.current;
        setLaps((prev) => [[lapCount, lapTime], ...prev]);
        prevLap.current = centisecond;
    }, [prevLap, lapCount, centisecond]);

    const reset = useCallback(() => {
        setCentisecond(0);
        setLapCount(0);
        prevLap.current = 0;
        setLaps([]);
    }, []);

    return { centisecond, start, pause, createLap, reset, isRunning, laps };
};

export default useTimer;
