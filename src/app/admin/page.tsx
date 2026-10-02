"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      router.replace("/admin/login");
      return;
    }

    const supabase = createClient(url, key);

    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setEmail(session.user.email ?? "Admin");
      setLoading(false);
    }

    checkSession();
  }, [router]);

  async function handleLogout() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (url && key) {
      const supabase = createClient(url, key);
      await supabase.auth.signOut();
    }

    router.replace("/admin/login");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-sm text-white/50">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-8 text-white sm:px-10">

      <header className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            DS CAR SPA
          </h1>

          <p className="mt-1 text-sm text-white/40">
            Admin Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl border border-white/15 px-5 py-2.5 text-sm transition hover:bg-white hover:text-black"
        >
          Sign Out
        </button>
      </header>

      <section className="mx-auto max-w-7xl py-10">

        <p className="text-sm text-white/50">
          Welcome back
        </p>

        <h2 className="mt-2 text-3xl font-semibold">
          Dashboard Overview
        </h2>

        <p className="mt-2 text-sm text-white/40">
          Signed in as {email}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
            <p className="text-sm text-white/45">
              Services
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Manage Services
            </h3>

            <p className="mt-2 text-sm text-white/40">
              Add and update car spa services and prices.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
            <p className="text-sm text-white/45">
              Bookings
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Customer Bookings
            </h3>

            <p className="mt-2 text-sm text-white/40">
              View and manage customer appointments.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6">
            <p className="text-sm text-white/45">
              Website
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Website Status
            </h3>

            <p className="mt-2 text-sm text-green-400">
              Connected to Admin
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}