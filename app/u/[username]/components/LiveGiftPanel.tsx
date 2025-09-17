'use client';

import { useEffect, useState } from 'react';
import GiftItem from './GiftItem';

type Gift = {
  name: string;
  file: string; // chemin du JSON
  amount: number;
};

const giftList: Gift[] = [
  { name: 'Lotus', file: '/gifts/lotus.json', amount: 100 },
  { name: 'Rose', file: '/gifts/rose.json', amount: 300 },
  { name: 'Heart', file: '/gifts/heart.json', amount: 500 },
];

export default function LiveGiftPanel() {
  const [animations, setAnimations] = useState<Record<string, object>>({});

  useEffect(() => {
    giftList.forEach((gift) => {
      fetch(gift.file)
        .then((res) => res.json())
        .then((data) => {
          setAnimations((prev) => ({ ...prev, [gift.name]: data }));
        });
    });
  }, []);

  const handleSend = (giftName: string) => {
    console.log('🎁 Sent gift:', giftName);
    // 👉 tu peux déclencher ici la logique de LiveGiftOverlay
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {giftList.map((gift) =>
        animations[gift.name] ? (
          <GiftItem
            key={gift.name}
            name={gift.name}
            amount={gift.amount}
            animationData={animations[gift.name]}
            onSend={() => handleSend(gift.name)}
          />
        ) : null
      )}
    </div>
  );
              }
