import React from 'react';
import { ArrowRight, Users, Compass, ShieldCheck, MapPin, Building2, Award } from 'lucide-react';
import { TRANSLATIONS } from '../data/content';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenConsultation: (serviceTitle?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenConsultation,
  onExploreServices
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section 
      id="beranda"
      className="hero-container relative min-h-[760px] flex flex-col justify-between overflow-hidden"
    >
      {/* Gradient overlay to retain legibility of text content */}
      <div className="hero-overlay absolute inset-0 z-0 pointer-events-none" />

      {/* Hero Body Grid */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 pt-16 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hero Content Column */}
        <div className="lg:col-span-6 space-y-7">
          {/* Small Caps Eyebrow */}
          <div className="tracking-[0.35em] text-[13px] font-bold text-stone-700 uppercase" id="hero-eyebrow">
            {t.hero.eyebrow}
          </div>

          {/* Headline */}
          <h1 
            className="font-serif text-5xl sm:text-[66px] leading-[1.08] font-bold text-[#1c1c1c] tracking-tight whitespace-pre-line"
            id="hero-main-title"
          >
            {t.hero.headline}
          </h1>

          {/* Body Description */}
          <p 
            className="text-stone-600 text-base sm:text-[17px] leading-relaxed max-w-xl font-normal"
            id="hero-description"
          >
            {t.hero.description}
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary WhatsApp CTA */}
            <button
              id="hero-cta-konsultasi"
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-3 bg-[#0c2c23] hover:bg-[#071f19] text-white px-7 py-3.5 rounded-xl font-medium text-[15px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-1.125-.078-.27-.086-.621-.205-1.074-.401-1.879-.815-3.08-2.735-3.175-2.86-.095-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.574.175-.189.38-.236.507-.236.126 0 .253.002.364.007.118.005.276-.045.432.33.16.386.549 1.339.597 1.437.048.099.08.214.016.342-.064.127-.096.206-.189.317-.094.111-.197.247-.282.332-.095.095-.194.198-.083.389.111.191.494.814 1.059 1.317.728.647 1.342.848 1.533.943.191.095.302.079.414-.047.112-.127.476-.554.603-.745.127-.19.254-.158.428-.095.175.064 1.11.523 1.301.618.191.095.318.143.365.222.048.079.048.46-.096.865z"></path>
              </svg>
              <span>{t.hero.ctaKonsultasi}</span>
              <ArrowRight className="w-4 h-4 text-white ml-0.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Outline CTA */}
            <button
              id="hero-cta-layanan"
              onClick={onExploreServices}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-stone-900/5 text-[#1c1c1c] border border-stone-800 px-7 py-3.5 rounded-xl font-medium text-[15px] transition duration-200 cursor-pointer group"
            >
              <span>{t.hero.ctaLayanan}</span>
              <ArrowRight className="w-4 h-4 text-[#1c1c1c] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Feature Highlights Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-300/60 max-w-xl">
            {/* Feature 1 */}
            <div className="flex items-start gap-2.5" id="hero-feature-1">
              <Users className="w-6 h-6 text-[#c59d5f] shrink-0 mt-0.5" strokeWidth={1.6} />
              <div className="text-[12px] font-medium leading-tight text-stone-700 whitespace-pre-line">
                {t.hero.features[0].title}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-2.5" id="hero-feature-2">
              <Building2 className="w-6 h-6 text-[#c59d5f] shrink-0 mt-0.5" strokeWidth={1.6} />
              <div className="text-[12px] font-medium leading-tight text-stone-700 whitespace-pre-line">
                {t.hero.features[1].title}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-2.5" id="hero-feature-3">
              <MapPin className="w-6 h-6 text-[#c59d5f] shrink-0 mt-0.5" strokeWidth={1.6} />
              <div className="text-[12px] font-medium leading-tight text-stone-700 whitespace-pre-line">
                {t.hero.features[2].title}
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-2.5" id="hero-feature-4">
              <ShieldCheck className="w-6 h-6 text-[#c59d5f] shrink-0 mt-0.5" strokeWidth={1.6} />
              <div className="text-[12px] font-medium leading-tight text-stone-700 whitespace-pre-line">
                {t.hero.features[3].title}
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Column: Quranic Verse Quote */}
        <div className="lg:col-span-6 flex justify-end pt-12 lg:pt-16 pr-2 lg:pr-8">
          <div className="max-w-md text-right space-y-2" id="hero-quran-verse-block">
            <blockquote className="font-serif italic text-2xl sm:text-[27px] text-stone-800 leading-snug drop-shadow-sm">
              {t.hero.verse}
            </blockquote>
            <p className="font-sans text-xs tracking-wider uppercase text-stone-600 font-medium">
              {t.hero.verseRef}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphism Key Metrics Card */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 pb-12 pt-4">
        <div 
          className="glass-stats rounded-2xl p-5 sm:p-7 shadow-lg max-w-xl"
          id="hero-stats-card"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 divide-x-0 sm:divide-x divide-stone-300/50">
            {/* Metric 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c59d5f]/15 flex items-center justify-center text-[#c59d5f] shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#1c1c1c] leading-none">
                  {t.hero.stats[0].value}
                </div>
                <div className="text-[11px] text-stone-600 leading-tight mt-1 whitespace-pre-line">
                  {t.hero.stats[0].label}
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3 sm:pl-5">
              <div className="w-10 h-10 rounded-full bg-[#c59d5f]/15 flex items-center justify-center text-[#c59d5f] shrink-0">
                <Compass className="w-5 h-5 text-[#c59d5f]" />
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#1c1c1c] leading-none">
                  {t.hero.stats[1].value}
                </div>
                <div className="text-[11px] text-stone-600 leading-tight mt-1 whitespace-pre-line">
                  {t.hero.stats[1].label}
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3 sm:pl-5">
              <div className="w-10 h-10 rounded-full bg-[#c59d5f]/15 flex items-center justify-center text-[#c59d5f] shrink-0">
                <Users className="w-5 h-5 text-[#c59d5f]" />
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#1c1c1c] leading-none">
                  {t.hero.stats[2].value}
                </div>
                <div className="text-[11px] text-stone-600 leading-tight mt-1 whitespace-pre-line">
                  {t.hero.stats[2].label}
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3 sm:pl-5">
              <div className="w-10 h-10 rounded-full bg-[#c59d5f]/15 flex items-center justify-center text-[#c59d5f] shrink-0">
                <Award className="w-5 h-5 text-[#c59d5f]" />
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-[#1c1c1c] leading-none">
                  {t.hero.stats[3].value}
                </div>
                <div className="text-[11px] text-stone-600 leading-tight mt-1 whitespace-pre-line">
                  {t.hero.stats[3].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
