/* eslint-disable react/no-unknown-property */
// @ts-nocheck
"use client";

import { useEffect, useMemo, useState } from "react";
import GiftButton from "../../components/GiftButton";

const countryName = (c: string) => new Intl.DisplayNames(["en"], { type: "region" }).of(c) ?? c;
const countryFlag = (code: string) => code.toUpperCase().replace(/./g, (ch) => String.fromCodePoint(127397 + ch.charCodeAt(0)));

const LIVES = [
  { slug:"alice", title:"Showcase — Alice",  cover:"/avatars/alice.jpg",  liveNow:true,  time:"Tonight 9:00 PM",  country:"US", languages:["English","French"] },
  { slug:"bella", title:"VIP Talk — Bella",  cover:"/avatars/bella.jpg",  liveNow:false, time:"Tomorrow 8:30 PM", country:"FR", languages:["French"] },
  { slug:"cora",  title:"Acoustic Set — Cora",cover:"/avatars/cora.jpg", liveNow:false, time:"Saturday 7:00 PM", country:"ES", languages:["Spanish","English"] },
  { slug:"dana",  title:"Studio — Dana",      cover:"/avatars/dana.jpg", liveNow:false, time:"Sunday 6:30 PM",   country:"DE", languages:["German","English"] },
  { slug:"emi",   title:"Workshop — Emi",     cover:"/avatars/emi.jpg",  liveNow:false, time:"Monday 5:00 PM",   country:"MA", languages:["Arabic","French","English"] },
];

export default function LivePage() {
  const [hasGod, setHasGod] = useState(false);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get("god") === "1") {
        localStorage.setItem("vh_hasGod", "1");
      }
      setHasGod(localStorage.getItem("vh_hasGod") === "1");
    } catch {}
  }, []);

  const [country, setCountry]   = useState("");
  const [language, setLanguage] = useState("");
  const [query, setQuery]       = useState("");

  const allCountries = useMemo(() => Array.from(new Set(LIVES.map(l => l.country))).sort(), []);
  const allLanguages = useMemo(() => Array.from(new Set(LIVES.flatMap(l => l.languages))).sort(), []);

  const results = useMemo(() => {
    return LIVES.filter(l => {
      const okC = country ? l.country === country : true;
      const okL = language ? l.languages.includes(language) : true;
      const okQ = query ? l.title.toLowerCase().includes(query.toLowerCase()) : true;
      return okC && okL && okQ;
    });
  }, [country, language, query]);

  return (
    <main style={{ minHeight:"100vh", background:"linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)", color:"#f5f5f5", fontFamily:'system-ui,"Segoe UI",Roboto,Arial,sans-serif' }}>
      {/* Bannière GOD (si activée) */}
      {hasGod && (
        <div className="god-banner">
          GOD AWAKENING — Exclusive effects enabled
          <span className="small">Your 100,000 Lotus pack unlocked the GOD game</span>
        </div>
      )}

      {/* Titre */}
      <section style={{ maxWidth:1100, margin:"20px auto 12px", padding:"0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize:"clamp(22px,5.8vw,34px)", margin:0, textAlign:"center" }}>
          Upcoming & current live sessions from our creators.
        </h1>
      </section>

      {/* Filtres */}
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
          <input className="input-velvet" placeholder="Search title or description…" value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
      </section>

      {/* Cartes */}
      <section style={{ maxWidth:1100, margin:"14px auto 30px", padding:"0 16px" }}>
        <div className="cards-grid">
          {results.map(live => (
            <article key={live.slug} className="card">
              <a href={`/u/${live.slug}`} className="card-cover" aria-label={`Open ${live.slug} profile`}>
                <img src={live.cover || "/avatars/default.jpg"} alt={live.slug} onError={(e)=>{ e.currentTarget.src="/avatars/default.jpg"; e.currentTarget.onerror=null; }} />
                <div className="card-gradient" />
                {live.liveNow && <span className="badge-live">LIVE</span>}
                <span className="badge-flag">{countryFlag(live.country)}</span>
              </a>
              <div className="card-body">
                <a href={`/u/${live.slug}`} style={{ textDecoration:"none", color:"#D4AF37", fontWeight:800 }}>{live.title}</a>
                <div style={{ color:"#e9dfcf" }}>{live.time}</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {live.languages.slice(0,2).map(l => <span key={l} className="pill">{l}</span>)}
                  {live.languages.length>2 && <span className="pill">+{live.languages.length-2}</span>}
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
      </section>
    </main>
  );
      }
