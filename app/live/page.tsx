/* eslint-disable react/no-unknown-property */
// @ts-nocheck
"use client";

import { useMemo, useState } from "react";
import GiftButton from "@/components/GiftButton"; // ✅ alias vers /components

/** Demo data (modifiable) */
const LIVES = [
  { title: "Showcase — Alice", time: "Tonight 9:00 PM", slug: "alice", desc: "Live showcase + Q&A", country: "US", languages: ["English", "French"] },
  { title: "VIP Talk — Bella",  time: "Tomorrow 8:30 PM", slug: "bella", desc: "Private VIP session",    country: "FR", languages: ["French"] },
  { title: "Acoustic Set — Cora", time: "Saturday 7:00 PM", slug: "cora", desc: "Acoustic & chill",       country: "ES", languages: ["Spanish", "English"] },
  { title: "Studio — Dana",      time: "Sunday 6:30 PM",   slug: "dana", desc: "Behind the scenes",       country: "DE", languages: ["German", "English"] },
  { title: "Workshop — Emi",     time: "Monday 5:00 PM",   slug: "emi",  desc: "Creative workshop",       country: "MA", languages: ["Arabic", "French", "English"] },
];

const allCountries = Array.from(new Set(LIVES.map(x => x.country))).sort();
const allLanguages = Array.from(new Set(LIVES.flatMap(x => x.languages))).sort();

export default function LivePage() {
  const [country, setCountry]   = useState("all");
  const [language, setLanguage] = useState("all");
  const [query, setQuery]       = useState("");

  const results = useMemo(() => {
    return LIVES.filter(x => {
      const okCountry = country === "all" ? true : x.country === country;
      const okLang    = language === "all" ? true : x.languages.includes(language);
      const okQuery   = query.trim()
        ? (x.title + " " + x.desc).toLowerCase().includes(query.toLowerCase())
        : true;
      return okCountry && okLang && okQuery;
    });
  }, [country, language, query]);

  /** Styles */
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
    color: "#f5f5f5",
    fontFamily: "system-ui, Segoe UI, sans-serif",
  } as const;

  const navStyle = {
    position: "sticky" as const,
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(8px)",
    background: "rgba(43,13,13,0.88)",
    borderBottom: "1px solid rgba(212,175,55,0.18)",
  };

  const shell = {
    maxWidth: 1100, margin: "0 auto", padding: "12px 16px",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
  } as const;

  const cardStyle = {
    textDecoration: "none",
    borderRadius: 14,
    padding: 16,
    background: "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.30))",
    border: "1px solid rgba(212,175,55,0.22)",
    boxShadow: "0 10px 26px rgba(0,0,0,0.30)",
    color: "#f5f5f5",
    display: "grid",
    gap: 8,
  } as const;

  const inputStyle = {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(212,175,55,0.35)",
    background: "rgba(0,0,0,0.35)",
    color: "#f5f5f5",
    outline: "none",
  } as const;

  const outlineBtn = {
    textDecoration: "none",
    fontWeight: 800,
    padding: "12px 18px",
    borderRadius: 12,
    border: "2px solid #D4AF37",
    color: "#D4AF37",
    flex: "1 1 120px",
    textAlign: "center" as const,
  };

  const goldBtn = {
    background: "#D4AF37",
    color: "#2c0d0d",
    textDecoration: "none",
    fontWeight: 800,
    padding: "12px 18px",
    borderRadius: 12,
    border: "1px solid #B8860B",
    flex: "1 1 120px",
    textAlign: "center" as const,
  };

  const resetFilters = () => { setCountry("all"); setLanguage("all"); setQuery(""); };

  return (
    <main style={pageStyle}>
      {/* Header */}
      <header style={navStyle}>
        <nav style={shell}>
          <a href="/" style={{ color: "#D4AF37", fontWeight: 800 }}>Velvet House</a>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700 }}>
            <a href="/vip">VIP</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/contact">Contact</a>
            <a href="/cgu">Terms</a>
          </div>
        </nav>
      </header>

      {/* Title */}
      <section style={{ maxWidth: 1100, margin: "24px auto 10px", padding: "0 16px" }}>
        <h1 style={{ margin: 0, color: "#D4AF37", fontSize: "clamp(26px, 6vw, 40px)", textAlign: "left" }}>Live</h1>
        <p  style={{ margin: "8px 0 0", color: "#e9dfcf" }}>Upcoming & current live sessions from our creators.</p>
      </section>

      {/* Filters */}
      <section
        style={{
          maxWidth: 1100, margin: "12px auto 10px", padding: "0 16px",
          display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        <div style={{ display: "grid", gap: 6 }}>
          <label style={{ color: "#D4AF37", fontWeight: 700 }}>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle as any}>
            <option value="all">All countries</option>
            {allCountries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label style={{ color: "#D4AF37", fontWeight: 700 }}>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={inputStyle as any}>
            <option value="all">All languages</option>
            {allLanguages.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label style={{ color: "#D4AF37", fontWeight: 700 }}>Search</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="title or description…"
            style={inputStyle}
          />
        </div>

        <div style={{ display: "grid", gap: 6, alignContent: "end" }}>
          <span style={{ color: "#d7c9b3", fontSize: 14 }}>
            {results.length} result{results.length !== 1 ? "s" : ""}
          </span>
          <button onClick={resetFilters} style={{ ...outlineBtn, borderRadius: 10, padding: "8px 12px", fontWeight: 700 }}>
            Reset filters
          </button>
        </div>
      </section>

      {/* Results */}
      <section
        style={{
          maxWidth: 1100, margin: "12px auto 40px", padding: "0 16px",
          display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {results.length === 0 && (
          <div
            style={{
              gridColumn: "1 / -1",
              color: "#d7c9b3", padding: "14px", borderRadius: 12,
              border: "1px solid rgba(212,175,55,0.22)", background: "rgba(0,0,0,0.25)",
            }}
          >
            No live found with these filters.
          </div>
        )}

        {results.map((item) => (
          <a key={item.slug} href={`/u/${item.slug}`} style={cardStyle}>
            <div style={{ fontWeight: 800, color: "#D4AF37" }}>{item.title}</div>
            <div style={{ color: "#d7c9b3" }}>{item.time}</div>
            <div style={{ color: "#e9dfcf", opacity: 0.95 }}>{item.desc}</div>
            <div style={{ color: "#d7c9b3", fontSize: 13 }}>
              <b>Country:</b> {item.country} · <b>Languages:</b> {item.languages.join(", ")}
            </div>

            {/* Actions (with GiftButton) */}
            <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
              <a href={`/u/${item.slug}`}       style={outlineBtn}>View profile</a>
              <a href={`/u/${item.slug}/live`}  style={goldBtn}>Join live</a>
              <div style={{ flex: "1 1 120px", display: "flex", justifyContent: "center" }}>
                <GiftButton target={item.slug} />
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
                                          }
