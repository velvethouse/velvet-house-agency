// 📄 /app/u/[username]/page.tsx
import StreamAccessNotice from "./components/StreamAccessNotice";
import ButterflyRank from "./components/ButterflyRank";
import EventBanner from "./components/EventBanner";
import GoalWidget from "./components/GoalWidget";
import GoalCelebrationOverlay from "./components/GoalCelebrationOverlay";
import GalleryBlock from "./components/GalleryBlock";
import StatsToggle from "./components/StatsToggle";
import QrInvite from "./components/QrInvite";
import PlanningBlock from "./components/PlanningBlock"; // ✅ Ajout du planning

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const lotusEarned = 216_000;
  const goal = 500_000;
  const events = [
    {
      id: "1",
      title: "Velvet Anniversary",
      description: "Celebrate 1 year of Velvet House with exclusive gifts!",
      fromVelvet: true,
    },
    {
      id: "2",
      title: "Private photo drop tonight!",
      description: "Send 🎁 Champagne to unlock it 💋",
      fromVelvet: false,
    },
  ];

  return (
    <main>
      {/* 🔐 Bloc d’accès */}
      <StreamAccessNotice isLocked={false} isVip={false} />

      {/* 🦋 Rang streameuse */}
      <ButterflyRank lotusEarned={lotusEarned} />

      {/* 🎉 Événements */}
      <EventBanner events={events} />

      {/* 🎯 Objectif Lotus */}
      <GoalWidget lotusEarned={lotusEarned} goal={goal} />

      {/* 🎉 Animation 🎊 si objectif atteint */}
      <GoalCelebrationOverlay />

      {/* 🖼️ Galerie publique */}
      <GalleryBlock username={params.username} />

      {/* 📈 Statistiques */}
      <StatsToggle />

      {/* 📅 Planning des lives */}
      <PlanningBlock />

      {/* 🔗 QR Code d'invitation */}
      <QrInvite username={params.username} />
    </main>
  );
}
