"use client";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center text-yellow-100">
      {/* Haut de la page */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar rond */}
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 overflow-hidden">
          <Image
            src="/default-avatar.jpg" // 🔹 à remplacer par la photo du profil streameuse
            alt="Alice"
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Infos streameuse */}
        <div className="text-left">
          <h1 className="text-xl font-bold text-yellow-300">Alice</h1>
          <p className="text-sm">Country: US · Languages: English, French</p>
          <p className="text-sm italic">Showcase & Q&amp;A lover.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 mb-6">
        <span className="bg-black/40 px-3 py-1 rounded-lg">
          Followers: 13 300
        </span>
        <span className="bg-black/40 px-3 py-1 rounded-lg">
          Likes: 512 000
        </span>
        <span className="bg-black/40 px-3 py-1 rounded-lg">Posts: 84</span>
      </div>

      {/* Boutons */}
      <div className="space-y-3 mb-8">
        <button className="w-full py-3 rounded-xl font-bold text-yellow-200 bg-gradient-to-b from-red-800 to-red-900">
          Follow
        </button>
        <button className="w-full py-3 rounded-xl font-bold text-yellow-900 bg-gradient-to-b from-yellow-400 to-yellow-500">
          Chat
        </button>
        <button className="w-full py-3 rounded-xl font-bold text-gray-800 bg-gradient-to-b from-gray-200 to-gray-300">
          Send gift
        </button>
      </div>

      {/* Galerie */}
      <h2 className="text-lg font-semibold mb-4 text-yellow-300">Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/40 p-4 rounded-lg">
          <p className="text-sm mb-2">Locked content</p>
          <button className="w-full py-2 rounded-lg font-bold bg-yellow-500 text-black">
            Unlock with Lotus ✨
          </button>
        </div>
        <div className="bg-black/40 p-4 rounded-lg">
          <p className="text-sm mb-2">Locked content</p>
          <button className="w-full py-2 rounded-lg font-bold bg-blue-500 text-black">
            Unlock with Butterfly 🦋
          </button>
        </div>
      </div>
    </div>
  );
}
