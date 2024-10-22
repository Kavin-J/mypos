import { useState, useEffect } from 'react';

const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000*60); // อัปเดตทุก 1 วินาที

        return () => clearInterval(intervalId); // เคลียร์เมื่อ component ถูก unmount
    }, []);

    return time;
};

export default useTime;
