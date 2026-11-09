import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function EngagementModels() {
  const { engagementModels } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-[#0f172a] border-t border-slate-800 text-slate-100" id="engagement-models">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full">
            Flexible Scaling
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Flexible Enterprise Engagement Models
          </h2>
          <p className="text-base text-slate-400">
            Tailor your operational structure to match your exact budget, volume surges, or dedicated team requirements.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(engagementModels || []).map((model, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border flex flex-col justify-between transition-all ${
                idx === 0
                  ? 'bg-slate-900/90 text-white border-emerald-500/50 shadow-2xl shadow-emerald-950/30 ring-1 ring-emerald-500/30 relative'
                  : 'bg-slate-900/50 text-slate-100 border-slate-800 shadow-sm hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded tracking-wider uppercase ${
                      idx === 0 ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {model.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3 text-white">
                  {model.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed mb-8 text-slate-400">
                  {model.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {model.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs font-medium">
                      <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <a
                  href="#sample-batch-form"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-2 transition-all ${
                    idx === 0
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>Select Model & Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
