import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Building2, Cpu, FileSpreadsheet, Lock } from 'lucide-react';
import { siteContent } from '../data/content';

export default function AboutImprox() {
  const { about, brand } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-[#0f172a] border-b border-slate-800 text-slate-100 relative" id="about">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Building2 className="w-3.5 h-3.5" />
            2. {about.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {about.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            {about.lead}
          </p>
        </div>

        {/* Narrative Split: Left Editorial Text + Right Enterprise Security Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              While modern generative AI and cloud OCR models promise unprecedented speed, they regularly suffer from <strong>4% to 8% hallucination and character-recognition drift</strong> on distorted scans, handwritten fields, and complex tabular structures.
            </p>
            <p>
              For mortgage deeds, clinical encounter charts, competitor pricing, and financial reconciliations, that failure rate is unacceptable. <strong>Improx Data bridges this gap</strong>: we combine automated algorithmic extraction with our proprietary <strong>Dual-Blind Parallel Keying QA Protocol</strong> to guarantee a verified <strong>99.94% accuracy SLA</strong>.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              We operate as your seamless operational extension — supplying certified data keyers, web scraping engineers, database specialists, and executive administrative squads without hiring, hardware, or management friction.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Legal Protection</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Strict Mutual NDA Enforced</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Zero Infrastructure Surcharges</span>
              </div>
            </div>
          </div>

          {/* Right Trust & Entity Callout Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-[#0b1120] to-slate-900 border border-emerald-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-emerald-500/20">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
                    CORPORATE ENTITY
                  </div>
                  <div className="font-heading text-lg font-bold text-white">
                    Enterprise Operations
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-5">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Registered Address:</strong>
                    <div className="text-slate-400 mt-0.5">{brand.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Legal Jurisdiction:</strong>
                    <div className="text-slate-400 mt-0.5">United States of America (State of Enterprise)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Quality Assurance Guarantee:</strong>
                    <div className="text-slate-400 mt-0.5">4-Stage Dual-Blind Keying with real-time character-diff arbitration</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">Master Service Agreements (MSAs)</div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500 text-slate-950 uppercase tracking-wider">
                  US Enforceable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl space-y-3 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="font-heading text-base font-bold text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}