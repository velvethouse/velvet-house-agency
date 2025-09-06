export type TierKey = "vip" | "vip-gold";

export const TIERS: Record<TierKey, {
  title: string;
  monthly: number;          // €/mois
  annual: number;           // €/an
  lotusMonthlyIncluded: number; // Lotus crédités chaque mois
  benefits: string[];
}> = {
  "vip": {
    title: "VIP",
    monthly: 15,
    annual: 150, // 2 mois off proposé
    lotusMonthlyIncluded: 1200,
    benefits: [
      "Full galleries (non-NSFW): up to 100 photos & 20 videos",
      "Priority access in lives & chat",
      "VIP badge & highlights",
      "Exclusive VIP drops & events",
      "Better rates on selected VIP-only items"
    ]
  },
  "vip-gold": {
    title: "VIP Gold",
    monthly: 464,
    annual: 4640, // 2 mois off proposé
    lotusMonthlyIncluded: 105_000,
    benefits: [
      "Everything in VIP",
      "Extended galleries (non-NSFW): up to 300 photos & 60 videos",
      "Top priority in lives & Gold reply in chat",
      "Gold badge & golden highlight",
      "+5% Lotus bonus on every pack purchased",
      "Gold Lounge (private events & early access)",
      "Cosmetic gold skins in Casino (non-boost)"
    ]
  }
};
