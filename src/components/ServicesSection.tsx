import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES_DATA, TRANSLATIONS } from '../data/content';
import { ServiceItem, Language } from '../types';

interface ServicesSectionProps {
  language: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectService
}) => {
  const t = TRANSLATIONS[language];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : SERVICES_DATA.length - 1));
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
    setActiveSlide((prev) => (prev < SERVICES_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="layanan" 
      className="w-full bg-[#fbf9f4] py-20 border-t border-stone-200/50"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <span 
              id="layanan-eyebrow"
              className="text-xs uppercase font-bold tracking-[0.3em] text-[#c59d5f] block mb-3"
            >
              {t.services.eyebrow}
            </span>
            {/* Section Headline */}
            <h2 
              id="layanan-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1c1c1c] leading-tight"
            >
              {t.services.headline}
            </h2>
            {/* Section Description */}
            <p 
              id="layanan-subtitle"
              className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed"
            >
              {t.services.description}
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              id="services-carousel-prev"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-stone-600 flex items-center justify-center shadow-xs transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="services-carousel-next"
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 text-stone-600 flex items-center justify-center shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Services Cards Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="services-cards-grid"
        >
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service)}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border transition duration-300 flex flex-col justify-between group cursor-pointer ${
                activeSlide === index ? 'ring-2 ring-[#c59d5f]/50 border-[#c59d5f]/40' : 'border-stone-200/60'
              }`}
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-brand-gold text-lg">{service.icon}</span>
                    <h3 className="font-sans font-bold text-[17px] text-stone-900 group-hover:text-[#0c2c23] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-[13px] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex justify-between items-center">
                <span className="text-[11px] font-semibold text-[#c59d5f] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.services.detailBtn}
                </span>
                <button
                  id={`btn-detail-${service.id}`}
                  aria-label={`Detail ${service.title}`}
                  className="w-9 h-9 rounded-full bg-stone-100 group-hover:bg-[#c59d5f] group-hover:text-white text-stone-600 flex items-center justify-center transition-colors duration-200 ml-auto"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
