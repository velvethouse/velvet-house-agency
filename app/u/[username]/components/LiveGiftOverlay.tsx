"use client";

import GiftPlayer from "@/app/components/GiftPlayer";

interface LiveGiftOverlayProps {
  activeGift: string | null;
}

export default function LiveGiftOverlay({ activeGift }: LiveGiftOverlayProps) {
  return (
    <div className="relative w-full h-full">
      {activeGift && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <GiftPlayer name={activeGift} size={300} autoPlay loop={false} />
        </div>
      )}
    </div>
  );
}
