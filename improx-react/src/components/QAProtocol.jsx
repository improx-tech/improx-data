import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function QAProtocol() {
  const { qaProtocol } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-[#061e36] text-white relative overflow-hidden" id="qa-protocol">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 border border-sky-500/30 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Proprietary Quality System
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            4-Stage Dual-Verification QA Protocol
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            How Improx Data consistently hits 99.94% accuracy on high-volume production batches without compromise.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {qaProtocol.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-[#0b2746]/80 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between hover:border-sky-500/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading text-3xl font-extrabold text-sky-400 group-hover:scale-110 transition-transform inline-block">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-400/80 group-hover:bg-sky-400 animate-ping" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < qaProtocol.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-sky-400/60 font-bold text-xl pointer-events-none">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-900/40 via-sky-800/30 to-blue-900/40 border border-sky-500/30 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-sky-200">
            <strong>Need zero error tolerance?</strong> Every production batch is backed by character diff audits and arbitration before database export.
          </p>
        </div>

      </div>
    </section>
  );
}
