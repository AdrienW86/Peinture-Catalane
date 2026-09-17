"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0b0f10]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Peinture Catalane - Accueil"
        >
          <div className="relative flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c9a66b]"
              aria-hidden="true"
            >
              <path
                d="M7 35L24 9L41 35"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15 35L24 21L33 35"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M24 9V21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="hidden sm:block">
            <div className="font-serif text-xl tracking-[0.08em] text-[#f3f0e9]">
              PEINTURE CATALANE
            </div>

            <div className="mt-0.5 text-[8px] font-medium tracking-[0.28em] text-[#c9a66b]">
              PEINTURE & RÉNOVATION
            </div>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[12px] font-medium tracking-[0.08em] text-[#d8d5ce] transition-colors duration-300 hover:text-[#c9a66b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 border border-[#c9a66b]/70 px-5 py-3 text-[11px] font-medium tracking-[0.08em] text-[#f3f0e9] transition-all duration-300 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0b0f10] lg:flex"
        >
          Demander un devis
          <span aria-hidden="true">→</span>
        </Link>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center text-[#f3f0e9] lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span className="sr-only">
            {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>

          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0b0f10] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 py-4 text-sm tracking-wide text-[#d8d5ce] transition-colors hover:text-[#c9a66b]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 bg-[#c9a66b] px-5 py-4 text-sm font-medium text-[#0b0f10]"
          >
            Demander un devis
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}