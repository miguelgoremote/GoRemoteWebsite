import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-10 rounded-2xl shadow-xl border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t.contact.getInTouch}
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                  {t.contact.address}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.contact.addressLine1}
                  <br />
                  {t.contact.addressLine2}
                  <br />
                  {t.contact.addressLine3}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                  Email
                </div>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-primary-700 hover:text-primary-800 font-semibold text-lg transition-colors"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-6">📧</div>
                  <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                  <p className="text-gray-300">
                    {language === 'en'
                      ? 'Get in touch and let\'s discuss how we can help optimize your sales channels.'
                      : 'Kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihre Vertriebskanäle optimieren können.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
