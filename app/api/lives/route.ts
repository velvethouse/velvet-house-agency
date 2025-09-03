import { NextResponse } from "next/server";

/**
 * TEMP: hardcoded list (simulate DB).
 * Later: replace with a DB call (e.g. SELECT ... FROM lives).
 * imageUrl = profile photo (or cover) ; liveNow true/false ; start ISO.
 */
export async function GET() {
  const lives = [
    {
      slug: "alice",
      title: "Showcase — Alice",
      desc: "Live showcase + Q&A",
      country: "US",
      languages: ["English", "French"],
      imageUrl: "/avatars/alice.jpg",
      liveNow: true,
      start: null
    },
    {
      slug: "bella",
      title: "VIP Talk — Bella",
      desc: "Private VIP session",
      country: "FR",
      languages: ["French"],
      imageUrl: "/avatars/bella.jpg",
      liveNow: false,
      start: "2025-09-03T20:30:00Z"
    },
    {
      slug: "cora",
      title: "Acoustic Set — Cora",
      desc: "Acoustic & chill",
      country: "ES",
      languages: ["Spanish","English"],
      imageUrl: "/avatars/cora.jpg",
      liveNow: false,
      start: "2025-09-06T19:00:00Z"
    },
    {
      slug: "dana",
      title: "Studio — Dana",
      desc: "Behind the scenes",
      country: "DE",
      languages: ["German","English"],
      imageUrl: "/avatars/dana.jpg",
      liveNow: false,
      start: "2025-09-07T18:30:00Z"
    },
    {
      slug: "emi",
      title: "Workshop — Emi",
      desc: "Creative workshop",
      country: "MA",
      languages: ["Arabic","French","English"],
      imageUrl: "/avatars/emi.jpg",
      liveNow: false,
      start: "2025-09-08T17:00:00Z"
    }
  ];

  // TODO (plus tard) : lire req.nextUrl.searchParams pour pagination/filters server
  return NextResponse.json(lives, { status: 200 });
}
