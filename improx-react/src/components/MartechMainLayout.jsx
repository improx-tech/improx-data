import React, { useState } from 'react';
import { 
  Check, ArrowRight, ShieldCheck, Mail, Flame, 
  Send, CheckCircle2, Landmark, Stethoscope, ShoppingCart, Truck, Home, Briefcase, FileCheck, Globe, RefreshCw, BarChart3, UserCheck, Layers
} from 'lucide-react';
import { siteContent } from '../data/content';

export default function MartechMainLayout({ selectedService, onSelectService }) {
  const { 
    services, qaProtocol, caseStudies, mostReadList, brand, 
    about, whyImprox, industries 
  } = siteContent;

  const [briefingEmail, setBriefingEmail] = useState('');
  const [briefingSent, setBriefingSent] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: selectedService || 'Data Entry & Document Digitization',
    volume: '',
    turnaround: 'Flexible / Standard',
    description: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const iconMap = {
    'data-entry': FileCheck,
    'web-scraping': Globe,
    'data-processing': RefreshCw,
    'data-analytics': BarChart3,
    'admin-assistant': UserCheck,
    'data-services': Layers
  };

  const industryIcons = {
    'fintech-mortgage': Landmark,
    'healthcare-ehr': Stethoscope,
    'ecommerce-retail': ShoppingCart,
    'logistics-freight': Truck,
    'realestate-proptech': Home,
    'legal-enterprise': Briefcase
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleScopeService = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const formEl = document.getElementById('contact');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-[#0b1120] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 2-Column Editorial Layout (70% Main Stream + 30% Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT 70% MAIN CONTENT STREAM */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. ABOUT IMPROX */}
            <div id="about" className="space-y-5 pt-2">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-blue-400 block mb-1">Who We Are</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  About Improx Data & Cloud Consulting
                </h2>
              </div>

              <div className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-semibold text-white leading-snug">
                  {about.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {about.lead}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {about.description}
                </p>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                  {about.pillars.map((pillar, i) => (
                    <div key={i} className="space-y-1.5">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-400" />
                        <span>{pillar.title}</span>
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. SERVICES SECTION */}
            <div id="services" className="space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-end justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-semibold text-blue-400 block mb-1">What We Do</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Our Core Services
                  </h2>
                </div>
                <p className="text-xs text-slate-400 max-w-xs">
                  Available as dedicated full-time support or on-demand project batches.
                </p>
              </div>

              <div className="space-y-5">
                {services.map((svc) => {
                  const Icon = iconMap[svc.id] || FileCheck;
                  return (
                    <div
                      key={svc.id}
                      id={svc.id}
                      className="bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row gap-6 group"
                    >
                      {/* Service Thumbnail */}
                      <div className="sm:w-56 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-slate-800">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                          <div className="w-7 h-7 rounded-md bg-slate-900/90 border border-slate-700/60 flex items-center justify-center text-blue-400">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Service Body */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                            {svc.title}
                          </h3>

                          <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {svc.desc}
                          </p>

                          {/* Deliverables */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            {svc.deliverables.slice(0, 4).map((d, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Action */}
                        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Custom volume & SLA options</span>
                          <button
                            onClick={() => handleScopeService(svc.title)}
                            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                          >
                            <span>Discuss this service</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. WHY IMPROX & QA PROTOCOL */}
            <div id="why-improx" className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-blue-400 block mb-1">Our Advantage</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Why Clients Trust Improx
                </h2>
              </div>

              {/* 6 Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyImprox.map((p, idx) => (
                  <div key={idx} className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 space-y-2">
                    <h4 className="text-base font-semibold text-white">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quality Assurance Workflow */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-blue-400">Quality Assurance</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    How We Guarantee Quality
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Our standard 4-step verification process to ensure zero keystroke errors.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {qaProtocol.map((stage, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-blue-950 border border-blue-600/40 text-blue-400 text-xs font-bold flex items-center justify-center mb-2">
                        {stage.step}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. INDUSTRIES */}
            <div id="industries" className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-blue-400 block mb-1">Sectors</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Industries We Specialize In
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((ind) => {
                  const Icon = industryIcons[ind.id] || Briefcase;
                  return (
                    <div
                      key={ind.id}
                      className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4" />
                        </div>

                        <h4 className="text-sm font-semibold text-white mb-2">
                          {ind.title}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                          {ind.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-blue-400 font-medium">
                        {ind.metrics}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. CASE STUDIES */}
            <div id="case-studies" className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-blue-400 block mb-1">Proven Results</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Real Client Case Studies
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {caseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        {cs.metric}
                      </div>
                      <div className="text-xs font-medium text-slate-300 mb-3">
                        {cs.metricLabel}
                      </div>

                      <h4 className="text-sm font-semibold text-white mb-2">
                        {cs.title}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {cs.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                      {cs.tags.join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. CONTACT FORM */}
            <div id="contact" className="space-y-6 pt-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-blue-400 block mb-1">Get in Touch</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Request a Project Scope & Quote
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Connect with our operations specialists for detailed scoping and tailored proposals.
                </p>
              </div>

              <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-sm">
                {formSubmitted ? (
                  <div className="bg-slate-900 border border-slate-700/60 rounded-xl p-8 text-center space-y-3">
                    <div className="w-10 h-10 bg-blue-950 text-blue-400 rounded-full flex items-center justify-center mx-auto border border-blue-500/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Thank You! We Received Your Request.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Our operations lead will get back to you at <strong>{formData.email}</strong> with our evaluation and recommendations.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-blue-400 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Sarah Vance"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="sarah@company.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          placeholder="Acme Lending"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
                        >
                          <option value="Data Entry & Document Digitization">Data Entry & Document Digitization</option>
                          <option value="Web Scraping & Data Extraction">Web Scraping & Data Extraction</option>
                          <option value="Data Cleaning & CRM Deduplication">Data Cleaning & CRM Deduplication</option>
                          <option value="Business Intelligence & Reporting">Business Intelligence & Reporting</option>
                          <option value="Virtual Administrative Assistance">Virtual Administrative Assistance</option>
                          <option value="Managed Cloud & Data Pipelines">Managed Cloud & Data Pipelines</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Project Details & File Volume
                      </label>
                      <textarea
                        rows="3"
                        required
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        placeholder="Tell us about the documents, fields to extract, or weekly volume..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-blue-600/20"
                    >
                      <span>Submit Request</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>

                    <p className="text-center text-xs text-slate-500 pt-1">
                      We respect your privacy. All inquiries are treated confidentially under mutual NDA.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>


          {/* RIGHT 30% STICKY SIDEBAR */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Widget 1: Newsletter */}
            <div className="bg-[#0f172a] rounded-xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold">
                  Newsletter
                </span>
              </div>

              <h4 className="text-sm font-semibold text-white leading-snug">
                Data Operations Digest
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                Practical tips on document automation, web scraping, and data hygiene delivered monthly.
              </p>

              {briefingSent ? (
                <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg text-xs text-blue-300">
                  Thanks for subscribing! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (briefingEmail) setBriefingSent(true); }} className="space-y-2">
                  <input
                    type="email"
                    required
                    value={briefingEmail}
                    onChange={(e) => setBriefingEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Widget 2: Popular Articles */}
            <div className="bg-[#0f172a] rounded-xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 pb-2 border-b border-slate-800">
                <Flame className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs font-semibold text-white">
                  Popular Reads
                </h4>
              </div>

              <div className="space-y-3">
                {mostReadList.map((item) => (
                  <div key={item.rank} className="flex items-start gap-2.5 group">
                    <span className="text-xs font-bold text-slate-600 shrink-0 mt-0.5">
                      0{item.rank}
                    </span>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] text-blue-400">
                        {item.service}
                      </span>
                      <h5 className="text-xs font-normal text-slate-200 group-hover:text-white transition-colors leading-snug">
                        <button
                          onClick={() => handleScopeService(item.service)}
                          className="text-left cursor-pointer hover:underline"
                        >
                          {item.title}
                        </button>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Data Security */}
            <div className="bg-[#0f172a] rounded-xl p-5 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-semibold">
                  Confidentiality First
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We sign mutual NDAs before reviewing sensitive files. All work is conducted on secure, access-controlled workstations with scheduled data removal.
              </p>
            </div>

            {/* Widget 4: Quick Contact */}
            <div className="bg-[#0f172a] rounded-xl p-5 border border-slate-800 space-y-3">
              <h5 className="text-sm font-semibold text-white">
                Have a Quick Question?
              </h5>
              <p className="text-xs text-slate-400">
                Send an email directly to our team:
              </p>
              <a href={`mailto:${brand.email}`} className="block text-xs text-blue-400 font-medium hover:underline">
                {brand.email}
              </a>
              <button
                onClick={() => handleScopeService('Data Entry & Document Digitization')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs py-2 rounded-lg transition-colors cursor-pointer shadow-sm shadow-blue-600/20"
              >
                Request a Quote
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
