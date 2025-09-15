'use client';

import { useState } from 'react';
import GoalWidget from '../components/GoalWidget';
import StudioGallery from '../components/StudioGallery';
import NovaStudioCoach from '@/components/studio/NovaStudioCoach';
import StatsPerformance from '../components/StatsPerformance';

export default function StreamerStudioPage() {
  const [agreed, setAgreed] = useState(false);
  const [allowBattle, setAllowBattle] = useState(false);
  const [battleFrequency, setBattleFrequency] = useState(3);
  const [isOpponentMuted, setIsOpponentMuted] = useState(false);

  const toggleAllowBattle = () => setAllowBattle(!allowBattle);

  const photos: { id: number; src: string; nsfw: boolean; gift?: string }[] = [];
  const onToggleNSFW = (id: string | number) => {};
  const onAssignGift = (id: string | number, gift: string) => {};

  if (!agreed) {
    return (
      <main style={{ padding: 24, maxWidth: 720, margin: '0 auto' }}>
        <h1 style={{ color: '#D4AF37' }}>📋 Studio Rules & Conditions</h1>
        <p>
          Welcome to your professional page. Velvet House is a premium platform
          for streamers and content creators. Before accessing your studio,
          please make sure you agree with the following rules:
        </p>
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>No explicit nudity or illegal content</li>
          <li>Respect others and yourself</li>
          <li>Gifts are your only unlock trigger</li>
          <li>VIP and VIP Gold are managed by admins only</li>
          <li>You are free to create and earn at your rhythm</li>
        </ul>
        <p style={{ marginTop: 16, fontWeight: 600, color: '#f8d7a0' }}>
          Any violation may result in a ban or removal from the platform.
        </p>

        <button
          className="btn3d btn3d--gold"
          style={{ marginTop: 28 }}
          onClick={() => setAgreed(true)}
        >
          I understand and want to enter my studio
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1 style={{ color: '#D4AF37' }}>🎥 Your Studio Dashboard</h1>
      <p>
        Welcome back! You can manage your schedule, go live, and track your
        earnings here.
      </p>

      <div
        style={{
          background: 'rgba(0,0,0,0.25)',
          padding: 16,
          borderRadius: 12,
          marginTop: 20,
          border: '1px solid rgba(212,175,55,0.35)',
        }}
      >
        <ul style={{ lineHeight: 2 }}>
          <li>📅 Schedule your live sessions</li>
          <li>🎁 View your received gifts</li>
          <li>💰 Track your Lotus balance</li>
          <li>🔐 Apply for VIP or Gold status</li>
        </ul>
      </div>

      {/* 🖼️ Gallery */}
      <StudioGallery photos={photos} onToggleNSFW={onToggleNSFW} onAssignGift={onAssignGift} />

      {/* 🎯 Weekly Goal */}
      <GoalWidget lotusEarned={216000} goal={500000} frequency="weekly" />

      {/* 📊 Stats */}
      <StatsPerformance />

      {/* ⚔️ Battle Options */}
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: '#FFD700', marginBottom: 12 }}>⚔️ Battle Frequency</h2>

        <label style={{ display: 'block', marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={allowBattle}
            onChange={toggleAllowBattle}
          />
          Allow battle mode
        </label>

        {allowBattle && (
          <>
            <label style={{ display: 'block', marginTop: 12 }}>
              Desired battle frequency (per hour):
              <select
                value={battleFrequency}
                onChange={(e) => setBattleFrequency(parseInt(e.target.value))}
                style={{
                  marginTop: 8,
                  padding: 8,
                  borderRadius: 6,
                  border: '1px solid #aaa',
                  background: '#1c1c1c',
                  color: '#fff',
                }}
              >
                <option value={1}>1 battle/h</option>
                <option value={2}>2 battles/h</option>
                <option value={3}>3 battles/h</option>
                <option value={4}>4 battles/h</option>
                <option value={5}>5 battles/h</option>
                <option value={10}>10 battles/h</option>
                <option value={15}>15 battles/h (max)</option>
              </select>
            </label>
            <p style={{ fontSize: 13, color: '#aaa', marginTop: 10 }}>
              You can adjust this at any time based on your audience's response.
            </p>
          </>
        )}
      </section>

      {/* 🎙️ Mute Battle Opponent */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ color: '#D4AF37', marginBottom: 10 }}>
          🎙️ Mute Battle Opponent
        </h2>
        <div
          style={{
            background: '#1e0d0d',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)',
            padding: 16,
            color: '#fff',
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input
              type="checkbox"
              checked={isOpponentMuted}
              onChange={() => setIsOpponentMuted(!isOpponentMuted)}
            />
            Mute opponent during next battle
          </label>
          <p style={{ fontSize: 13, marginTop: 10, color: '#aaa' }}>
            When enabled, you won’t hear your opponent during the next battle. Helpful for focus or avoiding disturbances.
          </p>
        </div>
      </section>

      {/* 🧠 Nova Coach IA */}
      <div style={{ marginTop: 40 }}>
        <NovaStudioCoach />
      </div>
    </main>
  );
    }
