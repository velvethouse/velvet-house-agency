'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

type Gift = {
  name: string;
  amount: number;
  file: string;
};

type Props = {
  visible: boolean;
  gift: Gift | null;
};

export default function LiveGiftOverlay({ visible, gift }: Props) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (gift?.file) {
      import(`@/public/gifts/${gift.file}`)
        .then((mod) => {
          setAnimationData(mod.default);
        })
        .catch(() => {
          setAnimationData(null);
        });
    }
  }, [gift]);

  if (!visible || !gift || !animationData) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Lottie
          loop
          play
          animationData={animationData}
          style={{
            width: 220,
            height: 220,
            margin: '0 auto',
          }}
        />
        <div
          style={{
            marginTop: 12,
            color: '#FFD700',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          🎁 {gift.name} — {gift.amount.toLocaleString()} Lotus
        </div>
      </div>
    </div>
  );
            }
