import { Camper, CamperFilterOptions, CamperFilters } from "@/types/camper";
import { API, CampersResponse } from "./api";
import { CamperReview } from "@/types/review";
import { BookingRequestPayload } from "@/types/booking";

export async function getAllCampers(
  page = 1,
  perPage = 4,
  filters: CamperFilters = {},
): Promise<CampersResponse> {
  const response = await API.get<CampersResponse>("/campers", {
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

export async function getCamperFilterOptions(): Promise<CamperFilterOptions> {
  const response = await API.get<CamperFilterOptions>("/campers/filters");
  return response.data;
}

export async function getCamperReviews(
  camperId: string,
): Promise<CamperReview[]> {
  const response = await API.get<CamperReview[]>(
    `/campers/${camperId}/reviews`,
  );
  return response.data;
}

export async function createBookingRequest(
  camperId: string,
  values: BookingRequestPayload,
) {
  const response = await API.post(
    `/campers/${camperId}/booking-requests`,
    values,
  );

  return response.data;
}
