'use client';

import { useState, useEffect } from 'react';

export default function JackpotDisplay() {
  const [jackpot, setJackpot] = useState<number>(725300); // montant initial en Lotus

  // Exemple : augmentation fictive du jackpot toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 30)); // augmente un peu
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-center rounded-xl p-4 border border-yellow-400 shadow-xl">
      <h2 className="text-xl font-semibold tracking-wide">🎉 Global Jackpot</h2>
      <p className="text-3xl font-bold text-yellow-100 mt-1">
        {jackpot.toLocaleString()} <span className="text-yellow-300">♢ Lotus</span>
      </p>
      <p className="text-xs italic text-gray-200 mt-2">
        This pot increases with every bet placed across all games.
      </p>
    </div>
  );
}
