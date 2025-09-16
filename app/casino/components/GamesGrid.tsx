'use client';

import Link from 'next/link';

const games = [
  {
    name: 'Slots',
    emoji: '🎰',
    href: '/casino/slots',
    bg: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
  },
  {
    name: 'Roulette',
    emoji: '🎯',
    href: '/casino/roulette',
    bg: 'bg-gradient-to-br from-red-500 to-red-700',
  },
  {
    name: 'Dice',
    emoji: '🎲',
    href: '/casino/dice',
    bg: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
  },
  {
    name: 'Poker',
    emoji: '🃏',
    href: '/casino/poker',
    bg: 'bg-gradient-to-br from-green-500 to-green-700',
  },
  {
    name: 'Coinflip',
    emoji: '🪙',
    href: '/casino/coinflip',
    bg: 'bg-gradient-to-br from-pink-500 to-pink-700',
  },
];

export default function GamesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8 px-2">
      {games.map((game) => (
        <Link
          key={game.name}
          href={game.href}
          className={`${game.bg} text-white no-underline rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition-all duration-200`}
        >
          <div className="text-[110px] leading-none">{game.emoji}</div>
          <div className="text-lg font-bold mt-4">{game.name}</div>
        </Link>
      ))}
    </div>
  );
      }
