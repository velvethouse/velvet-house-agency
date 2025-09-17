'use client';

import Image from 'next/image';
import Link from 'next/link';
import RulesBookButton from './components/RulesBookButton';

const games = [
  {
    name: 'Slots',
    href: '/casino/slots',
    img: '/casino/slots.png', // fichier à mettre dans public/casino/
  },
  {
    name: 'Roulette',
    href: '/casino/roulette',
    img: '/casino/roulette.png',
  },
  {
    name: 'Dice',
    href: '/casino/dice',
    img: '/casino/dice.png',
  },
  {
    name: 'Poker',
    href: '/casino/poker',
    img: '/casino/poker.png',
  },
  {
    name: 'Coinflip',
    href: '/casino/coinflip',
    img: '/casino/coinflip.png',
  },
];

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 relative pb-24">
      <h1 className="text-3xl font-bold gold-gradient-text text-center mb-8">🎰 Velvet Casino</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-5">
        {games.map((game) => (
          <Link
            key={game.name}
            href={game.href}
            className="rounded-xl overflow-hidden shadow-lg group relative"
          >
            <div className="relative aspect-[4/5] w-full bg-zinc-900">
              <Image
                src={game.img}
                alt={game.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2 text-lg font-bold text-yellow-300">
              {game.name}
            </div>
          </Link>
        ))}
      </div>

      <RulesBookButton />
    </main>
  );
}
