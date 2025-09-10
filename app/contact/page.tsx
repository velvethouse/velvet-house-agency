// 📄 /app/contact/page.tsx

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // TODO: connecter à un backend ou service email (ex: EmailJS, Resend, Formspree…)
  }

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 800,
        margin: "0 auto",
        minHeight: "100vh",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: 28, marginBottom: 16 }}>
        📩 Contact Us
      </h1>

      {sent ? (
        <p style={{ color: "#6cc66c", fontSize: 16 }}>
          ✅ Your message has been sent! We'll reply shortly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: 12, maxWidth: 500 }}
        >
          <label style={{ color: "#f5f5f5" }}>
            Your Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-velvet"
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>

          <label style={{ color: "#f5f5f5" }}>
            Your Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="input-velvet"
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>

          <button type="submit" className="btn3d btn3d--gold">
            Send Message
          </button>
        </form>
      )}
    </main>
  );
}
