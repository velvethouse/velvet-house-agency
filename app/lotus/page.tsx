// app/lotus/page.tsx
"use client";

import { useEffect, useState } from "react";

type Pack = {
  name: string;
  lotus: number;
  price: number;   // € TTC
  badge?: string;
  note?: string;
};

type FetchState =
  | { status: "idle" | "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; packs: Pack[] };

// TODO: brancher au vrai rôle de session plus tard
const IS_VIP_GOLD = true;            // démo : VIP Gold = +5% bonus
const GOLD_BONUS_RATE = 0.05;        // +5%

export default function LotusPage() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const res = await fetch("/api/packs", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const packs = (await res.json()) as Pack[];
        if (!canceled) setState({ status: "ready", packs });
      } catch (e: any) {
        if (!canceled) setState({ status: "error", message: e?.message || "Failed to load packs" });
      }
    }
    load();
    return () => {
      canceled = true;
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", margin: 0 }}>
          Buy Lotus Packs
        </h1>

        {/* Transparent pricing */}
        <p style={{ margin: "10px auto 0", maxWidth: 820, color: "#D4AF37", fontWeight: 700 }}>
          Transparent pricing: what you see is what you pay — no additional taxes or hidden fees.
        </p>

        {/* Contexte + bonus Gold */}
        <p style={{ margin: "8px auto 0", maxWidth: 820, color: "#e9dfcf", lineHeight: 1.7 }}>
          Lotus is the currency used across Velvet House — to send gifts, unlock NSFW media, and support creators.
          {IS_VIP_GOLD && (
            <>
              {" "}
              <b style={{ color: "#D4AF37" }}>VIP Gold members receive an extra +5% Lotus on every pack.</b>
            </>
          )}
        </p>
      </section>

      {/* Contenu */}
      <section style={{ maxWidth: 1100, margin: "18px auto 30px", padding: "0 16px" }}>
        {/* Loading / Error */}
        {state.status !== "ready" ? (
          <div className="card" style={{ padding: 16, textAlign: "center" }}>
            {state.status === "loading" ? (
              <div>Loading packs…</div>
            ) : (
              <div style={{ color: "#e67e22" }}>
                Failed to load packs. {state.status === "error" ? state.message : null}
              </div>
            )}
          </div>
        ) : (
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {state.packs.map((p) => {
              const bonus = IS_VIP_GOLD ? Math.floor(p.lotus * GOLD_BONUS_RATE) : 0;
              const totalLotus = p.lotus + bonus;

              return (
                <article
                  key={`${p.name}-${p.lotus}`}
                  className="card"
                  style={{
                    display: "grid",
                    gap: 10,
                    padding: 16,
                    borderRadius: 14,
                    background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
                    borderColor: p.badge ? "rgba(212,175,55,0.38)" : undefined,
                    boxShadow: p.badge ? "0 10px 34px rgba(0,0,0,.36)" : undefined,
                  }}
                >
                  {/* Header row (name + optional badge) */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h2 style={{ margin: 0, color: "#D4AF37" }}>{p.name}</h2>
                    {p.badge && (
                      <span
                        title={p.note || ""}
                        style={{
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: "#D4AF37",
                          color: "#2c0d0d",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>

                  {/* Base Lotus */}
                  <div style={{ fontSize: 26, fontWeight: 800 }}>
                    {p.lotus.toLocaleString("en-US")}{" "}
                    <span style={{ fontSize: 14, color: "#d7c9b3" }}>Lotus</span>
                  </div>

                  {/* VIP Gold bonus line */}
                  {IS_VIP_GOLD ? (
                    <div style={{ fontSize: 14, color: "#d7c9b3" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: "rgba(212,175,55,.18)",
                          color: "#D4AF37",
                          fontWeight: 700,
                          marginRight: 8,
                        }}
                      >
                        VIP Gold: +5% bonus
                      </span>
                      +{bonus.toLocaleString("en-US")} Lotus →{" "}
                      <b style={{ color: "#D4AF37" }}>{totalLotus.toLocaleString("en-US")} Lotus</b>
                    </div>
                  ) : null}

                  {/* Price */}
                  <div style={{ fontSize: 18, fontWeight: 700 }}>
                    {p.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                  </div>

                  {/* Optional note */}
                  {p.note && <div style={{ color: "#d7c9b3", fontSize: 13 }}>{p.note}</div>}

                  {/* CTA */}
                  <a
                    className="btn3d btn3d--gold"
                    href={`/checkout/lotus?pack=${p.lotus}`}
                    onClick={(e) => {
                      // Demo: “GOD” flag when buying 100k (à remplacer par backend)
                      if (p.lotus === 100_000) {
                        try {
                          localStorage.setItem("vh_hasGod", "1");
                        } catch {}
                      }
                    }}
                  >
                    Buy now
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Legal note */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, color: "#d7c9b3", fontSize: 13, lineHeight: 1.7 }}>
            <b>Notes:</b> Lotus have no monetary value and are non-refundable. NSFW media remain gift-unlock only.
            {IS_VIP_GOLD && " VIP Gold bonus (+5%) is applied automatically to every pack."}
          </p>
        </div>
      </section>
    </main>
  );
                            }
