// app/dashboard/subscriptions/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/** ---------- Demo types ---------- */
type Creator = {
  id: string;
  name: string;
  avatar?: string;
  isLive?: boolean;
  isVipOnly?: boolean;
};
type FollowTab = "following" | "followers";

/** ---------- Demo storage keys ---------- */
const KEY_FOLLOWING = "vh_following_creators";
const KEY_FOLLOWERS = "vh_followers_creators";

/** ---------- Demo helpers (localStorage) ---------- */
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

/** ---------- Demo seed data (you can replace later with API) ---------- */
const SEED_FOLLOWING: Creator[] = [
  { id: "alice", name: "Alice", avatar: "/icons/creator.svg", isLive: true },
  { id: "bella", name: "Bella", avatar: "/icons/creator.svg", isLive: false, isVipOnly: true },
  { id: "clara", name: "Clara", avatar: "/icons/creator.svg", isLive: false },
];
const SEED_FOLLOWERS: Creator[] = [
  { id: "dora", name: "Dora", avatar: "/icons/creator.svg", isLive: false },
  { id: "emmy", name: "Emmy", avatar: "/icons/creator.svg", isLive: true },
];

export default function SubscriptionsPage() {
  const [tab, setTab] = useState<FollowTab>("following");
  const [q, setQ] = useState("");
  const [liveOnly, setLiveOnly] = useState(false);

  const [following, setFollowing] = useState<Creator[]>([]);
  const [followers, setFollowers] = useState<Creator[]>([]);

  // Load seed or existing local data
  useEffect(() => {
    const f1 = loadJSON<Creator[]>(KEY_FOLLOWING, SEED_FOLLOWING);
    const f2 = loadJSON<Creator[]>(KEY_FOLLOWERS, SEED_FOLLOWERS);
    setFollowing(f1);
    setFollowers(f2);
  }, []);

  // Persist when lists change
  useEffect(() => saveJSON(KEY_FOLLOWING, following), [following]);
  useEffect(() => saveJSON(KEY_FOLLOWERS, followers), [followers]);

  const list = tab === "following" ? following : followers;

  const filtered = useMemo(() => {
    return list.filter((c) => {
      if (q && !(`${c.name} ${c.id}`.toLowerCase().includes(q.toLowerCase()))) return false;
      if (liveOnly && !c.isLive) return false;
      return true;
    });
  }, [list, q, liveOnly]);

  /** Actions (front-only demo) */
  function unfollow(id: string) {
    if (tab !== "following") return;
    setFollowing((arr) => arr.filter((c) => c.id !== id));
  }
  function followBack(id: string) {
    if (tab !== "followers") return;
    const target = followers.find((c) => c.id === id);
    if (!target) return;
    if (!following.some((c) => c.id === id)) {
      setFollowing((arr) => [{ ...target }, ...arr]);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "24px auto 10px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          Subscriptions (Private)
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Only <b>you</b> can see these lists. No one else can view your followers or who you follow.
        </p>
      </section>

      {/* Tabs + filters */}
      <section style={{ maxWidth: 1100, margin: "8px auto 0", padding: "0 16px" }}>
        <div
          className="card"
          style={{ padding: 12, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="btn-row-2">
            <button
              className={`btn3d ${tab === "following" ? "btn3d--gold" : "btn3d--outline-gold"}`}
              onClick={() => setTab("following")}
            >
              Following ({following.length})
            </button>
            <button
              className={`btn3d ${tab === "followers" ? "btn3d--gold" : "btn3d--outline-gold"}`}
              onClick={() => setTab("followers")}
            >
              Followers ({followers.length})
            </button>
          </div>

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <input
              className="input-velvet"
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <label
              className="btn3d btn3d--outline-gold"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}
            >
              <input
                type="checkbox"
                checked={liveOnly}
                onChange={(e) => setLiveOnly(e.target.checked)}
                style={{ accentColor: "#D4AF37" }}
              />
              Live only
            </label>
          </div>
        </div>
      </section>

      {/* List */}
      <section style={{ maxWidth: 1100, margin: "12px auto 30px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {filtered.map((c) => (
            <article key={c.id} className="card" style={{ padding: 14, display: "grid", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid rgba(212,175,55,0.5)",
                    overflow: "hidden",
                    background: "rgba(0,0,0,.25)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.avatar || "/icons/creator.svg"}
                    alt={c.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#D4AF37" }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "#d7c9b3" }}>
                    {c.isLive ? "LIVE now" : c.isVipOnly ? "VIP-only" : "Offline"}
                  </div>
                </div>
              </div>

              <div className="btn-row-2">
                <a href={`/u/${c.id}`} className="btn3d btn3d--gold">Go to profile</a>
                {tab === "following" ? (
                  <button className="btn3d btn3d--velvet" onClick={() => unfollow(c.id)}>Unfollow</button>
                ) : (
                  <button className="btn3d btn3d--velvet" onClick={() => followBack(c.id)}>Follow back</button>
                )}
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="card" style={{ padding: 14, color: "#d7c9b3" }}>
              No results.
            </div>
          )}
        </div>
      </section>

      {/* Privacy note */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 12 }}>
          <p style={{ margin: 0, color: "#d7c9b3", fontSize: 13, lineHeight: 1.7 }}>
            <b>Privacy:</b> These lists are private. Only you can see who you follow and who follows you. No public counters,
            no public activity feed.
          </p>
        </div>
      </section>
    </main>
  );
  }
