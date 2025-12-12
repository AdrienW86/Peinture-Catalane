"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image 
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <button className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className={styles.navDesktop}>
          <Link href="/"></Link>
          <Link href="/peinture-interieure" className={styles.li}>Intérieure</Link>
          <Link href="/peinture-exterieure" className={styles.li}>Exterieure</Link>
          <Link href="/revetement" className={styles.li}>Revêtements</Link>
          <Link href="/finitions" className={styles.li}>Préparation</Link>
          <Link href="/decoration" className={styles.li}>Décoration</Link>
          <Link href="/entretien" className={styles.li}>Rénovation</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={styles.navMobile}
        >
          <Link href="/" onClick={closeMenu}>Accueil</Link>
          <Link href="/peinture-interieure" onClick={closeMenu}>Peinture intérieure</Link>
          <Link href="/peinture-exterieure" onClick={closeMenu}>Peinture extérieure</Link>
          <Link href="/revetement" onClick={closeMenu}>Revêtements spéciaux</Link>
          <Link href="/finitions" onClick={closeMenu}>Préparation et finition</Link>
          <Link href="/decoration" onClick={closeMenu}>Décoration et personnalisation</Link>
          <Link href="/entretien" onClick={closeMenu}>Rénovation et entretien</Link>
          <Link href="/a-propos" onClick={closeMenu}>À propos</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </motion.nav>
      )}
    </header>
  );
}