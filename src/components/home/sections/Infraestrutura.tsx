"use client";

import { ChevronRight } from "lucide-react";

export default function Infraestrutura() {
  return (
    <section className="relative bg-amber-50 py-16 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-6 lg:order-1">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Salas projetadas para que a música
              <br className="hidden sm:block" />
              <span className="text-blue-600">(e a concentração)</span>
              <br className="hidden sm:block" />
              floresçam.
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              Cada detalhe foi pensado para criar o ambiente perfeito onde seu
              filho pode se conectar com a música de forma genuína e inspiradora.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-extrabold text-yellow-600 transition-all hover:gap-4"
            >
              Faça um tour virtual <ChevronRight size={20} />
            </a>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <img
              src="/api/placeholder/400/500"
              alt="Sala"
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="space-y-4">
              <img
                src="/api/placeholder/400/240"
                alt="Detalhe"
                className="w-full rounded-2xl object-cover"
              />
              <img
                src="/api/placeholder/400/240"
                alt="Instrumentos"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
