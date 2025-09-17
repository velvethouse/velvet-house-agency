'use client';

import { useState } from 'react';
import JackpotCelebration from '../components/JackpotCelebration';

const symbols = ['💠', '7️⃣', '🍒', '🔔', '⭐', '💎'];
const spinCost = 100;

export default function SlotsPage() {
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [spinning, setSpinning] = useState(false);
  const [jackpotWin, setJackpotWin] = useState(false);

  const handleSpin = async () => {
    if (spinning || lotus < spinCost) return;
    setSpinning(true);
    setMessage('');
    setJackpotWin(false);
    setLotus((prev) => prev - spinCost);

    const newReels: string[] = [];
    for (let i = 0; i < 3; i++) {
      newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }
    setReels([...newReels]);

    const [a, b, c] = newReels;
    let combo: string | null = null;

    if (a === b && b === c) {
      combo = a === '7️⃣' ? 'triple-7' : a === '💠' ? 'triple-lotus' : 'triple-other';
    }

    const jackpotShare = spinCost * 0.3;
    const smallWinsShare = spinCost * 0.3;
    const velvetShare = spinCost * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'slots',
          betAmount: spinCost,
          jackpot: jackpotShare,
          smallPool: smallWinsShare,
          velvet: velvetShare,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'triple-7' || combo === 'triple-lotus') {
          setMessage(`🎉 JACKPOT! Triple ${a}`);
          setLotus((prev) => prev + 10000);
          setJackpotWin(true);
        } else if (combo === 'triple-other') {
          setMessage(`✨ WIN! Triple ${a}`);
          setLotus((prev) => prev + 500);
        } else {
          setMessage('😢 You lost. Try again!');
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
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-8 relative">
      {jackpotWin && <JackpotCelebration />}

      <h1 className="text-3xl font-bold text-yellow-400">🎰 Velvet Slots</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-6 text-6xl font-mono">
        {reels.map((symbol, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-zinc-800 rounded-xl flex items-center justify-center shadow-inner border border-yellow-600"
          >
            {symbol}
          </div>
        ))}
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning || lotus < spinCost}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : `Spin (-${spinCost} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
}
