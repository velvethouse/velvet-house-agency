'use client';

import Link from 'next/link';

const games = [
  {
    name: 'Slots',
    emoji: '🎰',
    color: 'bg-yellow-600',
    href: '/casino/slots',
  },
  {
    name: 'Roulette',
    emoji: '🎯',
    color: 'bg-red-600',
    href: '/casino/roulette',
  },
  {
    name: 'Dice',
    emoji: '🎲',
    color: 'bg-indigo-600',
    href: '/casino/dice',
  },
  {
    name: 'Poker',
    emoji: '🃏',
    color: 'bg-green-600',
    href: '/casino/poker',
  },
  {
    name: 'Coinflip',
    emoji: '🪙',
    color: 'bg-pink-600',
    href: '/casino/coinflip',
  },
];

export default function GamesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {games.map((game) => (
        <Link
          key={game.name}
          href={game.href}
          className={`${game.color} hover:brightness-110 transition-all rounded-xl p-5 flex flex-col items-center justify-center text-white text-center shadow-md`}
        >
          <div className="text-4xl mb-2">{game.emoji}</div>
          <div className="text-lg font-bold">{game.name}</div>
        </Link>
      ))}
    </div>
  );
  }
