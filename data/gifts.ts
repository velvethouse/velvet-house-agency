// /data/gifts.ts  (CREATION)
export type GiftItem = {
  id: string;         // utilisé pour trouver le fichier /public/gifts/<id>.mp4|.webm|.gif|.webp|.png
  name: string;       // nom affiché
  lotus: number;      // prix en Lotus
  animated: boolean;  // true si animé
  note?: string;
};

export const GIFTS: GiftItem[] = [
  { id: "lotus",      name: "Lotus",        lotus: 1000,  animated: true,  note: "Signature" },
  { id: "butterfly",  name: "Butterfly",    lotus: 2000,  animated: true },
  { id: "star",       name: "Star",         lotus: 500,   animated: true },
  { id: "rose",       name: "Rose",         lotus: 1500,  animated: true },
  { id: "diamond",    name: "Diamond",      lotus: 10000, animated: true },
  { id: "fireworks",  name: "Fireworks",    lotus: 8000,  animated: true },
  { id: "champagne",  name: "Champagne",    lotus: 3000,  animated: true },
  { id: "heart",      name: "Heart",        lotus: 800,   animated: true },
  { id: "crown",      name: "Crown",        lotus: 7000,  animated: true },
  { id: "music",      name: "Music Notes",  lotus: 1200,  animated: true },
  { id: "lightning",  name: "Lightning",    lotus: 2500,  animated: true },
  { id: "velvetbox",  name: "Velvet Box",   lotus: 5000,  animated: true },

  { id: "phoenix",    name: "Phoenix",      lotus: 20000, animated: true },
  { id: "flame",      name: "Flame",        lotus: 1800,  animated: true },
  { id: "aurora",     name: "Aurora",       lotus: 4000,  animated: true },
  { id: "galaxy",     name: "Galaxy",       lotus: 6000,  animated: true },
  { id: "comet",      name: "Comet",        lotus: 3500,  animated: true },
  { id: "pearl",      name: "Pearl",        lotus: 900,   animated: false },
  { id: "ruby",       name: "Ruby",         lotus: 2200,  animated: false },
  { id: "emerald",    name: "Emerald",      lotus: 2200,  animated: false },
  { id: "sapphire",   name: "Sapphire",     lotus: 2200,  animated: false },
  { id: "ring",       name: "Ring",         lotus: 4500,  animated: false },
  { id: "car",        name: "Car",          lotus: 25000, animated: true },
  { id: "yacht",      name: "Yacht",        lotus: 50000, animated: true },
  { id: "villa",      name: "Villa",        lotus: 75000, animated: true },
  { id: "throne",     name: "Throne",       lotus: 12000, animated: true },
  { id: "scepter",    name: "Scepter",      lotus: 9000,  animated: true },
  { id: "mask",       name: "Mask",         lotus: 1600,  animated: true },
  { id: "feather",    name: "Feather",      lotus: 700,   animated: true },
  { id: "silk",       name: "Silk",         lotus: 1100,  animated: false },
  { id: "velvet",     name: "Velvet",       lotus: 1300,  animated: false },
  { id: "perfume",    name: "Perfume",      lotus: 1700,  animated: false },
  { id: "heels",      name: "Heels",        lotus: 1400,  animated: false },
  { id: "lipstick",   name: "Lipstick",     lotus: 900,   animated: false },
  { id: "mirror",     name: "Mirror",       lotus: 900,   animated: false },
  { id: "moon",       name: "Moon",         lotus: 2100,  animated: true },
  { id: "sun",        name: "Sun",          lotus: 2100,  animated: true },
  { id: "wave",       name: "Wave",         lotus: 1800,  animated: true },
  { id: "snow",       name: "Snow",         lotus: 1600,  animated: true },
  { id: "leaf",       name: "Leaf",         lotus: 600,   animated: true },
  { id: "clover",     name: "Clover",       lotus: 600,   animated: true },
  { id: "wing",       name: "Wing",         lotus: 1900,  animated: true },
  { id: "halo",       name: "Halo",         lotus: 2000,  animated: true },
  { id: "orb",        name: "Orb",          lotus: 2400,  animated: true },
  { id: "portal",     name: "Portal",       lotus: 2600,  animated: true },
  { id: "ribbon",     name: "Ribbon",       lotus: 800,   animated: true },
  { id: "confetti",   name: "Confetti",     lotus: 1000,  animated: true },
  { id: "sparkle",    name: "Sparkle",      lotus: 700,   animated: true },
  { id: "candle",     name: "Candle",       lotus: 900,   animated: true },
  { id: "balloon",    name: "Balloon",      lotus: 800,   animated: true },
];
