'use client';

import React from 'react';
import GiftItem from './GiftItem';

type Props = {
  onGiftSend: (name: string) => void;
};

export default function LiveGiftPanel({ onGiftSend }: Props) {
  const gifts = [
    { name: 'lotus', amount: 100 },
    { name: 'rose', amount: 250 },
  ];

  return (
    <div
      style={{
        background: '#1a1a1a',
        borderRadius: 12,
        padding: 20,
        border: '1px solid #333',
        color: '#f5f5f7',
        textAlign: 'center',
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: 8 }}>
        🎁 Send a gift
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {gifts.map((gift) => (
          <GiftItem
            key={gift.name}
            name={gift.name}
            amount={gift.amount}
            animationData={null} // ⚠️ Remplacer par le vrai JSON si besoin
            onSend={() => onGiftSend(gift.name)}
          />
        ))}
      </div>
    </div>
  );
}
