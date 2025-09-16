'use client';

import { useState } from 'react';

const symbols = ['💠', '7️⃣', '🍒', '🔔', '⭐', '💎'];
const spinCost = 100; // 100 Lotus par spin

export default function SlotsPage() {
  const [reels, setReels] = useState(['❓', '❓', '❓']);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000); // solde actuel simulé
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning || lotus < spinCost) return;
    setSpinning(true);
    setMessage('');

    // Déduire le coût du spin
    const newLotus = lotus - spinCost;
    setLotus(newLotus);

    // Répartition réelle (simulée ici en console)
    const jackpotPart = spinCost * 0.3;
    const smallPoolPart = spinCost * 0.3;
    const velvetPart = spinCost * 0.4;

    console.log('🔁 Real redistribution:');
    console.log(`- Jackpot +${jackpotPart} Lotus`);
    console.log(`- Small Pool +${smallPoolPart} Lotus`);
    console.log(`- Velvet House +${velvetPart} Lotus`);

    const newReels = [];
    for (let i = 0; i < 3; i++) {
      newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }
    setReels([...newReels]);

    setTimeout(() => {
      const [a, b, c] = newReels;

      if (a === b && b === c) {
        if (a === '💠' || a === '7️⃣') {
          setMessage(`🎉 JACKPOT! Triple ${a}`);
          setLotus((prev) => prev + 10000); // Simule un gros gain
        } else {
          setMessage(`✨ WIN! Triple ${a}`);
          setLotus((prev) => prev + 500); // Simule un petit gain
        }
      } else {
        setMessage('😢 You lost. Try again!');
      }

      setSpinning(false);
    }, 1500);
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
