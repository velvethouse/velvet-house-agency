'use client'

import NovaAssistant from '@/components/NovaAssistant'
import GoalWidget from '@/components/studio/GoalWidget'
import StudioGallery from '@/components/studio/StudioGallery'
import NovaChat from '@/components/studio/NovaChat'
import StatsPerformance from '@/components/studio/StatsPerformance'
import EventNotice from '@/components/studio/EventNotice'

export default function StudioPage({ params }: { params: { username: string } }) {
  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Studio – @{params.username}</h1>

      {/* 🧠 Nova assistant (coach privé) */}
      <NovaAssistant context="studio" />

      {/* 🎯 Objectifs Lotus */}
      <GoalWidget />

      {/* 📢 Event editor */}
      <EventNotice />

      {/* 📸 Galerie streameuse */}
      <StudioGallery />

      {/* 🧾 Stats de performance */}
      <StatsPerformance />

      {/* 💬 Chat avec Nova (bonus coaching) */}
      <NovaChat />
    </main>
  )
      }
