import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title}
            </h2>
            <p className="text-2xl text-primary-400 mb-8 font-semibold">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t.about.description}
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-300">
                  {language === 'en' 
                    ? 'Expert team with proven track record in B2B sales optimization'
                    : 'Expertenteam mit bewährter Erfolgsbilanz in der B2B-Vertriebsoptimierung'}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-300">
                  {language === 'en'
                    ? 'Data-driven approach to sales channel optimization and strategy'
                    : 'Datengetriebener Ansatz zur Vertriebskanal-Optimierung und Strategie'}
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="ml-3 text-gray-300">
                  {language === 'en'
                    ? 'Customized solutions tailored to your unique business needs'
                    : 'Individuelle Lösungen, die auf Ihre einzigartigen Geschäftsanforderungen zugeschnitten sind'}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-600 bg-opacity-20 rounded-lg p-6 border border-primary-500 border-opacity-30">
                  <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="bg-primary-600 bg-opacity-20 rounded-lg p-6 border border-primary-500 border-opacity-30">
                  <div className="text-4xl font-bold text-primary-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-primary-600 bg-opacity-20 rounded-lg p-6 border border-primary-500 border-opacity-30">
                  <div className="text-4xl font-bold text-primary-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
                <div className="bg-primary-600 bg-opacity-20 rounded-lg p-6 border border-primary-500 border-opacity-30">
                  <div className="text-4xl font-bold text-primary-400 mb-2">1000+</div>
                  <div className="text-gray-400 text-sm">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
