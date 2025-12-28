"use client";

import { cn } from "@/lib/cn";

const PHONE = "5521982739509";

export function WhatsappCTA({ className }: { className?: string }) {
  const msg = encodeURIComponent("Olá! Quero agendar uma visita/experiência.");
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95",
        className
      )}
      href={`https://wa.me/${PHONE}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}
