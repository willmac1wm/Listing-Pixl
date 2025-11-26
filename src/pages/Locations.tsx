import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import ServiceMap from '../components/ServiceMap';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-brand-900 font-bold mb-4">Service Areas</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We cover the entire Jersey Cape. Select a town below to see our specific work in that area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Map Column */}
           <div className="lg:col-span-2 h-[600px]">
              <ServiceMap />
           </div>

           {/* List Column */}
           <div className="lg:col-span-1 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-900 border-b pb-4">Towns We Serve</h3>
              <div className="grid gap-4">
                {LOCATIONS.map((loc) => (
                  <Link 
                    to={`/locations/${loc.slug}`} 
                    key={loc.id}
                    className="group flex items-center gap-4 p-4 rounded-lg border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-sand/30 transition-all"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={loc.heroImage} alt={loc.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                        {loc.name} <MapPin size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{loc.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;