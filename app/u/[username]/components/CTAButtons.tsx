"use client";

type Props = {
  username: string;
};

export default function CTAButtons({ username }: Props) {
  return (
    <section style={{ margin: "24px 0", textAlign: "center" }}>
      <h2 style={{ color: "#D4AF37", marginBottom: 12 }}>🔗 Quick Actions</h2>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href={`/u/${username}/live`}
          className="btn3d btn3d--gold"
          style={{ minWidth: 160, textAlign: "center" }}
        >
          🎥 Join Live
        </a>
        <a
          href={`/u/${username}/chat`}
          className="btn3d btn3d--velvet"
          style={{ minWidth: 160, textAlign: "center" }}
        >
          💬 Chat with Me
        </a>
      </div>
    </section>
  );
}
