import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Landmark, Stethoscope, ShoppingCart, Truck, Home, Briefcase, ShieldCheck, Server, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function IndustriesSection() {
  const { industries } = siteContent;
  const navigate = useNavigate();

  const iconMap = {
    'fintech-mortgage': Landmark,
    'healthcare-ehr': Stethoscope,
    'ecommerce-retail': ShoppingCart,
    'logistics-freight': Truck,
    'realestate-proptech': Home,
    'legal-enterprise': Briefcase,
    'insurance-underwriting': ShieldCheck,
    'saas-cloud': Server
  };

  const allIndustries = [
    ...industries,
    {
      id: 'insurance-underwriting',
      title: 'Insurance & Claims Underwriting',
      metrics: 'Claims Data & Validation'
    },
    {
      id: 'saas-cloud',
      title: 'SaaS & Cloud Operations',
      metrics: 'ETL Pipelines & Warehousing'
    }
  ];

  const handleIndustryClick = (id) => {
    navigate(`/industries#${id}`);
  };

  return (
    <section id="industries" className="relative w-full overflow-hidden bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white py-20 sm:py-24 lg:py-28">
      
      {/* 1. Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 2. Background Flow Wave (aboutwave.png) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
        style={{ backgroundImage: "url('/aboutwave.png')" }} 
      />

      {/* 3. Ambient Light Glow */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#0052FF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Section Header with Clean Eyebrow Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
            Domain Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Each industry is unique, and so are the data challenges. At Improx, we bring domain-specific validation dictionaries, document classifiers, and compliance rules to every engagement.
          </p>
        </div>

        {/* 8 DITTO NOETIC INDUSTRY BOXES (4 cols on lg, 2 cols on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {allIndustries.slice(0, 8).map((ind, idx) => {
            const Icon = iconMap[ind.id] || Briefcase;
            return (
              <div
                key={ind.id}
                onClick={() => handleIndustryClick(ind.id)}
                style={{ transitionDelay: `${(idx % 4) * 0.12}s` }}
                className="scroll-slide-left noetic-industry-box industry-box group"
              >
                {/* Crisp Icon */}
                <Icon className="ind-icon" />

                {/* Centered Industry Title */}
                <span>
                  {ind.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* View All Industries Link */}
        <div className="text-center pt-4">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm px-8 py-3.5 border border-white/20 hover:border-white transition-all cursor-pointer"
          >
            <span>Explore All Industry Blueprints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </section>
  );
}
