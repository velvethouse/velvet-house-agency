'use client';

import Image from 'next/image';

type Props = {
  params: { username: string };
};

export default function UserProfilePage({ params }: Props) {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          🦋 Profile: {params.username}
        </h1>

        <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-800 shadow-lg">
          <div className="flex items-center gap-4">
            <Image
              src="/avatar-default.png"
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full border border-yellow-500"
            />
            <div>
              <p className="text-lg font-semibold">{params.username}</p>
              <p className="text-sm text-zinc-400">
                💬 "Hi there! I'm new here. Come chat with me!"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-zinc-300">
            This is the public profile of <strong>{params.username}</strong>. More features
            like gallery, events, gifts, and rankings will be shown here soon.
          </p>
        </div>
      </div>
    </main>
  );
}
