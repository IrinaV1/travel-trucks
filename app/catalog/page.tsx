import type { Metadata } from "next";

import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getAllCampers } from "@/lib/api/serverApi";
import css from './Catalog.module.css';
import CatalogClient from "./CatalogClient";
import { CampersResponse } from "@/lib/api/api";
import { CamperFilters } from "@/types/camper";


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
        url: "https://travel-trucks-six-gold.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TravelTrucks camper rental catalog",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Camper Catalog | TravelTrucks",
    description:
      "Browse and filter camper rentals to find the right vehicle for your journey.",
    images: ["https://travel-trucks-six-gold.vercel.app/og-image.jpg"],
  },
};

export default async function CatalogPage() {
  const queryClient = new QueryClient();
  const filters: CamperFilters = {};
  
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => getAllCampers(pageParam, 4, filters),
          initialPageParam: 1,
    getNextPageParam: (lastPage: CampersResponse) =>
      lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined,
  })
    
    return (
      <main className={`${css.main} container`}>
         <HydrationBoundary state={dehydrate(queryClient)}>
          <CatalogClient />
          </HydrationBoundary>
        </main>
    );
}