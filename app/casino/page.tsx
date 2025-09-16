import JackpotDisplay from './components/JackpotDisplay';
import GamesGrid from './components/GamesGrid';
import JackpotTicker from './components/JackpotTicker';
import RulesBookButton from './components/RulesBookButton';

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6 relative">
        <JackpotDisplay />
        <JackpotTicker />
        <GamesGrid />
        <RulesBookButton />
      </div>
    </main>
  );
}
