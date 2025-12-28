export function Card({ title, desc }: { title: string; desc: string }) {
  const PHONE = "5521982739509";
  const waText = encodeURIComponent(`Olá! Quero mais informações sobre: ${title}`);
  const waLink = `https://wa.me/${PHONE}?text=${waText}`;

  return (
    <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-14 w-14 rounded-2xl bg-brand-blue/10" />
      <h3 className="text-base font-bold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">{desc}</p>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex text-sm font-semibold text-brand-blue"
      >
        Saiba mais <span className="ml-1 transition group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}
