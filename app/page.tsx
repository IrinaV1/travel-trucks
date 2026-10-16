import type { Metadata } from "next";
import css from "./page.module.css";
import Hero from "@/components/Hero/Hero";


export const metadata: Metadata = {
  title: "Campers of Your Dreams | TravelTrucks",
  
  description: "Find the perfect camper for your next adventure. Explore our catalog and choose a camper that suits your travel needs.",
  openGraph: {
    title: "Campers of Your Dreams | TravelTrucks",
    description:
      "Find the perfect camper for your next adventure. Explore our catalog and choose a camper that suits your travel needs.",
    url: "https://travel-trucks-six-gold.vercel.app",
    siteName: "TravelTrucks",
    images: [
      {
  url: "/og-image.jpg",
      width: 1200,
      height: 630,
        alt: "TravelTrucks — campers for your next adventure",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Campers of Your Dreams | TravelTrucks",
    description:
      "Find the perfect camper for your next adventure. Explore our catalog and choose a camper that suits your travel needs.",
    images: ["/hero.jpg"],
  },

};

export default function Home() {
  return (
    <main className={css.main}>
      <Hero />
    </main>
  );
}
