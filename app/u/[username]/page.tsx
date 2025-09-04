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
      {/* Profil */}
      <section style={{ maxWidth: 1000, margin: "16px auto", padding: "0 16px" }}>
        <h1 style={{ color: "#D4AF37" }}>{data.displayName}</h1>
        <p style={{ color: "#d7c9b3" }}>{data.bio}</p>
      </section>

      {/* Galerie (placeholder) */}
      <section style={{ maxWidth: 1000, margin: "16px auto", padding: "0 16px" }}>
        <h2 style={{ color: "#D4AF37" }}>Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          <div style={{ aspectRatio: "1/1", background: "#3d0e0e", borderRadius: 8 }} />
          <div style={{ aspectRatio: "1/1", background: "#3d0e0e", borderRadius: 8 }} />
          <div style={{ aspectRatio: "1/1", background: "#3d0e0e", borderRadius: 8 }} />
        </div>
      </section>

      {/* 📅 Planning */}
      <section style={{ maxWidth: 1000, margin: "16px auto 40px", padding: "0 16px" }}>
        <ScheduleGrid username={user} isOwner={isOwner} />
      </section>
    </main>
  );
}
