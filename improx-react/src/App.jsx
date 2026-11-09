import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import IndustriesPage from './pages/IndustriesPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import { useScrollReveal } from './hooks/useScrollReveal';

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Activate GPU scroll reveal animations across all routes
  useScrollReveal();

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="min-h-screen w-full bg-white flex flex-col selection:bg-[#0052FF] selection:text-white text-slate-800 font-sans overflow-x-hidden">
        {/* Persistent Navigation */}
        <Navbar />

        {/* Dynamic Route View */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog" element={<Navigate to="/blogs" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Persistent Deep Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
