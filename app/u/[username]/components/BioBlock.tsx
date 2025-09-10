"use client";

import { useState, useEffect } from "react";

type Props = {
  username: string;
};

export default function BioBlock({ username }: Props) {
  const [bio, setBio] = useState("");

  useEffect(() => {
    // À remplacer plus tard par une vraie requête à la base
    const saved = localStorage.getItem(`bio_${username}`);
    if (saved) setBio(saved);
  }, [username]);

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
