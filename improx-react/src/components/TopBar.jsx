import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import { siteContent } from '../data/content';

export default function TopBar() {
  const { tickerItems } = siteContent;
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-[#111827] text-slate-300 text-xs border-b border-slate-800 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left: Trending Ticker */}
        <div className="flex items-center gap-2.5 overflow-hidden w-full md:w-auto justify-center md:justify-start">
          <span className="inline-flex items-center gap-1 bg-rose-600 text-white font-extrabold px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase shrink-0 shadow-xs">
            <Flame className="w-3 h-3 fill-current" />
            TRENDING
          </span>

          <div className="truncate text-slate-200 font-medium text-xs">
            <span className="text-emerald-400 font-bold mr-1.5">&#9656;</span>
            <span className="animate-in fade-in duration-300 inline-block">
              {tickerItems[tickerIndex]}
            </span>
          </div>
        </div>

        {/* Right: Date & Socials */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 text-slate-400">
          <span>{currentDate}</span>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Twitter / X"
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
