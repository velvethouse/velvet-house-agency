'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

type Gift = {
  name: string;
  file: string;
  lotus: number;
};

const gifts: Gift[] = [
  { name: 'Lotus', file: '/gifts/lotus.json', lotus: 100 },
  { name: 'Rose', file: '/gifts/rose.json', lotus: 250 },
  { name: 'Champagne', file: '/gifts/champagne.json', lotus: 800 },
  { name: 'Crown', file: '/gifts/crown.json', lotus: 1200 },
  { name: 'Dragon', file: '/gifts/dragon.json', lotus: 8000 },
  { name: 'Phoenix', file: '/gifts/phoenix.json', lotus: 10000 },
  // ➕ ajoute les 42 autres ici...
];

export default function LiveGiftPanel() {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{ color: '#FFD700', marginBottom: 10 }}>🎁 Send a Gift</h2>

      <button
        onClick={() => setSelectedGift(null)}
        style={{
          marginBottom: 16,
          background: '#2c0d0d',
          color: '#FFD700',
          border: '1px solid #D4AF37',
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 700,
        }}
      >
        {selectedGift ? `🎁 Sent: ${selectedGift.name}` : 'Choose a Gift'}
      </button>

      {!selectedGift && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 12,
            background: 'rgba(255,255,255,0.02)',
            padding: 16,
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {gifts.map((gift) => (
            <div
              key={gift.name}
              onClick={() => setSelectedGift(gift)}
              style={{
                background: '#1a1a1a',
                borderRadius: 12,
                padding: 10,
                textAlign: 'center',
                cursor: 'pointer',
                border: '1px solid #444',
              }}
            >
              <Lottie
                loop
                play
                src={gift.file}
                style={{ width: 80, height: 80, margin: '0 auto' }}
              />
              <div style={{ color: '#FFD700', fontWeight: 600, fontSize: 13 }}>
                {gift.name}
              </div>
              <div style={{ fontSize: 12, color: '#ccc' }}>
                {gift.lotus} ♢
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedGift && (
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <Lottie
            loop={false}
            play
            src={selectedGift.file}
            style={{ width: 300, height: 300, margin: '0 auto' }}
            onComplete={() => setSelectedGift(null)}
          />
          <p style={{ color: '#FFD700', fontWeight: 600, marginTop: 12 }}>
            🎉 {selectedGift.name} sent!
          </p>
        </div>
      )}
    </div>
  );
        }
