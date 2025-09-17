'use client';

import Image from 'next/image';
import Link from 'next/link';
import RulesBookButton from './components/RulesBookButton';

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

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 relative">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎰 Velvet Casino</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link
            key={game.name}
            href={game.href}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all shadow-lg"
          >
            <div className="w-20 h-20 mb-3">
              <Image
                src={game.icon}
                alt={game.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-yellow-300">{game.name}</span>
          </Link>
        ))}
      </div>

      <RulesBookButton />
    </main>
  );
}
