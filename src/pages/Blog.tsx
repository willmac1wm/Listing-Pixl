import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/wordpress';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-brand-900 font-bold mb-4">The Blog</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Insights, tips, and trends from the Cape May real estate market.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden aspect-[16/10]">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-brand-900 font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;