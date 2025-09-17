'use client';

import React from 'react';
import Lottie from 'react-lottie-player';

type Props = {
  name: string;
  amount: number;
  animationData: object;
  onSend: () => void;
};

export default function GiftItem({ name, amount, animationData, onSend }: Props) {
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
        play
        loop
        animationData={animationData}
        style={{ width: 80, height: 80, margin: '0 auto' }}
      />
      <div style={{ color: '#FFD700', fontWeight: 600, fontSize: 13 }}>
        {name}
      </div>
      <div style={{ color: '#aaa', fontSize: 12 }}>{amount} Lotus</div>
    </div>
  );
}
