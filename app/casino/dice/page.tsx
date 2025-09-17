'use client';

import { useState } from 'react';

const betAmount = 100;

export default function DicePage() {
  const [dice, setDice] = useState<number[]>([0, 0, 0]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [rolling, setRolling] = useState(false);

  const rollDice = async () => {
    if (rolling || lotus < betAmount) return;
    setRolling(true);
    setMessage('');
    setLotus((prev) => prev - betAmount);

    const results: number[] = [];
    for (let i = 0; i < 3; i++) {
      results.push(Math.floor(Math.random() * 7)); // 0 to 6 (0 = null, 1-6 = valid)
    }
    const filtered = results.map((r) => (r === 0 ? 1 + Math.floor(Math.random() * 6) : r));
    setDice(filtered);

    const [a, b, c] = filtered;
    const isTriple7 = a === 7 && b === 7 && c === 7;
    const isDouble6 = [a, b, c].filter((v) => v === 6).length >= 2;
    const isPair = a === b || b === c || a === c;

    const combo =
      isTriple7 ? 'triple-7' : isDouble6 ? 'double-6' : isPair ? 'pair' : null;

    const jackpotShare = betAmount * 0.3;
    const smallWinsShare = betAmount * 0.3;
    const velvetShare = betAmount * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'dice',
          betAmount,
          jackpot: jackpotShare,
          smallPool: smallWinsShare,
          velvet: velvetShare,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'triple-7') {
          setMessage('🎉 JACKPOT! Triple 7!');
          setLotus((prev) => prev + 10000);
        } else if (combo === 'double-6') {
          setMessage('🎉 JACKPOT! Double 6!');
          setLotus((prev) => prev + 7000);
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
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🎲 Velvet Dice</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-4 text-5xl font-mono">
        {dice.map((face, i) => (
          <div
            key={i}
            className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border border-yellow-600"
          >
            {face > 0 ? face : '🎲'}
          </div>
        ))}
      </div>

      <button
        onClick={rollDice}
        disabled={rolling || lotus < betAmount}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {rolling ? 'Rolling...' : `Roll Dice (-${betAmount} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
}
