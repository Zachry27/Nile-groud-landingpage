import React from 'react';
import { Shield, BookOpen, FileCheck, Clock, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../data/content';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onOpenConsultation
}) => {
  const t = TRANSLATIONS[language];

  const pillarIcons = [
    <Shield key="0" className="w-6 h-6 text-[#c59d5f]" />,
    <BookOpen key="1" className="w-6 h-6 text-[#c59d5f]" />,
    <FileCheck key="2" className="w-6 h-6 text-[#c59d5f]" />,
    <Clock key="3" className="w-6 h-6 text-[#c59d5f]" />
  ];

  return (
    <section id="tentang" className="w-full bg-[#fcfaf7] py-20 border-t border-stone-200/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Top Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span 
              id="about-eyebrow"
              className="text-xs uppercase font-bold tracking-[0.3em] text-[#c59d5f] block"
            >
              {t.about.eyebrow}
            </span>
            <h2 
              id="about-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight"
            >
              {t.about.headline}
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              {t.about.p1}
            </p>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              {t.about.p2}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                id="about-consultation-btn"
                onClick={onOpenConsultation}
                className="bg-[#0c2c23] hover:bg-[#071f19] text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Konsultasi Bersama Tim Kami
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-sm">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-20 h-20 bg-[#c59d5f]/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-bold text-[#1c1c1c] mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c59d5f]" />
                {t.about.pillarsHeadline}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="mengapa">
                {t.about.pillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    id={`about-pillar-${idx}`}
                    className="p-4 rounded-2xl bg-[#fcfaf7] border border-stone-200/60 hover:border-[#c59d5f]/40 transition-colors"
                  >
                    <div className="mb-3">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <h4 className="font-bold text-stone-900 text-[15px] mb-1.5">{pillar.title}</h4>
                    <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Trust Tag */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#0c2c23]" />
                  Kantor Resmi: Kairo (Madinat Nasr) & Jakarta
                </span>
                <span className="font-medium text-[#c59d5f]">Terdaftar & Berlisensi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
