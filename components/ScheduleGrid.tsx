// components/ScheduleGrid.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Slot = { day: number; hour: number; active: boolean };
type Props = { username: string; isOwner?: boolean };

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ScheduleGrid({ username, isOwner }: Props) {
  const [data, setData] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const HOURS = useMemo(() => Array.from({ length: 16 }, (_, i) => 8 + i), []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/u/${username}/schedule`, { cache: "no-store" });
        const j = await res.json();
        setData(Array.isArray(j.items) ? j.items : []);
      } catch {
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [username]);

  const toggle = (d: number, h: number) => {
    if (!isOwner) return;
    const key = (s: Slot) => s.day === d && s.hour === h;
    setData(prev => {
      const exists = prev.find(key);
      if (exists) return prev.map(s => key(s) ? { ...s, active: !s.active } : s);
      return [...prev, { day: d, hour: h, active: true }];
    });
  };

  const save = async () => {
    try {
      setSaving(true);
      await fetch(`/api/u/${username}/schedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: data }),
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div style={{ color: "#d7c9b3" }}>Loading schedule…</div>;

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ color: "#D4AF37", fontWeight: 800, fontSize: 18 }}>Weekly Schedule</div>

      <div style={{ overflowX: "auto", border: "1px solid rgba(212,175,55,.22)", borderRadius: 12 }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 780 }}>
          <thead>
            <tr>
              <th style={th}>Time</th>
              {DAYS.map((d) => <th key={d} style={th}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {HOURS.map((h) => (
              <tr key={h}>
                <td style={{ ...td, fontWeight: 700 }}>{h}:00</td>
                {DAYS.map((_, dIndex) => {
                  const active = !!data.find(s => s.day === dIndex && s.hour === h && s.active);
                  return (
                    <td
                      key={`${dIndex}-${h}`}
                      onClick={() => toggle(dIndex, h)}
                      style={{
                        ...td,
                        cursor: isOwner ? "pointer" : "default",
                        background: active ? "rgba(212,175,55,.22)" : "transparent",
                        border: "1px solid rgba(212,175,55,.18)",
                      }}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOwner && (
        <button onClick={save} disabled={saving} className="btn3d btn3d--gold" style={{ maxWidth: 220 }}>
          {saving ? "Saving…" : "Save schedule"}
        </button>
      )}
    </div>
  );
}

const th: React.CSSProperties = {
  padding: "8px 10px",
  textAlign: "center",
  color: "#D4AF37",
  borderBottom: "1px solid rgba(212,175,55,.35)",
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: 6,
  textAlign: "center",
  minWidth: 70,
};
