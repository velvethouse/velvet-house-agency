'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

type Gift = {
  name: string;
  file: string; // chemin vers le .json (ex: /gifts/lotus.json)
};

type Props = {
  gift: Gift | null;
};

export default function LiveGiftOverlay({ gift }: Props) {
  const [show, setShow] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (!gift) return;
    fetch(gift.file)
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setShow(true);
        setTimeout(() => setShow(false), 3000); // Cache après 3s
      });
  }, [gift]);

  if (!show || !animationData) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <Lottie
        play
        loop={false}
        animationData={animationData}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
