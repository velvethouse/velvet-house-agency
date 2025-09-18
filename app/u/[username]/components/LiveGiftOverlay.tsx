'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// 🎁 Import des 48 animations
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

// 🗂️ Map des gifts
const giftAnimations: Record<string, object> = {
  bag, bear, butterfly, candle, car, castle, champagne, champion,
  cigar, crown, crownjewel, dance, diamond, dragon, fireworks,
  galaxy, goldbar, guitar, heart, heels, island, jet, kiss,
  lightning, lion, lipstick, lotus, mirror, money, musicnotes,
  necklace, pearl, perfume, phoenix, piano, ring, rose, rosebouquet,
  star, tiger, unicorn, velvetbox, violin, volcano, watch, wine,
  worldtour, yacht,
};

type Props = { giftName: string | null };

export default function LiveGiftOverlay({ giftName }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (giftName && giftAnimations[giftName]) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3200);
      return () => clearTimeout(timer);
    }
  }, [giftName]);

  if (!giftName || !visible || !giftAnimations[giftName]) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(0,0,0,0.6)',
          padding: 12,
          borderRadius: 12,
          border: '1px solid #FFD700',
          maxWidth: 260,
        }}
      >
        <Lottie
          loop
          play
          animationData={giftAnimations[giftName]}
          style={{ width: 220, height: 220, margin: '0 auto' }}
        />
        <div
          style={{
            marginTop: 12,
            color: '#FFD700',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          {giftName.toUpperCase()} GIFT 🎁
        </div>
      </div>
    </div>
  );
  }
