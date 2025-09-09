"use client";

import { notFound } from "next/navigation";
import { fetchUserProfile } from "../../data/users";
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

  const lotusEarned = user.lotusEarned;
  const goal = 20000;
  const events = user.events;

  return (
    <main>
      <StreamAccessNotice isLocked={false} isVip={false} />
      <ButterflyRank lotusEarned={lotusEarned} />
      <EventBanner events={events} />
      <GoalWidget lotusEarned={lotusEarned} goal={goal} />
      <GalleryBlock username={params.username} />
      <StatsToggle />
      <QrInvite username={params.username} />
      <GoalCelebrationOverlay />
    </main>
  );
}
