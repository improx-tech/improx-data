import React from 'react';
import { siteContent } from '../data/content';

export default function ProcessSection() {
  const { process } = siteContent;

  return (
    <section id="process" className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      
      {/* Section Header with Clean Eyebrow Heading (No pill box) */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
          How We Work
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Our Standard 5-Step Execution Process
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A dependable, transparent workflow from initial file assessment through verified database sync.
        </p>
      </div>

      {/* 5-Step Connected Flow (Clean open roadmap without rigid box containers) */}
      <div className="relative">
        {/* Connecting Tech Flow Line on Desktop */}
        <div className="hidden lg:block absolute top-6 left-16 right-16 h-0.5 border-t-2 border-dashed border-blue-300 pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 relative z-10 text-center lg:text-left">
          {process.map((step, idx) => (
            <div
              key={step.step}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              className="scroll-fade-up group flex flex-col items-center lg:items-start space-y-3"
            >
              {/* Connected Phase Badge */}
              <div className="w-12 h-12 rounded-none bg-white border-2 border-[#0052FF] text-[#0052FF] group-hover:bg-[#0052FF] group-hover:text-white font-extrabold text-base flex items-center justify-center shadow-md transition-all duration-300 shrink-0 group-hover:scale-110">
                {idx + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
}
