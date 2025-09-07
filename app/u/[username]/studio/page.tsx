// app/u/[username]/studio/page.tsx
"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function StudioPage() {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const hasConfirmed = localStorage.getItem("studioConfirmed");
    if (hasConfirmed === "true") {
      setConfirmed(true);
    }
  }, []);

  if (confirmed) {
    redirect("/dashboard"); // 🔁 redirige vers le vrai dashboard une fois confirmé
    return null;
  }

  return (
    <main
      style={{
        maxWidth: 880,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
        color: "#f5f5f5",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "clamp(28px,5vw,42px)", marginBottom: 24 }}>
        🎥 Bienvenue dans ton espace streameuse
      </h1>

      <section
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: 24,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p>
          Avant de commencer tes lives, tu dois impérativement lire et comprendre le fonctionnement de Velvet House.
        </p>
        <ul style={{ paddingLeft: 24, marginTop: 16 }}>
          <li>
            🎁 <b>Les cadeaux</b> sont envoyés par les viewers. Chaque cadeau a une valeur en Lotus, et une animation unique.
          </li>
          <li>
            🏆 Tu gagnes <b>65% des revenus</b> (ou plus si tu es en agence), automatiquement reversés chaque jour si ton solde dépasse 25€.
          </li>
          <li>
            🚫 Les contenus strictement interdits : pornographie visible, violence, haine, drogue, mineurs. Nos modérateurs peuvent couper ton live sans préavis.
          </li>
          <li>
            🔒 Tu dois respecter le <b>planning</b> fixé, et répondre aux messages privés dans les 24h. En cas de litige, tout est enregistré.
          </li>
          <li>
            🧠 Tu es une ambassadrice de notre image : élégance, respect, mystère. Nous te formerons pour tirer le meilleur de toi-même.
          </li>
        </ul>

        {/* ✅ Bloc NOVA assistant */}
        <div
          style={{
            marginTop: 32,
            padding: 16,
            borderRadius: 10,
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.25)",
            fontStyle: "italic",
          }}
        >
          👋 <b>Nova</b> : Je suis ton assistante. Je suis là pour t’aider à comprendre chaque règle, à améliorer tes performances, et à faire de toi une streameuse inoubliable.
        </div>

        {/* ✅ Bouton de confirmation */}
        <button
          onClick={() => {
            localStorage.setItem("studioConfirmed", "true");
            setConfirmed(true);
          }}
          className="btn3d btn3d--velvet"
          style={{
            marginTop: 32,
            padding: "12px 20px",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 8,
            cursor: "pointer",
            background: "#D4AF37",
            color: "#1b0a0a",
            border: "none",
          }}
        >
          ✅ J’ai bien lu, je peux accéder à mon espace
        </button>
      </section>
    </main>
  );
}
