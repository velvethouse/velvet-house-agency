'use client';

type Props = {
  username: string;
};

export default function NovaAssistant({ username }: Props) {
  return (
    <div
      style={{
        background: '#111',
        borderRadius: 12,
        padding: 20,
        border: '1px solid #333',
        color: '#f5f5f7',
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>
        🧠 Nova — Assistant IA
      </p>
      <p style={{ marginTop: 8, fontSize: '.9rem', color: '#aaa' }}>
        Nova is monitoring this live and available to assist {username} anytime.
      </p>
    </div>
  );
                 }
