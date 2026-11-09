import React from 'react';
import { TrendingUp } from 'lucide-react';
import { siteContent } from '../data/content';

export default function TrendingStrip({ onSelectService }) {
  const { trendingTopics } = siteContent;

  const handleTopicClick = (service) => {
    if (onSelectService) {
      onSelectService(service);
    }
    const formEl = document.getElementById('contact');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0f172a]/40 border-b border-slate-800/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Strip Header */}
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold text-slate-300">
            Trending in Data Operations
          </span>
          <div className="flex-1 h-px bg-slate-800 ml-2" />
        </div>

        {/* 4 Items Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingTopics.map((item) => (
            <div 
              key={item.rank} 
              onClick={() => handleTopicClick(item.service)}
              className="flex items-start gap-3 group cursor-pointer"
            >
              <span className="text-lg font-bold text-slate-600 group-hover:text-blue-400 transition-colors shrink-0">
                {item.rank}
              </span>
              <div>
                <span className="block text-[11px] font-medium text-blue-400 mb-0.5">
                  {item.category}
                </span>
                <p className="text-xs font-normal text-slate-300 group-hover:text-white transition-colors leading-relaxed line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
