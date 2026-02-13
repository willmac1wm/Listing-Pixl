import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-slate-400 py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-baseline gap-1 text-white mb-6">
                <span className="font-serif text-xl font-bold">Listing</span>
                <span className="font-sans text-xl font-light text-brand-gold">Pixl</span>
             </Link>
             <p className="text-sm leading-relaxed mb-6">
               Elevating real estate marketing with premium photography and immersive media. Proudly serving the Jersey Shore.
             </p>
             <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors"><Instagram size={20}/></a>
               <a href="#" className="hover:text-white transition-colors"><Facebook size={20}/></a>
               <a href="#" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/book" className="hover:text-brand-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Locations</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/locations/avalon-nj" className="hover:text-brand-gold transition-colors">Avalon</Link></li>
              <li><Link to="/locations/stone-harbor-nj" className="hover:text-brand-gold transition-colors">Stone Harbor</Link></li>
              <li><Link to="/locations/cape-may-nj" className="hover:text-brand-gold transition-colors">Cape May</Link></li>
              <li><Link to="/locations/wildwood-nj" className="hover:text-brand-gold transition-colors">Wildwood</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                <span>(609) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <span>hello@listingpixl.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold" />
                <span>Cape May Court House, NJ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2023 Listing Pixl. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Cape May Real Estate</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;