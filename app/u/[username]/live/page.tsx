import LiveGiftOverlay from "../components/LiveGiftOverlay";

export default function LivePage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Placeholder vidéo live */}
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-400">🎥 Live stream of {username} will appear here</p>
      </div>

      {/* Gifts overlay */}
      <LiveGiftOverlay username={username} />
    </div>
  );
}
