'use client';

import CreatorTabs from "@/components/CreatorTabs";
import GalleryBlock from "./components/GalleryBlock";
import GoalWidget from "./components/GoalWidget";
import BioBlock from "./components/BioBlock";
import CTAButtons from "./components/CTAButtons";
import NovaAssistant from "./components/NovaAssistant";

type Props = { params: { username: string } };

export default function StreamerPage({ params }: Props) {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px", color: "#f5f5f7" }}>
      <h1>{params.username}</h1>
      <CreatorTabs username={params.username} current="profile" />

      <BioBlock username={params.username} />

      <CTAButtons username={params.username} />

      <GalleryBlock username={params.username} />

      <GoalWidget lotusEarned={125000} goal={200000} frequency="weekly" />

      <div style={{ marginTop: 40 }}>
        <NovaAssistant />
      </div>
    </main>
  );
}
