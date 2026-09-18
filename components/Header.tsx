"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0f10]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Peinture Occitane - Accueil"
          className="group flex items-center gap-3"
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
              PEINTURE OCCITANE
            </div>

            <div className="mt-0.5 text-[8px] font-medium tracking-[0.28em] text-[#c9a66b]">
              PEINTURE & RÉNOVATION
            </div>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 lg:flex"
        >
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

        {/* CTA DESKTOP */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 border border-[#c9a66b]/70 px-5 py-3 text-[11px] font-medium tracking-[0.08em] text-[#f3f0e9] transition-all duration-300 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#0b0f10] lg:flex"
        >
          Demander un devis

          <span aria-hidden="true">
            →
          </span>
        </Link>

        {/* BOUTON MOBILE */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="relative z-10 flex h-11 w-11 items-center justify-center text-[#f3f0e9] lg:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>

          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full origin-center bg-current transition-all duration-300 ${
                isOpen
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full origin-center bg-current transition-all duration-300 ${
                isOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* NAVIGATION MOBILE */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-20 w-full overflow-hidden border-t border-white/10 bg-[#0b0f10] transition-[height,opacity] duration-500 lg:hidden ${
          isOpen
            ? "h-[calc(100svh-5rem)] opacity-100"
            : "pointer-events-none h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Navigation mobile"
          className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-8 pt-8"
        >
          <div>
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="font-serif text-3xl text-[#f3f0e9] transition-colors duration-300 group-hover:text-[#dfbf87]">
                  {item.label}
                </span>

                <span className="flex items-center gap-4">
                  <span className="text-[9px] font-medium tracking-[0.2em] text-[#6f716d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#c9a66b] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#777a75]">
              Peinture · Rénovation · Façade
            </p>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="group flex w-full items-center justify-between bg-[#c9a66b] px-6 py-5 text-sm font-medium text-[#0b0f10]"
            >
              Demander un devis

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}