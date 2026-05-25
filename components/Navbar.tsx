"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.png"
            alt="Pearl of Africa Systems"
            className="w-12 h-12 object-contain"
          />

          <span className="text-2xl font-bold text-white">

            Pearl Systems

          </span>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#about"
            className="hover:text-green-400 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-green-400 transition"
          >
            Services
          </a>

          <a
            href="#blogs"
            className="hover:text-green-400 transition"
          >
            Blogs
          </a>

          <a
            href="#contact"
            className="hover:text-green-400 transition"
          >
            Contact
          </a>

        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >

          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}

        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-8 space-y-6 text-lg">

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block"
          >
            Services
          </a>

          <a
            href="#blogs"
            onClick={() => setOpen(false)}
            className="block"
          >
            Blogs
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </a>

        </div>
      )}

    </header>
  );
}