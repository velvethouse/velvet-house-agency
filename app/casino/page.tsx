import JackpotDisplay from './components/JackpotDisplay';
import JackpotTicker from './components/JackpotTicker';
import RulesBookButton from './components/RulesBookButton';
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

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        <JackpotDisplay />
        <JackpotTicker />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {games.map((game) => (
            <Link
              key={game.name}
              href={game.href}
              className={`${game.bg} rounded-2xl shadow-lg text-white p-6 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-all`}
            >
              <div className="text-5xl">{game.emoji}</div>
              <div className="text-lg font-bold">{game.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* 📖 Bouton livre en bas à droite */}
      <RulesBookButton />
    </main>
  );
}
