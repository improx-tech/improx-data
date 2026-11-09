import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Calendar, 
  Search, 
  CheckCircle2, 
  X, 
  Share2, 
  BookOpen, 
  Send,
  Mail,
  Phone,
  Sparkles,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { siteContent } from '../data/content';

export default function BlogsPage() {
  const { blogs, brand } = siteContent;
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sync with ?article= query param (supports deep links from Service, Industry, and About pages)
  useEffect(() => {
    const articleId = searchParams.get('article');
    if (articleId) {
      const found = blogs.find(b => b.id === articleId || b.slug === articleId);
      if (found) {
        setSelectedArticle(found);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      setSelectedArticle(null);
    }
  }, [searchParams, blogs]);

  const categories = [
    'All',
    'Data Operations & QA',
    'Marketplace Intel',
    'Database Hygiene',
    'Cloud Operations',
    'Regulatory & Security',
    'Machine Learning Ops'
  ];

  // Filtered list based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        post.title.toLowerCase().includes(q) ||
        post.desc.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags && post.tags.some(t => t.toLowerCase().includes(q)))
      );
      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, searchQuery]);

  // Featured story is the first item or first matching item
  const featuredArticle = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridArticles = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setSearchParams({ article: article.id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    setSearchParams({});
  };

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#0052FF] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. EDITORIAL HEADER & SEARCH HERO                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#08101E] via-[#0d1e38] to-[#060c18] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

        {/* Decorative Wave texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-no-repeat bg-right-top bg-cover"
          style={{ backgroundImage: "url('/aboutwave.png')" }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#60a5fa] font-medium">Blogs & Insights</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                Engineering Playbooks & Research
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Insights on Data Operations, Web Scraping & Cloud Warehousing
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
                Practical guides and architecture benchmarks from our engineering leads. No generic fluff — only audited SOPs on high-volume extraction, double-blind verification, and HIPAA data pipelines.
              </p>
            </div>

            {/* Live Search Bar */}
            <div className="lg:col-span-4 w-full">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search playbooks, tools, or tags..."
                  className="w-full pl-11 pr-10 py-3 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 border border-white/20 focus:border-[#0052FF] rounded-none text-xs sm:text-sm placeholder:text-slate-400 focus:placeholder:text-slate-400 transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:text-slate-900 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MINIMALIST CATEGORY FILTER BAR (STICKY)                                */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 scrollbar-none text-xs sm:text-sm font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 whitespace-nowrap transition-all rounded-none cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#0052FF] text-white border-[#0052FF]'
                    : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DEDICATED FULL ARTICLE READER VIEW (WHEN OPENED)                       */}
      {/* ========================================================================= */}
      {selectedArticle ? (
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200 min-h-[70vh]">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            
            {/* Top Return Action */}
            <div className="mb-10 pb-4 border-b border-slate-100 flex items-center justify-between">
              <button
                onClick={handleCloseArticle}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0052FF] hover:text-[#0043DB] transition-colors cursor-pointer group"
              >
                <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span>Return to All Insights</span>
              </button>

              <span className="text-xs text-slate-400 font-medium">
                {selectedArticle.readTime}
              </span>
            </div>

            {/* Header Details */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold uppercase tracking-wider text-[#0052FF]">
                  {selectedArticle.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.date}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {selectedArticle.title}
              </h1>

              {selectedArticle.author && (
                <div className="pt-2 text-xs sm:text-sm text-slate-500 font-medium border-t border-slate-100 flex items-center justify-between">
                  <span>Author: <strong className="text-slate-900">{selectedArticle.author}</strong></span>
                  <span className="text-slate-400 font-semibold">Published by Improx Engineering</span>
                </div>
              )}
            </div>

            {/* Hero Image */}
            <div className="rounded-none overflow-hidden aspect-[16/9] mb-10 shadow-lg border border-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Editorial Body */}
            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {selectedArticle.content ? (
                selectedArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{selectedArticle.desc}</p>
              )}
            </div>

            {/* Key Engineering Takeaways Callout */}
            {selectedArticle.takeaways && (
              <div className="my-10 p-7 sm:p-8 bg-blue-50/70 border-l-4 border-[#0052FF] space-y-4">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0052FF]" />
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                    Key Technical Takeaways
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {selectedArticle.takeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#0052FF] shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags Row */}
            {selectedArticle.tags && (
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                  Related Topics:
                </span>
                {selectedArticle.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-none border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Scoping Callout Box */}
            <div className="mt-12 p-8 sm:p-10 bg-[#0d1e38] text-white rounded-none space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
                  Operational Scoping
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Need an Engineered Squad for This Workflow?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                  Discuss your volume backlogs, turnaround shifts, and compliance criteria under strict Delaware Mutual NDA.
                </p>
              </div>

              <a
                href="/#contact"
                className="shrink-0 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-none shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Scoping Call
              </a>
            </div>

          </div>
        </section>
      ) : (
        <>
          {/* ========================================================================= */}
          {/* 4. MAGAZINE-STYLE FEATURED LEAD STORY                                     */}
          {/* ========================================================================= */}
          {featuredArticle && (
            <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                
                <div 
                  onClick={() => handleOpenArticle(featuredArticle)}
                  className="bg-slate-50 border border-slate-200 hover:border-[#0052FF] transition-all duration-300 rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group cursor-pointer shadow-xs hover:shadow-xl"
                >
                  {/* Image Col (5 cols) */}
                  <div className="lg:col-span-5 relative overflow-hidden aspect-[16/10] lg:aspect-auto min-h-[300px]">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#0052FF] text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 shadow-md">
                      Featured Analysis
                    </div>
                  </div>

                  {/* Content Col (7 cols) */}
                  <div className="lg:col-span-7 p-8 sm:p-11 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-bold uppercase tracking-wider text-[#0052FF]">
                          {featuredArticle.category}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium">
                          {featuredArticle.date}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {featuredArticle.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-tight">
                        {featuredArticle.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {featuredArticle.desc}
                      </p>

                      {featuredArticle.tags && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-2">
                          {featuredArticle.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-semibold bg-white text-slate-700 border border-slate-200 px-2.5 py-1"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0052FF] group-hover:text-[#0043DB] transition-colors group/btn">
                        <span>Read Full Analysis</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </span>

                      <span className="text-xs text-slate-400 font-medium">
                        {featuredArticle.author ? featuredArticle.author.split(',')[0] : 'Improx Research'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 5. ARTICLES GRID (3-COLUMN BALANCED EDITORIAL CARDS)                       */}
          {/* ========================================================================= */}
          <section className="py-20 sm:py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
                    Curated Archive
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeCategory === 'All' ? 'All Published Playbooks' : `${activeCategory} Articles`}
                  </h3>
                </div>

                <span className="text-xs font-semibold text-slate-500">
                  Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
                </span>
              </div>

              {filteredBlogs.length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-200 p-8 space-y-4">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-800">
                    No articles found matching "{searchQuery}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                    Try searching for different keywords, clear your query, or switch to "All Articles".
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="inline-flex items-center gap-2 bg-[#0052FF] text-white text-xs font-bold px-6 py-2.5 rounded-none"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridArticles.map((post, idx) => (
                    <div
                      key={post.id || idx}
                      onClick={() => handleOpenArticle(post)}
                      style={{ transitionDelay: `${idx * 0.08}s` }}
                      className="scroll-fade-up bg-white rounded-none border border-slate-200 hover:border-[#0052FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                    >
                      {/* Image Wrapper */}
                      <div className="h-56 overflow-hidden relative bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-[#08101E]/80 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1">
                          {post.category}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-7 flex flex-col justify-between flex-1 space-y-5">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                            {post.desc}
                          </p>
                        </div>

                        {/* Action Row */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#0052FF] group-hover:text-[#0043DB] transition-colors">
                            <span>Read Full Article</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>

                          <span className="text-xs font-semibold text-slate-400">
                            #{String(idx + 2).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* 6. TECHNICAL DISPATCH NEWSLETTER & SCOPING BANNER                          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0d1e38] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] block">
            Technical Operations Briefings
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Have an Operational Backlog or Complex Scraping Challenge?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Discuss your file formats, volume requirements, and security criteria with our data engineering team. We prepare dedicated sprint proposals with an executed Delaware Mutual NDA.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-[#0043DB] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-none shadow-md shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-none border border-white/20 hover:border-white transition-all cursor-pointer"
            >
              <span>Learn About Our Delivery SOPs</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
