import React from 'react';
import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

export const Imprint: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.legal.imprint.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.imprint.companyInfo}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold text-lg">GoRemote LLC</p>
            <p>
              {t.legal.imprint.address}:<br />
              {t.contact.addressLine1}<br />
              {t.contact.addressLine2}<br />
              {t.contact.addressLine3}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.imprint.contact}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${t.contact.email}`} className="text-primary-600 hover:text-primary-700">
                {t.contact.email}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.imprint.responsible}
          </h2>
          <p className="text-gray-700">
            GoRemote LLC<br />
            {t.contact.addressLine1}<br />
            {t.contact.addressLine2}
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            {t.footer.rights}
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

