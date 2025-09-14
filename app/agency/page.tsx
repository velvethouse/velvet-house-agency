"use client";

import AgencyStreamerTable from "./components/AgencyStreamerTable";

export default function AgencyDashboardPage() {
  const agencyName = "Velvet Agency"; // à remplacer par le nom réel
  const streamers = [
    // À connecter à la base plus tard
    {
      id: "alice",
      name: "Alice",
      rank: "Butterfly",
      lotusEarned: 20000,
      agencyRate: 5,
      status: "paid",
    },
    {
      id: "bella",
      name: "Bella",
      rank: "Golden",
      lotusEarned: 80000,
      agencyRate: 7,
      status: "pending",
    },
    {
      id: "clara",
      name: "Clara",
      rank: "Fire",
      lotusEarned: 150000,
      agencyRate: 10,
      status: "pending",
    },
  ];

  return (
    <main
      style={{
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: 'system-ui,Segoe UI,Roboto,sans-serif',
      }}
    >
      <h1 style={{ fontSize: 28, color: "#D4AF37", marginBottom: 16 }}>
        🏢 Welcome {agencyName}
      </h1>

      <p style={{ color: "#f5f5f5", marginBottom: 24 }}>
        This is your agency space. You will receive commissions after your streamers are paid.
      </p>

      <AgencyStreamerTable streamers={streamers} />

      <section style={{ marginTop: 40 }}>
        <button
          disabled
          className="btn3d btn3d--gold"
          style={{
            padding: "10px 20px",
            fontWeight: 600,
            fontSize: 14,
            opacity: 0.6,
            cursor: "not-allowed",
          }}
        >
          Request agency payout (available after streamer payment)
        </button>
      </section>
    </main>
  );
}
