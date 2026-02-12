'use client';

import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const LAUNCH_DATE = new Date('2025-08-01T00:00:00Z');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = LAUNCH_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-block">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <Calendar className="w-5 h-5 text-molten-orange" />
        <span className="text-steel-blue font-semibold">Early Access Launch</span>
      </div>
      <div className="flex gap-4 justify-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="bg-shadow-gray/80 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl md:text-4xl font-bold text-molten-orange font-heading">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-steel-blue mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
