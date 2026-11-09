import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Mail, Flame, Award, Clock } from 'lucide-react';
import { siteContent } from '../data/content';

export default function MainFeedWithSidebar({ onSelectService }) {
  const { services, qaProtocol, caseStudies, mostReadList, brand } = siteContent;
  const [briefingEmail, setBriefingEmail] = useState('');
  const [briefingSent, setBriefingSent] = useState(false);

  const handleBriefingSubmit = (e) => {
    e.preventDefault();
    if (briefingEmail) {
      setBriefingSent(true);
    }
  };

  return (
    <section className="py-16 bg-slate-100/60" id="services-deck">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 2-Column Editorial Grid (70% Left Stream, 30% Right Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: THE 6 CORE SERVICES FEED & QA (70% / 8 Cols)*/}
          {/* ======================================================== */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-6 bg-emerald-600 rounded-full" />
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Data & Admin Core Capabilities
                </h2>
              </div>
              <span className="text-xs font-bold text-emerald-600">
                All 6 Specialized Services
              </span>
            </div>

            {/* The 6 Services Feed Cards */}
            <div className="space-y-6">
              {(services || []).map((svc) => (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-500/60 transition-all flex flex-col sm:flex-row gap-6 group"
                >
                  {/* Thumbnail */}
                  <div className="sm:w-56 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#0f172a]/95 text-emerald-400 font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-xs">
                      {svc.index}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider border border-emerald-200">
                          {svc.tag}
                        </span>
                        <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {svc.sla}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                        <a
                          href="#sample-batch-form"
                          onClick={() => onSelectService && onSelectService(svc.title)}
                        >
                          {svc.title}
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {svc.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                        {svc.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Enterprise Entity &bull; Mutual NDA</span>
                      <a
                        href="#sample-batch-form"
                        onClick={() => onSelectService && onSelectService(svc.title)}
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-all"
                      >
                        <span>Scope Project Batch</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* QA Protocol Spotlight Card (Dark Charcoal & Emerald) */}
            <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden" id="qa-protocol">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-extrabold text-emerald-400 tracking-wider uppercase">
                  Proprietary Quality Protocol
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                4-Stage Dual-Verification Architecture
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Our double-blind parallel keying methodology arbitrates every discrepancy with automated byte diff audits, guaranteeing 99.94% accuracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(qaProtocol || []).map((step) => (
                  <div key={step.step} className="bg-[#1f2937] rounded-xl p-4 border border-slate-700/80">
                    <span className="font-heading text-2xl font-extrabold text-emerald-400 block mb-1">
                      {step.step}
                    </span>
                    <h5 className="font-heading text-sm font-bold text-white mb-1.5 leading-snug">
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Case Studies Grid */}
            <div className="space-y-6" id="case-studies">
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-6 bg-emerald-600 rounded-full" />
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                    Featured Client Deployments
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {(caseStudies || []).map((cs, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="bg-gradient-to-tr from-slate-900 to-slate-800 p-5 text-white text-center border-b border-emerald-500/40">
                      <div className="font-heading text-3xl font-extrabold tracking-tight text-emerald-400">
                        {cs.metric}
                      </div>
                      <div className="text-[11px] text-slate-300 font-semibold mt-0.5">
                        {cs.metricLabel}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[9px] font-extrabold text-emerald-800 uppercase tracking-wider block">
                        {cs.vertical}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                        {cs.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {cs.desc}
                      </p>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                        {cs.tags.map((t, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: STICKY EDITORIAL SIDEBAR (30% / 4 Cols)   */}
          {/* ======================================================== */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Widget 1: Executive Briefing Newsletter Box (Dark Charcoal & Emerald) */}
            <div className="rounded-2xl p-7 bg-[#111827] text-white border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-extrabold text-emerald-400 tracking-wider uppercase">
                  The Improx Briefing
                </span>
              </div>
              <h3 className="font-heading text-xl font-extrabold text-white mb-2 leading-snug">
                Join 25,000+ Enterprise Leaders
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Actionable data operations benchmarks, scraping defense tactics, and accuracy case studies delivered weekly.
              </p>

              {briefingSent ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-xl text-center space-y-1">
                  <span className="text-emerald-400 font-bold text-xs block">Thank You for Subscribing!</span>
                  <span className="text-slate-300 text-[11px] block">Your executive intelligence briefing is on its way.</span>
                </div>
              ) : (
                <form onSubmit={handleBriefingSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={briefingEmail}
                    onChange={(e) => setBriefingEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Subscribe & Get Sample NDA
                  </button>
                  <span className="text-[10px] text-slate-400 block text-center">
                    Zero spam. Unsubscribe at any time.
                  </span>
                </form>
              )}
            </div>

            {/* Widget 2: Most Read Stories / Services (Numbered 1-5) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-heading text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Most Requested Deployments
                </h4>
              </div>

              <div className="space-y-3.5">
                {(mostReadList || []).map((item) => (
                  <div key={item.rank} className="flex items-start gap-3 group">
                    <span className="font-heading text-lg font-extrabold text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 w-5">
                      {item.rank}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-heading text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug line-clamp-2">
                        <a
                          href="#sample-batch-form"
                          onClick={() => onSelectService && onSelectService(item.service)}
                        >
                          {item.title}
                        </a>
                      </h5>
                      <span className="text-[10px] text-slate-400 mt-0.5 block flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {item.time} &bull; {item.service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Enterprise Legal Entity & NDA Reassurance */}
            <div className="bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200/80 space-y-3 text-slate-800">
              <div className="flex items-center gap-2 text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="font-heading text-sm font-extrabold">
                  Enterprise Corporate Compliance
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Improx Data operates under strict Enterprise jurisdiction with binding mutual non-disclosure agreements and HIPAA / ISO-grade secure data transmission enclaves.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800">
                Global Data & Cloud Operations
              </div>
            </div>

            {/* Widget 4: Need Help Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm font-bold text-slate-900">
                Direct Operations Desk
              </h4>
              <p className="text-xs text-slate-500">
                Need custom SLA terms or a dedicated FTE squad scoped within 24 hours?
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="inline-block text-xs font-extrabold text-emerald-600 hover:text-emerald-700"
              >
                {brand.email} &rarr;
              </a>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}
