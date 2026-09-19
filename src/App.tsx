import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PolicyModal } from './components/PolicyModal';
import { Language, ServiceItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('beranda');

  // Monitor scroll position to highlight corresponding navbar item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'layanan', 'mengapa', 'testimoni', 'artikel', 'kontak'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationService(serviceTitle || '');
    setIsConsultationOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`min-h-screen flex flex-col bg-[#fcfaf7] text-[#1c1c1c] ${
        language === 'ar' ? 'font-sans text-right' : 'font-sans'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Primary Sticky Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenConsultation={handleOpenConsultation}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section matching reference */}
        <Hero
          language={language}
          onOpenConsultation={handleOpenConsultation}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Layanan Kami Section matching reference */}
        <ServicesSection
          language={language}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3. Tentang Kami & Mengapa Nile Section */}
        <AboutSection
          language={language}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 4. Testimoni Section */}
        <TestimonialsSection language={language} />

        {/* 5. Artikel & Panduan Section */}
        <ArticlesSection language={language} />

        {/* 6. Kontak Section */}
        <ContactSection
          language={language}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer matching reference */}
      <Footer
        language={language}
        onOpenPolicy={setPolicyType}
      />

      {/* Interactive Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForConsultation={(title) => handleOpenConsultation(title)}
        language={language}
      />

      {/* Interactive Consultation / WhatsApp Inquiry Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        language={language}
        initialService={consultationService}
      />

      {/* Privacy Policy & Terms Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Floating WhatsApp Quick-Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-whatsapp-btn"
          onClick={() => handleOpenConsultation()}
          aria-label="Konsultasi WhatsApp Cepat"
          className="w-14 h-14 bg-[#0c2c23] hover:bg-[#071f19] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-1.125-.078-.27-.086-.621-.205-1.074-.401-1.879-.815-3.08-2.735-3.175-2.86-.095-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.574.175-.189.38-.236.507-.236.126 0 .253.002.364.007.118.005.276-.045.432.33.16.386.549 1.339.597 1.437.048.099.08.214.016.342-.064.127-.096.206-.189.317-.094.111-.197.247-.282.332-.095.095-.194.198-.083.389.111.191.494.814 1.059 1.317.728.647 1.342.848 1.533.943.191.095.302.079.414-.047.112-.127.476-.554.603-.745.127-.19.254-.158.428-.095.175.064 1.11.523 1.301.618.191.095.318.143.365.222.048.079.048.46-.096.865z"></path>
          </svg>
          <span className="sr-only">Chat WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
