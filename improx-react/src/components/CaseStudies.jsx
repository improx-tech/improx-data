import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { siteContent } from '../data/content';

export default function CaseStudies() {
  const { caseStudies } = siteContent;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-b border-slate-200" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200/80 rounded-full">
              Proven Deliveries
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061e36] tracking-tight">
              Featured Client Deployments
            </h2>
            <p className="text-base text-slate-600">
              Measurable ROI, strict data accuracy SLAs, and enterprise-grade reliability in high-volume production.
            </p>
          </div>

          <a
            href="#sample-batch-form"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 self-start md:self-auto group"
          >
            <span>Request Project Evaluation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Case Studies 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Metric Banner Header */}
                <div className="bg-gradient-to-tr from-sky-600 to-blue-700 p-6 text-white text-center">
                  <div className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {cs.metric}
                  </div>
                  <div className="text-xs text-sky-100 font-semibold mt-1">
                    {cs.metricLabel}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7 space-y-4">
                  <div className="text-[11px] font-extrabold text-sky-700 tracking-wider uppercase">
                    {cs.vertical}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#061e36] leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="px-7 pb-7 pt-2">
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
