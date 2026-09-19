import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/content';

interface ContactSectionProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, onOpenConsultation }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="kontak" className="w-full bg-[#faf6ee] py-20 border-t border-stone-200/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="bg-[#0c2c23] rounded-3xl text-white p-8 sm:p-14 relative overflow-hidden shadow-xl">
          {/* Background subtle Islamic geometric decoration */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border-[20px] border-white/5 pointer-events-none" />
          <div className="absolute right-32 -top-16 w-64 h-64 rounded-full border-[15px] border-[#c59d5f]/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#c59d5f] block">
                HUBUNGI KAMI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Mulai Konsultasi Rencana Anda di Mesir Bersama Kami
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Tim representatif kami di Kairo dan Jakarta siap memberikan pendampingan yang amanah, cepat, dan terpercaya untuk seluruh kebutuhan perjalanan ibadah, studi, maupun bisnis Anda.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  id="contact-section-whatsapp-btn"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2.5 bg-[#c59d5f] hover:bg-[#9f7838] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi WhatsApp Sekarang</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#c59d5f] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">Kantor Kairo (Pusat)</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Hay Asyir, Madinat Nasr, Cairo Governorate, Republik Arab Mesir
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-white/10">
                <MapPin className="w-5 h-5 text-[#c59d5f] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">Kantor Perwakilan Jakarta</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Jl. TB Simatupang, Cilandak, Jakarta Selatan, DKI Jakarta 12430
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3 border-t border-white/10">
                <Phone className="w-5 h-5 text-[#c59d5f] shrink-0" />
                <span className="text-stone-200 font-medium text-xs sm:text-sm">
                  +20 100 000 0000 (Mesir) / +62 811 0000 0000 (ID)
                </span>
              </div>

              <div className="flex items-center gap-3.5 pt-1">
                <Clock className="w-5 h-5 text-[#c59d5f] shrink-0" />
                <span className="text-stone-200 text-xs sm:text-sm">
                  Senin - Sabtu: 08.00 - 20.00 (Kairo / WIB)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
