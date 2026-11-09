import { useEffect } from 'react';

/**
 * High-performance, GPU-accelerated Scroll Reveal Hook.
 * Observes scroll-triggered elements and adds the '.visible' class
 * with zero layout jank and optimized intersection thresholds.
 */
export function useScrollReveal() {
  useEffect(() => {
    const SELECTOR =
      '.scroll-fade-up, .scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in, .scroll-rotate-in';

    // Intersection observer with generous proactive threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -15px 0px'
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(SELECTOR);
      elements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          // If already in viewport or scrolled past it on initial load
          if (rect.top <= windowHeight * 0.92) {
            el.classList.add('visible');
          } else {
            observer.observe(el);
          }
        }
      });
    };

    // Initial check
    observeElements();

    // Secondary pass after DOM painting
    const timer = setTimeout(observeElements, 80);

    // Watch for dynamic DOM additions
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
