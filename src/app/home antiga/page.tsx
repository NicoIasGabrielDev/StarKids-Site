// import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WhatsappCTA } from "@/components/whatsapp/WhatsappCTA";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 opacity-30">
          {/* placeholder: depois você troca pela imagem do banner */}
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(247,226,85,.20),transparent_60%)]" />
        </div>
        <Container>
          <div className="relative grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Potencialize a inteligência do seu filho com música
              </h1>
              <p className="mt-4 text-base text-white/80">
                Aulas com metodologia moderna, acolhimento e foco em desenvolvimento
                cognitivo, social e emocional.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contato">Agendar experiência</Button>
                <Button href="/licenciado" variant="outline">
                  Quero ser Licenciado
                </Button>
                <WhatsappCTA className="hidden sm:inline-flex" />
              </div>

              <div className="mt-8 flex gap-6 text-sm text-white/80">
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  <div className="font-semibold text-white">+100</div>
                  <div className="text-white/70">avaliações</div>
                </div>
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  <div className="font-semibold text-white">2</div>
                  <div className="text-white/70">unidades</div>
                </div>
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  <div className="font-semibold text-white">Aulas</div>
                  <div className="text-white/70">para todas as idades</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-2xl bg-white/10 p-6 shadow-soft">
                <div className="aspect-[16/10] w-full rounded-xl bg-white/10" />
                <p className="mt-4 text-sm text-white/75">
                  Depois a gente troca essa área por uma foto real do espaço / aula.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROGRAMAS */}
      <Section className="bg-white" >
        <div id="programas" className="scroll-mt-24" />
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-brand-ink">
            Programas para cada fase
          </h2>
          <p className="mt-2 text-brand-muted">
            Experiências musicais com propósito: do desenvolvimento infantil ao palco.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Musicalização Infantil" desc="Coordenação, ritmo e desenvolvimento desde os primeiros passos." />
          <Card title="Instrumentos & Canto" desc="Do iniciante ao avançado, com acompanhamento personalizado." />
          <Card title="Inclusão & Musicoterapia" desc="Acolhimento real e metodologia adaptada para cada aluno." />
          <Card title="Prática em Conjunto" desc="Bandas e práticas para socialização e experiência de palco." />
        </div>
      </Section>

      {/* MÉTODO */}
      <Section className="bg-brand-blueSoft">
        <div id="metodo" className="scroll-mt-24" />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="aspect-[4/3] w-full rounded-xl bg-brand-blue/10" />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-brand-ink">
              Mais que música: desenvolvimento humano
            </h2>
            <p className="mt-3 text-brand-muted">
              Metodologia que une tecnologia, neurociência e acolhimento.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Material didático próprio focado em resultados",
                "Exercícios para memória e foco",
                "Inclusão real e equipe treinada",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                    ✓
                  </span>
                  <span className="font-medium text-brand-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <Button href="/contato">Agendar</Button>
              <WhatsappCTA />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-brand-blue">
        <div className="rounded-2xl bg-white/10 p-8 text-center shadow-soft">
          <h3 className="text-2xl font-extrabold text-white">
            Pronto pra viver a experiência?
          </h3>
          <p className="mt-2 text-white/80">
            Fale com a equipe no WhatsApp e agende uma visita.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contato">Ver unidades</Button>
            <WhatsappCTA />
          </div>
        </div>
      </Section>
    </main>
  );
}
