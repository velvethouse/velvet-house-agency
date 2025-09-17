'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

type Gift = {
  id: string;
  file: string; // Chemin JSON Lottie dans /public/gifts/
  from: string; // Nom du viewer
  name: string; // Nom du gift
};

export default function LiveGiftOverlay() {
  const [queue, setQueue] = useState<Gift[]>([]);
  const [current, setCurrent] = useState<Gift | null>(null);

  // Simule une réception de gift (à remplacer par Zustand ou WebSocket plus tard)
  useEffect(() => {
    const testGift = {
      id: '1',
      file: '/gifts/champagne.json',
      from: 'Sacha',
      name: 'Champagne',
    };

    // Exemple déclenchement (à supprimer en prod)
    const timer = setTimeout(() => {
      setQueue((prev) => [...prev, testGift]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Affiche chaque gift de la queue
  useEffect(() => {
    if (!current && queue.length > 0) {
      const next = queue[0];
      setCurrent(next);
      setQueue((prev) => prev.slice(1));

      const timeout = setTimeout(() => {
        setCurrent(null);
      }, 4000); // durée de l’affichage

      return () => clearTimeout(timeout);
    }
  }, [queue, current]);

  if (!current) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        background: 'rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Lottie
          loop
          play
          src={current.file}
          style={{ width: 220, height: 220, margin: '0 auto' }}
        />
        <div style={{ marginTop: 12, color: '#FFD700', fontWeight: 'bold', fontSize: 18 }}>
          💝 {current.from} sent a {current.name}!
        </div>
      </div>
    </div>
  );
  }
