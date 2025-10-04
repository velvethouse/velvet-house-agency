"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const r = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) r.push("/auth/kyc/info");
    else alert("Signup failed");
  }

  return (
    <div className="max-w-md mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Create account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full px-4 py-3 rounded-xl text-black" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required/>
        <input className="w-full px-4 py-3 rounded-xl text-black" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button className="w-full py-3 rounded-xl bg-purple-600">Sign up</button>
      </form>
      <p className="text-sm">Already have an account? <a className="underline" href="/auth/login">Log in</a></p>
    </div>
  );
      }
