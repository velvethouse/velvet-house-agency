'use client';

type Props = {
  username: string;
  bio?: string;
};

export default function BioBlock({ username, bio }: Props) {
  if (!bio) return null;

  return (
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 22, color: "#D4AF37", marginBottom: 8 }}>
        📃 About me
      </h2>
      <p style={{ lineHeight: 1.6, color: "#f5f5f5", whiteSpace: "pre-line" }}>
        {bio}
      </p>
    </section>
  );
}
