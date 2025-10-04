import { readSession } from "../../../lib/session";
import Link from "next/link";

export default function StatusPage() {
  const sess = readSession();
  if (!sess) {
    return (
      <div className="max-w-md mx-auto py-10 space-y-4">
        <h1 className="text-3xl font-bold">Status</h1>
        <p>Not logged in.</p>
        <Link className="underline" href="/auth/login">Log in</Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Verification status</h1>
      <div className="rounded-xl p-4 bg-black/30 border border-white/10">
        <div><span className="text-gray-300">User:</span> {sess.sub}</div>
        <div><span className="text-gray-300">KYC:</span> {sess.kyc}</div>
      </div>
      {sess.kyc !== "verified" ? (
        <div className="flex gap-3">
          <Link href="/auth/kyc/info" className="px-4 py-2 rounded-xl bg-purple-600">Start / Retry KYC</Link>
          <form action="/api/auth/logout" method="post">
            <button className="px-4 py-2 rounded-xl bg-gray-700">Logout</button>
          </form>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href="/profile" className="px-4 py-2 rounded-xl bg-purple-600">Go to profile</Link>
          <form action="/api/auth/logout" method="post">
            <button className="px-4 py-2 rounded-xl bg-gray-700">Logout</button>
          </form>
        </div>
      )}
    </div>
  );
}
