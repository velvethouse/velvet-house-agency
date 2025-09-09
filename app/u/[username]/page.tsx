// /app/u/[username]/page.tsx
import { notFound } from "next/navigation";
import { fetchUserProfile } from "@/data/users";
import ButterflyRank from "./components/ButterflyRank";
import GoalWidget from "./components/GoalWidget";
import GalleryBlock from "./components/GalleryBlock";
import EventBanner from "./components/EventBanner";
import QrInvite from "./components/QrInvite";
import StreamAccessNotice from "./components/StreamAccessNotice";
import GoalCelebrationOverlay from "./components/GoalCelebrationOverlay";
import StatsToggle from "./components/StatsToggle";

export default async function UserPage({ params }: { params: { username: string } }) {
  const user = await fetchUserProfile(params.username);
  if (!user) return notFound();

  const lotusEarned = 18500;
  const goal = 20000;

  const events = [
    {
      id: "1",
      title: "Special Show Tonight",
      description: "Join me for an exclusive live event tonight at 21:00!",
      fromVelvet: false,
    },
    {
      id: "2",
      title: "Platform Celebration",
      description: "Velvet House celebrates 10,000 users! 🎉",
      fromVelvet: true,
    },
  ];

  return (
    <main>
      <StreamAccessNotice isLocked={false} />
      <ButterflyRank lotus={lotusEarned} />
      <EventBanner events={events} />
      <GoalWidget lotus={lotusEarned} goal={goal} frequency="weekly" />
      <GalleryBlock username={params.username} />
      <StatsToggle />
      <QrInvite username={params.username} />
      <GoalCelebrationOverlay />
    </main>
  );
}
