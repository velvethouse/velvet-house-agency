// scripts/checkGifts.ts
import fs from "fs";
import path from "path";

const expectedGifts = [
  "lotus", "rose", "heart", "champagne", "diamond", "crown", "fireworks",
  "lightning", "music", "ring", "car", "yacht", "castle", "jet", "lion",
  "tiger", "dragon", "phoenix", "worldtour", "fire", "giftbox", "kiss",
  "star", "explosion", "rainbow", "bird", "wind", "wave", "rain", "cake",
  "moneybag", "temple", "crystalball", "galaxy", "butterfly", "angel",
  "aurora", "comet", "candle"
];

const folderPath = path.join(process.cwd(), "public", "gifts");

function checkGifts() {
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".webm")).map(f => f.replace(".webm", ""));

  const missing = expectedGifts.filter(gift => !files.includes(gift));
  const extra = files.filter(file => !expectedGifts.includes(file));

  console.log("🎁 Vérification des gifts Velvet House :\n");

  if (missing.length === 0) {
    console.log("✅ Tous les gifts requis sont présents !");
  } else {
    console.log("❌ Gifts manquants :", missing);
  }

  if (extra.length > 0) {
    console.log("⚠️ Fichiers en trop :", extra);
  } else {
    console.log("✅ Aucun fichier superflu.");
  }

  console.log(`\n🎯 Total détecté : ${files.length} / 41 attendus`);
}

checkGifts();
