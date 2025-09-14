// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const validUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('velvet_admin_logged', '1');
      router.push('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main
      style={{
        maxWidth: 400,
        margin: '80px auto',
        padding: 24,
        background: '#2e0d0d',
        borderRadius: 12,
        color: '#f5f5f5',
      }}
    >
      <h1 style={{ color: '#D4AF37', marginBottom: 20 }}>👑 Admin Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 12,
          borderRadius: 8,
          border: '1px solid #444',
          background: '#1a1a1a',
          color: '#fff',
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 12,
          borderRadius: 8,
          border: '1px solid #444',
          background: '#1a1a1a',
          color: '#fff',
        }}
      />

      {error && <div style={{ color: 'tomato', marginBottom: 12 }}>{error}</div>}

      <button
        onClick={handleLogin}
        className="btn3d btn3d--gold"
        style={{ width: '100%' }}
      >
        🔐 Login
      </button>
    </main>
  );
}
