"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid password");
      } else {
        router.push("/admin");
      }
    } catch (err) {
      setError("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fcff] via-[#f3f8fd] to-[#edf3f9] px-4 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(0,212,200,0.14),_transparent_40%)]" />
      <div className="relative w-full max-w-md rounded-3xl border border-[#dbe8f3] bg-white/90 p-8 shadow-[0_24px_70px_rgba(26,34,51,0.08)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A6CF7]">
          Admin access
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#1A2233]">Admin Login</h1>
        <p className="mt-2 text-[#5A6A7A]">Enter admin password to access CMS</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A2233]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
              placeholder="Enter admin password"
              disabled={loading}
            />
          </div>

          {error && (
            <p className="rounded-lg border border-[#f3c2ca] bg-[#fff5f6] px-4 py-3 text-sm text-[#c13b50]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#4A6CF7] py-3 font-semibold text-white transition hover:bg-[#3951d1] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
