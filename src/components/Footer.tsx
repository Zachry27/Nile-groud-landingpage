import React from 'react';
import { TRANSLATIONS } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenPolicy }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-[#fcfaf7] py-8 border-t border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <p id="footer-copyright">
          {t.footer.copyright}
        </p>
        <div className="flex items-center space-x-6">
          <button 
            id="footer-privacy-btn"
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-[#1c1c1c] transition-colors cursor-pointer"
          >
            {t.footer.privacy}
          </button>
          <button 
            id="footer-terms-btn"
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-[#1c1c1c] transition-colors cursor-pointer"
          >
            {t.footer.terms}
          </button>
        </div>
      </div>
    </footer>
  );
};
