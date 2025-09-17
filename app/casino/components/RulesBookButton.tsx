'use client';

import Link from 'next/link';
import { BookText } from 'lucide-react';

export default function RulesBookButton() {
  return (
    <Link
      href="/casino/rules"
      className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
      title="Casino Rules"
    >
      <BookText className="w-6 h-6" />
    </Link>
  );
}
