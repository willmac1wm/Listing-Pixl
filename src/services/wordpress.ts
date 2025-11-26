
import { BLOG_POSTS, PROPERTIES } from '../constants';
import { BlogPost, Property, PropertyCategory } from '../types';

// ==========================================
// CONFIGURATION
// ==========================================

// 1. Enter your WordPress URL here (e.g., 'https://listingpixl.com')
const WP_DOMAIN = 'https://your-wordpress-site.com'; 

// 2. The standard API path
const API_BASE = `${WP_DOMAIN}/wp-json/wp/v2`;

// 3. Toggle this to FALSE when you are ready to go live
const USE_MOCK_DATA = true; 

// ==========================================
// TYPES FOR RAW WORDPRESS RESPONSES
// ==========================================
interface WPMedia {
  source_url: string;
}

interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
  acf?: {
    // These match the fields you create in Advanced Custom Fields (ACF)
    address?: string;
    city?: string;
    price?: number;
    category?: string;
    latitude?: number;
    longitude?: number;
    listing_url?: string;
    gallery?: Array<{ url: string }>;
  };
}

// ==========================================
// SERVICE METHODS
// ==========================================

/**
 * Fetch Blog Posts from WordPress
 */
export const getPosts = async (): Promise<BlogPost[]> => {
  if (USE_MOCK_DATA) return mockDelay(BLOG_POSTS);

  try {
    // _embed allows us to get the featured image in the same request
    const response = await fetch(`${API_BASE}/posts?_embed`);
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data: WPPost[] = await response.json();

    return data.map(post => ({
      id: post.id.toString(),
      title: decodeHTML(post.title.rendered),
      excerpt: stripHTML(post.excerpt.rendered),
      date: new Date(post.date).toLocaleDateString(),
      category: 'News', // You can fetch real WP categories if needed
      imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x600?text=No+Image'
    }));

  } catch (error) {
    console.warn('Failed to fetch from WordPress, falling back to demo data:', error);
    return BLOG_POSTS;
  }
};

export const getPostBySlug = async (id: string): Promise<BlogPost | undefined> => {
  // Efficiently find from the list logic, or you could fetch a single endpoint
  const posts = await getPosts();
  return posts.find(p => p.id === id);
};

/**
 * Fetch Properties from WordPress (Custom Post Type)
 * Requires CPT UI plugin creating 'properties' and ACF for fields.
 */
export const getProperties = async (): Promise<Property[]> => {
  if (USE_MOCK_DATA) return mockDelay(PROPERTIES);

  try {
    const response = await fetch(`${API_BASE}/properties?_embed&acf_format=standard`);
    
    if (!response.ok) throw new Error('Network response was not ok');

    const data: WPPost[] = await response.json();

    return data.map(p => ({
      id: p.id.toString(),
      address: p.acf?.address || decodeHTML(p.title.rendered),
      city: p.acf?.city || 'Cape May County',
      category: (p.acf?.category as PropertyCategory) || PropertyCategory.INTERIOR,
      imageUrl: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x600?text=No+Image',
      coordinates: {
        lat: Number(p.acf?.latitude) || 39.0,
        lng: Number(p.acf?.longitude) || -74.8
      },
      price: Number(p.acf?.price) || 0,
      listingUrl: p.acf?.listing_url,
      galleryImages: p.acf?.gallery?.map(img => img.url) || []
    }));

  } catch (error) {
    console.warn('Failed to fetch properties from WordPress, falling back to demo data:', error);
    return PROPERTIES;
  }
};

export const getPropertyById = async (id: string): Promise<Property | undefined> => {
  // In a real app with thousands of homes, you would fetch a specific endpoint:
  // await fetch(`${API_BASE}/properties/${id}?_embed`);
  // For now, we filter the list for simplicity and speed.
  const props = await getProperties();
  return props.find(p => p.id === id);
};

// ==========================================
// UTILITIES
// ==========================================

// Helper to simulate network delay for mock data
const mockDelay = <T>(data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), 600));
};

// Remove HTML tags from excerpts
const stripHTML = (html: string) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

// Decode HTML entities (like &amp;)
const decodeHTML = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};
