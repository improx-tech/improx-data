import React from 'react';
import { Landmark, Stethoscope, ShoppingCart, Truck, Home, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Industries({ onSelectService }) {
  const { industries } = siteContent;

  const iconMap = {
    'fintech-mortgage': Landmark,
    'healthcare-ehr': Stethoscope,
    'ecommerce-retail': ShoppingCart,
    'logistics-freight': Truck,
    'realestate-proptech': Home,
    'legal-enterprise': Briefcase
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0b1120] border-b border-slate-800 text-slate-100" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            5. Specialized Industry Solutions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Workflows for High-Precision Sectors
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Every vertical has unique compliance mandates, terminology, and record formats. Our squads are trained in sector-specific schemas to ensure seamless ingestion.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.id] || Briefcase;
            return (
              <div
                key={ind.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700/60 uppercase tracking-wider">
                      {ind.metrics}
                    </span>
                  </div>

                  <div className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider mb-1">
                    {ind.tag}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {ind.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                      Domain Capabilities
                    </div>
                    {ind.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group/link"
                  >
                    <span>Request industry benchmark data</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}