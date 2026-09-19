import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { TRANSLATIONS, SERVICES_DATA } from '../data/content';
import { Language, ContactFormState } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  language,
  initialService = ''
}) => {
  const t = TRANSLATIONS[language];
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    whatsapp: '',
    email: '',
    service: initialService || SERVICES_DATA[0].title,
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Nile Group, saya ingin konsultasi mengenai layanan: ${formData.service || 'Umum'}.\nNama: ${formData.fullName || '-'}\nCatatan: ${formData.notes || '-'}`
    );
    window.open(`https://wa.me/201000000000?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      id="consultation-modal-backdrop"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
        id="consultation-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-consultation-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#0c2c23]/10 text-[#0c2c23] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">Permintaan Terkirim!</h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              {t.modal.successMessage}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#c59d5f] block mb-1">
                KONSULTASI GRATIS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {t.modal.consultTitle}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                {t.modal.consultSubtitle}
              </p>
            </div>

            {/* Direct WhatsApp Quick Button */}
            <button
              id="modal-quick-whatsapp-btn"
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full flex items-center justify-center gap-3 bg-[#0c2c23] hover:bg-[#071f19] text-white py-3.5 px-6 rounded-xl font-medium text-sm shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-1.125-.078-.27-.086-.621-.205-1.074-.401-1.879-.815-3.08-2.735-3.175-2.86-.095-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.574.175-.189.38-.236.507-.236.126 0 .253.002.364.007.118.005.276-.045.432.33.16.386.549 1.339.597 1.437.048.099.08.214.016.342-.064.127-.096.206-.189.317-.094.111-.197.247-.282.332-.095.095-.194.198-.083.389.111.191.494.814 1.059 1.317.728.647 1.342.848 1.533.943.191.095.302.079.414-.047.112-.127.476-.554.603-.745.127-.19.254-.158.428-.095.175.064 1.11.523 1.301.618.191.095.318.143.365.222.048.079.048.46-.096.865z"></path>
              </svg>
              <span>{t.modal.sendWhatsapp}</span>
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-stone-200 w-full" />
              <span className="bg-white px-3 text-xs text-stone-400 uppercase tracking-widest absolute">
                atau isi formulir
              </span>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.modal.nameLabel} *
                </label>
                <input
                  id="consult-input-name"
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Ihsan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#0c2c23] focus:border-transparent outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.modal.phoneLabel} *
                  </label>
                  <input
                    id="consult-input-phone"
                    type="tel"
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#0c2c23] focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    id="consult-input-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#0c2c23] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.modal.serviceLabel}
                </label>
                <select
                  id="consult-select-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#0c2c23] focus:border-transparent outline-none transition bg-white"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.icon} {s.title}
                    </option>
                  ))}
                  <option value="Lainnya">Kebutuhan Khusus / Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  id="consult-textarea-notes"
                  rows={3}
                  placeholder="Ceritakan rencana perjalanan, studi, atau kebutuhan Anda di Mesir..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#0c2c23] focus:border-transparent outline-none transition resize-none"
                />
              </div>

              <button
                id="consult-submit-btn"
                type="submit"
                className="w-full bg-[#c59d5f] hover:bg-[#9f7838] text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-sm transition-colors cursor-pointer"
              >
                {t.modal.submitForm}
              </button>
            </form>

            {/* Quick Contact Footnote */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-500 border-t border-stone-100">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
                Kairo & Jakarta
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
                +20 100 000 0000 / +62 811 0000 0000
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#c59d5f]" />
                contact@nilegroup.co
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
