// app/u/[username]/page.tsx
"use client";

import { useMemo } from "react";
import Image from "next/image";
import ScheduleGrid from "../../../components/ScheduleGrid";

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

// Démo de quelques profils (tu peux garder/ajuster)
const DEMO_PROFILES: Record<string, Profile> = {
  alice: {
    displayName: "Alice",
    avatar: "/avatars/alice.jpg",
    country: "US",
    languages: ["English", "French"],
    bio: "Showcase & Q&A lover.",
    followers: 13300,
    likes: 512000,
    posts: 84,
  },
  bella: {
    displayName: "Bella",
    avatar: "/avatars/bella.jpg",
    country: "FR",
    languages: ["French"],
    bio: "VIP talks & lifestyle.",
    followers: 21400,
    likes: 820000,
    posts: 91,
  },
};

export default function CreatorPage({ params }: { params: { username: string } }) {
  const user = (params.username || "").toLowerCase();
  const data: Profile = useMemo(
    () =>
      DEMO_PROFILES[user] || {
        displayName: user || "Creator",
        avatar: "/avatars/default.jpg",
        country: "—",
        languages: [],
        bio: "Welcome to my world.",
        followers: 0,
        likes: 0,
        posts: 0,
      },
    [user]
  );

  // Détecter un mode "propriétaire" pour éditer le planning (URL ?owner=1)
  const isOwner =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("owner") === "1";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Hero cover + titre */}
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
            <Image
              src={data.avatar}
              alt={data.displayName}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", filter: "saturate(1.05)" }}
              onError={(e) => {
                (e.currentTarget as any).src = "/avatars/default.jpg";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.6) 30%, rgba(0,0,0,0) 70%)",
              }}
            />

            {/* Ligne avatar + pseudo */}
            <div
              style={{
                position: "absolute",
                left: 16,
                right: 16,
                bottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "nowrap",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #3d0e0e",
                  boxShadow: "0 0 0 2px #D4AF37",
                  background: "#2e0d0d",
                  flex: "0 0 64px",
                }}
              >
                <Image
                  src={data.avatar}
                  alt={data.displayName}
                  width={64}
                  height={64}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ minWidth: 0, flex: "1 1 auto" }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(20px,6vw,32px)",
                    color: "#D4AF37",
                    lineHeight: 1.1,
                  }}
                >
                  {data.displayName}
                </h1>
                <div
                  style={{
                    fontSize: 14,
                    color: "#e9dfcf",
                    opacity: 0.95,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Country: {data.country} · Languages:{" "}
                  {data.languages.join(", ") || "—"}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#d7c9b3",
                    opacity: 0.9,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {data.bio}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="stat-pill">
                Followers: {data.followers?.toLocaleString()}
              </span>
              <span className="stat-pill">
                Likes: {data.likes?.toLocaleString()}
              </span>
              <span className="stat-pill">
                Posts: {data.posts?.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* (Optionnel) Galerie – placeholder minimal; garde la tienne si tu en as déjà une */}
      <section style={{ maxWidth: 1000, margin: "10px auto", padding: "0 16px" }}>
        <h2
          className="gold-gradient-text"
          style={{ fontSize: "clamp(18px,4.2vw,26px)", marginBottom: 10 }}
        >
          Gallery
        </h2>
        <div
          className="media-grid"
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {/* Tu peux supprimer ce bloc si tu as déjà ta vraie galerie */}
          <div
            className="media-card"
            style={{
              aspectRatio: "1/1",
              border: "1px solid rgba(212,175,55,0.22)",
              borderRadius: 14,
              background: "rgba(0,0,0,.25)",
              display: "grid",
              placeItems: "center",
              color: "#d7c9b3",
              fontSize: 13,
            }}
          >
            (Placeholder) Add media here
          </div>
          <div
            className="media-card"
            style={{
              aspectRatio: "1/1",
              border: "1px solid rgba(212,175,55,0.22)",
              borderRadius: 14,
              background: "rgba(0,0,0,.25)",
              display: "grid",
              placeItems: "center",
              color: "#d7c9b3",
              fontSize: 13,
            }}
          >
            (Placeholder)
          </div>
          <div
            className="media-card"
            style={{
              aspectRatio: "1/1",
              border: "1px solid rgba(212,175,55,0.22)",
              borderRadius: 14,
              background: "rgba(0,0,0,.25)",
              display: "grid",
              placeItems: "center",
              color: "#d7c9b3",
              fontSize: 13,
            }}
          >
            (Placeholder)
          </div>
        </div>
      </section>

      {/* 📅 Planning hebdo */}
      <section style={{ maxWidth: 1000, margin: "16px auto 40px", padding: "0 16px" }}>
        <ScheduleGrid username={user} isOwner={isOwner} />
      </section>
    </main>
  );
                  }
