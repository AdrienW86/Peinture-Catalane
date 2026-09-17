import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peinture-catalane.fr"),

  title: {
    default: "Entreprise de peinture à Perpignan | Peinture Catalane",
    template: "%s | Peinture Catalane",
  },

  description:
    "Peinture Catalane, entreprise de peinture à Perpignan spécialisée dans la peinture intérieure, extérieure et la rénovation.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <Header />

        {children}

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}