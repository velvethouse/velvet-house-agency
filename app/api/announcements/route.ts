// app/api/announcements/route.ts
import { NextResponse } from "next/server";

type Announcement = {
  id: string;
  message: string;
  startAt: string; // ISO
  endAt: string;   // ISO
  level?: "info" | "warn" | "vip";
};

// 👇 petit message discret ; retire-le si tu veux zéro message
const ITEMS: Announcement[] = [
  {
    id: "god-start",
    message: "✨ GOD game started — look closely ✨",
    startAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),     // a commencé il y a 1h
    endAt:   new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // actif 5 jours
    level: "info",
  },
];

export async function GET() {
  try {
    const now = Date.now();
    const list = Array.isArray(ITEMS) ? ITEMS : [];
    const active = list.filter((a) => {
      const s = Date.parse(a.startAt || "");
      const e = Date.parse(a.endAt || "");
      // ignore si dates invalides
      if (isNaN(s) || isNaN(e)) return false;
      return s <= now && now <= e;
    });
    return NextResponse.json({ items: active }, { status: 200 });
  } catch {
    // ne jamais planter le build
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
