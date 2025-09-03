// app/live/page.tsx
"use client";

import { useState, useMemo } from "react";
import GiftButton from "../../components/GiftButton";

type Live = {
  title: string;
  time: string;
  description: string;
  country: string;
  languages: string[];
  slug: string;
};

const LIVES: Live[] = [
  {
    title: "Showcase — Alice",
    time: "Tonight 9:00 PM",
    description: "Live showcase + Q&A",
    country: "US",
    languages: ["English", "French"],
    slug: "alice",
  },
  {
    title: "VIP Talk — Bella",
    time: "Tomorrow 8:30 PM",
    description: "Private VIP session",
    country: "FR",
    languages: ["French"],
    slug: "bella",
  },
  {
    title: "Acoustic Set — Cora",
    time: "Saturday 7:00 PM",
    description: "Acoustic & chill",
    country: "ES",
    languages: ["Spanish", "English"],
    slug: "cora",
  },
  {
    title: "Studio — Dana",
    time: "Sunday 6:30 PM",
    description: "Behind the scenes",
    country: "DE",
    languages: ["German", "English"],
    slug: "dana",
  },
  {
    title: "Workshop — Emi",
    time: "Monday 5:00 PM",
    description: "Creative workshop",
    country: "MA",
    languages: ["Arabic", "French", "English"],
    slug: "emi",
  },
];

export default function LivePage() {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return LIVES.filter((live) => {
      const matchCountry = country ? live.country === country : true;
      const matchLanguage = language
        ? live.languages.includes(language)
        : true;
      const matchQuery = query
        ? live.title.toLowerCase().includes(query.toLowerCase()) ||
          live.description.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchCountry && matchLanguage && matchQuery;
    });
  }, [country, language, query]);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gold">Live</h1>
      <p className="text-sm opacity-80">
        Upcoming & current live sessions from our creators.
      </p>

      {/* Filters */}
      <div className="grid gap-3 md:grid-cols-3">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 rounded bg-[#2c0d0d] text-gold border border-gold"
        >
          <option value="">All countries</option>
          {[...new Set(LIVES.map((l) => l.country))].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 rounded bg-[#2c0d0d] text-gold border border-gold"
        >
          <option value="">All languages</option>
          {[...new Set(LIVES.flatMap((l) => l.languages))].map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search title or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded bg-[#2c0d0d] text-gold border border-gold"
        />
      </div>

      <button
        onClick={() => {
          setCountry("");
          setLanguage("");
          setQuery("");
        }}
        className="btn3d btn3d--outline-gold w-full md:w-auto"
      >
        Reset filters
      </button>

      {/* Results */}
      <div className="space-y-4">
        {results.map((item) => (
          <div
            key={item.slug}
            className="p-4 rounded-lg bg-gradient-to-b from-[#2c0d0d] to-[#1a0808] border border-[#3d0e0e] shadow-lg space-y-3"
          >
            <h2 className="text-lg font-semibold text-gold">{item.title}</h2>
            <p className="text-sm">{item.time}</p>
            <p className="opacity-80">{item.description}</p>
            <p className="text-xs opacity-70">
              <strong>Country:</strong> {item.country} ·{" "}
              <strong>Languages:</strong> {item.languages.join(", ")}
            </p>

            {/* Buttons rangés sur 3 colonnes */}
            <div className="btn-row-3 actions-3col">
              <a
                href={`/u/${item.slug}`}
                className="btn3d btn3d--velvet"
              >
                View profile
              </a>
              <a
                href={`/u/${item.slug}/live`}
                className="btn3d btn3d--gold"
              >
                Join live
              </a>
              <GiftButton
                target={item.slug}
                className="btn3d btn3d--platinum"
                label="Send gift"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
