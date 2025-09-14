'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const envUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const envPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (username === envUser && password === envPass) {
      localStorage.setItem('vh_username', username);
      router.push('/admin');
    } else {
      setError('Incorrect login or password');
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#1e0c0c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: '#2e0d0d',
          padding: 32,
          borderRadius: 12,
          maxWidth: 360,
          width: '100%',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h1 style={{ color: '#FFD700', marginBottom: 20, textAlign: 'center' }}>
          👑 Admin Login
        </h1>

        <label style={{ fontSize: 14 }}>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          placeholder="Enter username"
          required
        />

        <label style={{ fontSize: 14, marginTop: 16 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter password"
          required
        />

        {error && (
          <p style={{ color: 'red', marginTop: 10, fontSize: 13 }}>{error}</p>
        )}

        <button
          type="submit"
          className="btn3d btn3d--gold"
          style={{ marginTop: 24, width: '100%', padding: 10 }}
        >
          🔐 Log in
        </button>
      </form>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #444',
  background: '#1b1b1b',
  color: '#fff',
  marginTop: 4,
};
