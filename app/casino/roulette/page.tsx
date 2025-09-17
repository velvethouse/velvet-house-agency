'use client';

import { useState } from 'react';
import JackpotCelebration from '../components/JackpotCelebration';

const betAmount = 100;

export default function RoulettePage() {
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [spinning, setSpinning] = useState(false);
  const [jackpotWin, setJackpotWin] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handlePlay = async () => {
    if (spinning || lotus < betAmount) return;

    setSpinning(true);
    setMessage('');
    setJackpotWin(false);
    setLotus((prev) => prev - betAmount);

    const outcome = Math.floor(Math.random() * 37); // 0–36
    setResult(outcome);

    const isJackpot = outcome === 0 || outcome === 7;
    const combo = isJackpot ? 'jackpot-roulette' : null;

    const jackpot = betAmount * 0.3;
    const smallPool = betAmount * 0.3;
    const velvet = betAmount * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'roulette',
          betAmount,
          jackpot,
          smallPool,
          velvet,
          combo,
        }),
      });

      setTimeout(() => {
        if (isJackpot) {
          setMessage(`🎉 JACKPOT! Number ${outcome}`);
          setJackpotWin(true);
          setLotus((prev) => prev + 12000);
        } else if (outcome % 2 === 0) {
          setMessage(`✨ You win! Number ${outcome}`);
          setLotus((prev) => prev + 300);
        } else {
          setMessage(`😢 You lost. Number was ${outcome}`);
        }
        setSpinning(false);
      }, 1000);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error.');
      setSpinning(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-6 relative">
      {jackpotWin && <JackpotCelebration />}

      <h1 className="text-3xl font-bold text-yellow-400">🎯 Velvet Roulette</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      {result !== null && (
        <div className="text-5xl font-bold text-yellow-300">
          🎱 {result}
        </div>
      )}

      <button
        onClick={handlePlay}
        disabled={spinning || lotus < betAmount}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg transition disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : `Spin (-${betAmount} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-yellow-300 text-center">
          {message}
        </div>
      )}
    </main>
  );
}
