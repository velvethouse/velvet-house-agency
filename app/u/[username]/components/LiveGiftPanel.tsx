'use client';

import React from 'react';
import Lottie from 'react-lottie-player';

type Props = {
  onGiftSend: (name: string) => void;
};

type Gift = {
  name: string;
  amount: number;
  animationData: object;
};

import lotus from '@/public/gifts/lotus.json';
import rose from '@/public/gifts/rose.json';
import heart from '@/public/gifts/heart.json';
import butterfly from '@/public/gifts/butterfly.json';
import star from '@/public/gifts/star.json';
import diamond from '@/public/gifts/diamond.json';
import crown from '@/public/gifts/crown.json';
import champagne from '@/public/gifts/champagne.json';
import fireworks from '@/public/gifts/fireworks.json';
import lightning from '@/public/gifts/lightning.json';
import music from '@/public/gifts/music.json';
import car from '@/public/gifts/car.json';
import ring from '@/public/gifts/ring.json';
import yacht from '@/public/gifts/yacht.json';
import castle from '@/public/gifts/castle.json';
import jet from '@/public/gifts/jet.json';
import lion from '@/public/gifts/lion.json';
import tiger from '@/public/gifts/tiger.json';
import dragon from '@/public/gifts/dragon.json';
import phoenix from '@/public/gifts/phoenix.json';
import world from '@/public/gifts/world.json';

// Ajoute ici les 27 autres si dispo (à faire en doublant les lignes)
const gifts: Gift[] = [
  { name: 'lotus', amount: 50, animationData: lotus },
  { name: 'rose', amount: 100, animationData: rose },
  { name: 'heart', amount: 200, animationData: heart },
  { name: 'butterfly', amount: 300, animationData: butterfly },
  { name: 'star', amount: 400, animationData: star },
  { name: 'diamond', amount: 500, animationData: diamond },
  { name: 'crown', amount: 600, animationData: crown },
  { name: 'champagne', amount: 800, animationData: champagne },
  { name: 'fireworks', amount: 1000, animationData: fireworks },
  { name: 'lightning', amount: 1200, animationData: lightning },
  { name: 'music', amount: 1500, animationData: music },
  { name: 'car', amount: 1800, animationData: car },
  { name: 'ring', amount: 2000, animationData: ring },
  { name: 'yacht', amount: 2500, animationData: yacht },
  { name: 'castle', amount: 3000, animationData: castle },
  { name: 'jet', amount: 3500, animationData: jet },
  { name: 'lion', amount: 4000, animationData: lion },
  { name: 'tiger', amount: 5000, animationData: tiger },
  { name: 'dragon', amount: 8000, animationData: dragon },
  { name: 'phoenix', amount: 10000, animationData: phoenix },
  { name: 'world', amount: 15000, animationData: world },
  // ... Ajoute gift22 → gift48 ici
];

export default function LiveGiftPanel({ onGiftSend }: Props) {
  return (
    <div
      style={{
        background: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        border: '1px solid rgba(212,175,55,0.2)',
        maxHeight: 500,
        overflowY: 'auto',
      }}
    >
      <h3 style={{ color: '#FFD700', marginBottom: 12 }}>🎁 Send a Gift</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
        }}
      >
        {gifts.map((gift) => (
          <div
            key={gift.name}
            onClick={() => onGiftSend(gift.name)}
            style={{
              background: '#111',
              border: '1px solid #333',
              borderRadius: 12,
              padding: 10,
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s',
            }}
          >
            <Lottie
              animationData={gift.animationData}
              play
              loop
              style={{ width: 80, height: 80, margin: '0 auto' }}
            />
            <div
              style={{
                marginTop: 8,
                color: '#FFD700',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              {gift.name.toUpperCase()}
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#aaa',
              }}
            >
              {gift.amount} Lotus
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
