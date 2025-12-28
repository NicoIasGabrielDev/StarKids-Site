"use client";

import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/api/placeholder/1920/1080)",
          filter: "brightness(0.7)",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-0">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            A música que mora
            <br />
            dentro do seu filho
            <br />
            está esperando
            <br />
            <span className="text-yellow-400">para ser descoberta.</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl">
            Há 25 anos ajudamos famílias a descobrirem o músico, o artista e a
            criança mais confiante que existe dentro de cada aluno.
          </p>

          <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-base font-extrabold text-gray-900 transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg">
            Agende uma Aula Experimental
            <ChevronRight
              className="transition group-hover:translate-x-1"
              size={20}
            />
          </button>

          <div
            className="animate-fadeIn mt-12 text-2xl font-extrabold text-yellow-400 opacity-0 sm:text-3xl"
            style={{
              fontFamily: "Caveat, cursive",
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          >
            Ensino que transforma ✨
          </div>
        </div>
      </div>
    </section>
  );
}
