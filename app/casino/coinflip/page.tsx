'use client';

import { useState } from 'react';

const flipCost = 100;

export default function CoinflipPage() {
  const [history, setHistory] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    if (flipping || lotus < flipCost) return;
    setFlipping(true);
    setMessage('');
    setLotus((prev) => prev - flipCost);

    // Répartition Lotus
    const jackpotPart = flipCost * 0.3;
    const smallWinsPart = flipCost * 0.3;
    const velvetPart = flipCost * 0.4;

    console.log('🪙 Real redistribution:');
    console.log(`- Jackpot +${jackpotPart} Lotus`);
    console.log(`- Small Wins +${smallWinsPart} Lotus`);
    console.log(`- Velvet House +${velvetPart} Lotus`);

    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const updatedHistory = [...history, result].slice(-10);
    setHistory(updatedHistory);

    setTimeout(() => {
      const allSame = updatedHistory.length === 10 && updatedHistory.every((r) => r === updatedHistory[0]);

      if (allSame) {
        setMessage(`🎉 JACKPOT! 10 consecutive ${updatedHistory[0]}!`);
        setLotus((prev) => prev + 15000);
      } else if (updatedHistory.length >= 2 && updatedHistory.at(-1) === updatedHistory.at(-2)) {
        setMessage(`✨ Win! 2 consecutive ${result}`);
        setLotus((prev) => prev + 300);
      } else {
        setMessage(`🪙 ${result}! Try again.`);
      }

      setFlipping(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">🪙 Coinflip</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus.toLocaleString()} Lotus</span>
      </p>

      <div className="flex space-x-2 text-xl font-mono flex-wrap justify-center max-w-md">
        {history.map((flip, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-yellow-600 rounded-full px-3 py-1 text-yellow-200"
          >
            {flip}
          </div>
        ))}
      </div>

      <button
        onClick={flipCoin}
        disabled={flipping || lotus < flipCost}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
      >
        {flipping ? 'Flipping...' : `Flip Coin (-${flipCost} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
    }
