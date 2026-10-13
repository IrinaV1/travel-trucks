import SwiperCamper from "@/components/SwiperCamper/SwiperCamper";

import { getCamperById } from "@/lib/api/serverApi";

import ReviewsCard from "@/components/ReviewsCard/ReviewsCard";
import { notFound } from "next/navigation";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";



type Props = {  params: Promise<{ camperId: string }>;
};


export default async function CamperDetailsPage( { params }: Props) {
const { camperId } = await params;
let camper;
  try {
 camper = await getCamperById(camperId);
 
  } catch(error) {
      console.error("Failed to load camper:", error);
    notFound();
  }


  return (
    <main>
      <h1>{camper.name}</h1>
      <p>{camper.location}</p>
      <p>€{camper.price}</p>
      

      <SwiperCamper images={camper.gallery ?? []} />
    <ReviewsCard />
    <CamperDetails/>
    <VehicleDetails camper={camper}/>
    </main>
  );
}