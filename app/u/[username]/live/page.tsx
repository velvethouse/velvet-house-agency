'use client';

import { useState } from 'react';

import LivePlayer from './components/LivePlayer';
import LiveChat from './components/LiveChat';
import LiveGiftPanel from './components/LiveGiftPanel';
import LiveGiftOverlay from './components/LiveGiftOverlay';

export default function LivePage() {
  const [activeGift, setActiveGift] = useState<string | null>(null);

  return (
    <main style={{ padding: '20px', background: '#000', color: '#fff' }}>
      <h1 style={{ color: '#FFD700' }}>🔴 Live Stream</h1>

      <LivePlayer streamUrl="https://stream.velvethouse.com/fallback.m3u8" />

      <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <LiveChat />
        </div>
        <div style={{ width: 280 }}>
          <LiveGiftPanel onGiftSend={setActiveGift} />
        </div>
      </div>

      <LiveGiftOverlay giftName={activeGift} />
    </main>
  );
}
