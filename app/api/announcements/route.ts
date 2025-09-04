import { NextResponse } from "next/server";

/**
 * API des annonces globales.
 * -> Ne sert qu'à afficher de petits messages.
 * -> Pas de détails GOD : juste "GOD Game started" discret.
 */
type Announcement = {
  id: string;
  message: string;
  level?: "info" | "warn" | "vip";
  startAt: string;
  endAt: string;
};

const GLOBAL: { announcements: Announcement[] } =
  (globalThis as any).__VH_ANN__ ?? { announcements: [] };

(globalThis as any).__VH_ANN__ = GLOBAL;

// DEMO : message GOD simple
if (GLOBAL.announcements.length === 0) {
  GLOBAL.announcements.push({
    id: "god-start",
    message: "✨ GOD game started — look closely ✨",
    level: "info",
    startAt: new Date().toISOString(),
    endAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 jours
  });
}

export async function GET() {
  const now = Date.now();
  const active = GLOBAL.announcements.filter(
    (a) => new Date(a.startAt).getTime() <= now && now <= new Date(a.endAt).getTime()
  );

  return NextResponse.json({ items: active }, { status: 200 });
}
