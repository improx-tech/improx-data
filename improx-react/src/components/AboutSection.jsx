import React from 'react';
import { ShieldCheck, Clock, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export default function AboutSection() {
  const { about } = siteContent;

  const pillars = [
    {
      icon: ShieldCheck,
      title: "99.9% Accuracy SLA",
      desc: "Double-blind keying and multi-tier algorithmic pre-screening catch discrepancies that automated tools miss."
    },
    {
      icon: Clock,
      title: "24/7 Scalable Hub",
      desc: "Continuous round-the-clock shift coverage allows high-volume batches to be processed overnight."
    },
    {
      icon: Lock,
      title: "Enterprise Discretion",
      desc: "Strict mutual NDAs, dedicated VPN environments, and automated post-project sanitization protect your IP."
    }
  ];

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
        
        {/* Main About Showcase: Editorial Story & Clean Facility Visual */}
        <div className="scroll-fade-up grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative (7 Columns) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3.5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block">
                About Improx Data & Cloud Consulting
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Engineering Scalable Data Foundations with Uncompromising Precision
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                At Improx, we believe that clean, structured data is the core operating foundation of every scalable enterprise.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded by seasoned data engineers and operations specialists, Improx simplifies complexity across high-volume document digitization, automated web scraping, and managed cloud pipelines. We bridge the gap between chaotic legacy archives and modern cloud analytics (Snowflake, BigQuery, AWS) so leadership teams make faster, higher-confidence decisions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are more than an outsourcing vendor — we operate as an agile extension of your internal team. By marrying modern automation with multi-tier, double-blind human verification, we deliver consistent 99.9% accuracy with zero operational overhead.
              </p>
            </div>

            {/* 3 Core Value Pillars (Clean, Box-Free) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="space-y-2 group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0052FF] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0052FF] hover:text-[#0043DB] transition-all group/link"
              >
                <span>Learn more about our verification workflow</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Clean High-Impact Visual (5 Columns - No Badges/Stickers) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-[4/5] border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Improx Data Operations Specialists and Engineering Center"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
