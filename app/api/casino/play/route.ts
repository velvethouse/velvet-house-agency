import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, game, betAmount, combo } = body;

    if (!userId || !game || !betAmount) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // ✅ Répartition réelle
    const jackpotShare = betAmount * 0.3;
    const smallWinsShare = betAmount * 0.3;
    const velvetShare = betAmount * 0.4;

    // 🧠 Simulation côté "base"
    // À remplacer par accès BDD user + jackpot global plus tard
    const result = {
      game,
      bet: betAmount,
      jackpot: jackpotShare,
      pool: smallWinsShare,
      velvet: velvetShare,
      combo: combo || null,
      status: 'ok',
      message: `Bet of ${betAmount} Lotus processed`,
      timestamp: Date.now(),
    };

    console.log(`🎰 API /casino/play →`, result);

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
