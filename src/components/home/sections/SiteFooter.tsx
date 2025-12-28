"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <section className="relative bg-gray-900 py-12 text-white sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-2 sm:gap-12 sm:mb-16">
          <div>
            <h3 className="mb-6 text-2xl font-extrabold sm:text-3xl">
              Venha nos visitar
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-yellow-400" size={24} />
                <div>
                  <p>Rua Exemplo, 123 - Botafogo</p>
                  <p>Rio de Janeiro, RJ</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-yellow-400" size={24} />
                <p>(21) 3043-0456</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-yellow-400" size={24} />
                <p className="break-all">contato@starkidsmusic.com.br</p>
              </div>
            </div>
          </div>

          <div className="flex h-60 items-center justify-center rounded-2xl bg-gray-800 sm:h-80">
            <MapPin className="text-yellow-400" size={48} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row">
          <div className="flex flex-wrap justify-center gap-4 font-bold sm:gap-6">
            <a href="#" className="transition hover:text-blue-400">
              Sobre
            </a>
            <a href="#" className="transition hover:text-yellow-400">
              Eventos
            </a>
            <a href="#" className="transition hover:text-blue-400">
              Blog
            </a>
            <a href="#contato" className="transition hover:text-yellow-400">
              Contato
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="transition hover:text-blue-400">
              <Instagram size={24} />
            </a>
            <a href="#" className="transition hover:text-yellow-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="transition hover:text-blue-400">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <p
          className="mt-8 text-center text-sm text-gray-500 sm:text-base"
          style={{ fontFamily: "Caveat, cursive", fontSize: "18px" }}
        >
          Feito com ♥ para famílias que acreditam na música
        </p>
      </div>
    </section>
  );
}
