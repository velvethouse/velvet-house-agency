'use client';

export default function JackpotTicker() {
  return (
    <div className="overflow-hidden bg-yellow-900/20 border border-yellow-500 rounded-lg p-2 mt-4">
      <div className="animate-marquee whitespace-nowrap text-sm text-yellow-300 font-medium">
        🎉 Jackpot dropped: 548,000 ♢ — 🎉 Jackpot dropped: 398,000 ♢ — 🎉 Jackpot dropped: 764,000 ♢ — Stay lucky 🍀 — 🎰 Keep spinning for your chance to win!
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
