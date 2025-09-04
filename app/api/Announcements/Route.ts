import { NextResponse } from "next/server";

/**
 * Stockage en mémoire (demo). En prod, remplace par une BDD.
 * On garde les annonces admin dans un tableau global.
 */
type Announcement = {
  id: string;
  title?: string;
  message: string;
  audience: "all" | "donor" | "creator";
  startAt: string; // ISO
  endAt: string;   // ISO
};

const GLOBAL: { adminAnnouncements: Announcement[] } =
  (globalThis as any).__VH_ANN__ ?? { adminAnnouncements: [] };

(globalThis as any).__VH_ANN__ = GLOBAL;

// utilitaires date
function monthBounds(d = new Date()) {
  const y = d.getFullYear();
  const m = d.getMonth(); // 0-11
  const start = new Date(y, m, 1, 0, 0, 0);
  const end = new Date(y, m + 1, 0, 23, 59, 59); // dernier jour du mois
  return { start, end };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const role = (searchParams.get("role") || "donor") as "donor" | "creator";

  // 1) Annonce automatique GOD cycle (1er → fin de mois)
  const { start, end } = monthBounds();
  const godCycle: Announcement = {
    id: `god-cycle-${start.getFullYear()}-${start.getMonth() + 1}`,
    title: "GOD Cycle",
    message:
      "A new GOD cycle is live this month. 100,000 Lotus pack includes GOD game access.",
    audience: "all",
    startAt: start.toISOString(),
    endAt: end.toISOString(),
  };

  // 2) Annonces admin (créées via POST /api/admin/announcements)
  const admins = GLOBAL.adminAnnouncements;

  // fusion + filtrage audience
  const merged = [godCycle, ...admins].filter(
    (a) => a.audience === "all" || a.audience === role
  );

  return NextResponse.json({ items: merged }, { status: 200 });
}
