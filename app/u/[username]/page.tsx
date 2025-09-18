import LiveGiftOverlay from "../components/LiveGiftOverlay";
import LiveGiftPanel from "../components/LiveGiftPanel";

export default function LivePage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Placeholder du live */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-400">🎥 Live stream of {username} will appear here</p>
      </div>

      {/* Overlay (gifts qui apparaissent en animation) */}
      <LiveGiftOverlay username={username} />

      {/* Panel latéral premium (dragon, phoenix, worldtour) */}
      <div className="absolute bottom-4 right-4 w-64">
        <LiveGiftPanel />
      </div>
    </div>
  );
        }
