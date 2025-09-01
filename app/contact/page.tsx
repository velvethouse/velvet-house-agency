'use client';

import { useState } from "react";

export const metadata = { title: "Contact | Velvet House Agency" };

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Ici on simulera l’envoi (Formspree/Resend plus tard)
    setSent(true);
  }

  return (
    <main style={{maxWidth: 900, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7"}}>
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
    </main>
  );
}
