import { create } from 'zustand'

type Streamer = {
  username: string
  avatar: string
  lotusEarned: number
}

type GiftState = {
  streamers: Streamer[]
}

export const useGiftStore = create<GiftState>(() => ({
  streamers: [
    {
      username: "amelia_vip",
      avatar: "/images/amelia.jpg",
      lotusEarned: 14300,
    },
    {
      username: "nova_stream",
      avatar: "/images/nova.jpg",
      lotusEarned: 210000,
    },
    {
      username: "chloe_vh",
      avatar: "/images/chloe.jpg",
      lotusEarned: 50000,
    },
  ],
}))
