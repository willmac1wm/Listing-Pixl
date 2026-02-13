import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
// In a real scenario, import { GoogleGenAI } from '@google/genai';

const AiDescriptionGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    
    // Mocking the Gemini API interaction
    // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: `Write a luxury real estate description for: ${input}` });
    
    setTimeout(() => {
      setResult(`Step inside this breathtaking ${input} located in the heart of Cape May County. 
      
Featuring an open-concept layout that seamlessly blends coastal elegance with modern luxury, this property is an entertainer's dream. The gourmet kitchen boasts top-of-the-line appliances, while the spacious living areas are flooded with natural light. 

Enjoy your morning coffee on the expansive deck with panoramic views, or take a short stroll to the pristine beaches. This is more than a home; it's a lifestyle.`);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-white rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-brand-gold w-6 h-6" />
        <h3 className="font-serif text-xl font-bold">AI Listing Assistant</h3>
      </div>
      <p className="text-slate-300 text-sm mb-4">
        Exclusive for our clients: Draft a compelling listing description instantly using our Gemini-powered tool.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Property Highlights</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E.g. 4 bedroom Victorian in Cape May, ocean views, renovated kitchen..."
            className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder-slate-400"
            rows={3}
          />
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={!input || isGenerating}
          className={`w-full py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${!input ? 'opacity-50 cursor-not-allowed bg-slate-600' : 'bg-brand-gold text-brand-900 hover:bg-yellow-500'}`}
        >
          {isGenerating ? 'Thinking...' : 'Generate Description'}
        </button>

        {result && (
          <div className="mt-4 bg-black/30 rounded-lg p-4 border border-white/10 relative animate-in fade-in slide-in-from-bottom-4">
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{result}</p>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 hover:bg-white/10 rounded transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-slate-400" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiDescriptionGenerator;