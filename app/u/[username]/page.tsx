// app/u/[username]/page.tsx
"use client";

import MediaCard from "../../../components/MediaCard";

type Profile = {
  displayName: string;
  avatar: string;
  country: string;
  languages: string[];
  bio?: string;
  followers?: number;
  likes?: number;
  posts?: number;
};

const DEMO_PROFILES: Record<string, Profile> = {
  alice: { displayName: "Alice", avatar: "/avatars/alice.jpg", country: "US", languages: ["English","French"], bio: "Showcase & Q&A lover.", followers: 13300, likes: 512000, posts: 84 },
  bella: { displayName: "Bella", avatar: "/avatars/bella.jpg", country: "FR", languages: ["French"], bio: "VIP talks & lifestyle.", followers: 21400, likes: 820000, posts: 91 },
  cora:  { displayName: "Cora",  avatar: "/avatars/cora.jpg",  country: "ES", languages: ["Spanish","English"], bio: "Acoustic vibes.", followers: 9400,  likes: 233000, posts: 48 },
  dana:  { displayName: "Dana",  avatar: "/avatars/dana.jpg",  country: "DE", languages: ["German","English"],  bio: "Studio behind-the-scenes.", followers: 7800,  likes: 154000, posts: 41 },
  emi:   { displayName: "Emi",   avatar: "/avatars/emi.jpg",   country: "MA", languages: ["Arabic","French","English"], bio: "Creative workshops.", followers: 15600, likes: 364000, posts: 66 },
};

/** Rôle visiteur (DEMO) : change "donor" -> "vip" pour tester */
const viewerTier: "guest" | "donor" | "vip" = "donor";

/** Visibilité par rôle (non-NSFW) */
const VISIBILITY = {
  guest: { photos: 0,   videos: 0 },
  donor: { photos: 10,  videos: 5 },
  vip:   { photos: 100, videos: 20 },
};

/** Limites d’upload côté créatrice (techniques) */
const CREATOR_LIMITS = { photos: 100, videos: 20 };

export default function CreatorPage({ params }: { params: { username: string } }) {
  const user = (params.username || "").toLowerCase();
  const data: Profile =
    DEMO_PROFILES[user] || {
      displayName: user,
      avatar: "/avatars/default.jpg",
      country: "—",
      languages: [],
      bio: "Welcome to my world.",
      followers: 0,
      likes: 0,
      posts: 0,
    };

  /** Gallerie démo (illimitée dans le principe) — marque NSFW sur les médias dénudés */
  const RAW: Array<{ src: string; type: "image" | "video"; isNSFW?: boolean; gift?: string }> = [
    { src: data.avatar,          type: "image", isNSFW: false },
    { src: "/media/sample1.jpg", type: "image", isNSFW: true,  gift: "Lotus ✨" },
    { src: "/media/sample2.jpg", type: "image", isNSFW: false },
    { src: "/media/teaser1.mp4", type: "video", isNSFW: true,  gift: "Butterfly 🦋" },
    { src: "/media/sample3.jpg", type: "image", isNSFW: true,  gift: "Diamond 💎" },
    { src: "/media/sample4.jpg", type: "image", isNSFW: false },
    // … ajoute autant que tu veux
  ];

  // Sépare images/vidéos puis applique limite créatrice (100/20)
  const photosAll = RAW.filter(m => m.type === "image").slice(0, CREATOR_LIMITS.photos);
  const videosAll = RAW.filter(m => m.type === "video").slice(0, CREATOR_LIMITS.videos);

  // Applique visibilité par rôle (uniquement pour non-NSFW)
  const visiblePhotoCount = VISIBILITY[viewerTier].photos;
  const visibleVideoCount = VISIBILITY[viewerTier].videos;

  // Photos visibles = non-NSFW dans le quota ; NSFW = toujours lock gift
  const photosVisible = photosAll.filter(p => !p.isNSFW).slice(0, visiblePhotoCount);
  const photosVIPRange = photosAll.filter(p => !p.isNSFW).slice(visiblePhotoCount); // non-NSFW restants (VIP peut les voir… mais toi tu veux illimité non-NSFW pour VIP: on les montre si viewerTier='vip')

  // Vidéos visibles = non-NSFW dans le quota ; NSFW = toujours lock gift
  const videosVisible = videosAll.filter(v => !v.isNSFW).slice(0, visibleVideoCount);
  const videosVIPRange = videosAll.filter(v => !v.isNSFW).slice(visibleVideoCount);

  // NSFW : toujours lock gift (même pour VIP), mais on les affiche dans la galerie
  const photosNSFW = photosAll.filter(p => p.isNSFW);
  const videosNSFW = videosAll.filter(v => v.isNSFW);

  // Construit la liste finale à afficher (ordre simple : photos puis vidéos)
  const FINAL = [
    // Photos non-NSFW visibles (selon rôle)
    ...photosVisible.map(p => ({ ...p, locked: false, isNSFW: false })),
    // Photos non-NSFW hors quota : visibles si VIP, sinon pas (tu peux changer pour les montrer en lock VIP si tu préfères)
    ...(viewerTier === "vip"
      ? photosVIPRange.map(p => ({ ...p, locked: false, isNSFW: false }))
      : []),
    // Photos NSFW : toujours lock par gift
    ...photosNSFW.map(p => ({ ...p, locked: true, isNSFW: true })),

    // Vidéos non-NSFW visibles
    ...videosVisible.map(v => ({ ...v, locked: false, isNSFW: false })),
    // Vidéos non-NSFW hors quota : visibles si VIP
    ...(viewerTier === "vip"
      ? videosVIPRange.map(v => ({ ...v, locked: false, isNSFW: false }))
      : []),
    // Vidéos NSFW : toujours lock par gift
    ...videosNSFW.map(v => ({ ...v, locked: true, isNSFW: true })),
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(8px)",
          background: "rgba(43,13,13,0.88)",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <nav
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <a href="/live" style={{ color: "#D4AF37", fontWeight: 800 }}>← Back to Live</a>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontWeight: 700 }}>
            <a href="/vip">VIP</a><a href="/gifts">Gifts</a><a href="/dashboard">Dashboard</a>
          </div>
        </nav>
      </header>

      {/* Hero + avatar à gauche du pseudo */}
      <section style={{ maxWidth: 1000, margin: "16px auto", padding: "0 16px" }}>
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(212,175,55,0.22)",
            boxShadow: "0 10px 26px rgba(0,0,0,.30)",
            background: "linear-gradient(180deg, rgba(15,15,15,.45), rgba(15,15,15,.30))",
          }}
        >
          <div style={{ position: "relative", height: 220, background: "#2c0d0d" }}>
            <img
              src={data.avatar}
              alt={data.displayName}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/avatars/default.jpg";
                (e.currentTarget as HTMLImageElement).onerror = null;
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(1.05)" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.6) 30%, rgba(0,0,0,0) 70%)" }} />

            <div className="hero-row" style={{ position: "absolute", left: 16, right: 16, bottom: 12 }}>
              <div className="avatar-ring">
                <img
                  src={data.avatar}
                  alt={data.displayName}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/avatars/default.jpg";
                    (e.currentTarget as HTMLImageElement).onerror = null;
                  }}
                />
              </div>
              <div className="hero-text">
                <h1 style={{ margin: 0, fontSize: "clamp(20px,6vw,32px)", color: "#D4AF37", lineHeight: 1.1 }}>
                  {data.displayName}
                </h1>
                <div style={{ fontSize: 14, color: "#e9dfcf", opacity: 0.95, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Country: {data.country} · Languages: {data.languages.join(", ") || "—"}
                </div>
                <div style={{ fontSize: 13, color: "#d7c9b3", opacity: 0.9, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {data.bio}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ padding: "12px 16px" }}>
            <div className="stats-row">
              <span className="stat-pill">Followers: {data.followers?.toLocaleString()}</span>
              <span className="stat-pill">Likes: {data.likes?.toLocaleString()}</span>
              <span className="stat-pill">Posts: {data.posts?.toLocaleString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div style={{ padding: 16 }}>
            <div className="btn-row-3">
              <a className="btn3d btn3d--velvet" href={`/u/${user}`}>Follow</a>
              <a className="btn3d btn3d--gold"   href={`/u/${user}/chat`}>Chat</a>
              <a className="btn3d btn3d--platinum" href="#gallery">Send gift</a>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie — règles de visibilité + NSFW=gift */}
      <section id="gallery" style={{ maxWidth: 1000, margin: "10px auto 30px", padding: "0 16px" }}>
        <h2 className="gold-gradient-text" style={{ fontSize: "clamp(18px,4.2vw,26px)", textAlign: "left", marginBottom: 10 }}>
          Gallery
        </h2>

        <div className="media-grid">
          {FINAL.map((m, i) => (
            <MediaCard
              key={i}
              src={m.src}
              type={m.type as "image" | "video"}
              watermark="VELVET HOUSE"
              username={user}
              isNSFW={!!m.isNSFW}
              giftUnlocked={false}       // ← passera à true après paiement gift (backend)
              requiredGiftLabel={m.gift || "Gift ✨"}
              target={user}
            />
          ))}
        </div>
      </section>
    </main>
  );
                       }
import ScheduleGrid from "../../../components/ScheduleGrid";
