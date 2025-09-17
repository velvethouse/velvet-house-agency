'use client';

import { useState } from 'react';
import JackpotCelebration from '../components/JackpotCelebration';

const flipCost = 100;

export default function CoinflipPage() {
  const [history, setHistory] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [flipping, setFlipping] = useState(false);
  const [jackpotWin, setJackpotWin] = useState(false);

  const flipCoin = async () => {
    if (flipping || lotus < flipCost) return;
    setFlipping(true);
    setMessage('');
    setJackpotWin(false);
    setLotus((prev) => prev - flipCost);

    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const updatedHistory = [...history, result].slice(-10);
    setHistory(updatedHistory);

    const allSame =
      updatedHistory.length === 10 &&
      updatedHistory.every((r) => r === updatedHistory[0]);

    const double =
      updatedHistory.length >= 2 &&
      updatedHistory.at(-1) === updatedHistory.at(-2);

    const combo = allSame
      ? `jackpot-10-${result.toLowerCase()}`
      : double
      ? `double-${result.toLowerCase()}`
      : null;

    const jackpot = flipCost * 0.3;
    const smallPool = flipCost * 0.3;
    const velvet = flipCost * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'coinflip',
          betAmount: flipCost,
          jackpot,
          smallPool,
          velvet,
          combo,
        }),
      });

      setTimeout(() => {
        if (allSame) {
          setMessage(`🎉 JACKPOT! 10x ${result}`);
          setLotus((prev) => prev + 12000);
          setJackpotWin(true);
        } else if (double) {
          setMessage(`✨ Win! 2 consecutive ${result}`);
          setLotus((prev) => prev + 300);
        } else {
          setMessage(`🪙 ${result}. Try again.`);
        }
        setFlipping(false);
      }, 800);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error. Try again.');
      setFlipping(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-6 relative">
      {jackpotWin && <JackpotCelebration />}

      <h1 className="text-3xl font-bold text-yellow-400">🪙 Velvet Coinflip</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-2 text-lg font-mono flex-wrap justify-center max-w-md">
        {history.map((flip, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-yellow-600 rounded-full px-4 py-2 text-yellow-200"
          >
            {flip}
          </div>
        ))}
      </div>

      <button
        onClick={flipCoin}
        disabled={flipping || lotus < flipCost}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg transition disabled:opacity-50"
      >
        {flipping ? 'Flipping...' : `Flip (-${flipCost} Lotus)`}
      </button>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
}
