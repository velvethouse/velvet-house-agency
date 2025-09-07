// stores/giftStore.ts
import { create } from "zustand";

export type Gift = {
  id: string;
  name: string;
  animation: string; // ex: "lotus.json"
  amount: number;
};

export type GiftState = {
  current: Gift | null; // ✅ c'était ça qui manquait !
  setGift: (gift: Gift) => void;
  clearGift: () => void;
};

export const useGiftStore = create<GiftState>((set) => ({
  current: null,
  setGift: (gift) => set({ current: gift }),
  clearGift: () => set({ current: null }),
}));
