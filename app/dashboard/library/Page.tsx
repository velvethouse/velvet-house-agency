// app/dashboard/library/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/** ---------------- Types ---------------- */
type Origin = "profile" | "chat" | "dm";
type Kind = "image" | "video";

type Media = {
  id: string;
  creatorId: string;
  creatorName: string;
  url: string;          // demo: public URL or placeholder
  kind: Kind;
  nsfw: boolean;
  origin: Origin;       // profile | chat | dm
  purchasedAt: string;  // ISO
  expiresAt: string | null; // null = lifetime
};

/** --------------- Demo flags --------------- */
// TODO: replace with real session (user tier)
const IS_VIP = true;
const IS_GOLD = true;

/** --------------- Storage helpers --------------- */
const KEY_LIBRARY = "vh_library_items";

function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function saveJSON<T>(key: string, data: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

/** --------------- Seed demo data --------------- */
// VIP: 3-day window; GOLD (chat/dm) = lifetime
const now = Date.now();
const threeDays = 3 * 24 * 60 * 60 * 1000;

const SEED: Media[] = [
  {
    id: "m1",
    creatorId: "alice",
    creatorName: "Alice",
    url: "/hero.png", // placeholder
    kind: "image",
    nsfw: true,
    origin: "profile",
    purchasedAt: new Date(now - 12 * 3600 * 1000).toISOString(),
    expiresAt: new Date(now + (threeDays - 12 * 3600 * 1000)).toISOString(), // VIP rule (3 days)
  },
  {
    id: "m2",
    creatorId: "bella",
    creatorName: "Bella",
    url: "/hero.png",
    kind: "video",
    nsfw: true,
    origin: "chat",
    purchasedAt: new Date(now - 2 * 3600 * 1000).toISOString(),
    expiresAt: IS_GOLD ? null : new Date(now + (threeDays - 2 * 3600 * 1000)).toISOString(), // GOLD lifetime (chat)
  },
  {
    id: "m3",
    creatorId: "clara",
    creatorName: "Clara",
    url: "/hero.png",
    kind: "image",
    nsfw: false,
    origin: "profile",
    purchasedAt: new Date(now - 48 * 3600 * 1000).toISOString(),
    expiresAt: null, // public / non-NSFW (no expiry)
  },
  {
    id: "m4",
    creatorId: "dora",
    creatorName: "Dora",
    url: "/hero.png",
    kind: "image",
    nsfw: true,
    origin: "dm",
    purchasedAt: new Date(now - 1 * 3600 * 1000).toISOString(),
    expiresAt: IS_GOLD ? null : new Date(now + (threeDays - 1 * 3600 * 1000)).toISOString(), // GOLD lifetime (dm)
  },
];

/** --------------- Utils --------------- */
function fmtDate(s: string | null) {
  if (!s) return "lifetime";
  const d = new Date(s);
  return d.toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
}
function remainingLabel(expiresAt: string | null) {
  if (!expiresAt) return { label: "Lifetime", kind: "lifetime" as const };
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return { label: "Expired", kind: "expired" as const };
  const days = Math.ceil(diff / (24 * 3600 * 1000));
  return { label: days <= 1 ? "≤ 1 day left" : `${days} days left`, kind: "countdown" as const };
}

type Tab = "all" | "photos" | "videos" | "libraryPlus";

/** --------------- Page --------------- */
export default function LibraryPage() {
  const [items, setItems] = useState<Media[]>([]);
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    setItems(loadJSON<Media[]>(KEY_LIBRARY, SEED));
  }, []);
  useEffect(() => saveJSON(KEY_LIBRARY, items), [items]);

  const filtered = useMemo(() => {
    let list = items;

    // Tabs
    if (tab === "photos") list = list.filter(m => m.kind === "image");
    if (tab === "videos") list = list.filter(m => m.kind === "video");
    if (tab === "libraryPlus")
      list = list.filter(m => (m.origin === "chat" || m.origin === "dm") && m.expiresAt === null);

    // Search
    if (q) list = list.filter(m => `${m.creatorName} ${m.origin}`.toLowerCase().includes(q.toLowerCase()));

    // Sort: newest first
    return [...list].sort((a, b) => +new Date(b.purchasedAt) - +new Date(a.purchasedAt));
  }, [items, tab, q]);

  function repurchase(m: Media) {
    // Demo rule: reset 3-day expiry for paid NSFW (profile/chat/dm)
    if (m.expiresAt === null) return; // lifetime -> nothing to do
    const updated: Media = {
      ...m,
      purchasedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + threeDays).toISOString(),
    };
    setItems(arr => arr.map(x => (x.id === m.id ? updated : x)));
    alert("Repurchased (demo). Expiry extended by 3 days.");
  }

  function removeItem(id: string) {
    setItems(arr => arr.filter(x => x.id !== id));
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#4b1c1c 0%,#2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui,"Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          My Library
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Your private collection of purchased media. NSFW items are viewable in-app only.
        </p>
      </section>

      {/* Tabs / filters */}
      <section style={{ maxWidth: 1100, margin: "8px auto 0", padding: "0 16px" }}>
        <div className="card" style={{ padding: 12, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div className="btn-row-2">
            <button className={`btn3d ${tab === "all" ? "btn3d--gold" : "btn3d--outline-gold"}`} onClick={() => setTab("all")}>
              All
            </button>
            <button className={`btn3d ${tab === "photos" ? "btn3d--gold" : "btn3d--outline-gold"}`} onClick={() => setTab("photos")}>
              Photos
            </button>
            <button className={`btn3d ${tab === "videos" ? "btn3d--gold" : "btn3d--outline-gold"}`} onClick={() => setTab("videos")}>
              Videos
            </button>
            {IS_GOLD && (
              <button
                className={`btn3d ${tab === "libraryPlus" ? "btn3d--gold" : "btn3d--outline-gold"}`}
                onClick={() => setTab("libraryPlus")}
                title="VIP Gold: lifetime chat & DM photos"
              >
                Library+
              </button>
            )}
          </div>

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <input className="input-velvet" placeholder="Search by creator…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {filtered.map((m) => {
            const rem = remainingLabel(m.expiresAt);
            const isLifetime = rem.kind === "lifetime";
            const isExpired = rem.kind === "expired";

            return (
              <article key={m.id} className="card" style={{ padding: 12, display: "grid", gap: 10 }}>
                {/* Thumb */}
                <div
                  style={{
                    height: 140,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 12,
                    background: "rgba(0,0,0,.25)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  title={`${m.creatorName} • ${m.origin.toUpperCase()}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.url} alt={m.id} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  {/* Badges */}
                  <div style={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 6 }}>
                    {m.nsfw && (
                      <span style={{ padding: "2px 8px", borderRadius: 999, background: "#c0392b", color: "#fff", fontSize: 10, fontWeight: 800 }}>
                        NSFW
                      </span>
                    )}
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: m.origin === "profile" ? "rgba(212,175,55,.24)" : "rgba(46, 204, 113,.22)",
                        color: "#f5f5f5",
                        fontSize: 10,
                        fontWeight: 800,
                      }}
                    >
                      {m.origin.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontWeight: 800, color: "#D4AF37" }}>{m.creatorName}</div>
                  <div style={{ color: "#d7c9b3", fontSize: 12 }}>{new Date(m.purchasedAt).toLocaleDateString()}</div>
                </div>

                {/* Expiry / lifetime */}
                <div style={{ fontSize: 13 }}>
                  {isLifetime ? (
                    <b style={{ color: "#2ecc71" }}>Lifetime</b>
                  ) : isExpired ? (
                    <b style={{ color: "#e67e22" }}>Expired</b>
                  ) : (
                    <span style={{ color: "#d7c9b3" }}>{rem.label}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="btn-row-2">
                  <a href={`/u/${m.creatorId}`} className="btn3d btn3d--gold">Open creator</a>
                  {!isLifetime && (
                    <button
                      className="btn3d btn3d--velvet"
                      onClick={() => repurchase(m)}
                      disabled={isLifetime}
                      title="Extend access by 3 days (demo)"
                    >
                      Repurchase
                    </button>
                  )}
                </div>

                {/* Tech note */}
                <div style={{ color: "#d7c9b3", fontSize: 11 }}>
                  {m.expiresAt ? `Expires: ${fmtDate(m.expiresAt)}` : "Stored in Library+"}
                </div>

                {/* Remove (demo) */}
                <button className="btn3d btn3d--outline-gold" onClick={() => removeItem(m.id)}>
                  Remove from library
                </button>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <div className="card" style={{ padding: 14, color: "#d7c9b3" }}>
              No items in your library.
            </div>
          )}
        </div>
      </section>

      {/* Privacy / rules */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 12 }}>
          <p style={{ margin: 0, color: "#d7c9b3", fontSize: 13, lineHeight: 1.7 }}>
            <b>Privacy:</b> your library is private. NSFW media are viewable in-app only (no raw downloads).
            VIP: 3-day access per purchase. VIP Gold: lifetime storage for VIP chat & DM photos (Library+).
          </p>
        </div>
      </section>
    </main>
  );
      }
