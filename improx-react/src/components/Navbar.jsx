import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, FileCheck, Globe, RefreshCw, BarChart3, UserCheck, Layers, ArrowRight, Cpu, Database } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const { services } = siteContent;

  const iconMap = {
    'data-entry': FileCheck,
    'web-scraping': Globe,
    'data-processing': RefreshCw,
    'data-analytics': BarChart3,
    'admin-assistant': UserCheck,
    'data-services': Layers,
    'ai-annotation': Cpu,
    'cloud-migration': Database
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Logo - Inbuilt Clean Transparent */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src="/logo_light.png"
            alt="Improx"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xs font-semibold text-slate-500 tracking-wide hidden sm:inline-block border-l border-slate-300 pl-3.5">
            Data & Cloud Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              to="/#services"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#0052FF] py-2 transition-colors cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#0052FF]' : ''}`} />
            </Link>

            {/* Dropdown Menu */}
            {servicesDropdown && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-none shadow-xl border border-[#d9e2e4] p-2.5 grid gap-1 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-2 text-xs font-semibold text-slate-400 border-b border-slate-100 mb-1">
                  Our Capabilities
                </div>
                {services.map((svc) => {
                  const Icon = iconMap[svc.id] || FileCheck;
                  return (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.id}`}
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-none hover:bg-blue-50/60 transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-none bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 group-hover/item:bg-[#0052FF] group-hover/item:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800 group-hover/item:text-[#0052FF]">
                          {svc.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {svc.tag}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-[#0052FF] transition-colors">
            About Us
          </Link>
          <Link to="/industries" className="text-sm font-medium text-slate-700 hover:text-[#0052FF] transition-colors">
            Industries
          </Link>
          <Link to="/blogs" className="text-sm font-medium text-slate-700 hover:text-[#0052FF] transition-colors">
            Blogs & Insights
          </Link>
          <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-[#0052FF] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right CTA Action */}
        <div className="hidden sm:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-semibold text-sm px-5 py-2.5 rounded-none shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-none text-slate-600 hover:text-slate-900 hover:bg-[#e7eaec] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#d9e2e4] px-5 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold text-slate-900 hover:text-[#0052FF] py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold text-slate-900 hover:text-[#0052FF] py-1"
          >
            About Us
          </Link>

          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider py-1">
              Services & Capabilities
            </span>
            <div className="pl-2.5 py-1 space-y-1.5 border-l-2 border-blue-200">
              {services.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xs font-semibold text-slate-700 hover:text-[#0052FF] py-1"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/industries"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#0052FF] py-1"
          >
            Industries
          </Link>
          <Link
            to="/blogs"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#0052FF] py-1"
          >
            Blogs & Insights
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#0052FF] py-1"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-semibold text-sm py-3 rounded-none shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
