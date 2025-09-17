'use client';

type Props = {
  username: string;
};

export default function LiveChat({ username }: Props) {
  return (
    <div
      style={{
        background: '#1a1a1a',
        borderRadius: 12,
        padding: 20,
        border: '1px solid #333',
        color: '#f5f5f7',
        minHeight: 200,
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: 8 }}>
        💬 Public Chat — {username}&apos;s Live
      </p>
      <p style={{ fontSize: '.9rem', color: '#888' }}>
        Real-time chat will appear here. Only logged-in users can send messages.
      </p>
    </div>
  );
}
