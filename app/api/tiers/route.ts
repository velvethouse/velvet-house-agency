

// app/api/tiers/route.ts
import { NextResponse } from "next/server";
import { TIERS } from "@/data/tiers";

export async function GET() {
  return NextResponse.json(TIERS, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
}
