import { Property, PropertyCategory, BlogPost, Package, Location } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    address: '123 Beach Avenue',
    city: 'Cape May',
    category: PropertyCategory.LUXURY,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-6ad4c427513f?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 38.9351, lng: -74.9060 },
    price: 2450000,
    listingUrl: 'https://zillow.com',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    address: '456 Dune Road',
    city: 'Avalon',
    category: PropertyCategory.AERIAL,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 39.1012, lng: -74.7177 },
    price: 3200000,
    listingUrl: 'https://zillow.com',
    galleryImages: []
  },
  {
    id: '3',
    address: '789 Ocean Drive',
    city: 'Stone Harbor',
    category: PropertyCategory.TWILIGHT,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 39.0529, lng: -74.7627 },
    price: 4100000,
    galleryImages: []
  },
  {
    id: '4',
    address: '321 Bayview Lane',
    city: 'Sea Isle City',
    category: PropertyCategory.INTERIOR,
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 39.1535, lng: -74.6927 },
    price: 1850000,
    galleryImages: []
  },
  {
    id: '5',
    address: '555 Boardwalk Blvd',
    city: 'Wildwood',
    category: PropertyCategory.EXTERIOR,
    imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 38.9918, lng: -74.8147 },
    price: 975000,
    galleryImages: []
  },
  {
    id: '6',
    address: '888 Victorian Way',
    city: 'Cape May',
    category: PropertyCategory.LUXURY,
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    coordinates: { lat: 38.9318, lng: -74.9220 },
    price: 5500000,
    listingUrl: 'https://zillow.com',
    galleryImages: []
  }
];

export const LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Cape May',
    slug: 'cape-may-nj',
    description: 'America\'s oldest seaside resort, known for its stunning Victorian architecture and pristine beaches.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-6ad4c427513f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    name: 'Avalon',
    slug: 'avalon-nj',
    description: 'An upscale barrier island community with beautiful beaches and family-friendly atmosphere.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    name: 'Stone Harbor',
    slug: 'stone-harbor-nj',
    description: 'A charming seashore community featuring boutique shopping and world-class dining.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '4',
    name: 'Sea Isle City',
    slug: 'sea-isle-city-nj',
    description: 'A vibrant beach town with lively nightlife and beautiful sunsets over the bay.',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '5',
    name: 'Wildwood',
    slug: 'wildwood-nj',
    description: 'Famous for its retro boardwalk, free beaches, and classic doo-wop architecture.',
    heroImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '6',
    name: 'Ocean City',
    slug: 'ocean-city-nj',
    description: 'America\'s Greatest Family Resort with miles of beaches and a vibrant boardwalk.',
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic',
    name: 'Essentials',
    price: 275,
    features: [
      '15-25 HDR Photos',
      'Professional Editing',
      '24-Hour Delivery',
      'MLS-Ready Formats',
      'Ideal for Condos & Townhomes'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 425,
    isPopular: true,
    features: [
      '30-40 HDR Photos',
      'Drone Aerial Photography',
      'Blue Sky Enhancement',
      '24-Hour Delivery',
      'Social Media Crops',
      'Perfect for Single-Family Homes'
    ]
  },
  {
    id: 'premium',
    name: 'Luxury',
    price: 650,
    features: [
      '50+ HDR Photos',
      'Drone Photos & Video',
      'Twilight Exterior Shots',
      'Virtual Staging (2 rooms)',
      'Priority Editing',
      'For Luxury & Waterfront Estates'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Professional Photography Sells Homes Faster',
    excerpt: 'Studies show that homes with professional photography sell 32% faster. Learn why high-quality visuals are essential in today\'s competitive real estate market.',
    date: 'October 15, 2024',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-6ad4c427513f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Preparing Your Cape May Listing for a Photo Shoot',
    excerpt: 'A comprehensive guide on staging your property for maximum visual impact. From decluttering to lighting, we cover all the essentials.',
    date: 'October 8, 2024',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'The Power of Drone Photography for Coastal Properties',
    excerpt: 'Aerial photography showcases beach proximity, lot size, and neighborhood context like nothing else. Discover how drones are transforming real estate marketing.',
    date: 'September 28, 2024',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  }
];
