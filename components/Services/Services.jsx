import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './services.module.css';

const servicesData = [
  {
    title: "Peinture intérieure",
    image: "/inside.png",
    link: "/peinture-interieure"
  },
  {
    title: "Peinture exterieure",
    image: "/outside.png",
    link: "/peinture-exterieure"
  },
  {
    title: "Revêtements spéciaux",
    image: "/special.png",
    link: "/revetement"
  },
  {
    title: "Préparation et finition",
    image: "/finition.png",
    link: "/finitions"
  },
  {
    title: "Décoration et personnalisation",
    image: "/decoration.png",
    link: "/decoration"
  },
  {
    title: "Rénovation et entretien",
    image: "/renovation.png",
    link: "/entretien"
  },
];

export default function Services() {
  return (
    <>
      <h2 id="services" className={styles.h2}>Nos Services</h2>
      <section className={styles.services}>
        {servicesData.map((service, index) => (
          <Link key={index} href={service.link} className={styles.card}>
            <h3 className={styles.h3}>{service.title}</h3>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={styles.backgroundImage}
              priority
            />
            <div className={styles.overlay}></div>
          </Link>
        ))}
      </section>
    </>
  );
}
