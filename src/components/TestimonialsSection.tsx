import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA, TRANSLATIONS } from '../data/content';
import { Language } from '../types';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="testimoni" className="w-full bg-[#fbf9f4] py-20 border-t border-stone-200/50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span 
            id="testimoni-eyebrow"
            className="text-xs uppercase font-bold tracking-[0.3em] text-[#c59d5f] block mb-3"
          >
            {t.testimonials.eyebrow}
          </span>
          <h2 
            id="testimoni-headline"
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1c1c1c] leading-tight"
          >
            {t.testimonials.headline}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md border border-stone-200/70 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#c59d5f]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#c59d5f]/30" />
                </div>
                <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0c2c23] text-white font-serif font-bold text-base flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm leading-tight">{item.name}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{item.role}</p>
                  <p className="text-[11px] text-[#c59d5f] font-medium">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
