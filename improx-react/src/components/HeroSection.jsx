import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight,
  FileText,
  Globe,
  Database,
  BarChart3,
  Users,
  Cloud,
  Cpu,
  Server
} from 'lucide-react';
import { siteContent } from '../data/content';

export default function HeroSection({ onSelectService }) {
  const { hero } = siteContent;
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  // 8 Core Services with icons and imagery for the enterprise slider
  const expertiseCards = [
    {
      id: "data-services",
      title: "Cloud Pipelines & Data Lakes",
      category: "Managed ETL Ops",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
      highlight: "Snowflake & BigQuery"
    },
    {
      id: "ai-annotation",
      title: "AI Training Data & Annotation",
      category: "Machine Learning Ops",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=700&q=80",
      highlight: "Precision Bounding & NER"
    },
    {
      id: "cloud-migration",
      title: "Legacy Data Migration & Cloud",
      category: "Enterprise Modernization",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
      highlight: "Zero-Downtime Migration"
    },
    {
      id: "data-entry",
      title: "Document Digitization & Keying",
      category: "Double-Blind Verification",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
      highlight: "5M+ Records Digitized"
    },
    {
      id: "web-scraping",
      title: "Web Scraping & Harvesting",
      category: "Marketplace Intel",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=700&q=80",
      highlight: "800K+ Daily SKUs"
    },
    {
      id: "data-processing",
      title: "CRM Deduplication & Hygiene",
      category: "Database Cleaning",
      icon: Database,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      highlight: "1.2M Contacts Cleaned"
    },
    {
      id: "data-analytics",
      title: "BI & Executive Dashboards",
      category: "Power BI & Tableau",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
      highlight: "Real-Time KPI Sync"
    },
    {
      id: "admin-assistant",
      title: "Virtual Administrative Squads",
      category: "Dedicated Remote Staff",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
      highlight: "Dedicated FTE Squads"
    }
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeCards = [...expertiseCards, ...expertiseCards];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] pt-16 sm:pt-20 pb-12 sm:pb-16 text-white">
      {/* 1. Engineering Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* 2. Flowing Wave Line Texture (Noetic Signature) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
        style={{ backgroundImage: "url('/wave.png')" }} 
      />

      {/* 3. Decorative Geometric Tech Circles */}
      <div className="absolute top-10 right-10 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-24 right-24 w-72 h-72 border border-blue-400/10 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />

      {/* 4. Glowing Ambient Mesh Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none animate-wave-pulse" />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '4s' }} />

      {/* Hero Content (Centered, Grand Scale Enterprise Typography) */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 text-center space-y-7">

        {/* Clean Text Eyebrow Heading */}
        <div className="hero-load-up delay-1">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#60a5fa] block">
            Tailored Data & Cloud Consulting
          </span>
        </div>

        {/* Main Headline (delay-2) */}
        <h1 className="hero-load-up delay-2 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          Transform Your Business with Tailored Data & Cloud Operations
        </h1>

        {/* Lead Subtitle (delay-3) */}
        <p className="hero-load-up delay-3 text-xs sm:text-sm md:text-base text-[#c9d6d7] max-w-2xl mx-auto font-normal leading-relaxed">
          Custom Document Digitization, Automated Web Data Harvesting, and Dedicated Administrative Teams Designed to Simplify, Scale, and Deliver Tangible Results.
        </p>

        {/* CTA Buttons Row (delay-4) */}
        <div className="hero-load-up delay-4 pt-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-none shadow-md shadow-blue-600/25 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Our Expertise</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-none border border-[#0052FF] hover:border-[#60a5fa] transition-all cursor-pointer"
          >
            <span>Schedule Consultation</span>
          </a>
        </div>

      </div>

      {/* Signature Auto Expertise Slider (Edge-to-Edge Full-Bleed Carousel - delay-5) */}
      <div className="hero-load-up delay-5 relative z-10 pt-6 sm:pt-8 mt-6 sm:mt-8 w-full">
        {/* Infinite Track Container */}
        <div className="overflow-hidden py-3 w-full">
          <div className="animate-infinite-scroll flex gap-5 sm:gap-6">
            {marqueeCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => handleCardClick(card.id)}
                  className="w-[260px] sm:w-[290px] h-[340px] sm:h-[370px] shrink-0 rounded-none overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 border border-white/10 hover:border-blue-500/50 will-change-transform"
                >
                  {/* Background Full-Bleed Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Deep Gradient Vignette for Text Readability (No Pills) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08101E] via-[#08101E]/40 to-transparent group-hover:via-[#08101E]/55 transition-colors duration-300" />

                  {/* Clean Content Overlay (Zero Pills) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-10 pointer-events-none">
                    {/* Category with Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      {IconComp && <IconComp className="w-4 h-4 text-[#60a5fa] shrink-0" />}
                      <span className="text-xs font-bold text-[#60a5fa] uppercase tracking-wider">
                        {card.category}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors leading-snug">
                      {card.title}
                    </h3>

                    {/* Highlight Metric */}
                    <p className="text-xs text-slate-300 font-medium mt-1.5">
                      {card.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
