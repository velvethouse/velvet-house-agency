'use client';

import { useState } from "react";

function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(10px)",
        background: "rgba(11,11,15,0.8)",
        borderBottom: "1px solid #1f1f25",
        zIndex: 50
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: 0.5, fontSize: 18 }}>
          <span style={{ opacity: 0.8, marginRight: 8 }}>🌸</span>
          Velvet House Agency
          <span style={{ opacity: 0.8, marginLeft: 8 }}>🦋</span>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 15, flexWrap: "wrap" }}>
          <a href="/live" style={{ color: "#cfcfd6", textDecoration: "none" }}>Live</a>
          <a href="/vip" style={{ color: "#cfcfd6", textDecoration: "none" }}>VIP</a>
          <a href="/gifts" style={{ color: "#cfcfd6", textDecoration: "none" }}>Gifts</a>
          <a href="/dashboard" style={{ color: "#cfcfd6", textDecoration: "none" }}>Dashboard</a>
          <a href="/#about" style={{ color: "#cfcfd6", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#cfcfd6", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export const metadata = { title: "Contact | Velvet House Agency" };

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true); // démo (branchera Formspree/Resend plus tard)
  }

  return (
    <main>
      <Nav />

      <section style={{maxWidth: 900, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7"}}>
        <header style={{display:"grid", gap:6, marginBottom:20}}>
          <h1 style={{margin:0}}>Contact</h1>
          <p style={{color:"#cfcfd6", margin:0}}>
            Écris-nous pour toute question (partenariats, VIP, créatrices, agences).
          </p>
        </header>

        {!sent ? (
          <form onSubmit={onSubmit} style={{display:"grid", gap:12}}>
            <label style={{display:"grid", gap:6}}>
              <span>Nom</span>
              <input
                name="name"
                required
                placeholder="Votre nom"
                style={{padding:"12px 14px", borderRadius:10, border:"1px solid #2a2a33", background:"#0f0f15", color:"#e7e7ee"}}
              />
            </label>

            <label style={{display:"grid", gap:6}}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="votre@email.com"
                style={{padding:"12px 14px", borderRadius:10, border:"1px solid #2a2a33", background:"#0f0f15", color:"#e7e7ee"}}
              />
            </label>

            <label style={{display:"grid", gap:6}}>
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Votre message…"
                style={{padding:"12px 14px", borderRadius:10, border:"1px solid #2a2a33", background:"#0f0f15", color:"#e7e7ee", resize:"vertical"}}
              />
            </label>

            <div style={{display:"flex", gap:12, alignItems:"center", marginTop:6}}>
              <button
                type="submit"
                style={{padding:"12px 18px", borderRadius:12, border:"1px solid #2a2a33", background:"#8257e6", color:"#fff", fontWeight:500, cursor:"pointer"}}
              >
                Envoyer
              </button>
              <a
                href="mailto:contact@velvethouseagency.com"
                style={{textDecoration:"none", color:"#aeb8ff"}}
              >
                ou nous écrire par email
              </a>
            </div>
          </form>
        ) : (
          <div style={{
            border:"1px solid #1f1f25",
            borderRadius:14,
            padding:18,
            background:"rgba(15,15,21,0.6)",
            color:"#cfcfd6"
          }}>
            ✅ Merci ! Votre message a été pris en compte (démo).
            <div style={{marginTop:10}}>
              Vous pouvez aussi écrire à{" "}
              <a href="mailto:contact@velvethouseagency.com" style={{color:"#aeb8ff"}}>
                contact@velvethouseagency.com
              </a>.
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
