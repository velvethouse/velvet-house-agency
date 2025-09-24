import { create } from 'zustand'

export type UserVipStatus = 'none' | 'vip' | 'vip-gold'

type UserState = {
  username: string
  vipStatus: UserVipStatus
  setVipStatus: (status: UserVipStatus) => void
}

export const useUserStore = create<UserState>((set) => ({
  username: 'follower123', // à remplacer par session réelle plus tard
  vipStatus: 'none',        // valeur réelle à injecter dynamiquement
  setVipStatus: (status) => set({ vipStatus: status }),
}))
