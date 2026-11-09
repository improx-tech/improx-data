import React from 'react';
import { FileCheck, Globe, RefreshCw, BarChart3, UserCheck, Layers, Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ServicesGrid({ onSelectService }) {
  const { services } = siteContent;

  const iconMap = {
    'data-entry': FileCheck,
    'web-scraping': Globe,
    'data-processing': RefreshCw,
    'data-analytics': BarChart3,
    'admin-assistant': UserCheck,
    'data-services': Layers
  };

  const colorVariants = {
    blue: {
      bg: 'bg-sky-50 text-sky-600',
      badge: 'text-sky-700 bg-sky-50 border-sky-200',
    },
    cyan: {
      bg: 'bg-cyan-50 text-cyan-600',
      badge: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    },
    emerald: {
      bg: 'bg-emerald-50 text-emerald-600',
      badge: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    violet: {
      bg: 'bg-violet-50 text-violet-600',
      badge: 'text-violet-700 bg-violet-50 border-violet-200',
    },
    amber: {
      bg: 'bg-amber-50 text-amber-600',
      badge: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    indigo: {
      bg: 'bg-indigo-50 text-indigo-600',
      badge: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="services-deck">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200/80 rounded-full">
            Data & Admin Operations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061e36] tracking-tight">
            Our 6 Core Specialized Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered for high-growth enterprises, mortgage lenders, logistics carriers, and technology providers requiring zero-compromise precision.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = iconMap[svc.id] || FileCheck;
            const theme = colorVariants[svc.color] || colorVariants.blue;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-500/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-xl ${theme.bg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-slate-300 group-hover:text-sky-600/40 transition-colors">
                      {svc.index}
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase mb-2.5 border ${theme.badge}`}>
                    {svc.tag}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-[#061e36] mb-3 group-hover:text-sky-600 transition-colors">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {svc.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                    {svc.sla}
                  </span>

                  <a
                    href="#sample-batch-form"
                    onClick={() => onSelectService && onSelectService(svc.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Scope Sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
