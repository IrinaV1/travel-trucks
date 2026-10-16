import type { Metadata } from "next";

import { getAllCampers } from "@/lib/api/serverApi";
import css from './Catalog.module.css';
import CatalogClient from "./CatalogClient";


export const metadata: Metadata = {
  title: "Catalog",
  description:
        "Browse and filter camper rentals to find the right vehicle for your journey.",
    openGraph: {
    title: "Camper Catalog | TravelTrucks",
    description:
      "Browse and filter camper rentals to find the right vehicle for your journey.",
    url: "https://travel-trucks-six-gold.vercel.app/catalog",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TravelTrucks camper rental catalog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Camper Catalog | TravelTrucks",
    description:
      "Browse and filter camper rentals to find the right vehicle for your journey.",
    images: ["/og-image.jpg"],
  },
};

export default async function CatalogPage() {
    
const campersData = await getAllCampers(1, 4);
    
    return (
        <main className={`${css.main} container`}>
           <CatalogClient campersData={campersData} />
        </main>
    );
}