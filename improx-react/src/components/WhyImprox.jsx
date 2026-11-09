import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, Lock, Clock, DollarSign, Users, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export default function WhyImprox() {
  const { whyImprox, qaProtocol } = siteContent;

  const iconList = [Award, ShieldCheck, Clock, DollarSign, Users, Sparkles];

  return (
    <section className="py-20 lg:py-28 bg-[#0f172a] border-b border-slate-800 text-slate-100 relative" id="why-improx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            4. Why Improx Data
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Institutional-Grade Assurance & Zero-Error Execution
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Traditional BPOs compromise on accuracy, while AI-only solutions hallucinate on unformatted records. We combine algorithmic speed with rigorous dual-blind human validation.
          </p>
        </div>

        {/* 6 Core Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyImprox.map((item, idx) => {
            const Icon = iconList[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 space-y-4 transition-all group hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">
                  {item.tag}
                </div>

                <h3 className="font-heading text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Deep Dive: The 4-Stage Dual-Verification QA Protocol */}
        <div className="bg-[#0b1120] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden" id="qa-protocol">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mb-12 relative z-10 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
              OPERATIONAL PROTOCOL SPECIFICATION
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              The 4-Stage Dual-Blind Keying QA Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              How we mathematically eliminate transcription errors to guarantee our 99.94% accuracy SLA across millions of records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {qaProtocol.map((stage, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative group hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-3xl font-extrabold text-emerald-400 font-heading mb-3">
                  {stage.step}
                </div>
                <h4 className="font-heading text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full audit trail and character diff reports delivered with every completed batch.</span>
            </div>
            <a
              href="#contact"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline"
            >
              Explore our enterprise QA protocol with your project team &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}