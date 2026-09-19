import React from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { TRANSLATIONS } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
  language: Language;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
  language
}) => {
  if (!service) return null;
  const t = TRANSLATIONS[language];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      id="service-detail-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200"
        id="service-detail-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Banner */}
        <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Close Button */}
          <button 
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Icon on Banner */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold">
                NILE GROUP SERVICE
              </span>
            </div>
            <h3 className="font-serif text-3xl font-bold">{service.title}</h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Description */}
          <p className="text-stone-700 text-base leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Inclusions / Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c2c23]">
              Cakupan & Keunggulan Layanan:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#fcfaf7] p-3 rounded-xl border border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-[#c59d5f] shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          {service.packages && service.packages.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c2c23]">
                Pilihan Paket & Program:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.packages.map((pkg, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#faf6ee] border border-[#c59d5f]/30 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9f7838] block mb-1">
                        {pkg.target}
                      </span>
                      <h5 className="font-bold text-stone-900 text-base mb-2">{pkg.name}</h5>
                      <p className="text-xs text-stone-600 leading-relaxed">{pkg.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Timeline */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0c2c23]">
              Tahapan Pendampingan:
            </h4>
            <div className="space-y-2">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-stone-700">
                  <span className="w-6 h-6 rounded-full bg-[#0c2c23] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3 items-center justify-end">
            <button
              id="modal-close-secondary-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              id="modal-consult-service-btn"
              onClick={() => {
                onClose();
                onSelectForConsultation(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0c2c23] hover:bg-[#071f19] text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.services.consultBtn}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
