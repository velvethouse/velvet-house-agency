// app/vip/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Tier = {
  title: string;
  monthly: number;
  annual: number;
  lotusMonthlyIncluded: number;
  benefits: string[];
};
type TiersResponse = { vip: Tier; "vip-gold": Tier };

export default function VipPage() {
  const fmtNum = (n: number) => new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(n);
  const fmtPrice = (n: number) => `${fmtNum(n)}€`;

  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "";
  const from = searchParams.get("from") || "";

  // <<< état simple (zéro prise de tête TS) >>>
  const [tiers, setTiers] = useState<TiersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch("/api/tiers", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as TiersResponse;
        if (!cancelled) setTiers(json);
      } catch (e: any) {
        if (!cancelled) setErr(e?.message || "Failed to load tiers");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const banner = useMemo(() => {
    if (reason === "gold-required")
      return "VIP Gold required: unlock lifetime storage for VIP chat & DM media (+5% Lotus bonus on every pack).";
    if (reason === "vip-required")   return "VIP required to access this feature.";
    if (reason === "vip-or-gold")    return "VIP or VIP Gold required to access this feature.";
    return "";
  }, [reason]);

  const ProgressBar = ({ value = 100 }: { value?: number }) => (
    <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,.15)", borderRadius: 999 }}>
      <div style={{ width: `${Math.min(Math.max(value, 0), 100)}%`, height: "100%", background: "linear-gradient(90deg,#D4AF37,#f6dd9d)", borderRadius: 999 }} />
    </div>
  );

  const Card = ({
    title, price, period, lotus, benefits, ctaText, ctaHref, highlight = false,
  }: {
    title: string; price: string; period: "month" | "year";
    lotus: number; benefits: string[]; ctaText: string; ctaHref: string; highlight?: boolean;
  }) => (
    <article className="card" style={{
      display: "grid", gap: 12, padding: 18,
      borderColor: highlight ? "rgba(212,175,55,0.35)" : undefined,
      boxShadow: highlight ? "0 10px 34px rgba(0,0,0,.36)" : undefined,
    }}>
      <h2 style={{ margin: 0, color: "#D4AF37" }}>{title}</h2>
      <div style={{ fontSize: 32, fontWeight: 800 }}>
        {price} <span style={{ fontSize: 14, color: "#d7c9b3", fontWeight: 600 }}>/ {period}</span>
      </div>
      <div style={{ color: "#d7c9b3" }}>Includes <b>{fmtNum(lotus)} Lotus</b> per month</div>
      <ProgressBar value={100} />
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
        {benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href={ctaHref} className={`btn3d ${highlight ? "btn3d--velvet" : "btn3d--gold"}`}>{ctaText}</a>
    </article>
  );

  // -- UI wrapper
  const Shell = ({ children }: { children: React.ReactNode }) => (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
      color: "#f5f5f5",
      fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
    }}>
      {banner && (
        <div style={{ maxWidth: 1100, margin: "14px auto 0", padding: "0 16px" }}>
          <div className="card" style={{
            padding: 12, borderColor: "rgba(212,175,55,.5)",
            background: "linear-gradient(180deg, rgba(212,175,55,.12), rgba(212,175,55,.06))",
          }}>
            <div style={{ color: "#D4AF37", fontWeight: 800 }}>Upgrade required</div>
            <div style={{ color: "#e9dfcf" }}>
              {banner} {from ? <span style={{ opacity: 0.8 }}> (from: {from})</span> : null}
            </div>
          </div>
        </div>
      )}

      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px", textAlign: "center" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(28px,6.5vw,44px)", margin: 0 }}>Become VIP</h1>
        <p style={{ margin: "10px auto 0", maxWidth: 820, color: "#e9dfcf", lineHeight: 1.7 }}>
          Unlock full galleries (non-NSFW), priority in lives & chats, exclusive rewards, and premium access across Velvet House.
          NSFW media remain <b>gift-unlock only</b> — even for VIP & VIP Gold.
        </p>
      </section>

      {children}

      <section style={{ maxWidth: 900, margin: "0 auto 18px", padding: "0 16px", textAlign: "center" }}>
        <div className="btn-row-2" style={{ maxWidth: 560, margin: "0 auto" }}>
          <a href="/lotus" className="btn3d btn3d--gold">Buy Lotus</a>
          <a href="/contact" className="btn3d btn3d--velvet">Contact Support</a>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ margin: 0, color: "#d7c9b3", fontSize: 13, lineHeight: 1.7 }}>
            <b>Legal / Notes:</b> Included Lotus are credited monthly upon renewal. Lotus have no monetary value and are
            non-refundable. NSFW media remain gift-unlock only. By subscribing you accept our{" "}
            <a href="/cgu" style={{ color: "#D4AF37", textDecoration: "none" }}>Terms</a>.
          </p>
        </div>
      </section>
    </main>
  );

  if (loading) {
    return (
      <Shell>
        <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
          <div className="card" style={{ padding: 16, textAlign: "center" }}>Loading VIP tiers…</div>
        </section>
      </Shell>
    );
  }

  if (err || !tiers) {
    return (
      <Shell>
        <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
          <div className="card" style={{ padding: 16, textAlign: "center", color: "#e67e22" }}>
            Error: {err || "No data"}
          </div>
        </section>
      </Shell>
    );
  }

  const vip = tiers.vip;
  const gold = tiers["vip-gold"];

  return (
    <Shell>
      {/* Tiers */}
      <section style={{ maxWidth: 1100, margin: "18px auto 10px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Card title={`${vip.title} Monthly`} price={fmtPrice(vip.monthly)} period="month"
                lotus={vip.lotusMonthlyIncluded} benefits={vip.benefits}
                ctaText="Subscribe monthly" ctaHref="/signup" />
          <Card title={`${vip.title} Annual`} price={fmtPrice(vip.annual)} period="year"
                lotus={vip.lotusMonthlyIncluded} benefits={[`2 months free vs monthly`, ...vip.benefits]}
                ctaText="Subscribe annual" ctaHref="/signup" highlight />
          <Card title={`${gold.title} Monthly`} price={fmtPrice(gold.monthly)} period="month"
                lotus={gold.lotusMonthlyIncluded} benefits={gold.benefits}
                ctaText="Subscribe Gold monthly" ctaHref="/signup" />
          <Card title={`${gold.title} Annual`} price={fmtPrice(gold.annual)} period="year"
                lotus={gold.lotusMonthlyIncluded} benefits={[`2 months free vs monthly`, ...gold.benefits]}
                ctaText="Subscribe Gold annual" ctaHref="/signup" highlight />
        </div>
      </section>

      {/* Compare */}
      <section style={{ maxWidth: 1100, margin: "16px auto 18px", padding: "0 16px" }}>
        <h2 style={{ margin: "0 0 10px 0", color: "#D4AF37", textAlign: "center", fontSize: "clamp(20px,4.5vw,28px)" }}>
          Compare VIP vs VIP Gold
        </h2>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start" }}>
          <article className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>VIP</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li>Full galleries (non-NSFW): up to <b>100 photos</b> & <b>20 videos</b></li>
              <li>Priority in live rooms & chat</li>
              <li>VIP badge & highlights</li>
              <li>Exclusive VIP drops & events</li>
              <li>Better rates on selected VIP-only items</li>
              <li><b>NSFW pay-per-item</b> (chat, DM, profile) — <b>3-day access</b></li>
              <li><b>Purchases visible</b> in VIP chat</li>
            </ul>
          </article>

          <article className="card" style={{ padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: 8 }}>VIP Gold</div>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, color: "#d7c9b3" }}>
              <li>Everything in VIP</li>
              <li>Extended galleries (non-NSFW): up to <b>300 photos</b> & <b>60 videos</b></li>
              <li>Top priority in lives & <b>Gold</b> reply in chat</li>
              <li>Gold badge & golden highlight</li>
              <li><b>+5% Lotus bonus</b> on every pack</li>
              <li>Gold Lounge (private events & early access)</li>
              <li>Cosmetic gold skins in Casino (no odds boost)</li>
              <li><b>NSFW pay-per-item</b> (chat, DM, profile)</li>
              <li><b>Lifetime storage</b> for <b>VIP chat & DM photos</b> (Library+)</li>
              <li><b>Silent purchases</b> (no chat broadcast)</li>
              <li><b>Incognito mode</b> (Live & Chat — appear as “Gold Member”)</li>
            </ul>
          </article>
        </div>
      </section>
    </Shell>
  );
        }
