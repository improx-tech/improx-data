import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function HeroEditorialGrid({ onSelectService }) {
  const { heroStories } = siteContent;
  const { main, sides } = heroStories;

  const handleArticleClick = (serviceId) => {
    const el = document.getElementById(serviceId) || document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-6 pb-10 bg-[#0b1120] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Magazine Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Featured Story (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => handleArticleClick(main.id)}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-[460px] sm:h-[500px] bg-slate-900 flex flex-col justify-end p-6 sm:p-9 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              
              {/* Background Image */}
              <img
                src={main.image}
                alt={main.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-35 group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#0b1120]/75 to-transparent pointer-events-none" />

              {/* Story Content */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-blue-400 bg-blue-950/70 border border-blue-800/50 px-2.5 py-0.5 rounded-md">
                    {main.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {main.readTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight group-hover:text-blue-300 transition-colors">
                  {main.title}
                </h1>

                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed max-w-2xl">
                  {main.subtitle}
                </p>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300 font-medium">{main.author}</span>
                    <span>&bull;</span>
                    <span>{main.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Read Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right 4 Secondary Stories (2x2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sides.map((story) => (
              <div
                key={story.id}
                onClick={() => handleArticleClick(story.id)}
                className="relative rounded-xl overflow-hidden shadow-sm group h-[220px] sm:h-[240px] bg-slate-900 flex flex-col justify-end p-5 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#0b1120]/80 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-blue-400">
                      {story.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {story.title}
                  </h3>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{story.timeAgo}</span>
                    <span className="text-blue-400 group-hover:underline flex items-center gap-0.5">
                      Explore &rarr;
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
