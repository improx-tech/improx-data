import React from 'react';
import { Check, ArrowRight, FileCheck, Globe, RefreshCw, BarChart3, UserCheck, Layers } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ServicesList({ onSelectService }) {
  const { services } = siteContent;

  const iconMap = {
    'data-entry': FileCheck,
    'web-scraping': Globe,
    'data-processing': RefreshCw,
    'data-analytics': BarChart3,
    'admin-assistant': UserCheck,
    'data-services': Layers
  };

  const handleScope = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const formEl = document.getElementById('contact');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0b1120] border-b border-slate-800 text-slate-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            3. The 6 Main Specialized Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Data & Administrative Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Whether you need rapid archival digitization, automated competitor price harvesting, CRM deduplication, or dedicated back-office assistants, we deliver guaranteed precision.
          </p>
        </div>

        {/* 6 Services Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = iconMap[svc.id] || FileCheck;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-emerald-950/20 relative"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-xl font-black text-slate-500 group-hover:text-emerald-400 transition-colors">
                        {svc.index}
                      </span>
                    </div>

                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60 uppercase tracking-wider">
                      {svc.sla}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider mb-1">
                    {svc.tag}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {svc.index}. {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {svc.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                      Key Deliverables & Specs
                    </div>
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleScope(svc.title)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Scope {svc.title} Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-base font-bold text-white">Need a custom hybrid data pipeline or volume surge?</h4>
            <p className="text-xs text-slate-400">We configure dedicated virtual squads trained on your proprietary internal CRM, ERP, and database workflows.</p>
          </div>
          <button
            onClick={() => handleScope('Data Services')}
            className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md"
          >
            Consult Operations Specialist
          </button>
        </div>

      </div>
    </section>
  );
}