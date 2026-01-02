import React, { useState, useEffect, useRef } from 'react';

const AnalogClock = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56
  });

  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          const { days, hours, minutes, seconds } = prevTime;

          if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalRef.current);
            return prevTime;
          }

          let newSeconds = seconds - 1;
          let newMinutes = minutes;
          let newHours = hours;
          let newDays = days;

          if (newSeconds < 0) {
            newSeconds = 59;
            newMinutes = minutes - 1;
          }

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours = hours - 1;
          }

          if (newHours < 0) {
            newHours = 23;
            newDays = days - 1;
          }

          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds
          };
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 sm:gap-5">
        <div className="flex flex-col items-center bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 text-white">
          <div className="text-[10px] sm:text-[14px]">{formatNumber(timeLeft.days)}</div>
          <div className="text-[11px] sm:text-[15px]">Days</div>
        </div>

        <div className="flex flex-col items-center bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 text-white">
          <div className="text-[10px] sm:text-[14px]">{formatNumber(timeLeft.hours)}</div>
          <div className="text-[11px] sm:text-[15px]">Hour</div>
        </div>

        <div className="flex flex-col items-center bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 text-white">
          <div className="text-[10px] sm:text-[14px]">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-[11px] sm:text-[15px]">Min</div>
        </div>

        <div className="flex flex-col items-center bg-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 text-white">
          <div className="text-[10px] sm:text-[14px]">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-[11px] sm:text-[15px]">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;