'use client';

import { useState } from 'react';

const diceFaces = [1, 2, 3, 4, 5, 6, 7]; // On autorise le "7" pour le jackpot
const rollCost = 100;

export default function DicePage() {
  const [dice, setDice] = useState<number[]>([0, 0, 0]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000); // Solde simulé
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling || lotus < rollCost) return;
    setRolling(true);
    setMessage('');
    setLotus((prev) => prev - rollCost);

    // Répartition Lotus
    const jackpotPart = rollCost * 0.3;
    const smallWinsPart = rollCost * 0.3;
    const velvetPart = rollCost * 0.4;

    console.log('🎲 Real redistribution:');
    console.log(`- Jackpot +${jackpotPart} Lotus`);
    console.log(`- Small Wins +${smallWinsPart} Lotus`);
    console.log(`- Velvet House +${velvetPart} Lotus`);

    const results: number[] = [];
    for (let i = 0; i < 3; i++) {
      results.push(diceFaces[Math.floor(Math.random() * diceFaces.length)]);
    }
    setDice(results);

    setTimeout(() => {
      const [a, b, c] = results;
      const isTriple7 = a === 7 && b === 7 && c === 7;
      const isDouble6 = [a, b, c].filter((n) => n === 6).length >= 2;
      const isPair = a === b || b === c || a === c;

      if (isTriple7) {
        setMessage('🎉 JACKPOT! Triple 7 rolled!');
        setLotus((prev) => prev + 10000);
      } else if (isDouble6) {
        setMessage('🎉 JACKPOT! Double 6!');
        setLotus((prev) => prev + 7000);
      } else if (isPair) {
        setMessage('✨ You win! A matching pair!');
        setLotus((prev) => prev + 500);
      } else {
        setMessage('😢 No win. Try again!');
      }

      setRolling(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🎲 Velvet Dice</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus.toLocaleString()} Lotus</span>
      </p>

      <div className="flex space-x-6 text-6xl font-bold font-mono">
        {dice.map((face, idx) => (
          <div
            key={idx}
            className="w-20 h-20 bg-zinc-800 rounded-xl flex items-center justify-center border border-yellow-600"
          >
            {face > 0 ? face : '🎲'}
          </div>
        ))}
      </div>

      <button
        onClick={rollDice}
        disabled={rolling || lotus < rollCost}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {rolling ? 'Rolling...' : `Roll Dice (-${rollCost} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">{message}</div>
      )}
    </main>
  );
    }
