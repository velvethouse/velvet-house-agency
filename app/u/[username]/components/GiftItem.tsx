'use client';

import React from 'react';
import Lottie from 'react-lottie-player';
import type { AnimationItem } from 'lottie-web';

type Props = {
  name: string;
  file: object; // contenu JSON déjà importé
  amount: number;
  onSend: () => void;
};

export default function GiftItem({ name, file, amount, onSend }: Props) {
  return (
    <div
      onClick={onSend}
      style={{
        width: 100,
        height: 140,
        margin: 8,
        padding: 10,
        borderRadius: 12,
        background: '#1a1a1a',
        border: '1px solid rgba(212,175,55,0.2)',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <Lottie
        loop
        play
        animationData={file}
        style={{ width: 80, height: 80, margin: '0 auto' }}
      />
      <div style={{ color: '#FFD700', fontWeight: 600, fontSize: 13, marginTop: 8 }}>
        {name}
      </div>
      <div style={{ fontSize: 12, color: '#ccc' }}>{amount} Lotus</div>
    </div>
  );
}
