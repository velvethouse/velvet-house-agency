'use client';

import { useState } from 'react';

const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['10', 'J', 'Q', 'K', 'A'];
const deck = suits.flatMap((suit) => ranks.map((rank) => `${rank}${suit}`));
const betAmount = 100;

export default function PokerPage() {
  const [hand, setHand] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [hasRedrawn, setHasRedrawn] = useState(false);
  const [drawing, setDrawing] = useState(false);

  const drawCards = () => {
    const newDeck = [...deck];
    const newHand: string[] = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * newDeck.length);
      newHand.push(newDeck.splice(index, 1)[0]);
    }
    return newHand;
  };

  const detectCombo = (cards: string[]) => {
    const suits = cards.map((c) => c.slice(-1));
    const ranks = cards.map((c) => c.slice(0, -1));
    const allSameSuit = suits.every((s) => s === suits[0]);
    const hasRoyal = ['10', 'J', 'Q', 'K', 'A'].every((r) => ranks.includes(r));
    const counts = ranks.reduce<Record<string, number>>((acc, r) => {
      acc[r] = (acc[r] || 0) + 1;
      return acc;
    }, {});
    const countValues = Object.values(counts);
    const hasThree = countValues.includes(3);
    const hasPair = countValues.filter((v) => v === 2).length >= 1;

    if (allSameSuit && hasRoyal) return 'royal-flush';
    if (hasThree && hasPair) return 'full-house';
    if (hasThree) return 'three-of-a-kind';
    if (hasPair) return 'pair';
    return null;
  };

  const play = async () => {
    if (drawing || lotus < betAmount) return;
    setDrawing(true);
    setMessage('');
    setLotus((prev) => prev - betAmount);

    const newHand = drawCards();
    setHand(newHand);
    setHasRedrawn(false);

    const combo = detectCombo(newHand);
    const jackpotShare = betAmount * 0.3;
    const smallWinsShare = betAmount * 0.3;
    const velvetShare = betAmount * 0.4;

    try {
      await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'poker',
          betAmount,
          jackpot: jackpotShare,
          smallPool: smallWinsShare,
          velvet: velvetShare,
          combo,
        }),
      });

      setTimeout(() => {
        if (combo === 'royal-flush') {
          setMessage('🎉 JACKPOT! Royal Flush!');
          setLotus((prev) => prev + 15000);
        } else if (combo === 'full-house') {
          setMessage('✨ Full House!');
          setLotus((prev) => prev + 700);
        } else if (combo === 'three-of-a-kind') {
          setMessage('✨ Three of a Kind!');
          setLotus((prev) => prev + 500);
        } else if (combo === 'pair') {
          setMessage('✨ You got a pair!');
          setLotus((prev) => prev + 300);
        } else {
          setMessage('😢 No combo. Try again!');
        }

        setDrawing(false);
      }, 1000);
    } catch (err) {
      console.error('API error:', err);
      setMessage('❌ Server error.');
      setDrawing(false);
    }
  };

  const redraw = () => {
    if (hasRedrawn || hand.length === 0) return;
    setHand(drawCards());
    setHasRedrawn(true);
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">🃏 Velvet Poker</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus} Lotus</span>
      </p>

      <div className="flex space-x-2 text-xl font-mono flex-wrap justify-center max-w-md">
        {hand.map((card, index) => (
          <div
            key={index}
            className="w-16 h-24 bg-zinc-800 border border-yellow-600 rounded-lg flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={play}
          disabled={drawing || lotus < betAmount}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
        >
          {drawing ? 'Dealing...' : `Draw (-${betAmount} Lotus)`}
        </button>

        <button
          onClick={redraw}
          disabled={hasRedrawn || hand.length === 0}
          className="bg-zinc-600 hover:bg-zinc-500 text-white font-bold py-2 px-6 rounded-full shadow-md disabled:opacity-30"
        >
          Redraw
        </button>
      </div>

      {message && (
        <div className="text-lg font-semibold text-center text-yellow-300">
          {message}
        </div>
      )}
    </main>
  );
}
