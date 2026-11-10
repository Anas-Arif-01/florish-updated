'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/923299906666?text=${encodeURIComponent(
    'Hi Flourish Interiors! I would like to inquire about your product catalog and services.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-full shadow-lg transition-all hover:scale-105"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Chat with Us</span>
    </a>
  );
}