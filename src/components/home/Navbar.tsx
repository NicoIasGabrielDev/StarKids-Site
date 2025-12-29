"use client";

import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white py-3 shadow-lg" : "bg-white/95 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">⭐</div>
            <div className="text-xl font-extrabold">
              <span className="text-blue-600">Star</span>
              <span className="text-yellow-500">kids</span>
              <span className="text-gray-800"> Music</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#contato" className="font-medium text-gray-700 transition hover:text-blue-600">
              Contato
            </a>
            <a href="#licenciado" className="font-medium text-gray-700 transition hover:text-yellow-500">
              Quero ser Licenciado
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal"))}
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2.5 text-sm font-extrabold text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              Agendar Aula Experimental
              <ChevronRight className="ml-2 inline-block" size={18} />
            </button>
          </div>

          <button
            className="p-2 text-gray-700 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full space-y-4 border-t border-gray-100 bg-white px-6 py-4 shadow-xl lg:hidden">
            <a href="#contato" className="block py-2 font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <a href="#licenciado" className="block py-2 font-medium text-gray-700 hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quero ser Licenciado
            </a>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-lead-modal"));
                setMobileMenuOpen(false);
              }}
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-extrabold text-white hover:shadow-xl"
            >
              Agendar Aula Experimental
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
