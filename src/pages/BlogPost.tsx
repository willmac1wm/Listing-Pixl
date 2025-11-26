import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../services/wordpress';
import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft, Facebook, Linkedin, Twitter } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPostBySlug(id).then((data) => {
        setPost(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!post) {
    return <div className="pt-32 text-center">Article not found.</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-900 mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="text-center mb-8">
           <span className="text-brand-gold text-sm font-bold uppercase tracking-wider block mb-4">{post.category}</span>
           <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-900 mb-6 leading-tight">{post.title}</h1>
           <p className="text-slate-500">{post.date} • By Listing Pixl Team</p>
        </div>

        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-xl font-serif text-brand-900">{post.excerpt}</p>
          <p>
             {/* Simulating full content body */}
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Why High-Quality Visuals Matter</h3>
          <p>
            At Listing Pixl, we believe that every property has a story. In the competitive Cape May market, 
            telling that story visually is the key to unlocking maximum value.
          </p>
          <blockquote className="border-l-4 border-brand-gold pl-4 italic text-slate-600 my-8">
            "Real estate is not just about selling four walls; it's about selling a future lifestyle."
          </blockquote>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex justify-between items-center">
          <p className="font-bold text-brand-900">Share this article:</p>
          <div className="flex gap-4">
             <button className="p-2 rounded-full bg-slate-100 hover:bg-brand-gold hover:text-white transition-colors"><Facebook size={20}/></button>
             <button className="p-2 rounded-full bg-slate-100 hover:bg-brand-gold hover:text-white transition-colors"><Twitter size={20}/></button>
             <button className="p-2 rounded-full bg-slate-100 hover:bg-brand-gold hover:text-white transition-colors"><Linkedin size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;