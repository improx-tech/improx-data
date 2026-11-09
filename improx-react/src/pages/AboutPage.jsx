import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
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
  Server,
  Lock,
  Workflow,
  Sparkles
} from 'lucide-react';
import { siteContent } from '../data/content';
import BlogsSection from '../components/BlogsSection';

export default function AboutPage() {
  const { brand } = siteContent;

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
          page: "About Improx Operations Desk",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          requirements: formData.description,
          attachment_note: attachment ? `File attached in local session: ${attachment.name} (${(attachment.size / 1024 / 1024).toFixed(2)} MB)` : 'None',
          _subject: `New Scoping Request (About Page): ${formData.company} - ${formData.name}`,
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

  // Corporate logos suite
  const corporateLogos = [
    { name: "Snowflake", src: "/logos/snowflake.svg" },
    { name: "Google BigQuery", src: "/logos/bigquery.svg" },
    { name: "Amazon AWS", src: "/logos/aws.svg" },
    { name: "PostgreSQL", src: "/logos/postgresql.svg" },
    { name: "Salesforce", src: "/logos/salesforce.svg" },
    { name: "Microsoft Azure", src: "/logos/azure.svg" },
    { name: "Power BI", src: "/logos/powerbi.svg" },
    { name: "Tableau", src: "/logos/tableau.png" },
    { name: "Databricks", src: "/logos/databricks.svg" },
    { name: "Python", src: "/logos/python.svg" },
    { name: "Apache Airflow", src: "/logos/airflow.svg" },
    { name: "MongoDB", src: "/logos/mongodb.svg" }
  ];

  // Core Pillars
  const pillars = [
    {
      num: "01",
      title: "Human-in-the-Loop Discipline",
      desc: "Pure automated OCR regularly hallucinates on imperfect scans, skewed receipts, and complex medical charts. Improx deploys dual-blind independent keying where two specialists enter data in parallel and algorithms flag variances down to the character."
    },
    {
      num: "02",
      title: "Sandboxed Enclave Security",
      desc: "All back-office pipelines run on dedicated VPN-isolated virtual machines with IP whitelisting, zero local file retention, and mutual NDA execution prior to any data transmission. Data is purged upon delivery sign-off."
    },
    {
      num: "03",
      title: "Follow-the-Sun Velocity",
      desc: "Data operations should never bottleneck your revenue queues. With multi-timezone shifts operating 24 hours a day, high-volume loan batches, web extraction feeds, and CRM deduplication queues are processed overnight."
    },
    {
      num: "04",
      title: "Transparent Volume Economics",
      desc: "Say goodbye to rigid long-term vendor retainers. Improx delivers enterprise-grade back-office staffing and extraction squads on transparent per-record, per-SKU, or dedicated weekly models without lock-in."
    }
  ];

  // Governance benchmarks
  const benchmarks = [
    {
      title: "Delaware Mutual NDA Enforced",
      desc: "Every interaction is bound by strict enterprise confidentiality executed prior to receiving samples or project specifications."
    },
    {
      title: "99.8%+ Accuracy SLA",
      desc: "Char-level validation matrices and senior supervisor sign-offs ensure error-free schemas entering your data lake."
    },
    {
      title: "Zero Setup or Proxy Friction",
      desc: "Our web scraping and data processing squads own the proxy infrastructure, server orchestration, and pipeline maintenance."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#0052FF] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Editorial Precision Architecture)                   */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
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
            <span className="text-[#60a5fa] font-medium">About Us</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
              About Improx Data & Cloud Consulting
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting High-Precision Data Operations & Back-Office Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Improx was established to solve a fundamental business problem: as enterprises modernize their cloud warehouses, their raw data operations remain plagued by manual keystroke friction, broken web scrapers, and dirty legacy records. We provide dedicated, human-verified operations squads that turn operational backlogs into structured, audit-ready data.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#about-contact"
                className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-none shadow-md shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Schedule Operations Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/#services"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-none border border-white/20 hover:border-white transition-all cursor-pointer"
              >
                <span>View Core Capabilities</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE IMPROX OPERATING THESIS (EDITORIAL COMPARISON)                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 scroll-slide-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                The Operating Dilemma
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Automated AI Alone Cannot Solve Back-Office Bottlenecks
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Modern enterprise teams frequently encounter a sharp divide between AI promises and operational reality:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-red-500 pl-4 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Brittle AI & OCR Extraction</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Automated vision models fail when handling skewed mobile photos, handwritten forms, or complex multi-page PDF statements — creating expensive downstream reconciliation errors.
                  </p>
                </div>

                <div className="border-l-2 border-red-500 pl-4 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Traditional Offshore Sweatshops</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Unvetted freelance platforms and low-cost typing shops suffer from 40%+ staff churn, shared credentials, zero QA oversight, and unacceptable data security exposures.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-8 sm:p-10 border border-slate-200 space-y-6 scroll-slide-right">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                The Improx Delivery Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Engineered Human-in-the-Loop Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Improx merges programmatic pipeline ingestion with rigorously trained, dedicated operators. By executing dual-key character matching, automated schema linting, and continuous supervisor audits, we deliver structured feeds with an audited 99.8%+ accuracy SLA.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
                  <span>Dual-Blind Keying</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
                  <span>Encrypted Workspaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
                  <span>Overnight Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
                  <span>Delaware Mutual NDA</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 4 DELIVERY PILLARS (COMPACT RECTANGULAR CARDS)                         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 scroll-fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
              Core Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of Operational Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standardized engineering principles that drive every data ingestion, extraction, and back-office sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="scroll-fade-up bg-white rounded-none p-5 sm:p-6 border border-slate-200 hover:border-[#0052FF] hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-none bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold text-xs">
                    {pillar.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0052FF]">
                  <span>Operational Protocol Active</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ECOSYSTEM & TOOLS (LOGOS ONLY)                                         */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-[#070e1c] text-white border-y border-white/10 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left shrink-0">
            <span className="text-[11px] font-bold text-[#60a5fa] uppercase tracking-wider block">
              Ecosystem & Tools
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Supported Enterprise Platforms
            </h3>
          </div>

          <div className="hidden md:block h-9 w-px bg-white/15 shrink-0" />

          {/* Real Corporate Logos (Logos Only - Strictly in One Line) */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar">
            <div 
              className="flex flex-nowrap items-center justify-start md:justify-end gap-4 sm:gap-5 lg:gap-6 py-1 whitespace-nowrap"
              style={{ flexWrap: 'nowrap' }}
            >
              {corporateLogos.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ flexShrink: 0 }}
                  title={tool.name}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-5 sm:h-6 w-auto max-w-[80px] object-contain shrink-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECURITY & CONFIDENTIALITY ASSURANCE                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 scroll-fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
              Governance & Security
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Data Protection & Legal Recourse
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benchmarks.map((bench, idx) => (
              <div
                key={idx}
                className="scroll-fade-up p-6 bg-slate-50 border border-slate-200 space-y-3 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-blue-50 text-[#0052FF] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {bench.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {bench.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5.5. OPERATIONAL PLAYBOOKS & BLOG SESSIONS                                */}
      {/* ========================================================================= */}
      <BlogsSection 
        pageType="about"
        title="Engineering SOPs & Thought Leadership"
        subtitle="In-depth analysis from our operations leadership on eliminating keystroke errors, anti-bot scraping, and enterprise data hygiene."
        limit={3}
      />

      {/* ========================================================================= */}
      {/* 6. DEDICATED PROJECT SCOPING DESK (VERTICAL RECTANGLE FORM)                */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d1e38] via-[#0A1628] to-[#060c18] text-white py-16 sm:py-20" id="about-contact">
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 scroll-slide-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                  Connect With Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Discuss Your Back-Office & Cloud Requirements
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
                  Connect directly with our operations directors. We analyze your file volumes, delivery deadlines, and data privacy criteria to build a dedicated squad plan.
                </p>
              </div>

              {/* Checkpoints */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Delaware Mutual NDA Executed</strong> prior to reviewing sensitive file schemas.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Senior Operations Lead</strong> arbitrates all exception logs and schema specifications.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Transparent Per-Record Pricing</strong> with zero long-term retainer lock-ins.
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-white/15 space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3.5">
                  <Phone className="w-4 h-4 text-[#60a5fa] shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Call / WhatsApp:</span>
                    <a href="tel:+919156470600" className="text-white hover:text-[#60a5fa] transition-colors font-bold text-sm">
                      +91 91564 70600
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-4 h-4 text-[#60a5fa] shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email us directly:</span>
                    <a href={`mailto:${brand.email}`} className="text-white hover:text-[#60a5fa] transition-colors font-bold text-sm">
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
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
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="bg-white text-slate-900 rounded-none p-6 sm:p-7 shadow-2xl border border-slate-100 w-full max-w-md">
                
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Request Operations Scoping
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Direct response from our lead engineers within 2 hours.
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
                      Your inquiry has been routed directly to <strong className="text-slate-900">enquiry@improxgroup.com</strong>. Our operations leadership will review your specifications and contact you at <strong className="text-[#0052FF]">{formData.email}</strong> within 2 hours.
                    </p>

                    <div className="pt-2 flex flex-col items-center gap-2">
                      <a
                        href={`mailto:enquiry@improxgroup.com?subject=Operations Scoping Inquiry - ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRequirements: ${formData.description}`)}`}
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
                        placeholder="Describe your data volume, formats, and turnaround requirements..."
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

    </div>
  );
}
