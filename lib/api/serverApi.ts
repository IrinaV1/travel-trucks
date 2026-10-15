
import { Camper, CamperFilters } from "@/types/camper";
import { API, CampersResponse } from "./api";


export async function getAllCampers(
  page = 1,
  perPage = 4,
    filters: CamperFilters = {}

): Promise<CampersResponse> {

  const response = await API.get<CampersResponse>('/campers', {
    params: {
    
      page,
      perPage,
   location: filters.location || undefined,
      form: filters.form || undefined,
      transmission: filters.transmission || undefined,
      engine: filters.engine || undefined,
    },
  });

  return response.data;
}



export async function getCamperById(camperId: string): Promise<Camper> {

  const response = await API.get<Camper>(`/campers/${camperId}`);
  return response.data;
}