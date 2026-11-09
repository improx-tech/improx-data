import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Paperclip, 
  X, 
  Mail, 
  Phone,
  MapPin,
  FileCheck,
  Globe,
  Database,
  BarChart3,
  UserCheck,
  Layers,
  Cpu,
  Server
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteContent } from '../data/content';
import BlogsSection from '../components/BlogsSection';

export default function ServicePage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { brand } = siteContent;

  // Resolve service data
  const currentService = servicesData.find((s) => s.slug === serviceId || s.id === serviceId) || servicesData[0];

  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    description: ''
  });
  const [attachment, setAttachment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const iconMap = {
    'data-entry': FileCheck,
    'web-scraping': Globe,
    'data-processing': Database,
    'data-analytics': BarChart3,
    'admin-assistant': UserCheck,
    'data-services': Layers,
    'ai-annotation': Cpu,
    'cloud-migration': Server
  };

  const techLogoMap = {
    'snowflake': { name: 'Snowflake', src: '/logos/snowflake.svg' },
    'bigquery': { name: 'Google BigQuery', src: '/logos/bigquery.svg' },
    'google bigquery': { name: 'Google BigQuery', src: '/logos/bigquery.svg' },
    'amazon s3': { name: 'Amazon AWS', src: '/logos/aws.svg' },
    'aws s3': { name: 'Amazon AWS', src: '/logos/aws.svg' },
    'aws': { name: 'Amazon AWS', src: '/logos/aws.svg' },
    'postgresql': { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
    'salesforce': { name: 'Salesforce', src: '/logos/salesforce.svg' },
    'google cloud': { name: 'Google Cloud', src: '/logos/googlecloud.svg' },
    'microsoft azure': { name: 'Microsoft Azure', src: '/logos/azure.svg' },
    'azure': { name: 'Microsoft Azure', src: '/logos/azure.svg' },
    'power bi': { name: 'Power BI', src: '/logos/powerbi.svg' },
    'tableau': { name: 'Tableau', src: '/logos/tableau.png' },
    'databricks': { name: 'Databricks', src: '/logos/databricks.svg' },
    'python': { name: 'Python', src: '/logos/python.svg' },
    'apache airflow': { name: 'Apache Airflow', src: '/logos/airflow.svg' },
    'mongodb': { name: 'MongoDB', src: '/logos/mongodb.svg' }
  };

  const serviceLogos = (currentService.techStack || [])
    .map((tech) => techLogoMap[tech.toLowerCase()])
    .filter(Boolean);

  const ServiceIcon = iconMap[currentService.id] || FileCheck;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setAttachment(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/enquiry@improxgroup.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          service: currentService.title,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          requirements: formData.description,
          attachment_note: attachment ? `File attached in local session: ${attachment.name} (${(attachment.size / 1024 / 1024).toFixed(2)} MB)` : 'None',
          _subject: `New ${currentService.shortTitle} Proposal Request: ${formData.company} - ${formData.name}`,
          _replyto: formData.email
        })
      });
    } catch (err) {
      console.warn("Direct dispatch note:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  // Other related services
  const otherServices = servicesData.filter((s) => s.id !== currentService.id).slice(0, 3);

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#0052FF] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Editorial Precision Architecture)                   */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white pt-12 sm:pt-16 pb-20 sm:pb-24 overflow-hidden">
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
        
        {/* Decorative Wave texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
          style={{ backgroundImage: "url('/wave.png')" }} 
        />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 sm:mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#60a5fa] font-medium">{currentService.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Header Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {currentService.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {currentService.heroDescription}
              </p>

              {/* Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#service-contact"
                  className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-none shadow-lg shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-none border border-white/20 hover:border-white transition-all cursor-pointer"
                >
                  <span>View Core Capabilities</span>
                </a>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-none overflow-hidden shadow-xl border border-white/15 group">
                <img
                  src={currentService.heroImage}
                  alt={currentService.title}
                  className="w-full h-[260px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08101E] via-[#08101E]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <ServiceIcon className="w-5 h-5 text-[#60a5fa]" />
                    <span className="text-xs font-bold text-[#60a5fa] uppercase tracking-wider">
                      {currentService.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {currentService.tagline}
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. IN-DEPTH OVERVIEW & ARCHITECTURE                                       */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white" id="overview">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          <div className="max-w-4xl mx-auto space-y-6 scroll-fade-up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block text-center">
              Executive Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-center">
              Engineered for Enterprise Reliability & Zero Keystroke Error
            </h2>
            <div className="space-y-4 pt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentService.overview.map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. KEY CAPABILITIES & DELIVERABLES GRID                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200" id="capabilities">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 scroll-fade-up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block">
              Core Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored Capabilities for Complex Workflows
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every deliverable is customized to match your internal taxonomies, software platforms, and operational deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {currentService.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="scroll-fade-up bg-white rounded-none p-5 sm:p-6 shadow-xs border border-slate-200 hover:border-[#0052FF] hover:shadow-md transition-all duration-300 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-none bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Deliverable Checklist:
                  </span>
                  {cap.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STEP-BY-STEP WORKFLOW TIMELINE                                         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white" id="workflow">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 scroll-fade-up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block">
              Operational Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              4-Phase Execution & QA Lifecycle
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardized, repeatable engineering protocols engineered for zero data leaks and audited precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {currentService.workflow.map((phase, idx) => (
              <div
                key={idx}
                className="scroll-fade-up bg-slate-50 rounded-none p-4 sm:p-5 border border-slate-200 relative group hover:bg-white hover:border-[#0052FF] hover:shadow-md transition-all duration-300 space-y-2.5"
              >
                <div className="w-8 h-8 rounded-none bg-white border-2 border-[#0052FF] text-[#0052FF] group-hover:bg-[#0052FF] group-hover:text-white font-extrabold text-xs flex items-center justify-center shadow-xs transition-colors">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-snug">
                  {phase.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNOLOGY STACK MARQUEE / LOGOS (LOGOS ONLY)                          */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-[#070e1c] text-white border-y border-white/10 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left shrink-0">
            <span className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider block">
              Ecosystem & Tools
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Integrated Technologies for {currentService.shortTitle}
            </h3>
          </div>

          <div className="hidden md:block h-9 w-px bg-white/15 shrink-0" />

          {/* Real Corporate Logos (Logos Only - Strictly in One Line) */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar">
            <div 
              className="flex flex-nowrap items-center justify-start md:justify-end gap-4 sm:gap-5 lg:gap-6 py-1 whitespace-nowrap"
              style={{ flexWrap: 'nowrap' }}
            >
              {serviceLogos.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ flexShrink: 0 }}
                  title={tool.name}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-5 sm:h-6 w-auto max-w-[85px] object-contain shrink-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6.5. SERVICE-SPECIFIC BLOGS & TECHNICAL PLAYBOOKS                         */}
      {/* ========================================================================= */}
      <BlogsSection 
        serviceId={currentService.id}
        pageType="service"
        title={`Engineering Playbooks for ${currentService.shortTitle}`}
        subtitle={`Technical deep-dives, benchmark comparisons, and QA playbooks specifically tailored for ${currentService.title.toLowerCase()}.`}
        limit={3}
      />

      {/* ========================================================================= */}
      {/* 7. DEDICATED PROJECT SCOPING FORM                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d1e38] via-[#0A1628] to-[#060c18] text-white py-16 sm:py-20" id="service-contact">
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 scroll-slide-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                  Project Scoping Desk
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Scope Your {currentService.shortTitle} Project
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                  Connect directly with our lead operations engineers. We will analyze your specifications, turnaround schedule, and required SLA thresholds.
                </p>
              </div>

              {/* Checkpoints */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Strict Delaware Mutual NDA</strong> executed immediately upon request before file ingestion.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Guaranteed Accuracy SLA</strong> backed by human-in-the-loop dual-verification.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Transparent Volume Pricing</strong> with zero long-term lock-ins or hidden proxy charges.
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-white/15 space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-white/10 flex items-center justify-center text-[#60a5fa] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Call / WhatsApp:</span>
                    <a href="tel:+919156470600" className="text-white hover:text-[#60a5fa] transition-colors font-bold text-sm">
                      +91 91564 70600
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-white/10 flex items-center justify-center text-[#60a5fa] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email us directly:</span>
                    <a href={`mailto:${brand.email}`} className="text-white hover:text-[#60a5fa] transition-colors font-bold text-sm">
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-white/10 flex items-center justify-center text-[#60a5fa] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Office Location:</span>
                    <a 
                      href="https://maps.google.com/?q=Maruti+Millennium+Tower,+Baner+Annex,+Baner,+Pune,+Maharashtra+411045"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#60a5fa] transition-colors font-medium text-xs leading-relaxed block"
                    >
                      Maruti Millennium Tower, Baner Annex, Baner, Pune, Maharashtra 411045
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Vertical Rectangle Form */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end scroll-slide-right">
              <div className="bg-white text-slate-900 rounded-none p-6 sm:p-7 shadow-2xl border border-slate-100 w-full max-w-md">
                
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Request {currentService.shortTitle} Proposal
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Direct response from our operations desk within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 text-[#0052FF] rounded-none flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Thank You! We Received Your Request.
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your {currentService.shortTitle} inquiry has been routed directly to <strong className="text-slate-900">enquiry@improxgroup.com</strong>. Our engineering lead will review your specifications and reach out to <strong className="text-[#0052FF]">{formData.email}</strong> within 2 hours.
                    </p>

                    <div className="pt-2 flex flex-col items-center gap-2">
                      <a
                        href={`mailto:enquiry@improxgroup.com?subject=Inquiry: ${encodeURIComponent(currentService.shortTitle)} - ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(`Service: ${currentService.title}\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRequirements: ${formData.description}`)}`}
                        className="text-xs font-semibold text-[#0052FF] hover:underline cursor-pointer"
                      >
                        Open direct thread in your email client &rarr;
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-slate-500 hover:text-slate-700 cursor-pointer pt-2"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Vance"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Inc."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    {/* File Attachment Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Sample / Specs Attachment
                        <span className="text-[10px] text-slate-400 font-normal ml-1">(Optional)</span>
                      </label>

                      {!attachment ? (
                        <label className="flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs rounded-none bg-slate-50 border border-dashed border-slate-300 hover:border-[#0052FF] hover:bg-blue-50/50 text-slate-600 hover:text-[#0052FF] transition-all cursor-pointer group">
                          <Paperclip className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0052FF] transition-colors" />
                          <span className="font-medium text-xs">Attach file (PDF, CSV, XLSX, ZIP up to 25MB)</span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.csv,.xlsx,.xls,.doc,.docx,.zip,.json,.txt"
                            className="hidden"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between px-3 py-2 text-xs rounded-none bg-blue-50 border border-blue-200 text-slate-800">
                          <div className="flex items-center gap-2 truncate">
                            <Paperclip className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                            <span className="font-medium truncate max-w-[200px]">{attachment.name}</span>
                            <span className="text-[10px] text-slate-500 shrink-0">
                              ({(attachment.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="text-slate-400 hover:text-red-500 p-1 rounded-none transition-colors cursor-pointer"
                            title="Remove attached file"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Requirements & Volume
                      </label>
                      <textarea
                        rows="3"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={`Describe your ${currentService.shortTitle.toLowerCase()} volume, formats, and turnaround requirements...`}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-none bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm py-3 rounded-none shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn mt-1 disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Project Requirements'}</span>
                      <Send className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (ACCORDION)                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF] block">
              Operational Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About {currentService.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {currentService.faq.map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#0052FF] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-6 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. EXPLORE OTHER ENTERPRISE CAPABILITIES                                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#0052FF] uppercase tracking-wider block">
                Expand Scope
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore Other Core Capabilities
              </h3>
            </div>
            <Link
              to="/#services"
              className="text-xs sm:text-sm font-bold text-[#0052FF] hover:underline flex items-center gap-1"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {otherServices.map((svc) => {
              const Icon = iconMap[svc.id] || FileCheck;
              return (
                <Link
                  key={svc.id}
                  to={`/services/${svc.slug}`}
                  className="bg-white rounded-none p-4 sm:p-5 border border-slate-200 hover:border-[#0052FF] hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-none bg-blue-50 text-[#0052FF] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {svc.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-snug">
                          {svc.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {svc.heroDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#0052FF] pt-2 border-t border-slate-100">
                    <span>Learn More & Scoping</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
