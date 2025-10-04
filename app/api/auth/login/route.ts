import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { createSession } from "../../../../lib/session";

const USERS_COOKIE = "cvp_users";

function getUsers(): Record<string, { hash: string }> {
  const c = cookies().get(USERS_COOKIE)?.value;
  if (!c) return {};
  try { return JSON.parse(c); } catch { return {}; }
}

function hashPassword(username: string, password: string) {
  return createHmac("sha256", process.env.JWT_SECRET || "clairvoyance_secret_key").update(username + ":" + password).digest("hex");
}

export async function POST(req: Request) {
  const { username, password } = await req.json().catch(() => ({}));
  if (!username || !password) return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });

  const users = getUsers();
  const rec = users[username];
  if (!rec) return NextResponse.json({ ok: false, error: "User not found" }, { status: 404 });

  const good = rec.hash === hashPassword(username, password);
  if (!good) return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });

  // KYC status: keep previous if we had one (not stored centrally here), default pending
  // In cookie-only store, we don't persist KYC per-user. Session holds it for now.
  createSession({ sub: username, kyc: "pending", iat: Math.floor(Date.now()/1000) });
  return NextResponse.json({ ok: true });
}
