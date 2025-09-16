'use client';

import { LotusIcon } from '@/components/icons/LotusIcon';

export default function CasinoIntro() {
  return (
    <div className="bg-black text-white rounded-2xl p-6 shadow-xl border border-yellow-500 space-y-4">
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <span className="text-yellow-400 text-2xl">✨</span>
        Velvet House Casino
      </h1>

      <p className="text-lg leading-relaxed">
        Welcome to the <strong>Velvet House Casino</strong> — an elegant and thrilling experience  
        where every play contributes to our shared <strong>Legendary Jackpot</strong>.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base pl-2">
        <li>💠 Play exclusively with <strong>Lotus</strong> – no real money involved.</li>
        <li>🎰 Enjoy 5 deluxe games: Slots, Roulette, Dice, Poker, and Coinflip.</li>
        <li>💎 Each play contributes to the <strong>Global Jackpot</strong> — up to 1,000,000 Lotus.</li>
        <li>🔥 Trigger the Jackpot through rare combinations (777, royal flush, etc.).</li>
        <li>🎉 Jackpots drop randomly, paying out between <strong>250,000</strong> and <strong>1,000,000 Lotus</strong>.</li>
        <li>♻️ The system automatically reinjects <strong>30%</strong> into the next pot to keep it growing.</li>
      </ul>

      <div className="bg-yellow-900/20 text-yellow-300 border border-yellow-500 p-4 rounded-xl text-sm">
        <p><strong>Distribution rules:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>30% of every loss goes to the Jackpot 💰</li>
          <li>30% to the Small-Wins Pool 🧧</li>
          <li>40% for Velvet House 🎩</li>
        </ul>
      </div>

      <p className="text-xs italic text-gray-400">
        Play responsibly. This casino is for entertainment purposes only. No refunds or monetary payout.
      </p>

      <div className="flex items-center gap-2 text-yellow-400 mt-4">
        <LotusIcon className="w-6 h-6" />
        <span className="text-lg font-semibold">Your Lotus, your game.</span>
      </div>
    </div>
  );
}
