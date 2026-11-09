import React, { useState, useEffect } from 'react';
import { ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

export default function SampleBatchForm({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Data Entry',
    volume: '',
    turnaround: 'Within 24 Hours',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0b1120] border-t border-slate-800" id="sample-batch-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#0f172a] rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Evaluate Our Accuracy First
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Request a Project Batch Evaluation
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Send us your project specifications and sample data. We will execute our dual-verification QA protocols and return structured output with a guaranteed accuracy SLA under strict Mutual NDA protection.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-emerald-100">
                Sample Evaluation Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300 max-w-md mx-auto">
                Our operations desk will send your <strong>Mutual NDA</strong> and secure sample upload link to <strong>{formData.email}</strong> within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-emerald-400 underline pt-2 inline-block cursor-pointer hover:text-emerald-300"
              >
                Submit another scoping request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alexander Vance"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/80 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Corporate Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@enterprise.com"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/80 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Logistics Corp"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/80 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Data Entry">1. Data Entry & Keying</option>
                    <option value="Web Scraping">2. Web Scraping & Harvesting</option>
                    <option value="Data Processing">3. Data Processing & CRM Hygiene</option>
                    <option value="Data Analytics">4. Data Analytics & Power BI</option>
                    <option value="Administrative Assistant">5. Administrative Assistant (FTE)</option>
                    <option value="Data Services">6. Data Services & Cloud Operations</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Estimated Volume / Queue Size
                  </label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g. 20,000 documents or 2 Full-Time Squads"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/80 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Turnaround Requirement
                  </label>
                  <select
                    name="turnaround"
                    value={formData.turnaround}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Within 24 Hours">Within 24 Hours (Urgent)</option>
                    <option value="Within 48 Hours">Within 48 Hours (Standard)</option>
                    <option value="Weekly SLA Batches">Weekly SLA Batches</option>
                    <option value="Dedicated Daily FTE Team">Dedicated Daily FTE Team</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Project Scope & Data Description *
                </label>
                <textarea
                  rows="4"
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Specify your file types (PDF, scans, URL queues), fields to extract or cleanse, and any compliance requirements (HIPAA, strict NDA)..."
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/80 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-sm py-4 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit for Project Evaluation & Mutual NDA</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  All test batches protected under Enterprise corporate laws and strict mutual non-disclosure agreements.
                </span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
