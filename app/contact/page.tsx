'use client';

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main style={{maxWidth:900,margin:"0 auto",padding:"32px 20px",color:"#f5f5f7"}}>
      <h1>Contact</h1>
      {!sent ? (
        <form onSubmit={onSubmit} style={{display:"grid",gap:12}}>
          <label>
            Nom
            <input name="name" required style={{display:"block",padding:"8px",marginTop:"4px"}}/>
          </label>
          <label>
            Email
            <input type="email" name="email" required style={{display:"block",padding:"8px",marginTop:"4px"}}/>
          </label>
          <label>
            Message
            <textarea name="message" required rows={5} style={{display:"block",padding:"8px",marginTop:"4px"}}/>
          </label>
          <button type="submit" style={{padding:"10px 16px",borderRadius:8,background:"#d4a437",color:"#2c0d0d",fontWeight:600}}>
            Envoyer
          </button>
        </form>
      ) : (
        <p>✅ Merci ! Votre message a bien été envoyé (démo).</p>
      )}
    </main>
  );
}
