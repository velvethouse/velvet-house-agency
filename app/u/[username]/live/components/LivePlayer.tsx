'use client';

type Props = {
  username: string;
};

export default function LivePlayer({ username }: Props) {
  return (
    <div
      style={{
        background: '#111',
        color: '#FFD700',
        padding: 20,
        borderRadius: 12,
        border: '1px solid #333',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        🎥 {username} is live right now!
      </p>
      <p style={{ color: '#aaa', fontSize: '.9rem', marginTop: 8 }}>
        Real live stream player will be integrated here.
      </p>
    </div>
  );
}
