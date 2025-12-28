"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import FloatingDecor from "./FloatingDecor";
import Navbar from "./Navbar";

import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Metodologia from "./sections/Metodologia";
import Infraestrutura from "./sections/Infraestrutura";
import Depoimentos from "./sections/Depoimentos";
import CtaContato from "./sections/CtaContato";
import SiteFooter from "./sections/SiteFooter";

export default function StarkidsHomepage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decor fixo do fundo (estrelas/notas) */}
      <FloatingDecor />

      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Metodologia />
        <Infraestrutura />
        <Depoimentos />
        <CtaContato />
        <SiteFooter />
      </main>
    </div>
  );
}
