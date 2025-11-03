import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

export const Disclaimer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.legal.disclaimer.title}>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.disclaimer.liability.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.disclaimer.liability.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.disclaimer.content.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.disclaimer.content.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.disclaimer.links.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.disclaimer.links.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.disclaimer.copyright.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.disclaimer.copyright.split(':')[1]}
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

