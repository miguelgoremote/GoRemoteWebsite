import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GoRemote LLC</h3>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/imprint"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.imprint}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.disclaimer}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GoRemote LLC. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
