// app/live/page.tsx
import Link from "next/link";
import { tiers } from "@/data/tiers";
import { useGiftStore } from "@/stores/giftStore";

export default function LivePage() {
  // 🔥 Ici on utilise le store global (ou API plus tard)
  const { streamers } = useGiftStore(); 

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎥 Live Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {streamers.map((s) => {
          const tier = tiers.find((t) => t.minLotus <= s.lotusEarned && s.lotusEarned < (t.maxLotus ?? Infinity));

          return (
            <Link
              key={s.username}
              href={`/u/${s.username}/live`}
              className="block bg-neutral-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={s.avatar}
                alt={s.username}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 flex justify-between items-center">
                <span className="font-medium">@{s.username}</span>
                {tier && <span className="text-sm">{tier.symbol} {tier.name}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
        }
