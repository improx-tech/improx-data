import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  Stethoscope, 
  ShoppingCart, 
  Truck, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Database, 
  Send, 
  Paperclip, 
  X, 
  Mail, 
  Phone,
  MapPin,
  Layers,
  Cpu,
  Lock,
  Workflow
} from 'lucide-react';
import { siteContent } from '../data/content';
import BlogsSection from '../components/BlogsSection';

export default function IndustriesPage() {
  const { industries, brand } = siteContent;

  const [activeSector, setActiveSector] = useState('all');
  const [selectedIndustryForContact, setSelectedIndustryForContact] = useState(
    'Banking & Mortgage Lending'
  );

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

  const filteredIndustries = activeSector === 'all' 
    ? industries 
    : industries.filter(ind => ind.id === activeSector);

  const handleScopeIndustry = (industryTitle) => {
    setSelectedIndustryForContact(industryTitle);
    const el = document.getElementById('industry-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          page: "Industries Sector Scoping",
          industry_sector: selectedIndustryForContact,
          name: formData.name,
          email: formData.email,
          company_and_volume: formData.company,
          requirements: formData.description,
          attachment_note: attachment ? `File attached in local session: ${attachment.name}` : 'None',
          _subject: `New Sector Scoping [${selectedIndustryForContact}]: ${formData.company || formData.name}`,
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

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#0052FF] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Editorial Dark Header with Precision Architecture)       */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

        {/* Decorative Wave texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
          style={{ backgroundImage: "url('/aboutwave.png')" }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 sm:mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#60a5fa] font-medium">Industries</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
              Vertical Domain Expertise
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Tailored Data Operations & Cloud Workflows for Regulated Sectors
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Every vertical carries distinct taxonomy dictionaries, statutory retention policies, and compliance mandates. Improx designs dedicated operational squads with domain-specific validation matrices for banking, healthcare, retail, logistics, legal, and cloud infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#sector-grid"
                className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-none shadow-md shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Explore Sector Blueprints</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#industry-contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-none border border-white/20 hover:border-white transition-all cursor-pointer"
              >
                <span>Request Custom Blueprint</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTOR FILTER BAR (Clean Sticky / Clickable Navigation)                 */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs" id="sector-grid">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 scrollbar-none text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveSector('all')}
              className={`px-4 py-2 whitespace-nowrap transition-colors rounded-none ${
                activeSector === 'all'
                  ? 'bg-[#0052FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Sectors ({industries.length})
            </button>
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveSector(ind.id)}
                className={`px-4 py-2 whitespace-nowrap transition-colors rounded-none ${
                  activeSector === ind.id
                    ? 'bg-[#0052FF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {ind.shortTitle || ind.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPREHENSIVE SECTOR BLUEPRINTS (EXPANDED EDITORIAL CARDS)              */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredIndustries.map((ind) => {
              const IconComp = iconMap[ind.id] || Briefcase;
              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="scroll-fade-up bg-white rounded-none border border-slate-200 hover:border-[#0052FF] shadow-xs hover:shadow-xl transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between space-y-7"
                >
                  <div className="space-y-6">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                            Industry Practice
                          </span>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                            {ind.title}
                          </h2>
                        </div>
                      </div>

                      {/* Verified Metric Badge */}
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 whitespace-nowrap shrink-0">
                        {ind.metrics}
                      </span>
                    </div>

                    {/* Operational Overview */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {ind.desc}
                    </p>

                    {/* Core Data Workflows */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Core Operational Workflows:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {ind.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compliance & Delivery Parameters */}
                    <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Compliance Framework:</span>
                        <span className="text-slate-800 font-bold">{ind.compliance}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Shift Cadence:</span>
                        <span className="text-slate-800 font-bold">{ind.turnaround}</span>
                      </div>
                    </div>

                    {/* Supported Integrations */}
                    {ind.integrations && (
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Standard Export & Sync Targets:
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {ind.integrations.map((tool, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Link to Scope */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleScopeIndustry(ind.title)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0052FF] hover:text-[#0043DB] transition-colors cursor-pointer group"
                    >
                      <span>Scope {ind.shortTitle || ind.title} Squad</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      to="/about"
                      className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
                    >
                      Our Delivery Standards
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GOVERNANCE & ENTERPRISE COMPLIANCE BAR                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 scroll-fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
              Risk Mitigation Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Governance Across Every Engagement
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Regardless of volume or turnaround speed, every operational sprint is bound by legal and technical safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Delaware Mutual NDA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Legally enforceable protection executed before file samples or schemas are transmitted.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                99.94% Keying Accuracy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dual-blind parallel transcription with algorithmic decimal and character comparison.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Follow-The-Sun Shifts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                24-hour multi-timezone operations ensure backlogs are keyed and verified overnight.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-[#0052FF] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                Zero Local Retention
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sandboxed virtual machines with disabled local drives and prompt post-delivery sanitization.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ECOSYSTEM & TECH STACK STRIP                                           */}
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
      {/* 5.5. INDUSTRY PLAYBOOKS & BLOG SESSIONS                                  */}
      {/* ========================================================================= */}
      <BlogsSection 
        industryId={activeSector}
        pageType="industries"
        title={activeSector === 'all' ? "Sector Operations & Compliance Playbooks" : `${industries.find(i => i.id === activeSector)?.title || 'Sector'} Case Insights`}
        subtitle="Real-world data operations architectures, compliance mandates, and field-tested delivery blueprints."
        limit={3}
      />

      {/* ========================================================================= */}
      {/* 6. DEDICATED PROJECT SCOPING DESK (VERTICAL RECTANGLE FORM)                */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d1e38] via-[#0A1628] to-[#060c18] text-white py-20 sm:py-24 lg:py-28" id="industry-contact">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-7 scroll-slide-left">
              <div className="space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                  Industry Scoping Desk
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Discuss Your {selectedIndustryForContact} Operations
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                  Connect directly with our lead operations directors. We review your document volumes, compliance guidelines, and required turnaround schedules.
                </p>
              </div>

              {/* Checkpoints */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Mutual NDA Executed First</strong> — Zero files or schemas reviewed prior to formal enterprise confidentiality.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Audited 99.94% Accuracy SLA</strong> — Independent two-operator verification on all sensitive financial and clinical fields.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-none bg-blue-500/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Transparent Volume Economics</strong> — Per-record, per-SKU, or dedicated weekly squads without long-term retainers.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-white/10 flex items-center justify-center text-[#60a5fa] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Call / WhatsApp:</span>
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
                    <span className="text-xs text-slate-400 block font-medium">Email us directly:</span>
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
                    <span className="text-xs text-slate-400 block font-medium">Office Location:</span>
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
              <div className="bg-white text-slate-900 rounded-none p-7 sm:p-8 shadow-2xl border border-slate-100 w-full max-w-md">
                
                <div className="mb-5 pb-3.5 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Request Sector Scoping
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct response from our lead engineers within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-12 h-12 bg-blue-100 text-[#0052FF] rounded-none flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Scoping Request Received
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Your {selectedIndustryForContact} scoping inquiry has been routed directly to <strong className="text-slate-900">enquiry@improxgroup.com</strong>. Our lead data engineer will review your parameters and respond to <strong className="text-[#0052FF]">{formData.email}</strong> within 2 hours.
                    </p>

                    <div className="pt-2 flex flex-col items-center gap-2">
                      <a
                        href={`mailto:enquiry@improxgroup.com?subject=Sector Scoping [${encodeURIComponent(selectedIndustryForContact)}] - ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(`Sector: ${selectedIndustryForContact}\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nDetails: ${formData.description}`)}`}
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
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Selected Sector Practice
                      </label>
                      <select
                        value={selectedIndustryForContact}
                        onChange={(e) => setSelectedIndustryForContact(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                      >
                        {industries.map((ind) => (
                          <option key={ind.id} value={ind.title}>
                            {ind.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Michael Vance"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. mvance@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name & Estimated Monthly Volume
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Lending | 20,000 files/mo"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Scope & Timeline Details
                      </label>
                      <textarea
                        name="description"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Outline the file formats, required SLA turnaround, and any specific software integrations (e.g. Salesforce, Epic, Snowflake)..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    {/* File Attachment */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Sample File or Scope Specification
                      </label>
                      {attachment ? (
                        <div className="flex items-center justify-between p-2.5 bg-blue-50/70 border border-blue-200 rounded-none text-xs">
                          <span className="truncate max-w-[200px] text-[#0052FF] font-medium">
                            {attachment.name}
                          </span>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-slate-300 rounded-none text-xs text-slate-500 hover:border-[#0052FF] hover:text-[#0052FF] hover:bg-blue-50/20 transition-all cursor-pointer">
                          <Paperclip className="w-3.5 h-3.5" />
                          <span>Attach sample document (PDF, CSV, XLSX)</span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#0052FF] hover:bg-[#0043DB] text-white text-xs sm:text-sm font-bold rounded-none shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit for Operations Review'}</span>
                      <Send className="w-4 h-4" />
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
