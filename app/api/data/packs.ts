export type LotusPack = { id: string; name: string; lotus: number; price: number; badge?: string; note?: string; };

export const PACKS: LotusPack[] = [
  { id: "starter", name: "Starter", lotus: 1_000, price: 4.65 },
  { id: "mini", name: "Mini", lotus: 2_000, price: 9.30 },
  { id: "small", name: "Small", lotus: 5_000, price: 23.20 },
  { id: "medium", name: "Medium", lotus: 10_000, price: 46.40 },
  { id: "large", name: "Large", lotus: 20_000, price: 92.80 },
  { id: "xl", name: "XL", lotus: 50_000, price: 232.00 },
  { id: "vip", name: "VIP", lotus: 100_000, price: 464.00, badge: "GOD", note: "Includes access to the GOD game" },
  { id: "elite", name: "Elite", lotus: 500_000, price: 2320.00 },
  { id: "whale", name: "Whale 🐳", lotus: 1_000_000, price: 4640.00 },
];
