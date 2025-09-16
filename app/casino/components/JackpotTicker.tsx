'use client';

export default function JackpotTicker() {
  return (
    <div className="overflow-hidden bg-yellow-900/20 border border-yellow-500 rounded-lg p-2 mt-4">
      <div className="animate-marquee whitespace-nowrap text-sm text-yellow-300 font-medium">
        🎉 Jackpot dropped: 548,000 ♢ — 🎉 398,000 ♢ — 🎉 764,000 ♢ — 🍀 Good luck & keep spinning 🎰
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: scroll-left 22s linear infinite;
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
