import SwiperCamper from "@/components/SwiperCamper/SwiperCamper";

import { getCamperById } from "@/lib/api/serverApi";

import { notFound } from "next/navigation";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import BookForm from "@/components/BookForm/BookForm";
import css from './CamperDetails.module.css'
import ReviewsList from "@/components/ReviewsList/ReviewsList";


type Props = { params: Promise<{ camperId: string }>;
};


export default async function CamperDetailsPage({ params }: Props) {
const { camperId } = await params;
let camper;
  try {
 camper = await getCamperById(camperId);

  } catch(error) {
      console.error("Failed to load camper:", error);
    notFound();
  }


  return (
    <main className={css.main}>

      <div className="container">
<div className={css.camperDetailsContainer}>
          <SwiperCamper images={camper.gallery ?? []} />
          <div className={css.camperDetailsWrapper}>
            <CamperDetails  camper={camper}/>
    <VehicleDetails camper={camper}/>
            </div>
        </div>
          <h2 className={css.title}>Reviews</h2>
        <div className={css.feedbackSection}>
        
          <div className={css.reviewsContainer}>
       <ReviewsList camperId={camper.id}/>
          </div>
          <BookForm />
          </div>
        </div>
    </main>
  );
}