import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap, Database, Clock } from 'lucide-react';

export default function SmartSolutions() {
  const challenges = [
    {
      title: "Manual Keying Bottlenecks",
      desc: "High-value analysts and managers spend hundreds of hours re-typing data between scanned PDFs, emails, and legacy systems."
    },
    {
      title: "Compounding OCR Errors",
      desc: "Off-the-shelf automated OCR misreads low-resolution scans, decimal points, and handwritten notes, causing costly billing and compliance exceptions."
    },
    {
      title: "Scaling Constraints",
      desc: "In-house back-office teams struggle to handle seasonal surges or sudden volume spikes without expensive hiring, onboarding, and management overhead."
    }
  ];

  const solutions = [
    {
      title: "99.9% Double-Blind Human QA",
      desc: "High-stakes data fields are independently keyed by two specialists and algorithmically reconciled to catch errors automated scripts routinely miss."
    },
    {
      title: "Overnight 24-Hour Turnaround",
      desc: "Our continuous global shift coverage processes massive batches overnight. Hand off records at 6 PM, receive clean datasets by 8 AM."
    },
    {
      title: "Native Cloud & Warehouse Sync",
      desc: "Pre-validated, schema-mapped payloads delivered directly into Snowflake, BigQuery, AWS Redshift, or relational SQL databases."
    }
  ];

  return (
    <section id="solutions" className="w-full bg-[#f8fafc] border-b border-slate-200/60 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 space-y-14">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block">
          Smart Solutions for Real Business Outcomes
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Turning Operational Friction Into Verifiable Growth
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          How modern enterprises transition from scattered spreadsheets and manual friction to structured, cloud-ready data pipelines.
        </p>
      </div>

      {/* Open Comparative Transformation (Completely Box-Free Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: The Operational Challenge (Open, no box) */}
        <div className="lg:col-span-6 space-y-8 scroll-slide-left">
          
          {/* Eyebrow & Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-rose-600">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>The Operational Challenge</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Where Manual Data Handling Breaks Down
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Growing companies routinely lose up to 28% of their back-office velocity to fragmented records, manual transcription backlogs, and fragile OCR tools.
            </p>
          </div>

          {/* Challenge Points List */}
          <div className="space-y-6 pt-2">
            {challenges.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✕
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight metric callout */}
          <div className="pt-6 border-t border-slate-200/80 flex items-center gap-3 text-xs text-slate-500">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Compounding keying errors delay invoicing, client audits, and regulatory reporting.</span>
          </div>

        </div>

        {/* Right Column: The Improx Outcome (Open, no box) */}
        <div className="lg:col-span-6 space-y-8 scroll-slide-right">
          
          {/* Eyebrow & Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0052FF]">
              <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
              <span>The Improx Outcome</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Engineered Precision, 99.9% SLA & Cloud Scale
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate back-office friction by pairing specialized automation with rigorous, multi-tier human verification to deliver production-ready datasets overnight.
            </p>
          </div>

          {/* Solution Points List */}
          <div className="space-y-6 pt-2">
            {solutions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action link */}
          <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0052FF] hover:text-[#0043DB] transition-all group/cta"
            >
              <span>Request Custom Scope & Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Credibility Guarantee (Clean, Open, Box-Free) */}
      <div className="pt-8 border-t border-slate-200/80 scroll-fade-up flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <div className="text-sm font-bold text-slate-900">
            Guaranteed 99.9% Keying SLA & Continuous Overnight Shifts
          </div>
          <p className="text-xs text-slate-500">
            Every engagement operates under mutual non-disclosure agreements, restricted VPN sandboxes, and zero long-term lock-in.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-blue-600/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Request Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      </div>
    </section>
  );
}
