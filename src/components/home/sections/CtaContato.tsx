"use client";

import { useMemo } from "react";

type Star = { top: number; left: number; delay: number; dur: number };

export default function CtaContato() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      dur: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 py-16 text-white sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        {stars.map((s, i) => (
          <div
            key={`cta-star-${i}`}
            className="absolute text-xl text-yellow-200/40 sm:text-2xl"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              animation: `twinkleBackground ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:mb-8 sm:text-4xl lg:text-5xl">
          "A primeira aula é sempre especial.
          <br />
          Para o seu filho — e para nós."
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-blue-50 sm:mb-12 sm:text-xl lg:text-2xl">
          Agende uma visita. Sem compromisso.
          <br />
          Só a vontade de ver seu filho sorrindo.
        </p>

        <button className="mb-6 inline-block rounded-full bg-white px-8 py-4 text-lg font-extrabold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-gray-100 sm:px-12 sm:py-5 sm:text-xl">
          Quero Agendar uma Aula Experimental
        </button>

        <p className="text-blue-50">
          Ou ligue agora:{" "}
          <a
            href="tel:2130430456"
            className="font-extrabold text-white hover:underline"
          >
            (21) 3043-0456
          </a>
        </p>
      </div>
    </section>
  );
}
