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
      {/* Bloc texte + inscription */}
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
          More than a platform: an exclusive universe where elegance meets
          mystery.
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

      {/* Liens directs */}
      <div
        style={{
          marginTop: 60,
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          maxWidth: 640,
          marginInline: 'auto',
        }}
      >
        {[
          { label: '🎥 Live', href: '/live' },
          { label: '🎁 Gifts', href: '/gifts' },
          { label: '💎 Buy Lotus', href: '/lotus' },
          { label: '👑 VIP Access', href: '/vip' },
          { label: '🎰 Casino', href: '/casino' },
          { label: '📩 Contact', href: '/contact' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              background: 'rgba(255,255,255,0.9)',
              color: '#2e0d0d',
              fontWeight: 600,
              textAlign: 'center',
              padding: '10px 14px',
              borderRadius: 12,
              textDecoration: 'none',
              transition: '0.2s ease',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Réseaux sociaux */}
      <footer
        style={{
          marginTop: 40,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          paddingTop: 32,
        }}
      >
        {[
          { name: 'TikTok', url: '#', icon: '/icons/tiktok.png' },
          { name: 'Instagram', url: '#', icon: '/icons/instagram.png' },
          { name: 'Facebook', url: '#', icon: '/icons/facebook.png' },
          { name: 'X', url: '#', icon: '/icons/x.png' },
          { name: 'LinkedIn', url: '#', icon: '/icons/linkedin.png' },
          { name: 'Reddit', url: '#', icon: '/icons/reddit.png' },
          { name: 'Snapchat', url: '#', icon: '/icons/snapchat.png' },
          { name: 'Twitch', url: '#', icon: '/icons/twitch.png' },
          { name: 'Pinterest', url: '#', icon: '/icons/pinterest.png' },
        ].map((network) => (
          <a
            key={network.name}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.2s ease',
            }}
          >
            <img
              src={network.icon}
              alt={network.name}
              width={28}
              height={28}
              style={{ filter: 'brightness(1.2)' }}
            />
          </a>
        ))}
      </footer>
    </main>
  )
            }
