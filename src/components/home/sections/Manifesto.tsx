"use client";

export default function Manifesto() {
  return (
    <section className="relative bg-amber-50 py-16 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-6 text-2xl font-bold leading-relaxed text-gray-800 sm:mb-8 sm:text-3xl lg:text-4xl">
          Música não é apenas uma atividade extracurricular.
        </p>
        <p className="mb-6 text-2xl font-bold leading-relaxed text-gray-800 sm:mb-8 sm:text-3xl lg:text-4xl">
          É a linguagem que ensina seu filho a ouvir,
          <br className="hidden sm:block" />a sentir, a se expressar com coragem.
        </p>
        <p className="text-2xl font-bold leading-relaxed text-gray-800 sm:text-3xl lg:text-4xl">
          É disciplina disfarçada de brincadeira.
          <br />
          É matemática que soa como magia.
          <br />
          <span className="text-blue-600">
            É a memória emocional mais bonita da infância.
          </span>
        </p>

        <div className="mt-12 flex justify-center gap-1 sm:mt-16">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-blue-500 via-blue-400 to-yellow-400"
              style={{ height: `${20 + Math.sin(i * 0.5) * 15}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
