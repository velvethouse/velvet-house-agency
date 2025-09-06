// app/gifts/page.tsx
'use client';

import { useMemo, useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { useGiftStore } from '@/stores/giftStore';

type GiftRow = {
  id: string;
  name: string;
  lotus: number;
  file?: string;       // /gifts/xxx.json (dans /public)
  emoji?: string;      // fallback si pas de fichier
  durationMs?: number; // durée overlay
};

const GIFTS: GiftRow[] = [
  { id: 'lotus', name: 'Lotus', lotus: 1000, file: '/gifts/lotus.json', emoji: '🌸', durationMs: 2200 },
  { id: 'rose', name: 'Rose', lotus: 1500, file: '/gifts/rose.json', emoji: '🌹', durationMs: 2000 },
  { id: 'heart', name: 'Heart', lotus: 2000, file: '/gifts/heart.json', emoji: '❤️', durationMs: 2000 },
  // … (tu peux garder le reste de ta liste telle quelle)
];

export default function GiftsPage() {
  const [q, setQ] = useState('');
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  const push = useGiftStore((s) => s.push);

  // preview overlay
  const [preview, setPreview] = useState<GiftRow | null>(null);
  const [animData, setAnimData] = useState<any | null>(null);

  // charge le JSON depuis /public via fetch quand on ouvre le preview
  useEffect(() => {
    let active = true;
    (async () => {
      if (!preview?.file) {
        setAnimData(null);
        return;
      }
      try {
        const res = await fetch(preview.file);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        if (active) setAnimData(json);
      } catch (e) {
        console.error('Failed to load Lottie', e);
        if (active) setAnimData(null);
      }
    })();
    return () => {
      active = false;
    };
  }, [preview]);

  const list = useMemo(() => {
    const filtered = GIFTS.filter((g) =>
      (g.name + ' ' + g.id).toLowerCase().includes(q.toLowerCase())
    );
    return filtered.sort((a, b) =>
      sort === 'asc' ? a.lotus - b.lotus : b.lotus - a.lotus
    );
  }, [q, sort]);

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)',
        color: '#f5f5f5',
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      <section style={{ maxWidth: 1100, margin: '24px auto 12px', padding: '0 16px' }}>
        <h1 style={{ fontSize: 'clamp(24px,6vw,36px)', margin: 0 }}>
          Gifts — Internal Catalog (Lottie)
        </h1>
        <p style={{ margin: '8px 0 0', color: '#e9dfcf' }}>
          Dépose les fichiers <code>.json</code> dans <code>/public/gifts/</code> avec les noms indiqués.
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '10px auto 6px', padding: '0 16px' }}>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr auto' }}>
          <input
            placeholder="Search gifts…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              padding: 10,
              borderRadius: 10,
              border: '1px solid rgba(212,175,55,.35)',
              background: 'rgba(0,0,0,.25)',
              color: '#fff',
            }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'asc' | 'desc')}
            style={{
              padding: 10,
              borderRadius: 10,
              border: '1px solid rgba(212,175,55,.35)',
              background: 'rgba(0,0,0,.25)',
              color: '#fff',
            }}
          >
            <option value="asc">Price ↑ (Lotus)</option>
            <option value="desc">Price ↓ (Lotus)</option>
          </select>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '12px auto 30px', padding: '0 16px' }}>
        <div
          style={{
            display: 'grid',
            gap: 14,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {list.map((g) => (
            <article
              key={g.id}
              style={{
                display: 'grid',
                gap: 10,
                padding: 16,
                borderRadius: 14,
                background: 'linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))',
                border: '1px solid rgba(212,175,55,0.22)',
                boxShadow: '0 10px 26px rgba(0,0,0,.30)',
              }}
            >
              <div
                style={{
                  height: 120,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 12,
                  background: 'rgba(0,0,0,.25)',
                  border: '1px solid rgba(212,175,55,.22)',
                  overflow: 'hidden',
                  fontSize: 42,
                }}
              >
                {g.emoji || '🎁'}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontWeight: 800, color: '#D4AF37' }}>{g.name}</div>
                <div style={{ fontWeight: 700 }}>
                  {g.lotus.toLocaleString('en-US')}{' '}
                  <span style={{ fontSize: 12, color: '#d7c9b3' }}>Lotus</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => setPreview(g)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: '1px solid rgba(212,175,55,.45)',
                    background: 'rgba(0,0,0,.35)',
                    color: '#fff',
                  }}
                >
                  Preview
                </button>

                <button
                  type="button"
                  onClick={() =>
                    push({
                      id: g.id,
                      name: g.name,
                      kind: 'lottie',
                      src: g.file ?? '/hero.png',
                      durationMs: g.durationMs ?? 2000,
                    })
                  }
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: '1px solid rgba(212,175,55,.85)',
                    background: 'linear-gradient(180deg, #D4AF37, #b68e1e)',
                    color: '#1a1207',
                    fontWeight: 800,
                  }}
                >
                  Send test
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Overlay de preview */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,.6)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 50,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 360,
              maxWidth: '90vw',
              background: 'rgba(10,10,10,.9)',
              border: '1px solid rgba(212,175,55,.35)',
              borderRadius: 16,
              padding: 16,
              display: 'grid',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>{preview.name}</strong>
              <button
                onClick={() => setPreview(null)}
                style={{
                  padding: '6px 10px',
                  borderRadius: 8,
                  border: '1px solid rgba(212,175,55,.45)',
                  background: 'rgba(0,0,0,.35)',
                  color: '#fff',
                }}
              >
                Close
              </button>
            </div>

            <div
              style={{
                width: '100%',
                height: 260,
                display: 'grid',
                placeItems: 'center',
                background: '#000',
                borderRadius: 12,
                border: '1px solid rgba(212,175,55,.22)',
                overflow: 'hidden',
              }}
            >
              {animData ? (
                <Lottie
                  play
                  loop={false}
                  animationData={animData}
                  style={{ width: 240, height: 240 }}
                />
              ) : (
                <div style={{ opacity: 0.7 }}>Fichier manquant ou illisible</div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
