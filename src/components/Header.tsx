import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_ASSETS, TRANSLATIONS } from '../data/content';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenConsultation,
  activeSection
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'id', label: 'ID - Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'EN - English', flag: '🇬🇧' },
    { code: 'ar', label: 'AR - العربية', flag: '🇪🇬' }
  ];

  const navLinks = [
    { id: 'beranda', label: t.nav.beranda, href: '#beranda' },
    { id: 'tentang', label: t.nav.tentang, href: '#tentang' },
    { id: 'layanan', label: t.nav.layanan, href: '#layanan' },
    { id: 'mengapa', label: t.nav.mengapa, href: '#mengapa' },
    { id: 'testimoni', label: t.nav.testimoni, href: '#testimoni' },
    { id: 'artikel', label: t.nav.artikel, href: '#artikel' },
    { id: 'kontak', label: t.nav.kontak, href: '#kontak' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#fcfaf7]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/70 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
        {/* Company Brand Logo */}
        <a 
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#beranda');
          }}
          className="flex items-center gap-3.5 group cursor-pointer"
          id="brand-logo-link"
        >
          <img
            alt="Nile Group Logo"
            className="w-14 h-14 object-contain transition-transform group-hover:scale-105 duration-300"
            src={BRAND_ASSETS.logo}
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl tracking-[0.2em] text-[#0c2c23] leading-none">
              NILE GROUP
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#c59d5f] font-semibold mt-1">
              PEOPLE • PLACES • POSSIBILITIES
            </span>
          </div>
        </a>

        {/* Primary Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9 text-[14px] font-medium text-stone-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors py-1 cursor-pointer relative ${
                  isActive
                    ? "text-[#1c1c1c] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1c1c1c]"
                    : "text-stone-600 hover:text-[#0c2c23]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Language Selector & WhatsApp CTA Button */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              id="language-selector-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 border border-stone-300/80 rounded-full px-3.5 sm:px-4 py-2 text-[13px] font-medium text-stone-700 hover:bg-stone-100/70 transition-colors cursor-pointer"
              aria-label="Select language"
              aria-expanded={isLangOpen}
            >
              <Globe className="w-4 h-4 text-stone-600" />
              <span className="uppercase font-semibold text-xs tracking-wider">{language}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                id="language-dropdown-menu"
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    id={`lang-option-${item.code}`}
                    onClick={() => {
                      onLanguageChange(item.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-stone-50 transition-colors ${
                      language === item.code ? 'text-[#0c2c23] font-bold bg-[#faf6ee]' : 'text-stone-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.flag}</span>
                      <span>{item.label}</span>
                    </span>
                    {language === item.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0c2c23]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Action Button */}
          <button
            id="hubungi-kami-header-btn"
            onClick={() => onOpenConsultation()}
            className="flex items-center gap-2 sm:gap-2.5 bg-[#0c2c23] hover:bg-[#071f19] text-white px-4 sm:px-6 py-2.5 rounded-full text-[13.5px] font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-1.125-.078-.27-.086-.621-.205-1.074-.401-1.879-.815-3.08-2.735-3.175-2.86-.095-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.574.175-.189.38-.236.507-.236.126 0 .253.002.364.007.118.005.276-.045.432.33.16.386.549 1.339.597 1.437.048.099.08.214.016.342-.064.127-.096.206-.189.317-.094.111-.197.247-.282.332-.095.095-.194.198-.083.389.111.191.494.814 1.059 1.317.728.647 1.342.848 1.533.943.191.095.302.079.414-.047.112-.127.476-.554.603-.745.127-.19.254-.158.428-.095.175.064 1.11.523 1.301.618.191.095.318.143.365.222.048.079.048.46-.096.865z"></path>
            </svg>
            <span className="hidden sm:inline">{t.nav.hubungi}</span>
            <span className="sm:hidden">Kontak</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-[#0c2c23] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fcfaf7] border-b border-stone-200 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-1.5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#0c2c23] font-bold pl-2 border-l-2 border-[#0c2c23]'
                    : 'text-stone-700 hover:text-[#0c2c23]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
