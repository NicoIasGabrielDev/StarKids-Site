import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/lead/LeadModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900 antialiased">
        <LeadModal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
