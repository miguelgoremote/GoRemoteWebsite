import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.channel.title,
      description: t.services.channel.description,
      details: t.services.channel.details,
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: t.services.strategy.title,
      description: t.services.strategy.description,
      details: t.services.strategy.details,
      icon: '🎯',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: t.services.optimization.title,
      description: t.services.optimization.description,
      details: t.services.optimization.details,
      icon: '⚡',
      color: 'from-green-500 to-green-600',
    },
    {
      title: t.services.training.title,
      description: t.services.training.description,
      details: t.services.training.details,
      icon: '👥',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 text-white text-3xl shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.details}
                </p>
              </div>

              {/* Visual Element */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-12 shadow-2xl`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
                  <div className="relative text-white">
                    <div className="text-8xl mb-4 opacity-90">{service.icon}</div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">✓</div>
                        <div className="text-sm mt-2 opacity-90">Proven Methods</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">📈</div>
                        <div className="text-sm mt-2 opacity-90">Measurable Results</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">🎯</div>
                        <div className="text-sm mt-2 opacity-90">Strategic Focus</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">⚡</div>
                        <div className="text-sm mt-2 opacity-90">Fast Implementation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
