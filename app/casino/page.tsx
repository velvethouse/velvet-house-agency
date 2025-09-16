'use client';

import JackpotDisplay from './components/JackpotDisplay';
import JackpotTicker from './components/JackpotTicker';
import GamesGrid from './components/GamesGrid';
import RulesBookButton from './components/RulesBookButton';

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        <JackpotDisplay />
        <JackpotTicker />
        <GamesGrid />
      </div>

      <RulesBookButton />
    </main>
  );
}
