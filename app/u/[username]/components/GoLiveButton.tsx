"use client";

import { useRouter } from "next/navigation";

export default function GoLiveButton({ username = "demo" }: { username?: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/u/${username}/live`);
  };

  return (
    <section style={{ marginTop: 32 }}>
      <button
        onClick={handleClick}
        className="btn3d btn3d--velvet"
        style={{
          padding: "12px 24px",
          fontSize: 16,
          borderRadius: 10,
          width: "100%",
        }}
      >
        🎥 Go Live Now
      </button>
    </section>
  );
}
