import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import styles from "./page.module.css";

export const metadata = {
  title: "Peinture Catalane",
  description: "Votre peintre professionnel à Perpignan",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />      
        <Services /> 
      </main>      
    </div>
  );
}
