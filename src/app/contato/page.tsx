import { Section } from "@/components/ui/Section";

export default function Contato() {
  return (
    <main>
      <Section className="bg-white">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-brand-ink">Contato</h1>
          <p className="mt-2 text-brand-muted">Nossas unidades e contatos.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Barra da Tijuca */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-brand-ink">Barra da Tijuca</h2>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470087.9727028257!2d-43.95157814025879!3d-23.00311797154146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb74e6dca2bf%3A0xb4358176ebf9ed43!2sStarkids%20Music%20-%20Barra%20da%20Tijuca!5e0!3m2!1spt-PT!2spt!4v1766928415626!5m2!1spt-PT!2spt"
                className="w-full h-80 md:h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-3 text-sm text-brand-muted">
              <div>Endereço: Av. Gastão Sengés, 185 - Loja 129 - Barra da Tijuca - RJ,<br></br> 22631-270, Brasil</div>
              <div className="mt-2 flex items-center gap-4">
                <span className="whitespace-nowrap">Telefone:</span>
                <a href="tel:+5521982739509" className="text-brand-blue mr-2">(21) 98273-9509</a>
                <a
                  href={`https://wa.me/5521982739509?text=${encodeURIComponent("Olá! Quero agendar uma visita.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:brightness-90"
                  aria-label="Abrir WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .5 11.92 11.92 0 0 0 .5 12c0 2.1.55 4.14 1.6 5.94L.5 23.5l5.78-1.52A11.92 11.92 0 0 0 12 23.5C19.31 23.5 24 18.09 24 12a11.9 11.9 0 0 0-3.48-8.52zM12 21.5c-1.87 0-3.7-.5-5.28-1.44l-.38-.23-3.43.9.92-3.35-.25-.39A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
                    <path d="M17.5 14.2c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.34.225-.63.075-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.03-.51-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.27.29-1.04 1.02-1.04 2.48 0 1.47 1.06 2.9 1.21 3.1.15.2 2.09 3.38 5.06 4.74 3. -1.02 3.55-2.42 3.96-2.79.4-.37.68-.66.77-.86.1-.2.01-.36-.14-.5z" />
                  </svg>
                  
                </a>
              </div>
            </div>
          </div>

          {/* Recreio */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-brand-ink">Recreio</h2>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117511.25850909707!2d-43.59967228703073!3d-23.015442332375763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bc3c52b380c21%3A0xfad1691d64baa634!2sStarkids%20Music%20-%20Recreio!5e0!3m2!1spt-PT!2spt!4v1766928528613!5m2!1spt-PT!2spt"
                className="w-full h-80 md:h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-3 text-sm text-brand-muted">
              <div>Endereço: R. Sen. Rui Carneiro, 301 - Loja C - Recreio dos Bandeirantes - RJ,<br></br> 22790-650, Brasil</div>
              <div className="mt-2 flex items-center gap-4">
                <span className="whitespace-nowrap">Telefone:</span>
                <a href="tel:+5521982739509" className="text-brand-blue mr-2">(21) 98273-9509</a>
                <a
                  href={`https://wa.me/5521982739509?text=${encodeURIComponent("Olá! Quero agendar uma visita.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:brightness-90"
                  aria-label="Abrir WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .5 11.92 11.92 0 0 0 .5 12c0 2.1.55 4.14 1.6 5.94L.5 23.5l5.78-1.52A11.92 11.92 0 0 0 12 23.5C19.31 23.5 24 18.09 24 12a11.9 11.9 0 0 0-3.48-8.52zM12 21.5c-1.87 0-3.7-.5-5.28-1.44l-.38-.23-3.43.9.92-3.35-.25-.39A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
                    <path d="M17.5 14.2c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.34.225-.63.075-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.03-.51-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.27.29-1.04 1.02-1.04 2.48 0 1.47 1.06 2.9 1.21 3.1.15.2 2.09 3.38 5.06 4.74 3. -1.02 3.55-2.42 3.96-2.79.4-.37.68-.66.77-.86.1-.2.01-.36-.14-.5z" />
                  </svg>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
