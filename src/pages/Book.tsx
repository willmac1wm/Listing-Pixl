import React, { useState } from 'react';
import { Calendar, Home, User, Mail, Phone } from 'lucide-react';
import { PACKAGES } from '../constants';

const Book: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 min-h-screen bg-brand-sand flex items-center justify-center px-6">
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar size={32} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-brand-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for booking with Listing Pixl. We have received your request and will confirm your appointment time within 2 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-brand-gold font-bold underline">
            Book another shoot
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-sand/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-900 p-8 text-white text-center">
             <h1 className="font-serif text-3xl font-bold mb-2">Book Your Photoshoot</h1>
             <p className="text-slate-300">Fill out the details below to schedule your next listing.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            {/* Contact Info */}
            <div className="space-y-4">
               <h3 className="font-bold text-brand-900 uppercase text-xs tracking-wider border-b pb-2 mb-4">Agent Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                   <div className="relative">
                     <User className="absolute left-3 top-3 text-slate-400" size={18} />
                     <input required type="text" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="John Doe" />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                     <input required type="email" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="john@agency.com" />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                   <div className="relative">
                     <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                     <input required type="tel" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="(609) 555-0123" />
                   </div>
                 </div>
               </div>
            </div>

            {/* Property Info */}
            <div className="space-y-4">
               <h3 className="font-bold text-brand-900 uppercase text-xs tracking-wider border-b pb-2 mb-4">Property Details</h3>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Listing Address</label>
                  <div className="relative">
                     <Home className="absolute left-3 top-3 text-slate-400" size={18} />
                     <input required type="text" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="123 Beach Ave, Cape May, NJ" />
                   </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">Approx Sq. Footage</label>
                     <input required type="number" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="2500" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">Gate Code / Lockbox</label>
                     <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent" placeholder="1234" />
                  </div>
               </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-4">
               <h3 className="font-bold text-brand-900 uppercase text-xs tracking-wider border-b pb-2 mb-4">Select Package</h3>
               <div className="grid grid-cols-1 gap-4">
                 {PACKAGES.map(pkg => (
                   <label key={pkg.id} className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-brand-gold hover:bg-brand-sand/20 transition-all">
                     <input type="radio" name="package" className="w-5 h-5 text-brand-900 border-slate-300 focus:ring-brand-gold" />
                     <div className="ml-4 flex-grow">
                       <span className="block font-bold text-brand-900">{pkg.name}</span>
                       <span className="text-xs text-slate-500">{pkg.features[0]} + {pkg.features[1]}</span>
                     </div>
                     <div className="font-bold text-brand-900">${pkg.price}</div>
                   </label>
                 ))}
               </div>
            </div>

            <button type="submit" className="w-full bg-brand-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-800 transition-colors shadow-lg mt-8">
              Confirm Booking
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;