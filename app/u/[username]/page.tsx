import LiveGiftOverlay from "./components/LiveGiftOverlay";
import LiveGiftPanel from "./components/LiveGiftPanel";

export default function UserPage({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">👤 Profile of {username}</h1>
      <div className="mt-6">
        <LiveGiftOverlay username={username} />
      </div>
      <div className="mt-6">
        <LiveGiftPanel />
      </div>
    </div>
  );
}
