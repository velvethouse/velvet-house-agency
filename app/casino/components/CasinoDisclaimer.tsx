'use client';

export default function CasinoDisclaimer() {
  return (
    <div className="bg-black/80 text-white text-sm mt-8 p-4 rounded-xl border border-red-700 space-y-3 shadow-inner">
      <h3 className="text-red-400 font-semibold text-lg">⚠️ Disclaimer – Casino Usage Notice</h3>

      <p>
        The Velvet House Casino is a virtual entertainment space where all games are played exclusively with <strong>Lotus</strong>,  
        the in-platform currency used across the entire Velvet House ecosystem.
      </p>

      <p>
        By accessing the casino, you agree that:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Games are based on pre-programmed rules and probabilities.</li>
          <li>Winnings are in Lotus only and cannot be exchanged for real money.</li>
          <li>Lotus earned or lost in the casino remain usable on the platform (e.g. live gifts, private unlocks).</li>
          <li>Velvet House does not offer refunds for lost Lotus.</li>
          <li>Playing is entirely optional and for entertainment purposes only.</li>
        </ul>
      </p>

      <p className="text-xs italic text-gray-300">
        By continuing, you accept these conditions.  
        Velvet House reserves the right to suspend users attempting to cheat or abuse the system.
      </p>
    </div>
  );
            }
