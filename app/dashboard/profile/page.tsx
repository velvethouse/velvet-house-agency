// app/dashboard/profile/page.tsx
"use client";

import { useEffect, useState } from "react";

/** Local storage keys (demo only) */
const KEY_AVATAR = "vh_profile_avatar";
const KEY_MEDIA  = "vh_profile_media";   // up to 5
const KEY_SUB    = "vh_sub_active";      // subscription status (demo)

/** Types */
type MediaItem = { id: string; url: string; kind: "image" | "video" };

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string>("");
  const [media, setMedia]   = useState<MediaItem[]>([]);
  const [subActive, setSubActive] = useState<boolean>(true);

  /** Load persisted demo data */
  useEffect(() => {
    try {
      setAvatar(localStorage.getItem(KEY_AVATAR) || "");
      setMedia(JSON.parse(localStorage.getItem(KEY_MEDIA) || "[]"));
      setSubActive((localStorage.getItem(KEY_SUB) ?? "1") === "1");
    } catch {}
  }, []);

  /** Persist on change */
  useEffect(() => { try { localStorage.setItem(KEY_AVATAR, avatar); } catch {} }, [avatar]);
  useEffect(() => { try { localStorage.setItem(KEY_MEDIA, JSON.stringify(media)); } catch {} }, [media]);
  useEffect(() => { try { localStorage.setItem(KEY_SUB, subActive ? "1" : "0"); } catch {} }, [subActive]);

  /** Handlers */
  function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setAvatar(url);
  }

  function onAddMedia(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (media.length >= 5) {
      alert("You can upload up to 5 media.");
      return;
    }
    const url  = URL.createObjectURL(f);
    const kind = f.type.startsWith("video") ? "video" : "image";
    setMedia((m) => [{ id: crypto.randomUUID(), url, kind }, ...m]);
  }

  function removeMedia(id: string) {
    setMedia((m) => m.filter((x) => x.id !== id));
  }

  function stopSubscription() {
    // TODO: call your billing backend (Stripe/StoreKit/Google Play) here.
    setSubActive(false);
    alert("Your subscription has been marked for cancellation (demo).");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        color: "#f5f5f5",
        fontFamily: 'system-ui, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      {/* Title */}
      <section style={{ maxWidth: 1100, margin: "24px auto 12px", padding: "0 16px" }}>
        <h1 className="gold-gradient-text" style={{ fontSize: "clamp(24px,6vw,36px)", margin: 0 }}>
          My Profile
        </h1>
        <p style={{ margin: "8px 0 0", color: "#e9dfcf" }}>
          Manage your avatar, personal media (up to 5), and subscription.
        </p>
      </section>

      {/* Avatar + Subscription */}
      <section style={{ maxWidth: 1100, margin: "16px auto 22px", padding: "0 16px" }}>
        <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {/* Avatar */}
          <article className="card" style={{ display: "grid", gap: 12, padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37" }}>Profile photo</div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  border: "2px solid rgba(212,175,55,0.5)",
                  overflow: "hidden",
                  background: "rgba(0,0,0,.25)",
                }}
              >
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      color: "#d7c9b3",
                      fontSize: 12,
                    }}
                  >
                    No photo
                  </div>
                )}
              </div>

              <label className="btn3d btn3d--gold" style={{ cursor: "pointer" }}>
                Upload photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={onAvatarChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <p style={{ margin: 0, color: "#d7c9b3", fontSize: 12 }}>
              Recommended: 512×512px, JPG/PNG, &lt; 1MB.
            </p>
          </article>

          {/* Subscription */}
          <article className="card" style={{ display: "grid", gap: 12, padding: 16 }}>
            <div style={{ fontWeight: 800, color: "#D4AF37" }}>Subscription</div>
            <div style={{ color: "#d7c9b3" }}>
              Status:{" "}
              <b style={{ color: subActive ? "#D4AF37" : "#d7c9b3" }}>
                {subActive ? "Active" : "Cancelled (demo)"}
              </b>
            </div>
            <div className="btn-row-2">
              <a href="/vip" className="btn3d btn3d--gold">Manage plan</a>
              <button
                className="btn3d btn3d--velvet"
                onClick={stopSubscription}
                disabled={!subActive}
              >
                Stop subscription
              </button>
            </div>
            <p style={{ margin: 0, color: "#d7c9b3", fontSize: 12 }}>
              This is a demo action. In production, cancellations are handled by the billing provider.
            </p>
          </article>
        </div>
      </section>

      {/* Personal media (up to 5) */}
      <section style={{ maxWidth: 1100, margin: "0 auto 30px", padding: "0 16px" }}>
        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontWeight: 800, color: "#D4AF37" }}>My media (up to 5)</div>
            <label className="btn3d btn3d--gold" style={{ cursor: "pointer" }}>
              Add media
              <input
                type="file"
                accept="image/*,video/*"
                onChange={onAddMedia}
                style={{ display: "none" }}
              />
            </label>
          </div>

          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", marginTop: 12 }}>
            {media.map((m) => (
              <div key={m.id} className="card" style={{ padding: 8, borderRadius: 12 }}>
                <div
                  style={{
                    height: 140,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 10,
                    background: "rgba(0,0,0,.25)",
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  {m.kind === "video" ? (
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    <video
                      src={m.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.url}
                      alt="media"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <button className="btn3d btn3d--velvet" onClick={() => removeMedia(m.id)} style={{ width: "100%" }}>
                  Remove
                </button>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: Math.max(0, 5 - media.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="card"
                style={{
                  padding: 8,
                  borderRadius: 12,
                  background: "linear-gradient(180deg, rgba(15,15,15,.25), rgba(15,15,15,.18))",
                  display: "grid",
                  placeItems: "center",
                  color: "#d7c9b3",
                }}
              >
                Empty slot
              </div>
            ))}
          </div>

          <p style={{ margin: "8px 0 0", color: "#d7c9b3", fontSize: 12 }}>
            Supported: JPG/PNG/GIF/WebP and MP4/WebM. Max 5 items (demo).
          </p>
        </div>
      </section>
    </main>
  );
                      }
