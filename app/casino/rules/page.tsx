'use client';

export default function CasinoRulesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400 text-center">📖 Casino Rules</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-yellow-300">🎮 Games Available</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🎰 Slots</li>
          <li>🎯 Roulette</li>
          <li>🎲 Dice</li>
          <li>🃏 Poker</li>
          <li>🪙 Coinflip</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-yellow-300">💸 Bet Distribution</h2>
        <p>Each bet placed is distributed as follows:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>30% → Global Jackpot 💰</li>
          <li>30% → Small-Wins Pool 🧧</li>
          <li>40% → Velvet House 🎩</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-yellow-300">🎉 Jackpot Triggers</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🎰 Slots → Triple 7 or Triple Lotus</li>
          <li>🎯 Roulette → Number 7 or 0</li>
          <li>🎲 Dice → Double 6 or Triple 7</li>
          <li>🃏 Poker → Royal Flush</li>
          <li>🪙 Coinflip → 10 identical flips in a row</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-yellow-300">⚠️ Important Notes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All games are for entertainment only.</li>
          <li>No real money is involved. Lotus cannot be exchanged for real currency.</li>
          <li>Jackpots and rewards are distributed in Lotus only.</li>
          <li>Velvet House does not offer refunds.</li>
          <li>By playing, you accept all the rules above.</li>
        </ul>
      </section>
    </main>
  );
}
