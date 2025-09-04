// app/api/u/[username]/schedule/route.ts
import { NextResponse } from "next/server";

type Slot = { day: number; hour: number; active: boolean };

const GLOBAL: { schedules: Record<string, Slot[]> } =
  (globalThis as any).__VH_SCHEDULE__ ?? { schedules: {} };

(globalThis as any).__VH_SCHEDULE__ = GLOBAL;

export async function GET(
  _req: Request,
  { params }: { params: { username: string } }
) {
  const u = (params.username || "").toLowerCase();
  const items = GLOBAL.schedules[u] ?? [];
  return NextResponse.json({ items }, { status: 200 });
}

export async function POST(
  req: Request,
  { params }: { params: { username: string } }
) {
  try {
    const u = (params.username || "").toLowerCase();
    const body = await req.json();
    const items = Array.isArray(body.items) ? body.items : [];
    // filtrage simple
    const clean = items
      .filter((s: any) => s && Number.isInteger(s.day) && Number.isInteger(s.hour))
      .map((s: any) => ({ day: s.day, hour: s.hour, active: !!s.active }));
    GLOBAL.schedules[u] = clean;
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
