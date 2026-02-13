import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LOCATIONS, PROPERTIES } from '../constants';
import { ArrowLeft } from 'lucide-react';

const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);

  if (!location) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Location not found</h1>
        <Link to="/locations" className="text-brand-gold underline">Back to map</Link>
      </div>
    );
  }

  // Find properties in this city (matching by name)
  const cityProperties = PROPERTIES.filter(p => p.city.includes(location.name));

  return (
    <div className="min-h-screen bg-white">
      {/* Town Hero */}
      <div className="relative h-[50vh]">
        <img src={location.heroImage} alt={location.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
           <span className="text-brand-gold font-bold uppercase tracking-widest mb-2">Service Area</span>
           <h1 className="font-serif text-5xl md:text-7xl font-bold">{location.name}, NJ</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <Link to="/locations" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-900 mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> Back to Map
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-brand-900 mb-6">Real Estate Photography in {location.name}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Listing Pixl specializes in capturing the unique charm of {location.name}. {location.description}
              Whether you have a beachfront estate or a cozy bayside cottage, our team knows exactly how to showcase 
              the lifestyle that buyers in {location.name} are looking for.
            </p>
            <p className="text-slate-600 mb-8">
              We understand the local market dynamics of Cape May County. In {location.name}, emphasizing outdoor living spaces,
              proximity to the water, and natural light is crucial for a quick sale.
            </p>

            <div className="bg-brand-sand/50 p-8 rounded-xl border border-brand-gold/20 mb-12">
               <h3 className="font-bold text-brand-900 mb-2">Why agents in {location.name} choose us:</h3>
               <ul className="list-disc list-inside space-y-2 text-slate-700">
                 <li>Same-day twilight availability for luxury listings</li>
                 <li>FAA Part 107 certified drone pilots familiar with local airspace</li>
                 <li>Blue sky replacement included on all exterior shots</li>
               </ul>
            </div>

            <h3 className="font-serif text-2xl font-bold text-brand-900 mb-6">Recent Shoots in {location.name}</h3>
            {cityProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityProperties.map(prop => (
                  <div key={prop.id} className="rounded-lg overflow-hidden shadow-md">
                    <img src={prop.imageUrl} alt={prop.address} className="w-full h-64 object-cover" />
                    <div className="p-4 bg-white">
                      <p className="font-bold text-brand-900">{prop.address}</p>
                      <p className="text-xs text-slate-500">{prop.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic">No featured properties currently displayed for this specific location. Check our full portfolio.</p>
            )}
          </div>

          <div className="lg:col-span-1">
             <div className="sticky top-24 bg-white shadow-xl rounded-xl p-8 border-t-4 border-brand-gold">
               <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">Ready to List?</h3>
               <p className="text-slate-600 mb-6 text-sm">
                 Book a photoshoot for your {location.name} listing today.
               </p>
               <Link to="/book" className="block w-full bg-brand-900 text-white text-center py-3 rounded font-bold hover:bg-brand-800 transition-colors">
                 Book Now
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;