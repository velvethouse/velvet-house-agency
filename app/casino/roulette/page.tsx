'use client';

import { useState } from 'react';

const betAmount = 100;

export default function RoulettePage() {
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [spinning, setSpinning] = useState(false);

  const handlePlay = async () => {
    if (spinning || lotus < betAmount) return;
    setSpinning(true);
    setMessage('');
    setLotus((prev) => prev - betAmount);

    // 🔢 Simulation simple (à remplacer plus tard)
    const result = Math.floor(Math.random() * 37); // 0 à 36
    const isJackpot = result === 7 || result === 0;

    const combo = isJackpot ? 'jackpot-roulette' : null;
    const jackpotShare = betAmount * 0.3;
    const smallWinsShare = betAmount * 0.3;
    const velvetShare = betAmount * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'roulette',
          betAmount,
          jackpot: jackpotShare,
          smallPool: smallWinsShare,
          velvet: velvetShare,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'jackpot-roulette') {
          setMessage(`🎉 JACKPOT! Number ${result}`);
          setLotus((prev) => prev + 12000);
        } else if (result % 2 === 0) {
          setMessage(`✨ You win! Number ${result}`);
          setLotus((prev) => prev + 300);
        } else {
          setMessage(`😢 You lost. Number was ${result}`);
        }

        setSpinning(false);
      }, 1200);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error.');
      setSpinning(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🎯 Velvet Roulette</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <button
        onClick={handlePlay}
        disabled={spinning || lotus < betAmount}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : `Play (-${betAmount} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
      }
