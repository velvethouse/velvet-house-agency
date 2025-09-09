export async function fetchUserProfile(username: string) {
  // MOCK — tu pourras remplacer plus tard par une vraie requête backend/API
  if (!username) return null;

  return {
    username,
    lotusEarned: 18500,
    rank: "Butterfly",
    gallery: [],
    events: [
      {
        id: "1",
        title: "Special Show Tonight",
        description: "Join me at 21:00 for a sexy live 💋",
        fromVelvet: false,
      },
      {
        id: "2",
        title: "Velvet Platform Night",
        description: "Official live Friday 22h across all channels 🎉",
        fromVelvet: true,
      },
    ],
  };
}
