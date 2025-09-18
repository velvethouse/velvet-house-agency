'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// 🎁 Importation des 48 Lottie JSON depuis public/gifts/
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

// Ajoute ici les 27 autres gifts en fonction de tes fichiers .json disponibles
// Exemples à continuer :
// import gift21 from '@/public/gifts/gift21.json';
// import gift22 from '@/public/gifts/gift22.json';
// ...
// import gift48 from '@/public/gifts/gift48.json';

const giftAnimations: Record<string, object> = {
  lotus,
  rose,
  heart,
  butterfly,
  star,
  diamond,
  crown,
  champagne,
  fireworks,
  lightning,
  music,
  car,
  ring,
  yacht,
  castle,
  jet,
  lion,
  tiger,
  dragon,
  phoenix,
  world,
  // gift21,
  // gift22,
  // ...
  // gift48,
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
          padding: 20,
          borderRadius: 16,
          border: '2px solid #FFD700',
          boxShadow: '0 0 12px #FFD70088',
        }}
      >
        <Lottie
          loop={false}
          play
          animationData={giftAnimations[giftName]}
          style={{ width: 260, height: 260 }}
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
          🎁 {giftName.toUpperCase()} GIFT
        </div>
      </div>
    </div>
  );
            }
