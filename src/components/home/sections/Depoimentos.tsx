"use client";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-800 sm:mb-16 sm:text-4xl lg:mb-20 lg:text-5xl">
          Famílias <span className="text-yellow-500">Starkids</span>
        </h2>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {/* Depoimento 1 */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <img
              src="public\logo_musical.png"
              alt="Clarice tocando"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div>
              <p className="mb-6 text-xl font-medium leading-relaxed text-gray-800 sm:mb-8 sm:text-2xl lg:text-3xl">
                "Minha filha era tímida demais pra falar na escola. Depois de 6
                meses na Starkids, ela pediu para tocar violão na festa de
                aniversário.
                <br />
                <br />
                <span className="font-extrabold text-blue-600">
                  Eu chorei. E ela brilhou.
                </span>
                "
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="public\logo_musical.png"
                  alt="Camila"
                  className="h-12 w-12 rounded-full sm:h-16 sm:w-16"
                />
                <div>
                  <div className="font-extrabold text-gray-800">Camila</div>
                  <div className="text-sm text-gray-600">
                    Mãe da Clarice (8 anos)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-2">
              <img
                src="public\logo_musical.png"
                alt="Théo tocando"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

            <div className="lg:order-1">
              <p className="mb-6 text-xl font-medium leading-relaxed text-gray-800 sm:mb-8 sm:text-2xl lg:text-3xl">
                "A Starkids não ensinou só música. Ensinou meu filho a não
                desistir quando erra.
                <br />
                <br />
                Hoje ele toca ukulele. Mas mais importante:{" "}
                <span className="font-extrabold text-yellow-600">
                  ele confia nele mesmo.
                </span>
                "
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="public\logo_musical.png"
                  alt="Marcos"
                  className="h-12 w-12 rounded-full sm:h-16 sm:w-16"
                />
                <div>
                  <div className="font-extrabold text-gray-800">Marcos</div>
                  <div className="text-sm text-gray-600">
                    Pai do Théo (6 anos)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
