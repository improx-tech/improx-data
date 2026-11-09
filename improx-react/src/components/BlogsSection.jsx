import React, { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { siteContent } from '../data/content';

/**
 * BlogsSection (WordPress-Ready Dynamic Component)
 * 
 * Automatically filters and renders blog posts mapped to:
 * - Specific Services (via serviceId -> relatedServices)
 * - Specific Industries (via industryId -> relatedIndustries)
 * - Specific Page Types (via pageType -> relatedPages: 'home' | 'about' | 'industries' | 'service')
 * 
 * Future WordPress Integration:
 * When migrating to headless WordPress / WP REST API (/wp-json/wp/v2/posts),
 * posts fetched from the API with corresponding category/tag/meta query
 * automatically hydrate this exact component.
 */
export default function BlogsSection({
  serviceId,
  industryId,
  pageType = 'home',
  title,
  subtitle,
  limit = 3,
  theme = 'light' // 'light' | 'dark'
}) {
  const { blogs = [] } = siteContent;
  const navigate = useNavigate();

  // WordPress-compatible dynamic taxonomy matching
  const displayedBlogs = useMemo(() => {
    let matches = [];

    if (serviceId) {
      matches = blogs.filter(b => 
        (b.relatedServices && b.relatedServices.includes(serviceId)) ||
        (b.tags && b.tags.some(t => t.toLowerCase().includes(serviceId.replace('-', ' '))))
      );
    } else if (industryId && industryId !== 'all') {
      matches = blogs.filter(b => 
        (b.relatedIndustries && b.relatedIndustries.includes(industryId)) ||
        (b.tags && b.tags.some(t => t.toLowerCase().includes(industryId.replace('-', ' '))))
      );
    } else if (pageType === 'about') {
      matches = blogs.filter(b => b.relatedPages && b.relatedPages.includes('about'));
    } else if (pageType === 'industries') {
      matches = blogs.filter(b => b.relatedPages && b.relatedPages.includes('industries'));
    }

    // Graceful backfill: if fewer matches than limit, append newest published blogs
    if (matches.length < limit) {
      const remaining = blogs.filter(b => !matches.some(m => m.id === b.id));
      matches = [...matches, ...remaining];
    }

    return matches.slice(0, limit);
  }, [blogs, serviceId, industryId, pageType, limit]);

  const handleBlogClick = (articleId) => {
    navigate(`/blogs?article=${articleId}`);
  };

  const defaultTitle = serviceId
    ? "Related Engineering Playbooks & Case Insights"
    : industryId && industryId !== 'all'
    ? "Industry Blueprints & Compliance Insights"
    : pageType === 'about'
    ? "Engineering Culture, QA Protocols & Insights"
    : "Recent Blog Posts & Insights";

  const defaultSubtitle = serviceId
    ? "Real-world production benchmarks, extraction architectures, and quality assurance SOPs."
    : pageType === 'about'
    ? "How our engineering squads operate under strict NDAs, dual-key verification, and institutional rigor."
    : "Practical strategies, engineering benchmarks, and operational guides on document processing, scraping, and cloud data architecture.";

  const isDark = theme === 'dark';

  return (
    <section 
      id="blogs-section" 
      className={`w-full border-b py-20 sm:py-24 lg:py-28 transition-colors ${
        isDark 
          ? 'bg-[#060c18] border-white/10 text-white' 
          : 'bg-[#f8fafc] border-slate-200/60 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF] block">
            Technical Insights & Thought Leadership
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {title || defaultTitle}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {displayedBlogs.map((post, idx) => {
            return (
              <div
                key={post.id || idx}
                onClick={() => handleBlogClick(post.id)}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                className={`scroll-fade-up noetic-blog-card blog-card group cursor-pointer border ${
                  isDark ? 'bg-[#0d1e38] border-white/10 hover:border-[#60a5fa]' : 'bg-white border-slate-200/80 hover:border-[#0052FF]'
                }`}
              >
                {/* Isolated Image Wrapper with Smooth Hover Zoom */}
                <div className="blog-img-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>

                {/* Blog Content */}
                <div className="blog-content">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#0052FF]">
                        {post.category}
                      </span>
                      <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>•</span>
                      <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {post.date}
                      </span>
                      <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>•</span>
                      <span className={`font-medium flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className={isDark ? 'text-white group-hover:text-[#60a5fa]' : 'text-slate-900 group-hover:text-[#0052FF]'}>
                      {post.title}
                    </h3>

                    <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                      {post.desc}
                    </p>
                  </div>

                  <div className={`pt-3 border-t flex items-center justify-between ${
                    isDark ? 'border-white/10' : 'border-slate-100'
                  }`}>
                    <span className="read-more">
                      <span>Read Full Analysis</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <span className="text-xs font-semibold text-slate-400">
                      Post #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Full Editorial Hub */}
        <div className="text-center pt-2">
          <Link
            to="/blogs"
            className={`inline-flex items-center gap-2 font-bold text-xs sm:text-sm px-8 py-3.5 border shadow-xs hover:shadow transition-all cursor-pointer ${
              isDark 
                ? 'bg-transparent text-white border-white/20 hover:border-white hover:bg-white/5' 
                : 'bg-white text-slate-800 border-slate-300 hover:border-[#0052FF] hover:text-[#0052FF]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore All Editorial Insights & Playbooks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
