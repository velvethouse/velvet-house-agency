'use client';

import Link from 'next/link';
import Image from 'next/image';

const games = [
  {
    name: 'Slots',
    href: '/casino/slots',
    icon: '/casino/icons/slots.svg',
  },
  {
    name: 'Roulette',
    href: '/casino/roulette',
    icon: '/casino/icons/roulette.svg',
  },
  {
    name: 'Dice',
    href: '/casino/dice',
    icon: '/casino/icons/dice.svg',
  },
  {
    name: 'Poker',
    href: '/casino/poker',
    icon: '/casino/icons/poker.svg',
  },
  {
    name: 'Coinflip',
    href: '/casino/coinflip',
    icon: '/casino/icons/coinflip.svg',
  },
];

export default function GamesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 px-4">
      {games.map((game) => (
        <Link
          key={game.name}
          href={game.href}
          className="bg-zinc-900 rounded-2xl shadow-xl hover:scale-105 transition-all duration-200 p-4 flex flex-col items-center justify-center"
        >
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
            <Image
              src={game.icon}
              alt={game.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="text-lg font-bold text-white">{game.name}</div>
        </Link>
      ))}
    </div>
  );
}
