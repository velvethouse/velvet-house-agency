"use client";

import { useEffect, useState } from "react";

type Announcement = {
  id: string;
  title?: string;
  message: string;
  audience: "all" | "donor" | "creator";
  startAt: string; // ISO date
  endAt: string;   // ISO date
};

export default function AnnouncementBar() {
  const [ann, setAnn] = useState<Announcement | null>(null);

  // Dev only: rôle mock pour filtrer (remplacé par le vrai rôle quand on branchera l’auth)
  const role =
    (typeof window !== "undefined" &&
      (localStorage.getItem("vh_role") as "donor" | "creator" | null)) ||
    "donor";

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res = await fetch(`/api/announcements?role=${role}`, {
          cache: "no-store",
        });
        const data: { items: Announcement[] } = await res.json();

        const now = Date.now();
        const active = data.items.find((a) => {
          const s = new Date(a.startAt).getTime();
          const e = new Date(a.endAt).getTime();
          const dismissed =
            typeof window !== "undefined" &&
            localStorage.getItem(`vh_ann_dismiss_${a.id}`) === "1";
          const okAudience = a.audience === "all" || a.audience === role;
          return !dismissed && okAudience && now >= s && now <= e;
        });

        if (!cancel) setAnn(active ?? null);
      } catch {
        if (!cancel) setAnn(null);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [role]);

  if (!ann) return null;

  return (
    <div className="god-banner" style={{ position: "sticky", top: 0 }}>
      {ann.title ? <b>{ann.title} — </b> : null}
      <span>{ann.message}</span>
      <button
        onClick={() => {
          try {
            localStorage.setItem(`vh_ann_dismiss_${ann.id}`, "1");
          } catch {}
          setAnn(null);
        }}
        style={{
          marginLeft: 12,
          padding: "4px 10px",
          borderRadius: 10,
          border: "1px solid rgba(212,175,55,.45)",
          background: "rgba(0,0,0,.2)",
          color: "#f5f5f5",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        Dismiss
      </button>
      <div className="small">
        This notice is active for{" "}
        {ann.audience === "all" ? "all users" : `${ann.audience}s`}.
      </div>
    </div>
  );
}
