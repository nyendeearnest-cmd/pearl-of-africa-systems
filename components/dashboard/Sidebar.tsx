"use client";

import Link from "next/link";

export default function Sidebar() {

  return (
    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-green-500 mb-12">
        Pearl Admin
      </h1>

      <nav className="space-y-4">

        <Link
          href="/dashboard"
          className="block bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-2xl"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/messages"
          className="block bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-2xl"
        >
          Messages
        </Link>

        <Link
          href="/"
          className="block bg-zinc-900 hover:bg-zinc-800 transition p-4 rounded-2xl"
        >
          Website
        </Link>

      </nav>

    </aside>
  );
}