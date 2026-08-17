"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "256706836522";

  const whatsappMessage = encodeURIComponent(
    "Hello Pearl of Africa Systems, I would like to inquire about your services."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pearl of Africa Systems on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-black shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110">
          <MessageCircle size={32} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
        </div>

      </div>
    </a>
  );
}