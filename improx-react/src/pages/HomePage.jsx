import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import TechPartnersMarquee from '../components/TechPartnersMarquee';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import BlogsSection from '../components/BlogsSection';
import ContactSection from '../components/ContactSection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState('Data Entry & Document Digitization');

  // Activate scroll animations
  useScrollReveal();

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <main className="flex-1 w-full">
      {/* 1. Hero Section (Landing Page Fold) */}
      <HeroSection onSelectService={handleSelectService} />

      {/* 2. Stats Strip */}
      <StatsCounter />

      {/* 3. Tech Ecosystem & Cloud Stacks Marquee */}
      <TechPartnersMarquee />

      {/* 4. Why Choose Improx */}
      <WhyChooseUs />

      {/* 5. Our Capabilities */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 6. The 5-Step Execution Process */}
      <ProcessSection />

      {/* 7. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Recent Blog Posts & Insights */}
      <BlogsSection />

      {/* 9. Contact Form & Project Scoping */}
      <ContactSection selectedService={selectedService} />
    </main>
  );
}
