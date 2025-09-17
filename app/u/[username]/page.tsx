'use client';

import BioBlock from './components/BioBlock';
import CTAButtons from './components/CTAButtons';
import GalleryBlock from './components/GalleryBlock';
import EventNotice from './components/EventNotice';
import GlobalEventNotice from './components/GlobalEventNotice';
import GoalWidget from './components/GoalWidget';
import ButterflyRank from './components/ButterflyRank';
import NovaAssistant from './components/NovaAssistant';
import StreamAccessNotice from './components/StreamAccessNotice';

type Props = {
  params: { username: string };
};

export default function UserProfilePage({ params }: Props) {
  const username = params.username;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <BioBlock username={username} />
        <CTAButtons username={username} />
        <StreamAccessNotice isLocked={true} isVip={false} />
        <GalleryBlock username={username} photos={[]} />
        <EventNotice username={username} />
        <GlobalEventNotice />
        <GoalWidget username={username} />
        <ButterflyRank username={username} />
        <NovaAssistant username={username} />
      </div>
    </main>
  );
}
