"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // target date (example: 3 days later)
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Box 1 */}
      <div className="bg-white rounded-md shadow p-3 text-center">
        <p className="text-[#3BB77E] text-lg font-bold">{timeLeft.days}</p>
        <span className="text-gray-500 text-sm">Days</span>
      </div>
      {/* Box 2 */}
      <div className="bg-white rounded-md shadow p-3 text-center">
        <p className="text-[#3BB77E] text-lg font-bold">{timeLeft.hours}</p>
        <span className="text-gray-500 text-sm">Hours</span>
      </div>
      {/* Box 3 */}
      <div className="bg-white rounded-md shadow p-3 text-center">
        <p className="text-[#3BB77E] text-lg font-bold">{timeLeft.minutes}</p>
        <span className="text-gray-500 text-sm">Mins</span>
      </div>
      {/* Box 4 */}
      <div className="bg-white rounded-md shadow p-3 text-center">
        <p className="text-[#3BB77E] text-lg font-bold">{timeLeft.seconds}</p>
        <span className="text-gray-500 text-sm">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;