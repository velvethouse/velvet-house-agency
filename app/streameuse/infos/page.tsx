"use client";

export default function PayoutExplanation() {
  return (
    <section
      style={{
        marginTop: 32,
        padding: 20,
        borderRadius: 12,
        background: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(212,175,55,0.25)",
        color: "#f5f5f5",
      }}
    >
      <h2 style={{ color: "#FFD700", marginBottom: 12 }}>💸 Payout Rules</h2>
      <p style={{ marginBottom: 12 }}>
        You can request a payout as soon as you reach <b>7,000 Lotus</b>.
      </p>
      <p style={{ marginBottom: 12 }}>
        Payments are made by <b>bank transfer or crypto (USDT)</b>.
      </p>
      <p style={{ marginBottom: 12 }}>
        💵 <b>Conversion formula in USD:</b><br />
        Amount ($) = Lotus × Your Commission × 0.00465
      </p>
      <p style={{ marginBottom: 12 }}>
        Example: If you're Golden Butterfly (67 %) with 10,000 Lotus: <br />
        → 10,000 × 0.67 × 0.00465 = <b>$31.15</b>
      </p>
      <p style={{ fontSize: 13, color: "#ccc" }}>
        All payouts are manually validated and sent within a few days.
      </p>
    </section>
  );
}
