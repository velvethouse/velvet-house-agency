// /app/api/packs/route.ts
import { NextResponse } from "next/server";
import { PACKS } from "@/data/packs";

/**
 * GET /api/packs
 * - Sans paramètre → renvoie les packs de base.
 * - Avec ?gold=1 → ajoute { lotusWithGoldBonus } calculé avec bonusPercentGold.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const gold = url.searchParams.get("gold") === "1";

  const body = PACKS.map((p) => {
    const item: any = {
      id: p.id,
      name: p.name,
      lotus: p.lotus,
      price: p.price,
      ...(p.badge ? { badge: p.badge } : {}),
      ...(p.note ? { note: p.note } : {}),
      ...(p.bonusPercentGold ? { bonusPercentGold: p.bonusPercentGold } : {}),
    };

    if (gold && p.bonusPercentGold && p.bonusPercentGold > 0) {
      const bonus = Math.floor(p.lotus * (p.bonusPercentGold / 100));
      item.lotusWithGoldBonus = p.lotus + bonus;
    }

    return item;
  });

  return NextResponse.json(body, {
    headers: { "Cache-Control": "public, max-age=60" }, // cache 60s
  });
}
