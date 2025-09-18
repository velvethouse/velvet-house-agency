'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// 🎁 Imports des 48 animations
import lotus from '@/public/gifts/lotus.json';
import rose from '@/public/gifts/rose.json';
import heart from '@/public/gifts/heart.json';
import star from '@/public/gifts/star.json';
import butterfly from '@/public/gifts/butterfly.json';
import diamond from '@/public/gifts/diamond.json';
import crown from '@/public/gifts/crown.json';
import champagne from '@/public/gifts/champagne.json';
import fireworks from '@/public/gifts/fireworks.json';
import lightning from '@/public/gifts/lightning.json';
import music from '@/public/gifts/music.json';
import ring from '@/public/gifts/ring.json';
import car from '@/public/gifts/car.json';
import yacht from '@/public/gifts/yacht.json';
import castle from '@/public/gifts/castle.json';
import jet from '@/public/gifts/jet.json';
import lion from '@/public/gifts/lion.json';
import tiger from '@/public/gifts/tiger.json';
import dragon from '@/public/gifts/dragon.json';
import phoenix from '@/public/gifts/phoenix.json';
import worldtour from '@/public/gifts/worldtour.json';
import sun from '@/public/gifts/sun.json';
import moon from '@/public/gifts/moon.json';
import kiss from '@/public/gifts/kiss.json';
import teddy from '@/public/gifts/teddy.json';
import icecream from '@/public/gifts/icecream.json';
import balloon from '@/public/gifts/balloon.json';
import candy from '@/public/gifts/candy.json';
import chocolate from '@/public/gifts/chocolate.json';
import perfume from '@/public/gifts/perfume.json';
import heels from '@/public/gifts/heels.json';
import purse from '@/public/gifts/purse.json';
import diamondring from '@/public/gifts/diamondring.json';
import bouquet from '@/public/gifts/bouquet.json';
import violin from '@/public/gifts/violin.json';
import guitar from '@/public/gifts/guitar.json';
import piano from '@/public/gifts/piano.json';
import redcarpet from '@/public/gifts/redcarpet.json';
import throne from '@/public/gifts/throne.json';
import mirror from '@/public/gifts/mirror.json';
import phone from '@/public/gifts/phone.json';
import plane from '@/public/gifts/plane.json';
import shopping from '@/public/gifts/shopping.json';
import necklace from '@/public/gifts/necklace.json';
import butterflywings from '@/public/gifts/butterflywings.json';
import treasure from '@/public/gifts/treasure.json';
import rosegold from '@/public/gifts/rosegold.json';

const giftAnimations: Record<string, object> = {
  lotus,
  rose,
  heart,
  star,
  butterfly,
  diamond,
  crown,
  champagne,
  fireworks,
  lightning,
  music,
  ring,
  car,
  yacht,
  castle,
  jet,
  lion,
  tiger,
  dragon,
  phoenix,
  worldtour,
  sun,
  moon,
  kiss,
  teddy,
  icecream,
  balloon,
  candy,
  chocolate,
  perfume,
  heels,
  purse,
  diamondring,
  bouquet,
  violin,
  guitar,
  piano,
  redcarpet,
  throne,
  mirror,
  phone,
  plane,
  shopping,
  necklace,
  butterflywings,
  treasure,
  rosegold,
};

type Props = {
  giftName: string | null;
};

export default function LiveGiftOverlay({ giftName }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (giftName && giftAnimations[giftName]) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [giftName]);

  if (!giftName || !visible || !giftAnimations[giftName]) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Lottie
          loop
          play
          animationData={giftAnimations[giftName]}
          style={{ width: 260, height: 260, margin: '0 auto' }}
        />
        <div
          style={{
            marginTop: 16,
            color: '#FFD700',
            fontWeight: 'bold',
            fontSize: 22,
            textShadow: '1px 1px 4px #000',
          }}
        >
          🎁 {giftName.toUpperCase()} GIFT
        </div>
      </div>
    </div>
  );
  }
