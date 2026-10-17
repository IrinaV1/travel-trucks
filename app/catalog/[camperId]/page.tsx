import type { Metadata } from "next";

import SwiperCamper from "@/components/SwiperCamper/SwiperCamper";

import { getCamperById} from "@/lib/api/serverApi";
import { notFound } from "next/navigation";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import BookForm from "@/components/BookForm/BookForm";
import css from "./CamperDetails.module.css";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import { Camper } from "@/types/camper";
import { isAxiosError } from "axios";

type Props = { params: Promise<{ camperId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;
  try {
    const camper = await getCamperById(camperId);

    const title = `${camper.name} | TravelTrucks`;
    const description = camper.description.slice(0, 160);
    const imageUrl = "/og-image.jpg";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://travel-trucks-six-gold.vercel.app/catalog/${camperId}`,
        siteName: "TravelTrucks",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: camper.name,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch {
    return {};
  }
}

export default async function CamperDetailsPage({ params }: Props) {
  const { camperId } = await params;

  let camper: Camper;
  try {
    camper = await getCamperById(camperId);
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }

    throw error;
  }


  return (
      <main className={css.main}>
        <div className="container">
          <div className={css.camperDetailsContainer}>
            <SwiperCamper images={camper.gallery ?? []} />
            <div className={css.camperDetailsWrapper}>
              <CamperDetails camper={camper} />
              <VehicleDetails camper={camper} />
            </div>
          </div>
          <h2 className={css.title}>Reviews</h2>
          <div className={css.feedbackSection}>
            <div className={css.reviewsContainer}>
              <ReviewsList camperId={camper.id} />
            </div>
            <BookForm camperId={camper.id} />
          </div>
        </div>
      </main>
  );
}
