'use client';

import { useState } from 'react';

const symbols = ['💠', '7️⃣', '🍒', '🔔', '⭐', '💎'];
const spinCost = 100;

export default function SlotsPage() {
  const [reels, setReels] = useState<string[]>(['❓', '❓', '❓']);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000); // Solde simulé local
  const [spinning, setSpinning] = useState(false);

  const handleSpin = async () => {
    if (spinning || lotus < spinCost) return;
    setSpinning(true);
    setMessage('');

    // Tirage visuel immédiat
    const newReels: string[] = [];
    for (let i = 0; i < 3; i++) {
      newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }
    setReels([...newReels]);

    // Déduction du solde local simulé
    setLotus((prev) => prev - spinCost);

    // Détection du combo
    const [a, b, c] = newReels;
    let combo: string | null = null;

    if (a === b && b === c) {
      if (a === '💠') combo = 'triple-lotus';
      else if (a === '7️⃣') combo = 'triple-7';
      else combo = 'triple-other';
    }

    // Appel API réelle
    try {
      const res = await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123', // à remplacer plus tard par auth
          game: 'slots',
          betAmount: spinCost,
          combo: combo,
        }),
      });

      const data = await res.json();
      console.log('🎯 API response:', data);

      // Traitement du gain
      setTimeout(() => {
        if (combo === 'triple-lotus' || combo === 'triple-7') {
          setMessage(`🎉 JACKPOT! Triple ${a}`);
          setLotus((prev) => prev + 10000);
        } else if (combo === 'triple-other') {
          setMessage(`✨ WIN! Triple ${a}`);
          setLotus((prev) => prev + 500);
        } else {
          setMessage('😢 You lost. Try again!');
        }

        setSpinning(false);
      }, 1200);
    } catch (err) {
      console.error('API error', err);
      setMessage('❌ Server error. Please try again.');
      setSpinning(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-start space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🎰 Velvet Slots</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus.toLocaleString()} Lotus</span>
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
