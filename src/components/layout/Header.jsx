import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const nav = [
  { label: "Início", href: "/" },
  { label: "Programas", href: "/#programas" },
  { label: "Método", href: "/#metodo" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-blue/75 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo_musical.png"
              alt="Starkids Music"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Starkids</div>
              <div className="text-xs text-white/70">Music</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/licenciado" variant="outline">
              Quero ser Licenciado
            </Button>
            <Button href="/contato">Agende uma experiência</Button>
          </div>

          <div className="lg:hidden">
            <Button href="/contato">Agendar</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
