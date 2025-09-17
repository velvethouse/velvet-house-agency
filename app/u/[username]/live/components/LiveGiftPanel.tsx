'use client';

type Props = {
  username: string;
};

export default function LiveGiftPanel({ username }: Props) {
  return (
    <div
      style={{
        background: '#1a1a1a',
        borderRadius: 12,
        padding: 20,
        border: '1px solid #333',
        color: '#f5f5f7',
        textAlign: 'center',
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: 8 }}>
        🎁 Send a gift to {username}
      </p>
      <p style={{ fontSize: '.9rem', color: '#aaa' }}>
        Gift options will appear here (animations, Lottie, Lotus cost…).
      </p>
    </div>
  );
      }
