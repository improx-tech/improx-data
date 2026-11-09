import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const handleConsultationClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-improx" className="w-full bg-white text-slate-800 py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (5 Cols) - Cinematic Operations Visual */}
          <div className="lg:col-span-5 relative scroll-slide-left">
            <div className="relative rounded-none overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[5/4] border border-slate-200/80 group mx-auto">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Why Choose Improx Data & Cloud Operations Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (7 Cols) - SG Analytics Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-7 scroll-slide-right">
            
            {/* Header Block */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                Proven Enterprise Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Choose Improx
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                We bridge manual friction and cloud-scale automation with disciplined human verification, overnight shift coverage, and zero administrative overhead.
              </p>
            </div>

            {/* Row 1: The 3 Core Pillars with Left Border Rules (SG Analytics Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="border-l-2 border-[#0052FF] pl-4 space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Double-Check Protocol
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dual-specialist keying and algorithmic screening eliminate costly exceptions.
                </p>
              </div>

              <div className="border-l-2 border-[#0052FF] pl-4 space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Overnight Turnaround
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Continuous global shifts process high-volume batches while you sleep.
                </p>
              </div>

              <div className="border-l-2 border-[#0052FF] pl-4 space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Strict Confidentiality
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mutual NDAs, sandboxed VPNs, and automated post-project sanitization.
                </p>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-none shadow-md shadow-blue-600/25 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
