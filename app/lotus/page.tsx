// app/lotus/page.tsx
"use client";

import { useEffect, useState } from "react";

type PackApi = {
  id: string;
  name: string;
  lotus: number;
  price: number;   // € TTC
  badge?: string;
  note?: string;
  bonusPercentGold?: number;
  lotusWithGoldBonus?: number; // présent si /api/packs?gold=1
};

type FetchState =
  | { status: "loading" | "idle" }
  | { status: "error"; message: string }
  | { status: "ready"; packs: PackApi[] };

// TODO: brancher au rôle réel (session)
const IS_VIP_GOLD = true; // démo : considérer l’utilisateur comme Gold

export default function LotusPage() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const url = IS_VIP_GOLD ? "/api/packs?gold=1" : "/api/packs";
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const packs = (await res.json()) as PackApi[];
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
            <> <b style={{ color: "#D4AF37" }}> VIP Gold members receive an extra +5% Lotus on every pack.</b></>
          )}
        </p>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1100, margin: "18px auto 30px", padding: "0 16px" }}>
        {state.status !== "ready" ? (
          <div className="card" style={{ padding: 16, textAlign: "center" }}>
            {state.status === "loading" ? "Loading packs…" : (
              <div style={{ color: "#e67e22" }}>
                Failed to load packs. {state.status === "error" ? state.message : null}
              </div>
            )}
          </div>
        ) : (
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {state.packs.map((p) => {
              const showGold = IS_VIP_GOLD && typeof p.lotusWithGoldBonus === "number";
              const totalLotus = showGold ? p.lotusWithGoldBonus! : p.lotus;

              return (
                <article
                  key={p.id}
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
                  {/* Header */}
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

                  {/* Base lotus + (Gold bonus) */}
                  <div style={{ fontSize: 26, fontWeight: 800 }}>
                    {totalLotus.toLocaleString("en-US")}{" "}
                    <span style={{ fontSize: 14, color: "#d7c9b3" }}>Lotus</span>
                  </div>

                  {showGold && (
                    <div style={{ fontSize: 13, color: "#d7c9b3" }}>
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
                        VIP Gold: +{p.bonusPercentGold ?? 5}% bonus
                      </span>
                      Base {p.lotus.toLocaleString("en-US")} → <b style={{ color: "#D4AF37" }}>
                        {totalLotus.toLocaleString("en-US")} Lotus
                      </b>
                    </div>
                  )}

                  {/* Price */}
                  <div style={{ fontSize: 18, fontWeight: 700 }}>
                    {p.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                  </div>

                  {/* Note éventuelle */}
                  {p.note && <div style={{ color: "#d7c9b3", fontSize: 13 }}>{p.note}</div>}

                  {/* CTA */}
                  <a
                    className="btn3d btn3d--gold"
                    href={`/checkout/lotus?pack=${p.lotus}`}
                    onClick={(e) => {
                      if (p.lotus === 100_000) {
                        try { localStorage.setItem("vh_hasGod", "1"); } catch {}
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
