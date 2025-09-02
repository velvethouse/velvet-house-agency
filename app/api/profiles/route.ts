import { NextResponse } from "next/server";

/**
 * Temporary profile source.
 * Later, replace by a DB call (e.g. Prisma/Supabase).
 * Put your demo images in /public/avatars/ (alice.jpg, bella.jpg, etc.)
 */
export async function GET() {
  const profiles: Record<string, { imageUrl: string; displayName?: string }> = {
    alice: { imageUrl: "/avatars/alice.jpg", displayName: "Alice" },
    bella: { imageUrl: "/avatars/bella.jpg", displayName: "Bella" },
    cora:  { imageUrl: "/avatars/cora.jpg",  displayName: "Cora"  },
    dana:  { imageUrl: "/avatars/dana.jpg",  displayName: "Dana"  },
    emi:   { imageUrl: "/avatars/emi.jpg",   displayName: "Emi"   },
  };

  return NextResponse.json(profiles, { status: 200 });
}
