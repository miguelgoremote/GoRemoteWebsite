import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Office_Building.jpg)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed drop-shadow-md">
              {t.hero.subtitle}
            </p>
            <button
              onClick={scrollToServices}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.nav.services}
            </button>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-primary-500/90 to-primary-700/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-primary-400/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-gray-100 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-100 text-sm">Clients</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-gray-100 text-sm">Years</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">1000+</div>
                    <div className="text-gray-100 text-sm">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
