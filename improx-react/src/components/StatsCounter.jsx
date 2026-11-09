import React, { useState, useEffect, useRef } from 'react';
import { siteContent } from '../data/content';

export default function StatsCounter() {
  const { stats } = siteContent;
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayStats = [
    { value: "70+", label: "Happy Clients" },
    { value: "100+", label: "Projects delivered" },
    { value: "15+", label: "Years of experience" }
  ];

  return (
    <div ref={sectionRef} className="scroll-fade-up relative z-20 -mt-10 sm:-mt-14 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-none p-7 sm:p-9 shadow-xl shadow-slate-900/10 border border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {displayStats.map((s, idx) => (
            <div key={idx} className="space-y-1.5 pt-4 md:pt-0 md:px-6 first:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0052FF] tracking-tight">
                {s.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-700">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
