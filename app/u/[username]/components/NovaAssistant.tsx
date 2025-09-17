'use client';

import { useState } from 'react';

type Props = {
  username: string;
};

export default function NovaAssistant({ username }: Props) {
  const [messages, setMessages] = useState([
    {
      role: 'nova',
      text: "Welcome back! I'm here to help you improve your performance and motivation 🧠✨",
    },
  ]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  const handleSend = () => {
    if (!input.trim() || count >= 10) return;

    const userMessage = { role: 'user', text: input };
    const novaReply = {
      role: 'nova',
      text: "Thanks for your message. Keep shining ✨ I'm reviewing your stats and will guide you step by step.",
    };

    setMessages([...messages, userMessage, novaReply]);
    setInput('');
    setCount(count + 1);
  };

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ color: '#D4AF37' }}>🧠 Nova – Your Studio Coach</h2>

      <div
        style={{
          background: '#1a1a1a',
          padding: 16,
          borderRadius: 12,
          marginTop: 12,
          border: '1px solid rgba(212,175,55,0.2)',
          maxHeight: 280,
          overflowY: 'auto',
          fontSize: 14,
          lineHeight: 1.6,
          color: '#eee',
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <b style={{ color: msg.role === 'nova' ? '#FFD700' : '#aaa' }}>
              {msg.role === 'nova' ? 'Nova' : 'You'}:
            </b>{' '}
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nova for help..."
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #555',
            background: '#000',
            color: '#fff',
          }}
        />
        <button
          onClick={handleSend}
          disabled={count >= 10}
          style={{
            padding: '8px 14px',
            borderRadius: 8,
            background: count >= 10 ? '#444' : '#FFD700',
            color: count >= 10 ? '#999' : '#2e0d0d',
            fontWeight: 700,
            border: 'none',
            cursor: count >= 10 ? 'not-allowed' : 'pointer',
          }}
        >
          Send
        </button>
      </div>

      {count >= 10 && (
        <p style={{ color: '#ff9999', fontSize: 13, marginTop: 6 }}>
          ⚠️ You’ve reached the maximum of 10 messages. Nova will be back soon!
        </p>
      )}
    </section>
  );
}
