import { CatalogCamper } from "@/types/camper";
import axios from "axios";


export const API = axios.create({
 baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CatalogCamper[];
};