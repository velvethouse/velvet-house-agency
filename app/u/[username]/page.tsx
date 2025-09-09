import GoalWidget from "./components/GoalWidget";
import GalleryBlock from "./components/GalleryBlock";
import StreamAccessNotice from "./components/StreamAccessNotice";
import EventBanner from "./components/EventBanner";
import QrInvite from "./components/QrInvite";
import ButterflyRank from "./components/ButterflyRank";
import StatsToggle from "./components/StatsToggle";

export default function UserPage() {
  // MOCK: remplacer ces données plus tard par des vraies via une API ou DB
  const lotusEarned = 18500;
  const goal = 20000;
  const events = [
    {
      id: "1",
      title: "Special Live Tonight!",
      description: "Join me at 21h for a private VIP session 💋",
      fromVelvet: false,
    },
  ];

  return (
    <main>
      <StreamAccessNotice locked={false} />
      <ButterflyRank lotus={lotusEarned} />
      <EventBanner events={events} />
      <GoalWidget lotus={lotusEarned} goal={goal} frequency="weekly" />
      <GalleryBlock />
      <StatsToggle />
      <QrInvite username="testgirl" />
    </main>
  );
}
