import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t.cookieBanner.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {t.cookieBanner.description}
            </p>
            <a
              href="/privacy"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block"
            >
              {t.cookieBanner.learnMore}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={declineCookies}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {t.cookieBanner.decline}
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

