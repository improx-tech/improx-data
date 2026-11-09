import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function ServicesSection({ onSelectService }) {
  const { services } = siteContent;
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    navigate(`/services/${serviceId}`);
  };

  // 6 cards (2x3 grid) matching the Noetic Labs screenshot, with toggle to show all 8
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="w-full bg-[#f8fafc] border-y border-slate-200/60 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Section Header with Clean Text Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
            Our Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Data Operations & Back-Office Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            At Improx, we develop custom data operations and automation squads that overcome bottlenecks and deliver tangible business outcomes.
          </p>
        </div>

        {/* Services Grid (3 Columns - Exact Noetic Labs Image Card Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {displayedServices.map((svc, idx) => {
            return (
              <div
                key={svc.id}
                id={svc.id}
                onClick={() => handleSelect(svc.id)}
                className="scroll-rotate-in noetic-service-card service-card group relative cursor-pointer"
                style={{
                  transitionDelay: `${(idx % 3) * 0.08}s`
                }}
              >
                {/* Background image with smooth scale effect on hover */}
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url('${svc.image}')`
                  }}
                />

                {/* Overlay with subtle resting vignette & deep unfold on hover */}
                <div className="overlay">
                  {/* Card Title (Centered white text at bottom in resting state, exactly like Noetic Labs screenshot) */}
                  <h3 className="tracking-tight">
                    {svc.title}
                  </h3>

                  {/* Unfolding Rich Information Container (Pure Text Lines, No Boxes) */}
                  <div className="unfold-content">
                    {/* Detailed Description */}
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">
                      {svc.desc}
                    </p>

                    {/* Key Capabilities Deliverables List (3 Text Lines with Blue Bullet Dots) */}
                    <div className="pt-3 mt-3 border-t border-white/10 space-y-2">
                      {svc.deliverables?.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Action Row */}
                    <Link
                      to={`/services/${svc.id}`}
                      className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-bold text-[#60a5fa] group-hover:text-white transition-colors pr-2"
                    >
                      <span>Explore Scope & Deliverables</span>
                      <span className="inline-flex items-center justify-end w-5 h-5 shrink-0 overflow-visible">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#60a5fa] group-hover:text-white shrink-0" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / View Less Toggle Button */}
        {services.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:border-[#0052FF] hover:text-[#0052FF] shadow-sm hover:shadow transition-all"
            >
              <span>{showAll ? 'Show Less' : 'View All Capabilities'}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
