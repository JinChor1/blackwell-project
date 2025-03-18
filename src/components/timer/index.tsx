"use client"

import { useEffect, useState } from "react";

type TimerProps = {
    targetDate: string; 
};

export default function Timer({ targetDate }: TimerProps){
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
    
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
          return null;
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
    }, [])

    return(
        <div className="flex">
            { timeLeft && 
            <>
                <div className="w-20 content-center mr-10">
                    <p className="text-center">PROMOTION ENDS IN</p>
                </div>
                <div className="grid grid-cols-7 grid-rows-2">
                    <h1 className="text-center leading-none">{timeLeft.days}</h1>
                    <h1 className="text-center leading-none">:</h1>
                    <h1 className="text-center leading-none">{timeLeft.hours}</h1>
                    <h1 className="text-center leading-none">:</h1>
                    <h1 className="text-center leading-none">{timeLeft.minutes}</h1>
                    <h1 className="text-center leading-none">:</h1>
                    <h1 className="text-center leading-none">{timeLeft.seconds}</h1>
                    <p className="text-center content-center">Days</p>
                    <p className="text-center content-center"></p>
                    <p className="text-center content-center">Hours</p>
                    <p className="text-center content-center"></p>
                    <p className="text-center content-center">Minutes</p>
                    <p className="text-center content-center"></p>
                    <p className="text-center content-center">Seconds</p>
                </div>
            </>
            }
        </div>
    )
}