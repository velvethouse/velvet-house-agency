"use client";

import { useState } from "react";
import GiftsMenu from "./GiftsMenu";

export default function GiftButton({ target, label = "Send gift" }: { target: string; label?: string }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function handleSend(gift: { id: string; name: string; price: number }, tgt: string) {
    // TODO: call backend (Stripe/credits) later
    setOpen(false);
    setToast(`✅ ${gift.name} sent to ${tgt} (${gift.price.toFixed(2)} €)`);
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn3d btn3d--gold"
        style={{ width: "100%" }}
      >
        {label}
      </button>

      <GiftsMenu open={open} onClose={() => setOpen(false)} onSend={handleSend} target={target} />

      {toast && (
        <div style={{
          position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.6)", border: "1px solid rgba(212,175,55,0.35)",
          color: "#f5f5f5", padding: "10px 14px", borderRadius: 10, zIndex: 1100
        }}>
          {toast}
        </div>
      )}
    </>
  );
}
