'use client';

export default function CasinoExplanation() {
  return (
    <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-lg space-y-5 border border-yellow-600">
      <h2 className="text-2xl font-bold text-yellow-400">🎲 Casino Rules & Jackpot</h2>

      <p className="text-base leading-relaxed">
        All Velvet House casino games are played exclusively with <strong>Lotus</strong>. 
        There is no real money involved, and all bets are for entertainment purposes only.
      </p>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-300">🕹️ Available Games:</h3>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>🎰 Slots</li>
          <li>🎯 Roulette</li>
          <li>🎲 Dice</li>
          <li>🃏 Poker</li>
          <li>🪙 Coinflip</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-300">💸 Loss Distribution:</h3>
        <p>When a player loses a round, their bet is redistributed as follows:</p>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>30% → Global Jackpot 💰</li>
          <li>30% → Small-Wins Pool 🧧</li>
          <li>40% → Velvet House 🎩</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-300">💰 The Jackpot:</h3>
        <p>
          A single progressive jackpot is shared across all games.
          It can randomly drop between <strong>250,000</strong> and <strong>1,000,000 Lotus</strong>,
          triggered only by rare combos:
        </p>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Slots → 🎰 Triple Lotus or 777</li>
          <li>Roulette → 🎯 Number 777 or triple color</li>
          <li>Dice → 🎲 Double 6 or 3x 7</li>
          <li>Poker → ♠️ Royal Flush</li>
          <li>Coinflip → 🔁 10 identical results in a row</li>
        </ul>
        <p>
          When the Jackpot is won, between <strong>30% and 70%</strong> of the total pot is paid out.  
          The rest is automatically reinjected into the next cycle.
        </p>
        <p className="italic text-sm text-gray-400">
          A public banner displays the jackpot when it drops:  
          <span className="text-yellow-400 font-semibold">“🎉 Jackpot dropped today: 354,000 ♢”</span>
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-yellow-300">⚠️ Important Notes:</h3>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>All outcomes are programmatically controlled and statistically balanced.</li>
          <li>No prediction tools or hacks can influence the system.</li>
          <li>Players are responsible for their own bets and choices.</li>
          <li>Velvet House does not offer refunds for lost Lotus.</li>
        </ul>
      </div>

      <p className="text-sm italic text-gray-400 text-center">
        🎮 Play for fun. Respect the odds. Enjoy the thrill.
      </p>
    </div>
  );
          }
