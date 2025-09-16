'use client';

import { useEffect, useState } from 'react';

export default function JackpotDisplay() {
  const [jackpot, setJackpot] = useState<number | null>(null);

  useEffect(() => {
    const fetchJackpot = async () => {
      try {
        const res = await fetch('/api/casino/jackpot');
        const data = await res.json();
        if (typeof data.jackpot === 'number') {
          setJackpot(data.jackpot);
        }
      } catch (err) {
        console.error('❌ Failed to fetch jackpot:', err);
      }
    };

    fetchJackpot();
    const interval = setInterval(fetchJackpot, 15000);
    return () => clearInterval(interval);
  }, []);

  if (jackpot === null) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-center rounded-xl p-4 border border-yellow-400 shadow-xl">
      <h2 className="text-xl font-semibold tracking-wide">🎉 Global Jackpot</h2>
      <p className="text-3xl font-bold text-yellow-100 mt-1">
        {jackpot.toLocaleString()} <span className="text-yellow-300">♢ Lotus</span>
      </p>
    </div>
  );
                      }
