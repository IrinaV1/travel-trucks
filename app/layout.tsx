import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "modern-normalize/modern-normalize.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanstackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});
const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
    metadataBase: new URL("https://travel-trucks-six-gold.vercel.app"),
  title: "Campers of Your Dreams",
  description: "Find the perfect camper for your next adventure.",

  
  openGraph: {
    title: "Campers of Your Dreams | TravelTrucks",
    description: "Find the perfect camper for your next adventure.",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.jpg",
          width: 1200,
      height: 630,
        alt: "TravelTrucks camper rental",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Campers of Your Dreams | TravelTrucks",
    description: "Find the perfect camper for your next adventure.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <TanstackProvider>
          <Toaster position="top-right" />
          <Header />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
