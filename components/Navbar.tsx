"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const whatsappNumber = "256706836522";

  const whatsappMessage = encodeURIComponent(
    "Hello Pearl of Africa Systems, I would like to inquire about your services."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
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
            href="/#about"
            className="hover:text-green-400 transition"
          >
            About
          </a>

          <a
            href="/#services"
            className="hover:text-green-400 transition"
          >
            Services
          </a>

          <Link
            href="/blog"
            className="hover:text-green-400 transition"
          >
            Blogs
          </Link>

          <a
            href="/#contact"
            className="hover:text-green-400 transition"
          >
            Contact
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-5 py-3 rounded-xl font-semibold transition hover:scale-105"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
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
            href="/#about"
            onClick={closeMenu}
            className="block hover:text-green-400 transition"
          >
            About
          </a>

          <a
            href="/#services"
            onClick={closeMenu}
            className="block hover:text-green-400 transition"
          >
            Services
          </a>

          <Link
            href="/blog"
            onClick={closeMenu}
            className="block hover:text-green-400 transition"
          >
            Blogs
          </Link>

          <a
            href="/#contact"
            onClick={closeMenu}
            className="block hover:text-green-400 transition"
          >
            Contact
          </a>

          {/* Mobile WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black px-5 py-4 rounded-xl font-semibold transition"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>

        </div>
      )}

    </header>
  );
}