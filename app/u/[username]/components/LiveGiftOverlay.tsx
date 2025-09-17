'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

// 🎁 Importe ici les Lottie animations (tu peux en ajouter d'autres ensuite)
import lotus from '@/public/gifts/lotus.json';
import rose from '@/public/gifts/rose.json';

const giftAnimations: Record<string, object> = {
  lotus,
  rose,
  // 💡 Ex : 'heart': heart, 'champagne': champagne, etc.
};

type Props = {
  giftName: string | null;
};

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
