'use client';

import { useState } from 'react';

const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['10', 'J', 'Q', 'K', 'A'];
const allCards = suits.flatMap((suit) => ranks.map((rank) => `${rank}${suit}`));
const drawCost = 100;

export default function PokerPage() {
  const [hand, setHand] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [lotus, setLotus] = useState(1000);
  const [hasRedrawn, setHasRedrawn] = useState(false);
  const [drawing, setDrawing] = useState(false);

  const drawHand = () => {
    const deck = [...allCards];
    const newHand: string[] = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * deck.length);
      newHand.push(deck.splice(index, 1)[0]);
    }
    return newHand;
  };

  const detectCombo = (cards: string[]) => {
    const suits = cards.map((c) => c.slice(-1));
    const ranks = cards.map((c) => c.slice(0, -1));
    const allSameSuit = suits.every((s) => s === suits[0]);
    const hasRoyalFlush = allSameSuit && ['10', 'J', 'Q', 'K', 'A'].every((r) => ranks.includes(r));
    const pairs = ranks.reduce((acc: Record<string, number>, rank) => {
      acc[rank] = (acc[rank] || 0) + 1;
      return acc;
    }, {});
    const pairCount = Object.values(pairs).filter((n) => n === 2).length;
    const threeOfAKind = Object.values(pairs).includes(3);
    const fullHouse = Object.values(pairs).includes(2) && Object.values(pairs).includes(3);

    if (hasRoyalFlush) return 'royal-flush';
    if (fullHouse) return 'full-house';
    if (threeOfAKind) return 'three-of-a-kind';
    if (pairCount >= 1) return 'pair';
    return null;
  };

  const play = async () => {
    if (drawing || lotus < drawCost) return;
    setDrawing(true);
    setMessage('');
    setLotus((prev) => prev - drawCost);

    const newHand = drawHand();
    setHand(newHand);

    const combo = detectCombo(newHand);

    // Appel API
    try {
      const res = await fetch('/api/casino/play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'demoUser123',
          game: 'poker',
          betAmount: drawCost,
          combo,
        }),
      });

      const data = await res.json();
      console.log('🃏 API response:', data);

      setTimeout(() => {
        if (combo === 'royal-flush') {
          setMessage('🎉 JACKPOT! Royal Flush!');
          setLotus((prev) => prev + 10000);
        } else if (combo === 'full-house') {
          setMessage('✨ Win! Full House!');
          setLotus((prev) => prev + 700);
        } else if (combo === 'three-of-a-kind') {
          setMessage('✨ Win! Three of a Kind!');
          setLotus((prev) => prev + 500);
        } else if (combo === 'pair') {
          setMessage('✨ You got a pair!');
          setLotus((prev) => prev + 300);
        } else {
          setMessage('😢 No combo. Try again!');
        }

        setHasRedrawn(false);
        setDrawing(false);
      }, 1000);
    } catch (err) {
      console.error('API error', err);
      setMessage('❌ Server error. Try again.');
      setDrawing(false);
    }
  };

  const redraw = () => {
    if (hasRedrawn) return;
    setHand(drawHand());
    setHasRedrawn(true);
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400">🃏 Velvet Poker</h1>

      <p className="text-sm text-gray-400">
        Balance: <span className="text-yellow-300 font-semibold">{lotus.toLocaleString()} Lotus</span>
      </p>

      <div className="flex space-x-4 text-2xl font-mono">
        {hand.map((card, index) => (
          <div
            key={index}
            className="w-16 h-24 bg-zinc-800 border border-yellow-600 rounded-lg flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={play}
          disabled={drawing || lotus < drawCost}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full shadow-lg disabled:opacity-50"
        >
          {drawing ? 'Dealing...' : `Draw (-${drawCost} Lotus)`}
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
        <div className="text-lg font-semibold text-center text-yellow-300">{message}</div>
      )}
    </main>
  );
      }
