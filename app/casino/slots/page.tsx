'use client';

import { useState } from 'react';

const symbols = ['💠', '7️⃣', '🍒', '🔔', '⭐', '💎'];

export default function SlotsPage() {
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [message, setMessage] = useState('');
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setMessage('');

    const newReels: string[] = [];

    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
      }
      setReels([...newReels]);
    }, 80);

    setTimeout(() => {
      clearInterval(interval);

      for (let i = 0; i < 3; i++) {
        newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
      }
      setReels([...newReels]);

      // Check win
      if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
        if (newReels[0] === '💠' || newReels[0] === '7️⃣') {
          setMessage('🎉 JACKPOT! Triple ' + newReels[0]);
        } else {
          setMessage('✨ You win! Triple ' + newReels[0]);
        }
      } else {
        setMessage('😢 No win. Try again!');
      }

      setSpinning(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-start space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🎰 Velvet Slots</h1>

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
        onClick={spin}
        disabled={spinning}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {spinning ? 'Spinning...' : 'Spin'}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
        }
