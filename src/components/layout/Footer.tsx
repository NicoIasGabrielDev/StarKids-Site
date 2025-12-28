import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-brand-blueDark text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo_musical.png"
                alt="Starkids Music"
                className="h-10 w-10 rounded-xl object-cover"
              />

              <div className="font-semibold">Starkids Music</div>
            </div>
            <p className="text-sm text-white/75">
              Uma escola dinâmica: tecnologia, acolhimento e música para
              desenvolvimento humano em todas as idades.
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-brand-yellow">
              Links Rápidos
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link className="hover:text-white" href="/">Início</Link></li>
              <li><Link className="hover:text-white" href="/contato">Contato</Link></li>
              <li><Link className="hover:text-white" href="/licenciado">Seja um Licenciado</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-brand-yellow">
              Contato
            </div>
            <p className="text-sm text-white/80">
              Telefone: <a href="tel:+5521982739509" className="text-white hover:underline">(21) 98273-9509</a>
            </p>
            <div className="mt-2">
              <a
                href={`https://wa.me/5521982739509?text=${encodeURIComponent("Olá! Quero agendar uma visita.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:brightness-90"
                aria-label="Abrir WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .5 11.92 11.92 0 0 0 .5 12c0 2.1.55 4.14 1.6 5.94L.5 23.5l5.78-1.52A11.92 11.92 0 0 0 12 23.5C19.31 23.5 24 18.09 24 12a11.9 11.9 0 0 0-3.48-8.52zM12 21.5c-1.87 0-3.7-.5-5.28-1.44l-.38-.23-3.43.9.92-3.35-.25-.39A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
                  <path d="M17.5 14.2c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.34.225-.63.075-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.03-.51-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.27.29-1.04 1.02-1.04 2.48 0 1.47 1.06 2.9 1.21 3.1.15.2 2.09 3.38 5.06 4.74 3. -1.02 3.55-2.42 3.96-2.79.4-.37.68-.66.77-.86.1-.2.01-.36-.14-.5z" />
                </svg>
                <span className="text-white">WhatsApp</span>
              </a>
            </div>
            <p className="mt-2 text-sm text-white/60">
              © {new Date().getFullYear()} Starkids Music. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
