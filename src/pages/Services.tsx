import React from 'react';
import { PACKAGES } from '../constants';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-900 font-bold mb-4">Investment & Packages</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include next-day delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`relative flex flex-col rounded-2xl p-8 border transition-transform hover:-translate-y-1 ${pkg.isPopular ? 'border-brand-gold shadow-xl bg-white scale-105 z-10' : 'border-slate-200 bg-slate-50'}`}>
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold text-brand-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-brand-900">${pkg.price}</span>
                <span className="text-slate-500">/ shoot</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                    <div className="bg-brand-900/10 p-1 rounded-full mt-0.5">
                      <Check size={12} className="text-brand-900" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/book" className={`block w-full text-center py-3 rounded font-bold transition-colors ${pkg.isPopular ? 'bg-brand-900 text-white hover:bg-brand-800' : 'bg-white border border-brand-900 text-brand-900 hover:bg-brand-50'}`}>
                Select Package
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-brand-900 rounded-2xl p-12 text-center text-white">
           <h2 className="font-serif text-3xl font-bold mb-4">Need a custom quote?</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
             We also offer custom packages for commercial properties, multi-day shoots, and large-scale developments.
           </p>
           <a href="mailto:hello@listingpixl.com" className="inline-block bg-white text-brand-900 px-8 py-3 rounded font-bold hover:bg-brand-gold transition-colors">
             Contact Us
           </a>
        </div>
      </div>
    </div>
  );
};

export default Services;