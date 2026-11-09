import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Database, Sparkles, FileCheck, Layers, Cpu } from 'lucide-react';
import { siteContent } from '../data/content';

export default function LandingHero({ onSelectService }) {
  const { brand } = siteContent;

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-[#0b1120] border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Operational Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-lg shadow-emerald-950/20 text-xs font-semibold text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[11px]">Enterprise Operations</span>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline">Dual-Blind Keying QA & 99.9% Accuracy SLA</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            High-Precision Data & Administrative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Operations for Enterprises
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            We provide institutional-grade data entry, automated web scraping, CRM database hygiene, executive Power BI analytics, and dedicated virtual admin squads — backed by our proprietary <strong className="text-white">Dual-Blind QA Protocol</strong> and <strong className="text-emerald-400">99.94% accuracy SLA</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-7 py-4 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-slate-950" />
              <span>Request Consultation & Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-4 rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
            >
              <span>Explore The 6 Core Services</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Enterprise jurisdiction &bull; Strict Mutual NDA &bull; Zero tool/proxy overhead</span>
          </p>
        </div>

        {/* 4 Key SLA Benchmark Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center relative group hover:border-emerald-500/40 transition-colors">
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-heading mb-1">5M+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Archival Records Keyed</div>
            <div className="text-[11px] text-slate-400 mt-1">Mortgage, deeds & healthcare charts</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center relative group hover:border-emerald-500/40 transition-colors">
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-heading mb-1">99.94%</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Verified Keying SLA</div>
            <div className="text-[11px] text-slate-400 mt-1">Dual-blind parallel verification</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center relative group hover:border-emerald-500/40 transition-colors">
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-heading mb-1">800K+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Daily Scraped SKUs</div>
            <div className="text-[11px] text-slate-400 mt-1">Across 14 marketplace portals</div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center relative group hover:border-emerald-500/40 transition-colors">
            <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-heading mb-1">24/7</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Follow-The-Sun Ops</div>
            <div className="text-[11px] text-slate-400 mt-1">&lt;24h urgent queue delivery</div>
          </div>
        </div>

        {/* 3 Operational Spotlight Cards (Editorial Magazine Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-slate-900 to-[#0f172a] border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 tracking-wider uppercase">
                01. DATA ENTRY
              </span>
              <span className="text-xs font-bold text-slate-400">99.94% Accuracy</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
              Dual-Blind Mortgage & Archive Digitization
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Two certified operators key identical files in isolation with real-time character-diff arbitration to guarantee zero defect leakage.
            </p>
            <a
              href="#data-entry"
              onClick={() => onSelectService && onSelectService('Data Entry')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Explore Data Entry Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-slate-900 to-[#0f172a] border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 tracking-wider uppercase">
                02. WEB SCRAPING
              </span>
              <span className="text-xs font-bold text-slate-400">Zero Blocks</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
              Automated Competitor SKU & Pricing Mesh
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Multi-threaded scrapers with residential IP rotation bypass anti-bot shields to deliver clean CSV/Snowflake data feeds daily.
            </p>
            <a
              href="#web-scraping"
              onClick={() => onSelectService && onSelectService('Web Scraping')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Explore Web Scraping Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-slate-900 to-[#0f172a] border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 tracking-wider uppercase">
                03. DATA PROCESSING
              </span>
              <span className="text-xs font-bold text-slate-400">CASS Certified</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
              Salesforce & HubSpot CRM Deduplication
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Sanitizing millions of contact records, normalizing postal formats, and merging duplicate accounts without losing customer history.
            </p>
            <a
              href="#data-processing"
              onClick={() => onSelectService && onSelectService('Data Processing')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Explore Data Processing Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}