import BioBlock from "./components/BioBlock";
import ButterflyRank from "./components/ButterflyRank";
import StreamAccessNotice from "./components/StreamAccessNotice";
import GoalWidget from "./components/GoalWidget";
import GoalCelebrationOverlay from "./components/GoalCelebrationOverlay";
import GalleryBlock from "./components/GalleryBlock";
import EventBanner from "./components/EventBanner";
import StatsToggle from "./components/StatsToggle";
import QrInvite from "./components/QrInvite";
import CTAButtons from "./components/CTAButtons";
import LivePrivateAccess from "./components/LivePrivateAccess";

export default function CreatorPublicPage({ params }: { params: { username: string } }) {
  const username = params.username;
  const lotusEarned = 216000; // mock
  const goal = 500000;        // mock objectif
  const isVip = false;        // mock
  const isLocked = false;     // stream public par défaut
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
    <main style={{ padding: 20, maxWidth: 760, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>
        🦋 Welcome to <span style={{ color: "#D4AF37" }}>{username}'s</span> profile
      </h1>

      {/* Bio */}
      <BioBlock username={username} />

      {/* Rang streameuse */}
      <ButterflyRank lotusEarned={lotusEarned} />

      {/* Bloc accès au stream */}
      <StreamAccessNotice isLocked={isLocked} isVip={isVip} />

      {/* Objectif Lotus */}
      <GoalWidget lotusEarned={lotusEarned} goal={goal} frequency="weekly" />

      {/* Animation 🎉 si objectif atteint */}
      <GoalCelebrationOverlay />

      {/* Galerie photos */}
      <GalleryBlock username={username} />

      {/* Stats Lotus par heure */}
      <StatsToggle />

      {/* Événements (perso ou Velvet) */}
      <EventBanner events={events} />

      {/* Lien QR vers profil, live, chat, etc. */}
      <QrInvite username={username} />

      {/* Boutons vers Live et Chat */}
      <CTAButtons username={username} />

      {/* Activation live privé */}
      <LivePrivateAccess />
    </main>
  );
}
