'use client';

import React, { useState } from 'react';

type Message = {
  id: string;
  user: string;
  text: string;
};

type Props = {
  messages?: Message[];
  onSend?: (text: string) => void;
};

const LiveChat: React.FC<Props> = ({ messages = [], onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    onSend?.(trimmed); // appelle le backend / socket plus tard
    setInput('');
  };

  return (
    <div
      style={{
        background: '#111',
        borderRadius: 12,
        padding: 12,
        maxHeight: 300,
        overflow: 'hidden',
        fontSize: 14,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 16 }}>
        💬 Live Chat
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: 8,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 8,
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: '#888', fontSize: 13 }}>No messages yet…</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} style={{ marginBottom: 4 }}>
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 6,
            border: '1px solid #333',
            background: '#222',
            color: '#fff',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '8px 12px',
            background: '#ff007f',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
