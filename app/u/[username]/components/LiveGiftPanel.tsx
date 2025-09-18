'use client';

import React from 'react';
import Lottie from 'react-lottie-player';

// 🔁 Imports Lottie JSONs
import bag from '@/public/gifts/bag.json';
import bear from '@/public/gifts/bear.json';
import butterfly from '@/public/gifts/butterfly.json';
import candle from '@/public/gifts/candle.json';
import car from '@/public/gifts/car.json';
import castle from '@/public/gifts/castle.json';
import champagne from '@/public/gifts/champagne.json';
import champion from '@/public/gifts/champion.json';
import cigar from '@/public/gifts/cigar.json';
import crown from '@/public/gifts/crown.json';
import crownjewel from '@/public/gifts/crownjewel.json';
import dance from '@/public/gifts/dance.json';
import diamond from '@/public/gifts/diamond.json';
import dragon from '@/public/gifts/dragon.json';
import fireworks from '@/public/gifts/fireworks.json';
import galaxy from '@/public/gifts/galaxy.json';
import goldbar from '@/public/gifts/goldbar.json';
import guitar from '@/public/gifts/guitar.json';
import heart from '@/public/gifts/heart.json';
import heels from '@/public/gifts/heels.json';
import island from '@/public/gifts/island.json';
import jet from '@/public/gifts/jet.json';
import kiss from '@/public/gifts/kiss.json';
import lightning from '@/public/gifts/lightning.json';
import lion from '@/public/gifts/lion.json';
import lipstick from '@/public/gifts/lipstick.json';
import lotus from '@/public/gifts/lotus.json';
import mirror from '@/public/gifts/mirror.json';
import money from '@/public/gifts/money.json';
import musicnotes from '@/public/gifts/musicnotes.json';
import necklace from '@/public/gifts/necklace.json';
import pearl from '@/public/gifts/pearl.json';
import perfume from '@/public/gifts/perfume.json';
import phoenix from '@/public/gifts/phoenix.json';
import piano from '@/public/gifts/piano.json';
import ring from '@/public/gifts/ring.json';
import rose from '@/public/gifts/rose.json';
import rosebouquet from '@/public/gifts/rosebouquet.json';
import star from '@/public/gifts/star.json';
import tiger from '@/public/gifts/tiger.json';
import unicorn from '@/public/gifts/unicorn.json';
import velvetbox from '@/public/gifts/velvetbox.json';
import violin from '@/public/gifts/violin.json';
import volcano from '@/public/gifts/volcano.json';
import watch from '@/public/gifts/watch.json';
import wine from '@/public/gifts/wine.json';
import worldtour from '@/public/gifts/worldtour.json';
import yacht from '@/public/gifts/yacht.json';

type Gift = {
  name: string;
  amount: number;
  animationData: object;
};

type Props = {
  onGiftSend: (name: string) => void;
};

const gifts: Gift[] = [
  { name: 'lotus', amount: 100, animationData: lotus },
  { name: 'rose', amount: 200, animationData: rose },
  { name: 'heart', amount: 300, animationData: heart },
  { name: 'champagne', amount: 400, animationData: champagne },
  { name: 'crown', amount: 500, animationData: crown },
  { name: 'butterfly', amount: 600, animationData: butterfly },
  { name: 'star', amount: 700, animationData: star },
  { name: 'dragon', amount: 5000, animationData: dragon },
  { name: 'phoenix', amount: 5000, animationData: phoenix },
  { name: 'worldtour', amount: 8000, animationData: worldtour },
  { name: 'yacht', amount: 4500, animationData: yacht },
  { name: 'jet', amount: 4200, animationData: jet },
  { name: 'velvetbox', amount: 1600, animationData: velvetbox },
  { name: 'lion', amount: 1500, animationData: lion },
  { name: 'tiger', amount: 1500, animationData: tiger },
  { name: 'wine', amount: 400, animationData: wine },
  { name: 'watch', amount: 1000, animationData: watch },
  { name: 'violin', amount: 1200, animationData: violin },
  { name: 'ring', amount: 1300, animationData: ring },
  { name: 'goldbar', amount: 3000, animationData: goldbar },
  { name: 'cigar', amount: 700, animationData: cigar },
  { name: 'kiss', amount: 350, animationData: kiss },
  { name: 'galaxy', amount: 2200, animationData: galaxy },
  { name: 'fireworks', amount: 900, animationData: fireworks },
  { name: 'lightning', amount: 950, animationData: lightning },
  { name: 'guitar', amount: 880, animationData: guitar },
  { name: 'piano', amount: 880, animationData: piano },
  { name: 'necklace', amount: 600, animationData: necklace },
  { name: 'pearl', amount: 650, animationData: pearl },
  { name: 'island', amount: 3000, animationData: island },
  { name: 'perfume', amount: 550, animationData: perfume },
  { name: 'mirror', amount: 500, animationData: mirror },
  { name: 'lipstick', amount: 450, animationData: lipstick },
  { name: 'heels', amount: 470, animationData: heels },
  { name: 'car', amount: 3200, animationData: car },
  { name: 'castle', amount: 3500, animationData: castle },
  { name: 'rosebouquet', amount: 600, animationData: rosebouquet },
  { name: 'diamond', amount: 2000, animationData: diamond },
  { name: 'candle', amount: 250, animationData: candle },
  { name: 'dance', amount: 700, animationData: dance },
  { name: 'crownjewel', amount: 1100, animationData: crownjewel },
  { name: 'champion', amount: 1000, animationData: champion },
  { name: 'bear', amount: 330, animationData: bear },
  { name: 'unicorn', amount: 1400, animationData: unicorn },
  { name: 'musicnotes', amount: 310, animationData: musicnotes },
  { name: 'money', amount: 800, animationData: money },
  { name: 'bag', amount: 500, animationData: bag },
  { name: 'test', amount: 1, animationData: lotus }, // Juste pour test éventuel
];

export default function LiveGiftPanel({ onGiftSend }: Props) {
  return (
    <div
      style={{
        background: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        border: '1px solid rgba(212,175,55,0.3)',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ color: '#FFD700', marginBottom: 12 }}>🎁 Send a Gift</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {gifts.map((gift) => (
          <div
            key={gift.name}
            onClick={() => onGiftSend(gift.name)}
            style={{
              width: 100,
              height: 140,
              padding: 10,
              borderRadius: 12,
              background: '#000',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            <Lottie
              loop
              play
              animationData={gift.animationData}
              style={{ width: 80, height: 80, margin: '0 auto' }}
            />
            <div style={{ marginTop: 6, fontSize: 14 }}>{gift.name}</div>
            <div style={{ color: '#FFD700', fontWeight: 'bold' }}>
              {gift.amount} ♢
            </div>
          </div>
        ))}
      </div>
    </div>
  );
   }
