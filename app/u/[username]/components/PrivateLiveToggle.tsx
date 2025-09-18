"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PrivateLiveToggleProps {
  username: string;
  isPrivate?: boolean;
}

export default function PrivateLiveToggle({ username, isPrivate = false }: PrivateLiveToggleProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true);
    setTimeout(() => {
      if (isPrivate) {
        router.push(`/u/${username}/live`);
      } else {
        router.push(`/u/${username}/private`);
      }
    }, 500);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`px-4 py-2 rounded font-bold ${
        isPrivate ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
      } text-white`}
    >
      {loading
        ? "Switching..."
        : isPrivate
        ? "🔓 Back to Public Live"
        : "🔒 Start Private Live (20 max)"}
    </button>
  );
      }
