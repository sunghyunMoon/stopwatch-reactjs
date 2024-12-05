import { useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const StopWatch = () => {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();
    const lapResetBtnRef = useRef(null);
    const stopStartBtnRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.code === 'KeyS') {
            stopStartBtnRef.current.click();
        } else if (e.code === 'KeyL') {
            lapResetBtnRef.current.click();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    label={isRunning ? '랩' : '리셋'}
                    code="L"
                    color="bg-gray-600"
                    onClickHandler={isRunning ? createLap : reset}
                    ref={lapResetBtnRef}
                />
                <Button
                    label={isRunning ? '중단' : '시작'}
                    code="S"
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    onClickHandler={isRunning ? pause : start}
                    ref={stopStartBtnRef}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
};

export default StopWatch;
