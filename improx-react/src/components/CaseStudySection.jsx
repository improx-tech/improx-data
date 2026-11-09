import React from 'react';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, FileText, Database, TrendingUp } from 'lucide-react';
import { siteContent } from '../data/content';

export default function CaseStudySection() {
  const { caseStudies } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-[#0f172a] border-b border-slate-800 text-slate-100" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Award className="w-3.5 h-3.5" />
            6. Proven Case Studies
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Measurable Outcomes for High-Volume Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Real deployments where Improx Data eliminated backlog bottlenecks, resolved dirty CRM databases, and harvested competitive market signals.
          </p>
        </div>

        {/* 3 Case Study Deep-Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-emerald-950/20 relative"
            >
              <div>
                {/* Metric Header */}
                <div className="pb-6 mb-6 border-b border-slate-800">
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-heading mb-1 tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                    {study.metricLabel}
                  </div>
                  <div className="text-[10px] text-emerald-500/80 font-mono mt-0.5">
                    {study.vertical}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {study.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom SLA Callout */}
              <div className="pt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Mutual NDA Shield</span>
                </span>
                <a
                  href="#contact"
                  className="font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>Request Full Case Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Compliance Banner */}
        <div className="mt-12 bg-[#0b1120] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white text-sm">Enterprise Data Governance & Anonymization:</strong>
              <p className="text-slate-400 mt-0.5">All customer production data processed in strict accordance with Enterprise non-disclosure standards and encrypted network tunnels.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-lg border border-slate-700 transition-colors"
          >
            Review Security Protocols
          </a>
        </div>

      </div>
    </section>
  );
}