"use client";

import { Heart, Sparkles, Users } from "lucide-react";

export default function Metodologia() {
  return (
    <section id="metodologia" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-800 sm:mb-16 sm:text-4xl lg:mb-20 lg:text-5xl">
          O Jeito <span className="text-blue-600">Starkids</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {/* Pilar 1 */}
          <div className="group relative h-[400px] overflow-hidden rounded-2xl sm:h-[500px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            <img
              src="/api/placeholder/600/800"
              alt="Desenvolvimento Musical"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white sm:p-8">
              <Heart className="mb-4 text-yellow-400" size={40} />
              <h3 className="mb-4 text-2xl font-extrabold sm:text-3xl">
                Desenvolvimento Musical Real
              </h3>
              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                Não é recreação: é ensino estruturado que respeita o ritmo de
                cada criança.
              </p>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="group relative h-[400px] overflow-hidden rounded-2xl sm:h-[500px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            <img
              src="/api/placeholder/600/800"
              alt="Olhar Clínico"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white sm:p-8">
              <Sparkles className="mb-4 text-blue-400" size={40} />
              <h3 className="mb-4 text-2xl font-extrabold sm:text-3xl">
                Olhar Clínico e Acolhedor
              </h3>
              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                Turmas pequenas. Professores que conhecem seu filho pelo nome —
                e pelo sonho.
              </p>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="group relative h-[400px] overflow-hidden rounded-2xl sm:h-[500px] sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
            <img
              src="/api/placeholder/600/800"
              alt="Inclusão"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white sm:p-8">
              <Users className="mb-4 text-yellow-400" size={40} />
              <h3 className="mb-4 text-2xl font-extrabold sm:text-3xl">
                Inclusão Como Princípio
              </h3>
              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                Toda criança merece música. Todas as habilidades, todos os
                ritmos, todas as histórias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
