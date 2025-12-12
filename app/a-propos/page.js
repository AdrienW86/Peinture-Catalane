import React from "react";
import styles from "./apropos.module.css";

export default function APropos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de Peinture Catalane</h1>

      <section className={styles.section}>
        <h2>Notre histoire</h2>
        <p>
          Peinture Catalane est née de la volonté d’offrir des services de peinture 
          professionnels, modernes et adaptés aux besoins de chaque client. 
          Depuis nos débuts, nous accompagnons particuliers et entreprises dans leurs projets 
          de peinture intérieure, peinture extérieure, décoration et rénovation dans tout le 66.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Notre mission</h2>
        <p>
          Notre mission est claire : sublimer vos espaces tout en garantissant durabilité 
          et qualité. Nous utilisons des peintures professionnelles, respectueuses de 
          l’environnement, ainsi que des techniques adaptées à chaque support pour un 
          résultat impeccable.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Nos valeurs</h2>
        <ul className={styles.list}>
          <li><strong>Professionnalisme :</strong> une équipe sérieuse, qualifiée et organisée.</li>
          <li><strong>Qualité :</strong> finitions soignées, matériaux performants et durables.</li>
          <li><strong>Respect de l’environnement :</strong> utilisation de peintures écologiques et faibles en COV.</li>
          <li><strong>Proximité :</strong> écoute, conseils personnalisés et accompagnement sur-mesure.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Notre équipe</h2>
        <p>
          Nos peintres professionnels sont formés aux dernières techniques du métier : 
          préparation des supports, application haute précision, finitions décoratives, 
          réponses aux contraintes techniques…  
          Leur expertise garantit un travail propre, rapide et durable.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contactez-nous</h2>
        <p>
          Vous avez un projet de peinture ou souhaitez obtenir un devis gratuit ? <br />
          Téléphone : 06 62 12 56 11 <br />
          Email : contact@peinture-catalane.fr
        </p>
      </section>
    </div>
  );
}
