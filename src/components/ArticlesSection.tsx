import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { ARTICLES_DATA, TRANSLATIONS } from '../data/content';
import { ArticleItem, Language } from '../types';

interface ArticlesSectionProps {
  language: Language;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="artikel" className="w-full bg-[#fcfaf7] py-20 border-t border-stone-200/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span 
              id="artikel-eyebrow"
              className="text-xs uppercase font-bold tracking-[0.3em] text-[#c59d5f] block mb-3"
            >
              {t.articles.eyebrow}
            </span>
            <h2 
              id="artikel-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1c1c1c] leading-tight"
            >
              {t.articles.headline}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
              {t.articles.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="articles-grid">
          {ARTICLES_DATA.map((art) => (
            <article
              key={art.id}
              id={`article-card-${art.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#0c2c23] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c59d5f]" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#0c2c23] transition-colors line-clamp-2 mb-3">
                    {art.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {art.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  id={`read-article-${art.id}`}
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0c2c23] hover:text-[#c59d5f] transition-colors cursor-pointer group/btn"
                >
                  <span>{t.articles.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          id="article-reader-modal"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs uppercase font-bold tracking-widest text-[#c59d5f] block mb-2">
              {selectedArticle.category} • {selectedArticle.date}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-[#0c2c23] text-white rounded-xl text-sm font-medium hover:bg-[#071f19] transition-colors cursor-pointer"
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
