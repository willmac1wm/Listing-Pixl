import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Map as MapIcon, ArrowRight } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { getPosts } from '../services/wordpress';
import { BlogPost } from '../types';
import ServiceMap from '../components/ServiceMap';
import AiDescriptionGenerator from '../components/AiDescriptionGenerator';

const Home: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getPosts().then(posts => setRecentPosts(posts));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-6ad4c427513f?auto=format&fit=crop&w=1920&q=80" 
              alt="Luxury coastal real estate at twilight" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Showcasing the <br/> <span className="text-brand-gold italic">Jersey Shore</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
            Listing Pixl provides premium real estate photography, aerial drone videography, and 3D tours for Cape May County's finest properties.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/portfolio" className="w-full md:w-auto px-8 py-4 bg-white text-brand-900 font-bold rounded hover:bg-brand-sand transition-colors">
              View Portfolio
            </Link>
            <Link to="/locations" className="w-full md:w-auto px-8 py-4 border border-white text-white font-bold rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <MapIcon size={20} /> Coverage Map
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Interactive Map Section Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
               <h2 className="font-serif text-4xl text-brand-900 font-bold mb-4">We Know Cape May County</h2>
               <p className="text-slate-600 mb-6 text-lg">
                 From the Victorian streets of Cape May to the dunes of Avalon, we are local experts. 
                 Use our interactive map to see our recent work in your specific neighborhood.
               </p>
               <Link to="/locations" className="inline-flex items-center gap-2 text-brand-900 font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-700">
                  Explore Locations <ArrowRight size={16} />
               </Link>
               <div className="mt-8">
                  <AiDescriptionGenerator />
               </div>
            </div>
            <div className="w-full lg:w-1/2">
              <ServiceMap />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20 bg-brand-sand">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-brand-900 font-bold mb-2">Selected Works</h2>
              <p className="text-slate-600">Highlights from this season.</p>
            </div>
            <Link to="/portfolio" className="hidden md:block text-brand-900 font-bold hover:text-brand-gold transition-colors">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((prop) => (
              <Link to="/portfolio" key={prop.id} className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md block">
                <img 
                  src={prop.imageUrl} 
                  alt={prop.address} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">{prop.category}</span>
                  <h3 className="text-white font-serif text-xl">{prop.address}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="text-brand-900 font-bold border-b border-brand-900">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

       {/* Blog Teaser */}
       <section className="py-20 bg-white">
         <div className="container mx-auto px-6">
           <h2 className="font-serif text-4xl text-brand-900 font-bold mb-12 text-center">Latest Resources</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {recentPosts.map(post => (
               <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="overflow-hidden aspect-video">
                     <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">{post.category}</span>
                    <h3 className="font-serif text-xl font-bold text-brand-900 mb-2 group-hover:text-brand-700 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
               </Link>
             ))}
           </div>
         </div>
       </section>
    </div>
  );
};

export default Home;