import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { createSession } from "../../../../lib/session";

const USERS_COOKIE = "cvp_users"; // simple store (json) dans cookie httpOnly

function getUsers(): Record<string, { hash: string }> {
  const c = cookies().get(USERS_COOKIE)?.value;
  if (!c) return {};
  try { return JSON.parse(c); } catch { return {}; }
}

function saveUsers(u: Record<string, { hash: string }>) {
  cookies().set(USERS_COOKIE, JSON.stringify(u), { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 60*60*24*365 });
}

function hashPassword(username: string, password: string) {
  return createHmac("sha256", process.env.JWT_SECRET || "clairvoyance_secret_key").update(username + ":" + password).digest("hex");
}

export async function POST(req: Request) {
  const { username, password } = await req.json().catch(() => ({}));
  if (!username || !password) return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });

  const users = getUsers();
  if (users[username]) return NextResponse.json({ ok: false, error: "Username already exists" }, { status: 400 });

  users[username] = { hash: hashPassword(username, password) };
  saveUsers(users);

  createSession({ sub: username, kyc: "pending", iat: Math.floor(Date.now()/1000) });
  return NextResponse.json({ ok: true });
}
