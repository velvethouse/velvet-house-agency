import { create } from 'zustand'

type Streamer = {
  username: string
  avatar: string
  lotusEarned: number
}

type GiftState = {
  streamers: Streamer[]
  setStreamers: (data: Streamer[]) => void
}

export const useGiftStore = create<GiftState>((set) => ({
  streamers: [],

  // ✅ Permet de charger dynamiquement les streameuses (via API, backoffice, etc.)
  setStreamers: (data) => set({ streamers: data }),
}))
