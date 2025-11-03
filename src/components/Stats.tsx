import { useLanguage } from '../contexts/LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      label: t.stats.clients,
      value: t.stats.clientsValue,
      icon: '👥',
    },
    {
      label: t.stats.experience,
      value: t.stats.experienceValue,
      icon: '📅',
    },
    {
      label: t.stats.success,
      value: t.stats.successValue,
      icon: '✅',
    },
    {
      label: t.stats.projects,
      value: t.stats.projectsValue,
      icon: '🚀',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-primary-700 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

