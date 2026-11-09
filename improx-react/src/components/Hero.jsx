import React from 'react';
import { ArrowRight, Shield, Clock, CheckCircle2, Activity } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Hero() {
  const { telemetry } = siteContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/70 pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 px-3.5 py-1.5 rounded-full text-sky-700 text-xs font-extrabold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span>Enterprise Data & Administrative Squads</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#061e36] tracking-tight leading-[1.12]">
              High-Precision{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-blue-700">
                Data & Admin Operations
              </span>{' '}
              Powered by Dual-Blind QA Protocols
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Scale your back-office data operations with dedicated engineering squads for Data Entry, Web Scraping, Processing, Analytics, and Executive Administrative Support. 99.94% accuracy SLA guaranteed under strict Mutual NDA.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#sample-batch-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-6 py-4 rounded-xl shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Request Consultation & Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services-deck"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-4 rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
              >
                <span>Explore 6 Core Services</span>
                <span className="text-slate-400">&darr;</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600" />
                <span>Enterprise Incorporated (USA)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>24/7 Production Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>99.94% Verified Accuracy SLA</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#061e36] text-white p-7 sm:p-8 shadow-2xl border border-slate-800 shadow-slate-900/30">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
                  <span className="text-xs font-extrabold text-sky-400 tracking-wider uppercase">
                    Production Telemetry
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE SLA
                </span>
              </div>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0b2746]/70 border border-slate-700/60 rounded-xl p-4">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {telemetry.accuracy}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-snug">
                    {telemetry.accuracyLabel}
                  </div>
                </div>

                <div className="bg-[#0b2746]/70 border border-slate-700/60 rounded-xl p-4">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {telemetry.volume}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-snug">
                    {telemetry.volumeLabel}
                  </div>
                </div>

                <div className="bg-[#0b2746]/70 border border-slate-700/60 rounded-xl p-4">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {telemetry.turnaround}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-snug">
                    {telemetry.turnaroundLabel}
                  </div>
                </div>

                <div className="bg-[#0b2746]/70 border border-slate-700/60 rounded-xl p-4">
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                    {telemetry.savings}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 leading-snug">
                    {telemetry.savingsLabel}
                  </div>
                </div>
              </div>

              {/* Footer Reassurance */}
              <div className="pt-4 border-t border-slate-800 text-center text-xs text-sky-300/90 font-medium">
                &#10003; Dual-Blind Parallel Keying &bull; Encrypted VPN Enclaves
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
