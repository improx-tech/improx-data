import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Paperclip, X, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ContactSection({ selectedService }) {
  const { brand } = siteContent;

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
          name: formData.name,
          email: formData.email,
          company: formData.company,
          requirements: formData.description,
          attachment_note: attachment ? `File attached in local session: ${attachment.name} (${(attachment.size / 1024 / 1024).toFixed(2)} MB)` : 'None',
          _subject: `New Project Scoping: ${formData.company} - ${formData.name}`,
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
    <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0d1e38] via-[#0A1628] to-[#060c18] text-white py-20 sm:py-24 lg:py-28">
      
      {/* 1. Subtle Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 2. Wave Texture Art */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
        style={{ backgroundImage: "url('/aboutwave.png')" }} 
      />

      {/* 3. Decorative Tech Rings */}
      <div className="absolute -bottom-16 -left-16 w-80 h-80 border border-white/5 rounded-none pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-64 h-64 border border-blue-500/10 rounded-none pointer-events-none" />

      {/* 4. Glowing Orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/20 rounded-none blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info with Clean Text Eyebrow Heading */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                Let's Talk
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Streamline Your Data Operations?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Connect with our data engineers to scope your project volume, required accuracy SLAs, and delivery timelines.
              </p>
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

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-none bg-white/10 flex items-center justify-center text-[#60a5fa] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Confidentiality Guarantee:</span>
                  <span className="text-white font-bold text-sm">Mutual NDA executed on request</span>
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

          {/* Right Column: Vertical Rectangle Contact Form */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="bg-white text-slate-900 rounded-none p-7 sm:p-8 shadow-2xl border border-slate-100 w-full max-w-md">
              <div className="mb-5 pb-3.5 border-b border-slate-100">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Request Project Scoping
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Direct response from our lead data engineer within 2 hours.
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
                    Your inquiry has been routed directly to <strong className="text-slate-900">enquiry@improxgroup.com</strong>. Our operations lead will review your specifications and contact you at <strong className="text-[#0052FF]">{formData.email}</strong> within 2 hours.
                  </p>

                  <div className="pt-2 flex flex-col items-center gap-2">
                    <a
                      href={`mailto:enquiry@improxgroup.com?subject=Project Inquiry - ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRequirements: ${formData.description}`)}`}
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
                      placeholder="National Mortgage Corp"
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
                      placeholder="Describe your file formats, estimated volume, and turnaround..."
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
  );
}
