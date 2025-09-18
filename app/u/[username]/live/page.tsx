import LiveGiftOverlay from "../components/LiveGiftOverlay";
import LiveGiftPanel from "../components/LiveGiftPanel";
import PrivateLiveToggle from "../components/PrivateLiveToggle";

export default function LivePage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Bouton pour passer en live privé */}
      <div className="absolute top-4 right-4">
        <PrivateLiveToggle username={username} isPrivate={false} />
      </div>

      {/* Zone vidéo live public */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-400">🎥 Public live stream of {username}</p>
      </div>

      {/* Gifts overlay */}
      <LiveGiftOverlay username={username} />

      {/* Panel premium */}
      <div className="absolute bottom-4 right-4 w-64">
        <LiveGiftPanel />
      </div>
    </div>
  );
      }
