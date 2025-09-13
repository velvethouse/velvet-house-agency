'use client'

import { create } from 'zustand'

type GiftOverlayState = {
  overlayFile: string | null
  showOverlay: (file: string) => void
  clearOverlay: () => void
}

export const useGiftOverlay = create<GiftOverlayState>((set) => ({
  overlayFile: null,
  showOverlay: (file) => set({ overlayFile: file }),
  clearOverlay: () => set({ overlayFile: null }),
}))
