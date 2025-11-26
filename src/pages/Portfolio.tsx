import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import { PropertyCategory } from '../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProperties = activeFilter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 min-h-screen bg-brand-sand/30">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl text-brand-900 font-bold mb-4">Our Portfolio</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our collection of high-end real estate photography from across Cape May County.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', ...Object.values(PropertyCategory)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat 
                  ? 'bg-brand-900 text-white shadow-md transform scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div key={prop.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer bg-slate-200">
              <img 
                src={prop.imageUrl} 
                alt={prop.address} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">{prop.category}</span>
                <h3 className="text-white font-serif text-xl">{prop.address}</h3>
                <p className="text-slate-300 text-sm">{prop.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;