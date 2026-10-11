
export type CamperImage = {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
};
export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  gallery: CamperImage[];
};


export type CatalogCamper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
};

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CatalogCamper[];
};

export type CamperFilters = {
  location: string;
  form: string;
  engine: string;
  transmission: string;
};

export type CamperFilterOptions = {
  forms: string[];
  transmissions: string[];
  engines: string[];
};