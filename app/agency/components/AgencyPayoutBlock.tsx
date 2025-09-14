"use client";

import React from "react";

type Props = {
  totalCommissionUSD: number;
  isEligible: boolean;
};

export default function AgencyPayoutBlock({ totalCommissionUSD, isEligible }: Props) {
  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>💸 Agency Payout</h2>

      <div
        style={{
          background: "#2e0d0d",
          padding: 20,
          borderRadius: 12,
          border: "1px solid rgba(212,175,55,0.2)",
          color: "#f5f5f5",
        }}
      >
        <p>
          <strong>Commission available:</strong>{" "}
          <span style={{ color: "#90ee90", fontWeight: "bold" }}>
            ${totalCommissionUSD.toFixed(2)}
          </span>
        </p>
        <p>
          <strong>Minimum to request:</strong> $50.00
        </p>

        <button
          className="btn3d btn3d--gold"
          disabled={!isEligible}
          style={{
            marginTop: 16,
            opacity: isEligible ? 1 : 0.4,
            cursor: isEligible ? "pointer" : "not-allowed",
          }}
        >
          {isEligible ? "Request payout" : "Not eligible"}
        </button>

        <p style={{ fontSize: 12, color: "#bbb", marginTop: 10 }}>
          💡 You can request your payout once your commission reaches $50.
          Payouts are reviewed manually after streamers have been paid.
        </p>
      </div>
    </section>
  );
}
