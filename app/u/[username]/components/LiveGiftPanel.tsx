'use client';

import { useMemo } from 'react';
import GiftItem from './GiftItem';
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

const animations: Record<string, object> = {
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

const gifts = Object.entries(animations).map(([name], i) => ({
  name,
  amount: (i + 1) * 100, // Juste pour test, à remplacer par le vrai prix
}));

type Props = {
  onGiftSend: (giftName: string) => void;
};

export default function LiveGiftPanel({ onGiftSend }: Props) {
  return (
    <div
      style={{
        background: '#111',
        padding: 12,
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <h3 style={{ color: '#FFD700', marginBottom: 10 }}>🎁 Gifts</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: 12,
        }}
      >
        {gifts.map((gift) => (
          <GiftItem
            key={gift.name}
            name={gift.name}
            amount={gift.amount}
            animationData={animations[gift.name]}
            onSend={() => onGiftSend(gift.name)}
          />
        ))}
      </div>
    </div>
  );
  }
