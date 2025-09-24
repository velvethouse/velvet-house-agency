'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#2e0d0d',
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 16px 80px',
      }}
    >
      {/* Bloc texte principal */}
      <section
        style={{
          background: 'rgba(0, 0, 0, 0.65)',
          borderRadius: 20,
          padding: '30px 20px',
          maxWidth: 460,
          width: '100%',
          textAlign: 'center',
          color: '#fff',
          margin: '120px auto 0',
        }}
      >
        <h1 style={{ fontSize: '32px', color: '#FFD700', marginBottom: '20px' }}>
          Velvet House
        </h1>
        <p style={{ marginBottom: '24px', lineHeight: 1.6 }}>
          More than a platform: an exclusive universe where elegance meets mystery.
          <br />
          Every creator shines. Every viewer becomes privileged.
        </p>

        <div style={{ display: 'grid', gap: '12px' }}>
          <a
            href="/signup"
            style={{
              background: '#FFD700',
              color: '#2c0d0d',
              fontWeight: 700,
              padding: '12px 20px',
              borderRadius: 14,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Sign up
          </a>
          <a
            href="/login"
            style={{
              background: 'transparent',
              border: '2px solid #FFD700',
              color: '#FFD700',
              fontWeight: 700,
              padding: '12px 20px',
              borderRadius: 14,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Log in
          </a>
        </div>
      </section>

      {/* Footer texte + lien Terms */}
      <footer
        style={{
          marginTop: 40,
          textAlign: 'center',
          fontSize: 12,
          color: 'rgba(255,255,255,0.4)',
          paddingTop: 24,
        }}
      >
        © 2025 Velvet House Agency ·{' '}
        <Link href="/terms" style={{ color: '#FFD700', textDecoration: 'none' }}>
          Terms
        </Link>
      </footer>
    </main>
  )
      }
