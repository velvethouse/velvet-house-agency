import { NextResponse } from "next/server";
import { readSession, updateSession } from "../../../../lib/session";

// seuil distance: plus petit = plus strict. 0.5 à 0.6 est courant pour face-api.
const THRESHOLD = parseFloat(process.env.KYC_FACE_THRESHOLD || "0.55");

export async function POST(req: Request) {
  const sess = readSession();
  if (!sess) return NextResponse.json({ ok: false, error: "Not logged in" }, { status: 401 });

  const { distance } = await req.json().catch(() => ({}));
  if (typeof distance !== "number") {
    return NextResponse.json({ ok: false, error: "Missing distance" }, { status: 400 });
  }

  const verified = distance <= THRESHOLD;
  if (verified) updateSession({ kyc: "verified" });
  else updateSession({ kyc: "rejected" });

  return NextResponse.json({ ok: true, verified, threshold: THRESHOLD, distance });
}
