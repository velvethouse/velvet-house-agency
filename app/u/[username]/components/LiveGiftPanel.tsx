'use client';

import React, { useState } from 'react';
import GiftItem from './GiftItem';

const gifts = [
  {
    name: 'Lotus',
    file: '/gifts/lotus.json',
    amount: 100,
  },
  {
    name: 'Rose',
    file: '/gifts/rose.json',
    amount: 300,
  },
  {
    name: 'Heart',
    file: '/gifts/heart.json',
    amount: 800,
  },
  // ➕ Tu pourras ajouter les autres gifts ici
];

export default function LiveGiftPanel() {
  const [open, setOpen] = useState(false);

  const handleSend = (giftName: string) => {
    // 🧠 Tu pourras relier cette fonction à l’API plus tard
    console.log(`🎁 Sent gift: ${giftName}`);
    setOpen(false);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: '#D4AF37',
          color: '#2e0d0d',
          fontWeight: 700,
          border: 'none',
          borderRadius: 12,
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        🎁 Open Gifts
      </button>

      {open && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 12,
            background: 'rgba(0,0,0,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {gifts.map((gift) => (
            <GiftItem
              key={gift.name}
              name={gift.name}
              file={gift.file}
              amount={gift.amount}
              onSend={() => handleSend(gift.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
          }
