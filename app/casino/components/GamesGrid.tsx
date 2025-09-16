'use client';

import Link from 'next/link';

const games = [
  {
    name: 'Slots',
    emoji: '🎰',
    href: '/casino/slots',
    color: 'bg-yellow-600',
  },
  {
    name: 'Roulette',
    emoji: '🎯',
    href: '/casino/roulette',
    color: 'bg-red-600',
  },
  {
    name: 'Dice',
    emoji: '🎲',
    href: '/casino/dice',
    color: 'bg-indigo-600',
  },
  {
    name: 'Poker',
    emoji: '🃏',
    href: '/casino/poker',
    color: 'bg-green-600',
  },
  {
    name: 'Coinflip',
    emoji: '🪙',
    href: '/casino/coinflip',
    color: 'bg-pink-600',
  },
];

export default function GamesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
      {games.map((game) => (
        <Link
          key={game.name}
          href={game.href}
          className={`rounded-2xl shadow-xl text-white p-6 flex flex-col items-center justify-center space-y-2 ${game.color} hover:brightness-110 transition-all no-underline`}
        >
          <div className="text-5xl">{game.emoji}</div>
          <div className="text-lg font-semibold">{game.name}</div>
        </Link>
      ))}
    </div>
  );
}
