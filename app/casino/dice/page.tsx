'use client';

import { useState } from 'react';
import JackpotCelebration from '../components/JackpotCelebration';

const betAmount = 100;

export default function DicePage() {
  const [dice, setDice] = useState<number[]>([1, 2, 3]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [rolling, setRolling] = useState(false);
  const [jackpotWin, setJackpotWin] = useState(false);

  const rollDice = async () => {
    if (rolling || lotus < betAmount) return;

    setRolling(true);
    setMessage('');
    setJackpotWin(false);
    setLotus((prev) => prev - betAmount);

    const rolled = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
    setDice(rolled);

    const counts: Record<number, number> = {};
    rolled.forEach((d) => counts[d] = (counts[d] || 0) + 1);

    const isTriple7 = rolled.every((d) => d === 7);
    const isDouble6 = counts[6] >= 2;
    const isPair = Object.values(counts).includes(2);

    const combo = isTriple7 ? 'triple-7' : isDouble6 ? 'double-6' : isPair ? 'pair' : null;

    const jackpot = betAmount * 0.3;
    const smallPool = betAmount * 0.3;
    const velvet = betAmount * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'dice',
          betAmount,
          jackpot,
          smallPool,
          velvet,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'triple-7') {
          setMessage('🎉 JACKPOT! Triple 7!');
          setLotus((prev) => prev + 10000);
          setJackpotWin(true);
        } else if (combo === 'double-6') {
          setMessage('🎉 JACKPOT! Double 6!');
          setLotus((prev) => prev + 7000);
          setJackpotWin(true);
        } else if (combo === 'pair') {
          setMessage('✨ Win! You rolled a pair.');
          setLotus((prev) => prev + 300);
        } else {
          setMessage('😢 You lost. Try again!');
        }
        setRolling(false);
      }, 1000);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error.');
      setRolling(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-6 relative">
      {jackpotWin && <JackpotCelebration />}

      <h1 className="text-3xl font-bold text-yellow-400">🎲 Velvet Dice</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-4 text-4xl font-mono">
        {dice.map((d, i) => (
          <div
            key={i}
            className="w-16 h-16 bg-zinc-800 text-yellow-300 flex items-center justify-center rounded-lg border border-yellow-600"
          >
            {d}
          </div>
        ))}
      </div>

      <button
        onClick={rollDice}
        disabled={rolling || lotus < betAmount}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg transition disabled:opacity-50"
      >
        {rolling ? 'Rolling...' : `Roll Dice (-${betAmount} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-yellow-300 text-center">{message}</div>
      )}
    </main>
  );
}
