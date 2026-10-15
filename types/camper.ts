
export type AmenityType = 
  | "ac" 
  | "bathroom" 
  | "kitchen" 
  | "tv" 
  | "radio" 
  | "refrigerator" 
  | "microwave" 
  | "gas" 
  | "water";
export type CamperForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type TransmissionType = "automatic" | "manual";
export type EngineType = "diesel" | "petrol" | "hybrid" | "electric";


export type CamperImage = {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
};

export type CatalogCamper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: AmenityType[];
  coverImage: string;
  totalReviews: number;
};


export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: string;
  description: string;
  gallery: CamperImage[];
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}



export type CamperFilters = {
  location?: string;
  form?: CamperForm;
  transmission?: TransmissionType;
  engine?: EngineType;
};

export type CamperFilterOptions = {
  forms: CamperForm[];
  transmissions: TransmissionType[];
  engines: EngineType[];
};