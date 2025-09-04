// app/api/announcements/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Exemple : tu pourrais plus tard stocker ça en DB
    const announcements = [
      // { id: "god", message: "✨ GOD game started ✨", startAt: "2025-09-01", endAt: "2025-09-03" }
    ];

    return NextResponse.json({ items: announcements ?? [] });
  } catch (err) {
    console.error("Error in announcements API:", err);
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}
