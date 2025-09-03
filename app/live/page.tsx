/* eslint-disable react/no-unknown-property */
// @ts-nocheck
"use client";

import { useMemo, useState } from "react";
import GiftButton from "../../components/GiftButton";

/* Helpers pays/drapeau */
const countryName = (code: string) =>
  new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
const countryFlag = (code: string) =>
  code.toUpperCase().replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));

const LIVES = [
  { slug:"alice", title:"Showcase — Alice",  cover:"/avatars/alice.jpg",  liveNow:true,  time:"Tonight 9:00 PM",  country:"US", languages:["English","French"] },
  { slug:"bella", title:"VIP Talk — Bella",  cover:"/avatars/bella.jpg",  liveNow:false, time:"Tomorrow 8:30 PM", country:"FR", languages:["French"] },
  { slug:"cora",  title:"Acoustic Set — Cora",cover:"/avatars/cora.jpg", liveNow:false, time:"Saturday 7:00 PM", country:"ES", languages:["Spanish","English"] },
  { slug:"dana",  title:"Studio — Dana",      cover:"/avatars/dana.jpg", liveNow:false, time:"Sunday 6:30 PM",   country:"DE", languages:["German","English"] },
  { slug:"emi",   title:"Workshop — Emi",     cover:"/avatars/emi.jpg",  liveNow:false, time:"Monday 5:00 PM",   country:"MA", languages:["Arabic","French","English"] },
];

export default function LivePage() {
  const [country, setCountry]   = useState("");
  const [language, setLanguage] = useState("");
  const [query, setQuery]       = useState("");

  const allCountries = useMemo(() => Array.from(new Set(LIVES.map(l => l.country))).sort(), []);
  const allLanguages = useMemo(() => Array.from(new Set(LIVES.flatMap(l => l.languages))).sort(), []);

  const results = useMemo(() => {
    return LIVES.filter(l => {
      const okCountry = country ? l.country === country : true;
      const okLang    = language ? l.languages.includes(language) : true;
      const okQuery   = query ? l.title.toLowerCase().includes(query.toLowerCase()) : true;
      return okCountry && okLang && okQuery;
    });
  }, [country, language, query]);

  return (
    <main style={{ minHeight:"100vh", background:"linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)", color:"#f5f5f5", fontFamily:'system-ui,"Segoe UI",Roboto,Arial,sans-serif' }}>
      {/* Header simple */}
      <header style={{ position:"sticky", top:0, zIndex:40, backdropFilter:"blur(8px)", background:"rgba(43,13,13,0.88)", borderBottom:"1px solid rgba(212,175,55,0.18)" }}>
        <nav style={{ maxWidth:1100, margin:"0 auto", padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
          <a href="/" style={{ color:"#D4AF37", fontWeight:800 }}>Velvet House</a>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap", fontWeight:700 }}>
            <a href="/vip">VIP</a><a href="/gifts">Gifts</a><a href="/dashboard">Dashboard</a><a href="/contact">Contact</a><a href="/cgu">Terms</a>
          </div>
        </nav>
      </header>

      {/* Title */}
      <section style={{ maxWidth:1100, margin:"20px auto 12px", padding:"0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize:"clamp(22px,5.8vw,34px)", margin:0, textAlign:"center" }}>
          Upcoming & current live sessions from our creators.
        </h1>
      </section>

      {/* Filters compact */}
      <section style={{ maxWidth:1100, margin:"10px auto", padding:"0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))" }}>
          <select className="select-velvet" value={country} onChange={e=>setCountry(e.target.value)}>
            <option value="">All countries</option>
            {allCountries.map(c => <option key={c} value={c}>{countryFlag(c)} {countryName(c)}</option>)}
          </select>
          <select className="select-velvet" value={language} onChange={e=>setLanguage(e.target.value)}>
            <option value="">All languages</option>
            {allLanguages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <input className="input-velvet" placeholder="Search title or description..." value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <div style={{ marginTop:10 }}>
          <button className="btn3d btn3d--outline-gold" onClick={()=>{ setCountry(""); setLanguage(""); setQuery(""); }} style={{ width:"100%" }}>
            Reset filters
          </button>
        </div>
      </section>

      {/* Grid compact */}
      <section style={{ maxWidth:1100, margin:"14px auto 30px", padding:"0 16px" }}>
        <div className="cards-grid">
          {results.map(live => (
            <article key={live.slug} className="card">
              {/* Cover + overlays */}
              <a href={`/u/${live.slug}`} className="card-cover" aria-label={`Open ${live.slug} profile`}>
                <img
                  src={live.cover || "/avatars/default.jpg"}
                  alt={live.slug}
                  onError={(e)=>{ e.currentTarget.src="/avatars/default.jpg"; e.currentTarget.onerror=null; }}
                />
                <div className="card-gradient" />
                {live.liveNow && <span className="badge-live">LIVE</span>}
                <span className="badge-flag">{countryFlag(live.country)}</span>
              </a>

              {/* Body */}
              <div className="card-body">
                <a href={`/u/${live.slug}`} style={{ textDecoration:"none", color:"#D4AF37", fontWeight:800 }}>
                  {live.title}
                </a>
                <div style={{ color:"#e9dfcf" }}>{live.time}</div>

                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {live.languages.slice(0,2).map(l => <span key={l} className="pill">{l}</span>)}
                  {live.languages.length > 2 && <span className="pill">+{live.languages.length-2}</span>}
                </div>

                <div className="actions-3col">
                  <a href={`/u/${live.slug}`}      className="btn3d btn3d--velvet btn3d--sm">Profile</a>
                  <a href={`/u/${live.slug}/live`} className="btn3d btn3d--gold   btn3d--sm">Join</a>
                  <GiftButton target={live.slug}   className="btn3d btn3d--platinum btn3d--sm" label="Gift" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <div style={{ marginTop:16, padding:14, borderRadius:12, border:"1px solid rgba(212,175,55,0.22)", background:"rgba(0,0,0,0.25)", color:"#d7c9b3", textAlign:"center" }}>
            No live found with these filters.
          </div>
        )}
      </section>
    </main>
  );
              }
