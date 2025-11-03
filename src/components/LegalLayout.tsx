import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-flex items-center transition-colors"
          >
            ← {t.nav.home}
          </button>
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-2">
            {t.legal.lastUpdated} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

