'use client';

import Link from 'next/link';

export default function RulesBookButton() {
  return (
    <Link
      href="/casino/rules"
      className="fixed bottom-4 right-4 bg-yellow-500 hover:bg-yellow-400 text-black text-xl px-4 py-3 rounded-full shadow-lg z-50"
      title="View Casino Rules"
    >
      📖
    </Link>
  );
}
