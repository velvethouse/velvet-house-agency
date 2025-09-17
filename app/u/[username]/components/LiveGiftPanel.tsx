'use client';

import { useState } from 'react';
import LottiePlayer from 'react-lottie-player';

const gifts = [
  { name: 'Lotus', file: 'lotus.json', price: 100 },
  { name: 'Rose', file: 'rose.json', price: 200 },
  { name: 'Heart', file: 'heart.json', price: 300 },
  { name: 'Champagne', file: 'champagne.json', price: 500 },
  { name: 'Crown', file: 'crown.json', price: 1000 },
  // Ajoute ici les autres cadeaux si nécessaire
];

type Props = {
  username: string;
};

export default function LiveGiftPanel({ username }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSendGift = (giftName: string) => {
    setSelected(giftName);
    // Action réelle à implémenter plus tard
    console.log(`🎁 ${giftName} sent to ${username}`);
  };

  return (
    <div
      style={{
        padding: 20,
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: 12,
      }}
    >
      <h3 style={{ color: '#FFD700', marginBottom: 12 }}>
        🎁 Send a Gift to {username}
      </h3>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
        }}
      >
        {gifts.map((gift) => (
          <div
            key={gift.name}
            onClick={() => handleSendGift(gift.name)}
            style={{
              cursor: 'pointer',
              background: '#2c0d0d',
              borderRadius: 10,
              padding: 12,
              width: 120,
              border:
                selected === gift.name
                  ? '2px solid #FFD700'
                  : '1px solid #555',
              textAlign: 'center',
            }}
          >
            <LottiePlayer
              loop
              play
              animationData={require(`@/../public/gifts/${gift.file}`)}
              style={{ width: 80, height: 80, margin: '0 auto' }}
            />
            <div style={{ color: '#FFD700', fontWeight: 600, fontSize: 13 }}>
              {gift.name}
            </div>
            <div style={{ fontSize: 12, color: '#ccc' }}>
              {gift.price.toLocaleString()} Lotus
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
