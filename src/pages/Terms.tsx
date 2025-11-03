import { LegalLayout } from '../components/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

export const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.legal.terms.title}>
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.legal.terms.intro}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.services.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.services.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.obligations.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.obligations.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.payment.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.payment.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.liability.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.liability.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.intellectual.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.intellectual.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.termination.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.termination.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.governing.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.governing.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.changesTerms.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.changesTerms.split(':')[1]}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.legal.terms.contact.split(':')[0]}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.legal.terms.contact.split(':')[1]}
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

