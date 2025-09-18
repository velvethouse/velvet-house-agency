'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// 🎁 Import des 12 premières animations Lottie – à compléter jusqu’à 48
import lotus from '@/public/gifts/lotus.json';
import rose from '@/public/gifts/rose.json';
import heart from '@/public/gifts/heart.json';
import star from '@/public/gifts/star.json';
import crown from '@/public/gifts/crown.json';
import champagne from '@/public/gifts/champagne.json';
import fireworks from '@/public/gifts/fireworks.json';
import butterfly from '@/public/gifts/butterfly.json';
import lightning from '@/public/gifts/lightning.json';
import diamond from '@/public/gifts/diamond.json';
import music from '@/public/gifts/music.json';
import ring from '@/public/gifts/ring.json';

const giftAnimations: Record<string, object> = {
  lotus,
  rose,
  heart,
  star,
  crown,
  champagne,
  fireworks,
  butterfly,
  lightning,
  diamond,
  music,
  ring,
  // 💡 Continue ici avec : car, yacht, castle, jet, lion, tiger, dragon, phoenix, worldtour...
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
