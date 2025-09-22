'use client'

import Image from 'next/image'

const iconPath = '/icons/lotus.png'

export default function IconManager() {
  return (
    <section
      style={{
        background: '#1e0d0d',
        padding: 24,
        borderRadius: 12,
        marginTop: 32,
        border: '1px solid rgba(212,175,55,0.3)',
        maxWidth: 800,
        margin: '32px auto',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h2 style={{ fontSize: 22, color: '#FFD700', marginBottom: 16 }}>
        🪷 Lotus Icon Manager
      </h2>

      <p style={{ fontSize: 14, color: '#ccc', marginBottom: 16 }}>
        This block shows your current icon and gives the correct size + copy paths to use for PWA and favicon.
      </p>

      {/* Aperçu image */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: 24,
        }}
      >
        <div>
          <p style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>Preview (original size)</p>
          <img src={iconPath} alt="Lotus icon" style={{ maxWidth: 200, borderRadius: 12 }} />
        </div>

        <div>
          <p style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>Preview 192×192</p>
          <img
            src={iconPath}
            alt="Lotus 192"
            width={192}
            height={192}
            style={{ borderRadius: 12, border: '1px solid #444' }}
          />
        </div>

        <div>
          <p style={{ fontSize: 13, color: '#aaa', marginBottom: 4 }}>Preview 512×512</p>
          <img
            src={iconPath}
            alt="Lotus 512"
            width={128}
            height={128}
            style={{ borderRadius: 12, border: '1px solid #444' }}
          />
        </div>
      </div>

      {/* Emplacements recommandés */}
      <h3 style={{ fontSize: 18, color: '#D4AF37', marginTop: 24 }}>📂 Paths to use</h3>
      <ul style={{ fontSize: 14, paddingLeft: 20, lineHeight: 1.8 }}>
        <li>
          <code style={codeStyle}>public/icons/icon-192.png</code>
        </li>
        <li>
          <code style={codeStyle}>public/icons/icon-512.png</code>
        </li>
        <li>
          <code style={codeStyle}>public/icons/favicon.png</code> (optional)
        </li>
      </ul>

      {/* Manifest */}
      <h3 style={{ fontSize: 18, color: '#D4AF37', marginTop: 24 }}>📎 Manifest.json entries</h3>
      <pre style={preStyle}>
{`"icons": [
  {
    "src": "/icons/icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "/icons/icon-512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]`}
      </pre>

      {/* Layout links */}
      <h3 style={{ fontSize: 18, color: '#D4AF37', marginTop: 24 }}>📎 Layout.tsx head links</h3>
      <pre style={preStyle}>
{`<link rel="icon" href="/icons/icon-192.png" />
<link rel="apple-touch-icon" href="/icons/icon-512.png" />`}
      </pre>
    </section>
  )
}

const codeStyle: React.CSSProperties = {
  background: '#222',
  padding: '4px 8px',
  borderRadius: 6,
  fontSize: 13,
  fontFamily: 'monospace',
  color: '#FFD700',
}

const preStyle: React.CSSProperties = {
  background: '#111',
  padding: '12px',
  borderRadius: 8,
  fontSize: 13,
  fontFamily: 'monospace',
  color: '#FFD700',
  marginTop: 8,
  overflowX: 'auto',
                     }
