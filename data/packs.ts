// /data/packs.ts

export type LotusPack = {
  id: string;
  name: string;
  lotus: number;          // base Lotus
  price: number;          // € TTC
  badge?: string;         // ex: "GOD"
  note?: string;          // ex: "Includes access to the GOD game"
  bonusPercentGold?: number; // % bonus Lotus pour VIP Gold (ex: 5)
};

export const PACKS: LotusPack[] = [
  { id: "starter",   name: "Starter",  lotus: 1_000,     price: 4.65,  bonusPercentGold: 5 },
  { id: "mini",      name: "Mini",     lotus: 2_000,     price: 9.30,  bonusPercentGold: 5 },
  { id: "small",     name: "Small",    lotus: 5_000,     price: 23.20, bonusPercentGold: 5 },
  { id: "medium",    name: "Medium",   lotus: 10_000,    price: 46.40, bonusPercentGold: 5 },
  { id: "large",     name: "Large",    lotus: 20_000,    price: 92.80, bonusPercentGold: 5 },
  { id: "xl",        name: "XL",       lotus: 50_000,    price: 232.00, bonusPercentGold: 5 },
  { id: "vip",       name: "VIP",      lotus: 100_000,   price: 464.00, badge: "GOD", note: "Includes access to the GOD game", bonusPercentGold: 5 },
  { id: "elite",     name: "Elite",    lotus: 500_000,   price: 2320.00, bonusPercentGold: 5 },
  { id: "whale",     name: "Whale 🐳", lotus: 1_000_000, price: 4640.00, bonusPercentGold: 5 },
];
