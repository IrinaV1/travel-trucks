
import { Camper } from "@/types/camper";
import { API, CampersResponse } from "./api";


type CamperFilters = {
  search?: string;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
};
export async function getAllCampers(
  page = 1,
  perPage = 4,

): Promise<CampersResponse> {

  const response = await API.get<CampersResponse>('/campers', {
    params: {
    
      page,
      perPage,
   
    },
  });

  return response.data;
}



export async function getCamperById(camperId: string): Promise<Camper> {

  const response = await API.get<Camper>(`/campers/${camperId}`);
  return response.data;
}