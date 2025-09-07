// stores/giftStore.ts
import { create } from "zustand";

export type Gift = {
  name: string;
  duration?: number;
};

type GiftState = {
  current: Gift | null;
  setGift: (gift: Gift) => void;
  clearGift: () => void;
};

export const useGiftStore = create<GiftState>((set) => ({
  current: null,
  setGift: (gift) => set({ current: gift }),
  clearGift: () => set({ current: null }),
}));
