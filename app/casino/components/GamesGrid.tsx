'use client';

import Link from 'next/link';

const games = [
  {
    name: 'Slots',
    emoji: '🎰',
    description: 'Spin to win with the legendary 777 or triple lotus.',
    href: '/casino/slots',
  },
  {
    name: 'Roulette',
    emoji: '🎯',
    description: 'Place your bets and try your luck on the spinning wheel.',
    href: '/casino/roulette',
  },
  {
    name: 'Dice',
    emoji: '🎲',
    description: 'Roll the dice – double six or triple 7 unlocks the jackpot.',
    href: '/casino/dice',
  },
  {
    name: 'Poker',
    emoji: '🃏',
    description: 'Play your hand, bluff like a pro, aim for a royal flush.',
    href: '/casino/poker',
  },
  {
    name: 'Coinflip',
    emoji: '🪙',
    description: '10 heads or tails in a row? Jackpot can drop anytime.',
    href: '/casino/coinflip',
  },
];

export default function GamesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
      {games.map((game) => (
        <Link
          key={game.name}
          href={game.href}
          className="bg-zinc-800 hover:bg-zinc-700 transition-all border border-yellow-600 rounded-xl p-5 shadow-md flex flex-col items-start space-y-2"
        >
          <div className="text-3xl">{game.emoji}</div>
          <h3 className="text-lg font-semibold text-white">{game.name}</h3>
          <p className="text-sm text-gray-300">{game.description}</p>
        </Link>
      ))}
    </div>
  );
}
