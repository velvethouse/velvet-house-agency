import { NextResponse } from "next/server";

type Announcement = {
  id: string;
  title?: string;
  message: string;
  audience: "all" | "donor" | "creator";
  startAt: string;
  endAt: string;
};

const GLOBAL: { adminAnnouncements: Announcement[] } =
  (globalThis as any).__VH_ANN__ ?? { adminAnnouncements: [] };

(globalThis as any).__VH_ANN__ = GLOBAL;

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function requireAdmin(req: Request) {
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const ok =
    (process.env.ADMIN_TOKEN && token === process.env.ADMIN_TOKEN) ||
    // fallback DEV: si pas de var env, on accepte "dev-token" (à retirer en prod)
    (!process.env.ADMIN_TOKEN && token === "dev-token");
  return ok;
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return unauthorized();
  return NextResponse.json({ items: GLOBAL.adminAnnouncements }, { status: 200 });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    const body = (await req.json()) as Partial<Announcement>;
    if (!body.message || !body.audience || !body.startAt || !body.endAt) {
      return NextResponse.json(
        { error: "Missing fields: message, audience, startAt, endAt" },
        { status: 400 }
      );
    }
    const id =
      body.id ||
      `ann-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const ann: Announcement = {
      id,
      title: body.title || "",
      message: body.message,
      audience:
        body.audience === "creator"
          ? "creator"
          : body.audience === "donor"
          ? "donor"
          : "all",
      startAt: new Date(body.startAt).toISOString(),
      endAt: new Date(body.endAt).toISOString(),
    };

    // remplace si même id, sinon ajoute
    const idx = GLOBAL.adminAnnouncements.findIndex((a) => a.id === id);
    if (idx >= 0) GLOBAL.adminAnnouncements[idx] = ann;
    else GLOBAL.adminAnnouncements.push(ann);

    return NextResponse.json({ ok: true, item: ann }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return unauthorized();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing ?id=" }, { status: 400 });
  }
  const before = GLOBAL.adminAnnouncements.length;
  GLOBAL.adminAnnouncements = GLOBAL.adminAnnouncements.filter(
    (a) => a.id !== id
  );
  const removed = before - GLOBAL.adminAnnouncements.length;
  return NextResponse.json({ ok: true, removed }, { status: 200 });
}
