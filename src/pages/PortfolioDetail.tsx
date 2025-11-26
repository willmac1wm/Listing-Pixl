
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyById } from '../services/wordpress';
import { Property } from '../types';
import { ArrowLeft, Home, Share2 } from 'lucide-react';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (id) {
      getPropertyById(id).then((data) => {
        if (data) {
          setProperty(data);
          setActiveImage(data.imageUrl);
        }
      });
    }
  }, [id]);

  if (!property) return <div className="pt-32 text-center">Loading Property...</div>;

  const allImages = property.galleryImages && property.galleryImages.length > 0 
    ? [property.imageUrl, ...property.galleryImages] 
    : [property.imageUrl];

  // De-duplicate images if hero is also in gallery
  const uniqueImages = [...new Set(allImages)];

  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-6">
        
        {/* Navigation & Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to="/locations" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-900 font-bold text-sm">
            <ArrowLeft size={16} /> Back to Map
          </Link>
          <div className="flex gap-2">
             {property.listingUrl && (
                 <a href={property.listingUrl} target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-900 px-4 py-2 rounded font-bold text-sm hover:bg-yellow-500 transition-colors">
                    View Zillow Listing
                 </a>
             )}
             <button className="border border-slate-200 p-2 rounded hover:bg-slate-50">
                <Share2 size={20} className="text-slate-600"/>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Gallery */}
            <div className="lg:col-span-2">
                <div className="aspect-[3/2] w-full rounded-xl overflow-hidden shadow-lg mb-4 bg-slate-100">
                    <img src={activeImage} alt={property.address} className="w-full h-full object-contain" />
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-4">
                    {uniqueImages.map((img, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setActiveImage(img)}
                            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-brand-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-1">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm sticky top-24">
                    <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">{property.category}</span>
                    <h1 className="font-serif text-3xl font-bold text-brand-900 mt-2 mb-4">{property.address}</h1>
                    <p className="flex items-center gap-2 text-slate-600 mb-6">
                        <Home size={16} /> {property.city}, NJ
                    </p>
                    
                    <div className="border-t border-slate-200 py-6 mb-6">
                        <p className="text-sm text-slate-500 mb-1">Estimated Value / List Price</p>
                        <p className="text-3xl font-bold text-brand-900">${property.price?.toLocaleString()}</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-brand-900">Shoot Highlights</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li className="flex gap-2">✓ High-Dynamic Range (HDR) Interior</li>
                            <li className="flex gap-2">✓ Aerial Drone Photography</li>
                            <li className="flex gap-2">✓ Twilight Exterior Enhancement</li>
                        </ul>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <Link to="/book" className="block w-full bg-brand-900 text-white text-center py-3 rounded font-bold hover:bg-brand-800 transition-colors">
                            Book Similar Shoot
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioDetail;
