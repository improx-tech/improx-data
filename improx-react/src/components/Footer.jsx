import React from 'react';
import { Mail, ArrowUp, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function Footer() {
  const { brand, services, industries } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050b14] text-slate-300 pt-16 pb-12 border-t border-slate-800" id="footer">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo_white.png"
                alt="Improx"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="text-xs font-semibold text-slate-400 border-l border-white/20 pl-3.5">
                Data & Cloud Consulting
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We help growing businesses and enterprise teams handle data entry, web data collection, CRM cleaning, and administrative tasks with dedicated specialists.
            </p>

            <div className="pt-2 text-sm text-slate-300 space-y-2.5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href="tel:+919156470600" className="text-white hover:text-[#60a5fa] transition-colors">
                  +91 91564 70600
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-white hover:text-[#60a5fa] transition-colors">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=Maruti+Millennium+Tower,+Baner+Annex,+Baner,+Pune,+Maharashtra+411045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  Maruti Millennium Tower, Baner Annex, Baner, Pune, Maharashtra 411045
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {services.map((svc) => (
                <li key={svc.id}>
                  <Link to={`/services/${svc.id}`} className="hover:text-white transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {industries.map((ind) => (
                <li key={ind.id}>
                  <Link to={`/industries#${ind.id}`} className="hover:text-white transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Improx Data and Cloud Consulting. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0066FF]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
