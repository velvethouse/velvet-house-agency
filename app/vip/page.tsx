// app/vip/page.tsx
"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Tier = {
  title: string;
  monthly: number;
  annual: number;
  lotusMonthlyIncluded: number;
  benefits: string[];
};

type TiersResponse = {
  vip: Tier;
  "vip-gold": Tier;
};

type LoadState =
  | { status: "idle" | "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; tiers: TiersResponse };

function VipContent() {
  const fmtNum = (n: number) => new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(n);
  const fmtPrice = (n: number) => `${fmtNum(n)}€`;
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "";
  const from = searchParams.get("from") || "";

  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/tiers", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as TiersResponse;
        if (!cancelled) setState({ status: "ready", tiers: json });
      } catch (e: any) {
        if (!cancelled) setState({ status: "error", message: e?.message || "Failed to load tiers" });
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const banner = useMemo(() => {
    if (reason === "gold-required")
      return "VIP Gold required: unlock lifetime storage for VIP chat & DM media (+5% Lotus bonus on every pack).";
    if (reason === "vip-required") return "VIP required to access this feature.";
    if (reason === "vip-or-gold") return "VIP or VIP Gold required to access this feature.";
    return "";
  }, [reason]);

  if (state.status !== "ready") {
    return (
      <main style={{ minHeight: "100vh", background: "#2e0d0d", color: "#fff" }}>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: 32, textAlign: "center" }}>
          <h1 className="gold-gradient-text" style={{ fontSize: "2rem" }}>Become VIP</h1>
          <div className="card" style={{ marginTop: 16, padding: 16 }}>
            {state.status === "loading" ? "Loading VIP tiers…" : `Error: ${"message" in state ? state.message : "?"}`}
          </div>
        </section>
      </main>
    );
  }

  const vip = state.tiers.vip;
  const gold = state.tiers["vip-gold"];

  const ProgressBar = ({ value = 100 }: { value?: number }) => (
    <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,.15)", borderRadius: 999 }}>
      <div
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`,
          height: "100%",
          background: "linear-gradient(90deg,#D4AF37,#f6dd9d)",
          borderRadius: 999,
        }}
      />
    </div>
  );

  const Card = ({
    title,
    price,
    period,
    lotus,
    benefits,
    ctaText,
    ctaHref,
    highlight = false,
  }: {
    title: string;
    price: string;
    period: "month" | "year";
    lotus: number;
    benefits: string[];
    ctaText: string;
    ctaHref: string;
    highlight?: boolean;
  }) => (
    <article
      className="card"
      style={{
        display: "grid",
        gap: 12,
        padding: 18,
        borderColor: highlight ? "rgba(212,175,55,0.35)" : undefined,
        boxShadow: highlight ? "0 10px 34px rgba(0,0,0,.36)" : undefined,
      }}
    >
      <h2 style={{ margin: 0, color: "#D4AF37" }}>{title}</h2>
      <div style={{ fontSize: 32, fontWeight: 800 }}>
        {price} <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ {period}</span>
      </div>
      <div style={{ color: "#d7c9b3" }}>
        Includes <b>{fmtNum(lotus)} Lotus</b> per month
      </div>
      <ProgressBar />
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
        {benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href={ctaHref} className={`btn3d ${highlight ? "btn3d--velvet" : "btn3d--gold"}`}>{ctaText}</a>
    </article>
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Optional banner */}
      {banner && (
        <div style={{ maxWidth: 1100, margin: "14px auto 0", padding: "0 16px" }}>
          <div
            className="card"
            style={{
              padding: 12,
              borderColor: "rgba(212,175,55,.5)",
              background: "linear-gradient(180deg, rgba(212,175,55,.12), rgba(212,175,55,.06))",
            }}
          >
            <div style={{ color: "#D4AF37", fontWeight: 800 }}>Upgrade required</div>
            <div style={{ color: "#e9dfcf" }}>
              {banner} {from ? <span style={{ opacity: 0.8 }}> (from: {from})</span> : null}
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", margin: 0 }}>
          Become VIP
        </h1>
        <p style={{ margin: "10px auto 0", maxWidth: 820, color: "#e9dfcf", lineHeight: 1.7 }}>
          Unlock full galleries (non-NSFW), priority in lives & chats, exclusive rewards, and premium access across
          Velvet House. NSFW media remain <b>gift-unlock only</b> — even for VIP & VIP Gold.
        </p>
      </section>

      {/* Cards */}
      <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Card
            title={`${vip.title} Monthly`}
            price={fmtPrice(vip.monthly)}
            period="month"
            lotus={vip.lotusMonthlyIncluded}
            benefits={vip.benefits}
            ctaText="Subscribe monthly"
            ctaHref="/signup"
          />
          <Card
            title={`${vip.title} Annual`}
            price={fmtPrice(vip.annual)}
            period="year"
            lotus={vip.lotusMonthlyIncluded}
            benefits={[`2 months free vs monthly`, ...vip.benefits]}
            ctaText="Subscribe annual"
            ctaHref="/signup"
            highlight
          />
          <Card
            title={`${gold.title} Monthly`}
            price={fmtPrice(gold.monthly)}
            period="month"
            lotus={gold.lotusMonthlyIncluded}
            benefits={gold.benefits}
            ctaText="Subscribe Gold monthly"
            ctaHref="/signup"
          />
          <Card
            title={`${gold.title} Annual`}
            price={fmtPrice(gold.annual)}
            period="year"
            lotus={gold.lotusMonthlyIncluded}
            benefits={[`2 months free vs monthly`, ...gold.benefits]}
            ctaText="Subscribe Gold annual"
            ctaHref="/signup"
            highlight
          />
        </div>
      </section>
    </main>
  );
}

export default function VipPage() {
  return (
    <Suspense fallback={<div style={{ padding: 32 }}>Loading…</div>}>
      <VipContent />
    </Suspense>
  );
    }
