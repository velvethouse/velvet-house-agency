import CasinoIntro from './components/CasinoIntro';
import JackpotDisplay from './components/JackpotDisplay';
import CasinoExplanation from './components/CasinoExplanation';
import GamesGrid from './components/GamesGrid';
import CasinoDisclaimer from './components/CasinoDisclaimer';

export default function CasinoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 space-y-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <CasinoIntro />
        <JackpotDisplay />
        <CasinoExplanation />
        <GamesGrid />
        <CasinoDisclaimer />
      </div>
    </main>
  );
}
