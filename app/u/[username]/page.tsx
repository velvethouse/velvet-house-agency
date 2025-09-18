"use client";

import LiveGiftOverlay from "../components/LiveGiftOverlay";

export default function UserPage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Zone principale du profil streameuse */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">@{username}</h1>
        <p className="mt-2">✨ Welcome to {username}'s Velvet House page.</p>
      </div>

      {/* Gifts overlay */}
      <LiveGiftOverlay activeGift={null} />

      {/* Bloc d’exemple contenu */}
      <div className="p-6">
        <p>Photos, vidéos et infos de la streameuse s’afficheront ici.</p>
      </div>
    </div>
  );
}
