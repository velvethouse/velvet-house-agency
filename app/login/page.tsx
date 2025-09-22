'use client'

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #2e0d0d, #000)',
        color: '#fff',
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          background: '#1a1a1a',
          padding: 32,
          borderRadius: 16,
          maxWidth: 420,
          width: '100%',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 20, color: '#FFD700' }}>Log in</h1>

        <form style={{ display: 'grid', gap: 16 }}>
          <input
            type="email"
            placeholder="Your email"
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Your password"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            className="btn3d btn3d--gold"
            style={{ padding: '12px 20px', fontWeight: 600, marginTop: 8 }}
          >
            Log in
          </button>
        </form>

        <p style={{ fontSize: 12, color: '#999', marginTop: 16, textAlign: 'center' }}>
          Forgot your password? <a href="#" style={{ color: '#FFD700' }}>Reset it</a>
        </p>
      </div>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #444',
  background: '#000',
  color: '#fff',
  fontSize: 14,
  outline: 'none'
            }
