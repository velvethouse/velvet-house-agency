'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import champagne from '@/public/gifts/champagne.json'; // ✅ import direct du JSON

type Gift = {
  id: string;
  file: object;
  from: string;
  name: string;
};

export default function LiveGiftOverlay() {
  const [queue, setQueue] = useState<Gift[]>([]);
  const [current, setCurrent] = useState<Gift | null>(null);

  useEffect(() => {
    // 🎁 Test : simule un gift
    const testGift: Gift = {
      id: '1',
      file: champagne,
      from: 'Sacha',
      name: 'Champagne',
    };

    const timer = setTimeout(() => {
      setQueue((prev) => [...prev, testGift]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!current && queue.length > 0) {
      const next = queue[0];
      setCurrent(next);
      setQueue((prev) => prev.slice(1));

      const timeout = setTimeout(() => {
        setCurrent(null);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [queue, current]);

  if (!current) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        background: 'rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Lottie
          loop
          play
          animationData={current.file}
          style={{ width: 220, height: 220, margin: '0 auto' }}
        />
        <div style={{ marginTop: 12, color: '#FFD700', fontWeight: 'bold', fontSize: 18 }}>
          💝 {current.from} sent a {current.name}!
        </div>
      </div>
    </div>
  );
}
