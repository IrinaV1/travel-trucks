import { Camper, CamperFilterOptions} from "@/types/camper";
import { API, CampersResponse } from "./api";


export async function getAllCampers( page = 1, perPage = 4): Promise<CampersResponse>  {
    const response = await API.get<CampersResponse>("/campers", {
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

export async function getCamperFilterOptions(): Promise<CamperFilterOptions> {
  const response = await API.get<CamperFilterOptions>("/campers/filters");
  return response.data;
}