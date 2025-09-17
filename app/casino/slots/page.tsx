'use client';

import { useState } from 'react';

const symbols = ['💠', '7️⃣', '🍒', '🔔', '⭐', '💎'];
const spinCost = 100;

export default function SlotsPage() {
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = async () => {
    if (spinning || lotus < spinCost) return;

    setSpinning(true);
    setMessage('');
    setLotus(prev => prev - spinCost);

    const newReels: string[] = [];
    for (let i = 0; i < 3; i++) {
      newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }
    setReels(newReels);

    const [a, b, c] = newReels;
    let combo: string | null = null;

    if (a === b && b === c) {
      if (a === '7️⃣') combo = 'triple-7';
      else if (a === '💠') combo = 'triple-lotus';
      else combo = 'triple-other';
    }

    const jackpot = spinCost * 0.3;
    const smallPool = spinCost * 0.3;
    const velvet = spinCost * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'slots',
          betAmount: spinCost,
          jackpot,
          smallPool,
          velvet,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'triple-7' || combo === 'triple-lotus') {
          setMessage(`🎉 JACKPOT! Triple ${a}`);
          setLotus(prev => prev + 10000);
        } else if (combo === 'triple-other') {
          setMessage(`✨ WIN! Triple ${a}`);
          setLotus(prev => prev + 500);
        } else {
          setMessage('😢 You lost. Try again!');
        }
        setSpinning(false);
      }, 1000);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error. Try again later.');
      setSpinning(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">🎰 Velvet Slots</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-4 text-5xl font-mono">
        {reels.map((symbol, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-zinc-900 rounded-xl flex items-center justify-center shadow-inner border border-yellow-600"
          >
            {symbol}
          </div>
        ))}
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning || lotus < spinCost}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg transition disabled:opacity-40"
      >
        {spinning ? 'Spinning...' : `Spin (-${spinCost} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-yellow-300 text-center">{message}</div>
      )}
    </main>
  );
}
