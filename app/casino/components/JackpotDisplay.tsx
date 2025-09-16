'use client';

import { useEffect, useState } from 'react';

export default function JackpotDisplay() {
  const [jackpot, setJackpot] = useState<number | null>(null);

  useEffect(() => {
    const fetchJackpot = async () => {
      try {
        const res = await fetch('/api/casino/jackpot');
        const data = await res.json();
        setJackpot(data.jackpot);
      } catch (err) {
        console.error('❌ Failed to fetch jackpot:', err);
      }
    };

    fetchJackpot();
    const interval = setInterval(fetchJackpot, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-center rounded-xl p-4 border border-yellow-400 shadow-xl">
      <h2 className="text-xl font-semibold tracking-wide">🎉 Global Jackpot</h2>
      <p className="text-3xl font-bold text-yellow-100 mt-1">
        {jackpot !== null ? jackpot.toLocaleString() : 'Loading...'}{' '}
        <span className="text-yellow-300">♢ Lotus</span>
      </p>
      <p className="text-xs italic text-gray-200 mt-2">
        This pot increases every time someone plays across the casino.
      </p>
    </div>
  );
}
