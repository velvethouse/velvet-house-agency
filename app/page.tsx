{/* Section exploration (lien direct vers les vraies pages) */}
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
    { label: '🎥 Enter the Live', href: '/live' },
    { label: '🎁 Explore Gifts', href: '/gifts' },
    { label: '💎 Buy Lotus', href: '/lotus' },
    { label: '👑 VIP Access', href: '/vip' },
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
