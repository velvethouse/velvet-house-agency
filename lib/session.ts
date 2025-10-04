import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "cvp_session";
const SECRET = process.env.JWT_SECRET || "clairvoyance_secret_key";

type RawSession = {
  sub: string;       // username
  kyc: "pending" | "verified" | "rejected";
  iat: number;
};

export type Session = RawSession;

function sign(payload: string) {
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createSession(s: Session) {
  const payload = JSON.stringify(s);
  const sig = sign(payload);
  cookies().set(SESSION_COOKIE, `${payload}::${sig}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function readSession(): Session | null {
  const c = cookies().get(SESSION_COOKIE);
  if (!c?.value) return null;
  const [payload, sig] = c.value.split("::");
  const expected = sign(payload);
  if (!timingSafeEqual(Buffer.from(sig || ""), Buffer.from(expected))) return null;
  try {
    return JSON.parse(payload) as Session;
  } catch {
    return null;
  }
}

export function updateSession(partial: Partial<Session>) {
  const current = readSession();
  if (!current) return;
  createSession({ ...current, ...partial, iat: Math.floor(Date.now() / 1000) });
}

export function clearSession() {
  cookies().set(SESSION_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}
