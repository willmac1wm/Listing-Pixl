export enum PropertyCategory {
  INTERIOR = 'Interior',
  EXTERIOR = 'Exterior',
  AERIAL = 'Aerial',
  TWILIGHT = 'Twilight',
  LUXURY = 'Luxury'
}

export interface Property {
  id: string;
  address: string;
  city: string;
  category: PropertyCategory;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price?: number;
  listingUrl?: string;
  galleryImages?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
}
