"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    language: ""
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect API later
    setSent(true);
  }

  const cardStyle: React.CSSProperties = {
    width: "min(92vw, 480px)",
    borderRadius: 16,
    padding: "22px",
    background:
      "linear-gradient(180deg, rgba(15,15,15,0.45), rgba(15,15,15,0.30))",
    border: "1px solid rgba(212,175,55,0.22)",
    boxShadow: "0 10px 26px rgba(0,0,0,0.30)",
    color: "#f5f5f5"
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(212,175,55,0.35)",
    background: "rgba(0,0,0,0.35)",
    color: "#f5f5f5",
    outline: "none"
  };

  const labelStyle: React.CSSProperties = {
    display: "grid",
    gap: 6
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4b1c1c 0%, #2e0d0d 100%)",
        display: "grid",
        placeItems: "center",
        padding: "28px 16px",
        fontFamily: "system-ui, Segoe UI, sans-serif"
      }}
    >
      <div style={cardStyle}>
        <h1
          style={{
            margin: 0,
            marginBottom: 8,
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "clamp(22px, 5vw, 28px)",
            letterSpacing: 1
          }}
        >
          Sign up
        </h1>
        <p
          style={{
            margin: 0,
            marginBottom: 18,
            textAlign: "center",
            color: "#d7c9b3"
          }}
        >
          Create your account to join Velvet House.
        </p>

        {!sent ? (
          <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
            {/* Username */}
            <label style={labelStyle}>
              <span>Username</span>
              <input
                name="username"
                value={form.username}
                onChange={onChange}
                placeholder="Your public name"
                required
                style={inputStyle}
              />
            </label>

            {/* Email */}
            <label style={labelStyle}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
                style={inputStyle}
              />
            </label>

            {/* Password */}
            <label style={labelStyle}>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Choose a strong password"
                required
                style={inputStyle}
              />
            </label>

            {/* Country */}
            <label style={labelStyle}>
              <span>Country</span>
              <select
                name="country"
                value={form.country}
                onChange={onChange}
                required
                style={inputStyle}
              >
                <option value="">Select country</option>
                <option value="FR">France</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="ES">Spain</option>
                <option value="DE">Germany</option>
                <option value="IT">Italy</option>
                <option value="MA">Morocco</option>
                <option value="CA">Canada</option>
              </select>
            </label>

            {/* Languages spoken */}
            <label style={labelStyle}>
              <span>Languages spoken</span>
              <input
                name="language"
                value={form.language}
                onChange={onChange}
                placeholder="e.g. English, French"
                required
                style={inputStyle}
              />
            </label>

            {/* Actions */}
            <div
              className="stack-sm"
              style={{ display: "flex", gap: 12, marginTop: 6 }}
            >
              <button type="submit" className="goldBtn" style={{ flex: 1 }}>
                Create account
              </button>
              <a href="/login" className="goldBtnOutline" style={{ flex: 1, textAlign: "center" }}>
                Log in
              </a>
            </div>
          </form>
        ) : (
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid rgba(212,175,55,0.35)",
              background: "rgba(0,0,0,0.35)",
              color: "#d7c9b3",
              textAlign: "center"
            }}
          >
            ✅ Account created (demo). We’ll connect it to the real backend later.
          </div>
        )}
      </div>
    </main>
  );
                }
