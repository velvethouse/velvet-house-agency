'use client';

import { useState } from 'react';

type Props = {
  src: string; // lien vers la photo floutée
  isUnlocked: boolean; // l’état réel envoyé par le backend
  onUnlock?: () => void; // déclencheur gift si nécessaire
};

export default function PhotoGiftUnlock({ src, isUnlocked, onUnlock }: Props) {
  return (
    <div style={{ position: 'relative', marginTop: 12 }}>
      {!isUnlocked ? (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={src}
            alt="Locked content"
            style={{
              width: '100%',
              maxWidth: 320,
              filter: 'blur(12px)',
              borderRadius: 12,
              opacity: 0.7,
              border: '2px solid #FFD700',
            }}
          />

          <button
            onClick={onUnlock}
            className="btn3d btn3d--gold"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '10px 16px',
              fontSize: 14,
              borderRadius: 10,
              zIndex: 10,
              background: '#FFD700',
              color: '#2e0d0d',
              fontWeight: 700,
            }}
          >
            🎁 Unlock with gift
          </button>
        </div>
      ) : (
        <img
          src={src}
          alt="Unlocked content"
          style={{
            width: '100%',
            maxWidth: 320,
            borderRadius: 12,
            border: '2px solid #FFD700',
          }}
        />
      )}
    </div>
  );
}
