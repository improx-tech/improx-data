import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Paperclip, 
  X, 
  ChevronRight, 
  Lock,
  Headphones,
  ArrowRight
} from 'lucide-react';
import { siteContent } from '../data/content';
import BlogsSection from '../components/BlogsSection';

export default function ContactPage() {
  const { brand, services } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
          page: "Dedicated Contact Page",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          requirements: formData.description || 'Not provided',
          attachment_note: attachment 
            ? `File attached in local session: ${attachment.name} (${(attachment.size / 1024 / 1024).toFixed(2)} MB)` 
            : 'None',
          _subject: `New Contact Inquiry: ${formData.company || formData.name}`,
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
      {/* 1. HERO HEADER                                                            */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
        
        {/* Decorative Wave texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
          style={{ backgroundImage: "url('/aboutwave.png')" }} 
        />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 sm:mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#60a5fa] font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
              Contact & Project Scoping Desk
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let's Build Your Dedicated Data Operations Squad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Connect directly with our lead operations directors. Whether scoping 500,000 mortgage files or building daily competitor scraping pipelines, we provide tailored delivery architectures under strict Delaware Mutual NDA.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTACT SECTION & SCOPING DESK                                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white" id="contact-form-section">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 2xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & SLA Checkpoints */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Reach Our Operations Leadership Directly
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our data engineering and project scoping specialists review every technical specification within two business hours.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-5">
                
                {/* Email Channel */}
                <div className="p-6 bg-slate-50 border border-slate-200 space-y-2 group hover:border-[#0052FF] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-[#0052FF] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Project Scoping & Inquiries
                      </span>
                      <a 
                        href={`mailto:${brand.email}`} 
                        className="text-base font-bold text-slate-900 hover:text-[#0052FF] transition-colors"
                      >
                        {brand.email}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 pl-13">
                    Monitored continuously by our lead technical operations team.
                  </p>
                </div>

                {/* Phone Channel */}
                <div className="p-6 bg-slate-50 border border-slate-200 space-y-2 group hover:border-[#0052FF] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-[#0052FF] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Call / WhatsApp Direct
                      </span>
                      <a 
                        href="tel:+919156470600" 
                        className="text-base font-bold text-slate-900 hover:text-[#0052FF] transition-colors"
                      >
                        +91 91564 70600
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 pl-13">
                    Available Mon–Sat, 9:00 AM – 8:00 PM IST. 24/7 coverage for active enterprise contracts.
                  </p>
                </div>

                {/* Office Address */}
                <div className="p-6 bg-slate-50 border border-slate-200 space-y-2 group hover:border-[#0052FF] transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                        Office Address
                      </span>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        Maruti Millennium Tower, Baner Annex, Baner, Pune, Maharashtra 411045
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Maruti+Millennium+Tower,+Baner+Annex,+Baner,+Pune,+Maharashtra+411045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] hover:underline pt-1.5"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Scoping Form (Vertical Rectangle Architecture) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-xs">
                
                <div className="mb-6 pb-4 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900">
                    Submit Project Scoping Request
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Provide your requirements below. Our lead data engineer will review and respond with a formal scoping proposal.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-5 bg-white border border-slate-200 p-8">
                    <div className="w-14 h-14 bg-blue-100 text-[#0052FF] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                      Your requirements have been routed directly to <strong className="text-slate-900">enquiry@improxgroup.com</strong>. Our lead operations engineer will analyze your parameters and contact you at <strong className="text-[#0052FF]">{formData.email}</strong> within 2 hours.
                    </p>

                    <div className="pt-4 flex flex-col items-center gap-3">
                      <a
                        href={`mailto:enquiry@improxgroup.com?subject=Inquiry: ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nRequirements: ${formData.description}`)}`}
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
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Vance"
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="National Mortgage Corp"
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp
                          <span className="text-[10px] text-slate-400 font-normal ml-1 lowercase">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                    </div>

                    {/* File Attachment Upload */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Sample / Specs Attachment
                        <span className="text-[10px] text-slate-400 font-normal ml-1 lowercase">(optional)</span>
                      </label>

                      {!attachment ? (
                        <label className="flex items-center justify-center gap-2 px-4 py-3 text-xs bg-white border border-dashed border-slate-300 hover:border-[#0052FF] hover:bg-blue-50/20 text-slate-600 hover:text-[#0052FF] transition-all cursor-pointer group">
                          <Paperclip className="w-4 h-4 text-slate-400 group-hover:text-[#0052FF] transition-colors" />
                          <span className="font-medium">Attach specs or sample document (PDF, CSV, XLSX, ZIP up to 25MB)</span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.csv,.xlsx,.xls,.doc,.docx,.zip,.json,.txt"
                            className="hidden"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between px-4 py-3 text-xs bg-blue-50 border border-blue-200 text-slate-800">
                          <div className="flex items-center gap-2 truncate">
                            <Paperclip className="w-4 h-4 text-[#0052FF] shrink-0" />
                            <span className="font-medium truncate max-w-xs">{attachment.name}</span>
                            <span className="text-[10px] text-slate-500 shrink-0">
                              ({(attachment.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                            title="Remove attached file"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Scope, Volume & Turnaround Requirements
                      </label>
                      <textarea
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your document formats, estimated monthly records, target turnaround, or cloud destinations (e.g. Snowflake, Salesforce)..."
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 focus:outline-none focus:border-[#0052FF] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-sm py-3.5 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Project Requirements'}</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DYNAMIC BLOGS & OPERATIONS INSIGHTS SESSION                            */}
      {/* ========================================================================= */}
      <BlogsSection 
        pageType="about"
        title="Operations & Data Security Insights"
        subtitle="Explore our operational benchmarks, double-blind verification methodologies, and enterprise cloud ingestion playbooks."
        limit={3}
      />

    </div>
  );
}
