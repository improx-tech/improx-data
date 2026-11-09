import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { siteContent } from '../data/content';

export default function RichFooter() {
  const { brand, services } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d1a] text-slate-400 pt-16 pb-12 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm flex items-center">
                <img
                  src="/logo.png"
                  alt="Improx"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-400">
                Data & Cloud Consulting
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We help businesses streamline data entry, document digitization, web data collection, and back-office operations with reliable, human-verified accuracy.
            </p>

            <div className="pt-2 text-sm text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                  {brand.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((svc) => (
                <li key={svc.id}>
                  <a href={`#${svc.id}`} className="hover:text-blue-400 transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Mortgage & Banking</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Healthcare & Clinical</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">E-Commerce & Retail</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Logistics & Supply Chain</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Real Estate & PropTech</a></li>
              <li><a href="#industries" className="hover:text-blue-400 transition-colors">Legal & Professional</a></li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/industries" className="hover:text-blue-400 transition-colors">Industries</a></li>
              <li><a href="/blogs" className="hover:text-blue-400 transition-colors">Blogs & Insights</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Improx Data and Cloud Consulting. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
