import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Locations', path: '/locations' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-[2000] transition-all duration-300 ${
          isTransparent ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur shadow-md py-3'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50 select-none group">
            <div className="flex items-baseline">
              <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
                isTransparent ? 'text-white' : 'text-brand-900'
              }`}>
                Listing
              </span>
              <span className={`font-sans text-2xl font-light tracking-wide ml-1 transition-colors ${
                isTransparent ? 'text-brand-gold' : 'text-brand-gold'
              }`}>
                Pixl
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors ${
                  isTransparent ? 'text-slate-200' : 'text-slate-600'
                } ${location.pathname === link.path ? 'text-brand-gold border-b-2 border-brand-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="bg-brand-gold text-brand-900 px-6 py-2 rounded font-bold text-sm hover:bg-white hover:text-brand-900 transition-all shadow-lg"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden z-50 ${isTransparent && !isMenuOpen ? 'text-white' : 'text-brand-900'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-900/98 backdrop-blur-lg z-40 flex items-center justify-center transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col items-center gap-8 text-center">
            <Link to="/" className="text-white font-serif text-3xl hover:text-brand-gold transition-colors">Home</Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-white font-serif text-3xl hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="mt-4 bg-brand-gold text-brand-900 px-8 py-3 rounded text-lg font-bold"
            >
              Book Your Shoot
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;