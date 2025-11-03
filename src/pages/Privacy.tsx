import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

export const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.legal.privacy.title}>
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.legal.privacy.intro}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.dataCollection.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.dataCollection.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.dataUsage.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.dataUsage.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.cookies.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.cookies.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.thirdParty.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.thirdParty.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.security.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.security.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.rights.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.rights.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.changes.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.changes.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.privacy.contactData.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.privacy.contactData.split(':')[1]}
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

