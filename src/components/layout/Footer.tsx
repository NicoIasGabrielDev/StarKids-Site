import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-brand-blueDark text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/15" />
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
              <li><Link className="hover:text-white" href="/#programas">Programas</Link></li>
              <li><Link className="hover:text-white" href="/#metodo">Método</Link></li>
              <li><Link className="hover:text-white" href="/contato">Contato</Link></li>
              <li><Link className="hover:text-white" href="/licenciado">Licenciado</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold text-brand-yellow">
              Contato
            </div>
            <p className="text-sm text-white/80">
              WhatsApp: (21) 98273-9509
            </p>
            <p className="mt-2 text-sm text-white/60">
              © {new Date().getFullYear()} Starkids Music. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
