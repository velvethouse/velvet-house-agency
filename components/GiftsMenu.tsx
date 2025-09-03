"use client";

import { useEffect, useMemo, useState } from "react";

type Gift = {
  id: string;
  name: string;
  price: number;   // €
  animated?: boolean;
  emoji?: string;
};

const DEFAULT_GIFTS: Gift[] = [
  { id: "lotus",       name: "Lotus",        price: 1,   animated: true,  emoji: "🪷" },
  { id: "butterfly",   name: "Butterfly",    price: 2,   animated: true,  emoji: "🦋" },
  { id: "star",        name: "Star",         price: 0.5, animated: false, emoji: "⭐" },
  { id: "velvet-box",  name: "Velvet Box",   price: 5,   animated: true,  emoji: "🎁" },
  { id: "diamond",     name: "Diamond",      price: 10,  animated: true,  emoji: "💎" },
];

export default function GiftsMenu({
  open,
  onClose,
  onSend,
  target // streamer slug / chat id / profile id
}: {
  open: boolean;
  onClose: () => void;
  onSend: (gift: Gift, target: string) => void;
  target: string;
}) {
  const [search, setSearch] = useState("");
  const [gifts, setGifts] = useState<Gift[]>(DEFAULT_GIFTS);

  // Plus tard on chargera depuis /api/gifts
  useEffect(() => {
    // fetch("/api/gifts").then(r=>r.json()).then(setGifts).catch(()=>{});
  }, []);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return gifts;
    return gifts.filter(g => (g.name + (g.emoji ?? "")).toLowerCase().includes(q));
  }, [gifts, search]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)",
        display: "grid", placeItems: "center", zIndex: 1000
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(92vw, 560px)",
          borderRadius: 16,
          padding: 18,
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.55), rgba(15,15,15,0.35))",
          border: "1px solid rgba(212,175,55,0.25)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.40)",
          color: "#f5f5f5"
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontWeight: 800, color: "#D4AF37" }}>Send a Gift</div>
          <button onClick={onClose}
            style={{ background: "transparent", color: "#D4AF37", border: "1px solid #B8860B", borderRadius: 8, padding: "6px 10px", cursor: "pointer" }}>
            Close
          </button>
        </div>

        {/* Search */}
        <div style={{ display: "grid", gap: 8, marginBottom: 12 }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search gift…"
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(212,175,55,0.35)",
              background: "rgba(0,0,0,0.35)",
              color: "#f5f5f5", outline: "none"
            }}
          />
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
        }}>
          {results.map((g) => (
            <div key={g.id} style={{
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: 14, padding: 12,
              background: "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.30))",
              display: "grid", gap: 6
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 800, color: "#D4AF37" }}>
                  {g.emoji ? `${g.emoji} ` : ""}{g.name}
                </div>
                <div style={{ color: "#d7c9b3" }}>{g.price.toFixed(2)} €</div>
              </div>
              {g.animated && <div style={{ fontSize: 12, color: "#e9dfcf" }}>Animated ✨</div>}
              <button
                onClick={() => onSend(g, target)}
                style={{
                  marginTop: 6,
                  background: "#D4AF37", color: "#2c0d0d",
                  border: "1px solid #B8860B", borderRadius: 12,
                  padding: "10px 12px", fontWeight: 800, cursor: "pointer"
                }}
              >
                Send
              </button>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <div style={{ marginTop: 10, color: "#d7c9b3" }}>
            No gift found with this search.
          </div>
        )}
      </div>
    </div>
  );
                           }
