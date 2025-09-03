// app/u/[username]/page.tsx
"use client";

import GiftButton from "../../../components/GiftButton";

const DEMO_PROFILES: Record<string, {
  displayName: string;
  avatar: string;
  country: string;
  languages: string[];
  bio?: string;
  followers?: number;
}> = {
  alice: { displayName: "Alice", avatar: "/avatars/alice.jpg", country: "US", languages: ["English","French"], bio: "Showcase & Q&A lover.", followers: 13300 },
  bella: { displayName: "Bella", avatar: "/avatars/bella.jpg", country: "FR", languages: ["French"], bio: "VIP talks & lifestyle.", followers: 21400 },
  cora:  { displayName: "Cora",  avatar: "/avatars/cora.jpg",  country: "ES", languages: ["Spanish","English"], bio: "Acoustic vibes.", followers: 9400 },
  dana:  { displayName: "Dana",  avatar: "/avatars/dana.jpg",  country: "DE", languages: ["German","English"],  bio: "Studio behind-the-scenes.", followers: 7800 },
  emi:   { displayName: "Emi",   avatar: "/avatars/emi.jpg",   country: "MA", languages: ["Arabic","French","English"], bio: "Creative workshops.", followers: 15600 },
};

export default function CreatorPage({ params }: { params: { username: string } }) {
  const user = params.username?.toLowerCase();
  const data = DEMO_PROFILES[user] ?? {
    displayName: user,
    avatar: "/avatars/default.jpg",
    country: "—",
    languages: [],
    bio: "Welcome to my world.",
    followers: 0,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Header simple */}
      <header
        style={{
          position: "sticky", top: 0, zIndex: 40, backdropFilter: "blur(8px)",
          background: "rgba(43,13,13,0.88)", borderBottom: "1px solid rgba(212,175,55,0.18)"
        }}
      >
        <nav
          style={{
            maxWidth: 1000, margin: "0 auto", padding: "12px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12
          }}
        >
          <a href="/live" style={{ color:"#D4AF37", fontWeight:800 }}>← Back to Live</a>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap", fontWeight:700 }}>
            <a href="/vip">VIP</a>
            <a href="/gifts">Gifts</a>
            <a href="/dashboard">Dashboard</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1000, margin: "16px auto", padding: "0 16px" }}>
        <div
          style={{
            borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 10px 26px rgba(0,0,0,.30)",
            position: "relative",
            background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
          }}
        >
          <div style={{ position:"relative", height: 220, background:"#2c0d0d" }}>
            <img
              src={data.avatar || "/avatars/default.jpg"}
              alt={data.displayName}
              onError={(e)=>{ e.currentTarget.src="/avatars/default.jpg"; e.currentTarget.onerror=null; }}
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", filter:"saturate(1.05)" }}
            />
            {/* Gradient pour lisibilité */}
            <div
              style={{
                position:"absolute", inset:0,
                background:"linear-gradient(to top, rgba(0,0,0,.6) 30%, rgba(0,0,0,0) 70%)"
              }}
            />
            <div style={{ position:"absolute", left:16, bottom:12 }}>
              <h1 style={{ margin:0, fontSize:"clamp(20px,6vw,32px)", color:"#D4AF37" }}>{data.displayName}</h1>
              <div style={{ fontSize:14, color:"#e9dfcf", opacity:.95 }}>
                Country: {data.country} · Languages: {data.languages.join(", ") || "—"}
              </div>
              <div style={{ fontSize:13, color:"#d7c9b3", opacity:.9 }}>{data.bio}</div>
            </div>
          </div>

          {/* Actions 3D – mêmes styles */}
          <div style={{ padding:16 }}>
            <div className="btn-row-3">
              <a className="btn3d btn3d--velvet"   href={`/u/${user}`}>Follow</a>
              <a className="btn3d btn3d--gold"     href={`/u/${user}/chat`}>Chat</a>
              <GiftButton target={user} className="btn3d btn3d--platinum" label="Send gift" />
            </div>
          </div>
        </div>
      </section>

      {/* More content (grid future) */}
      <section style={{ maxWidth: 1000, margin: "10px auto 30px", padding:"0 16px" }}>
        <h2 className="gold-gradient-text" style={{ fontSize:"clamp(18px,4.2vw,26px)", textAlign:"left" }}>
          Highlights
        </h2>
        <p style={{ textAlign:"left", color:"#d7c9b3" }}>
          Coming soon: videos, photos, achievements, VIP content…
        </p>
      </section>
    </main>
  );
          }
