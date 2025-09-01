'use client';

type Tab = 'studio' | 'live' | 'chat';

export default function CreatorTabs({
  username,
  current
}: {
  username: string;
  current: Tab;
}) {
  const base = `/u/${username}`;
  const tabs: { key: Tab; label: string; href: string }[] = [
    { key: 'studio', label: 'Studio', href: `${base}/studio` },
    { key: 'live', label: 'Live', href: `${base}/live` },
    { key: 'chat', label: 'Chat', href: `${base}/chat` }
  ];

  return (
    <nav style={{display:'flex', gap:8, margin:'12px 0 20px 0'}}>
      {tabs.map(t => (
        <a
          key={t.key}
          href={t.href}
          style={{
            padding:'8px 12px',
            borderRadius:10,
            border: '1px solid #2a2a33',
            textDecoration:'none',
            color: '#e7e7ee',
            background: current === t.key ? '#2a2a33' : 'transparent'
          }}
        >
          {t.label}
        </a>
      ))}
    </nav>
  );
}
