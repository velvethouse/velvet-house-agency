'use client';

import React from 'react';

type Props = {
  streamUrl?: string;
};

export default function LivePlayer({ streamUrl }: Props) {
  const fallbackStream = 'https://stream.velvethouse.com/fallback.m3u8'; // 🔧 à modifier pour ton flux réel
  const isActive = !!streamUrl;

  return (
    <div
      style={{
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: '#000',
        position: 'relative',
      }}
    >
      {/* 🔴 LIVE Badge */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12,
            padding: '2px 6px',
            borderRadius: 6,
            zIndex: 10,
          }}
        >
          🔴 LIVE
        </div>
      )}

      {/* 🎥 Video player */}
      <video
        src={streamUrl || fallbackStream}
        controls
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          background: '#000',
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
