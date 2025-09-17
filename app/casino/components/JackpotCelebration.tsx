'use client';

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function JackpotCelebration() {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} numberOfPieces={220} recycle={false} />
      <div className="fixed top-24 left-1/2 -translate-x-1/2 text-yellow-300 font-extrabold text-5xl z-50 bg-black/70 px-6 py-4 rounded-xl shadow-lg border border-yellow-500">
        🎉 JACKPOT!
      </div>
    </>
  );
}
