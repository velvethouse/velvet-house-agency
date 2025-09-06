import { NextResponse } from "next/server";
import { PACKS } from "@/data/packs";

/** GET /api/packs
 *  /api/packs?gold=1 -> ajoute lotusWithGoldBonus (+5%)
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const isGold = url.searchParams.get("gold") === "1";

  const body = PACKS.map(p => ({
    ...p,
    ...(isGold ? { lotusWithGoldBonus: Math.floor(p.lotus * 1.05) } : {}),
  }));

  return NextResponse.json(body, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
}
