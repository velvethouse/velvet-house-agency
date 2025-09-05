// stores/giftStore.ts
"use client";
import { create } from "zustand";

export type Gift = {
  id: string;
  name: string;
  kind: "lottie" | "static";
  src: string;          // /gifts/xxx.json | .webm | .mp4 | .png...
  durationMs?: number;  // ex: 2000
};

type GiftState = {
  queue: Gift[];
  push: (g: Gift) => void;
  shift: () => Gift | undefined;
  clear: () => void;
};

export const useGiftStore = create<GiftState>((set, get) => ({
  queue: [],
  push: (g) => set((s) => ({ queue: [...s.queue, g] })),
  shift: () => {
    const [head, ...rest] = get().queue;
    set({ queue: rest });
    return head;
  },
  clear: () => set({ queue: [] }),
}));
