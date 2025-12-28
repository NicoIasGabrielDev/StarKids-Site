// src/components/ui/Button.tsx
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-brand-ink hover:brightness-95 shadow-sm",
  outline:
    "border border-white/20 text-white hover:bg-white/10",
  ghost:
    "text-white/90 hover:text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
