import { NextResponse } from 'next/server';

// Jackpot global (statique temporairement)
let jackpot = 752300;

export async function GET() {
  return NextResponse.json({
    jackpot,
    currency: 'lotus',
    lastUpdated: Date.now(),
  });
}
