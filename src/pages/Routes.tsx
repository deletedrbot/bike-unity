import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapIcon, ClockIcon, ArrowTrendingUpIcon, ArrowPathIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Константы для сложности
const DIFFICULTY_LEVELS = {
  BEGINNER: 'Начальный',
  INTERMEDIATE: 'Средний',
  ADVANCED: 'Сложный'
} as const;

type DifficultyLevel = typeof DIFFICULTY_LEVELS[keyof typeof DIFFICULTY_LEVELS];

interface Route {
  id: number;
  title: string;
  difficulty: DifficultyLevel;
  distance: number;
  duration: string;
  elevation: number;
  description: string;
  features: string[];
  image: string;
  gpxFile?: string;
}

const routes: Route[] = [
  {
    id: 1,
    title: 'Подмосковный лесной трейл',
    difficulty: DIFFICULTY_LEVELS.BEGINNER,
    distance: 25,
    duration: '2-3 часа',
    elevation: 150,
    description: 'Идеальный маршрут для начинающих райдеров. Пролегает по живописным лесным тропам Подмосковья с минимальным количеством сложных участков.',
    features: [
      'Лесные тропы',
      'Небольшие водные преграды',
      'Поляны для отдыха',
      'Смотровые площадки',
    ],
    image: '/images/route-forest.jpg',
    gpxFile: '/routes/forest-trail.gpx',
  },
  {
    id: 2,
    title: 'Карельский экстрим',
    difficulty: DIFFICULTY_LEVELS.ADVANCED,
    distance: 120,
    duration: '2 дня',
    elevation: 450,
    description: 'Экстремальный маршрут по карельским лесам и озерам. Включает сложные участки с камнями, броды и крутые подъемы.',
    features: [
      'Горные участки',
      'Водные преграды',
      'Каменистые тропы',
      'Места для ночевки',
    ],
    image: '/images/route-karelia.jpg',
    gpxFile: '/routes/karelia-extreme.gpx',
  },
  {
    id: 3,
    title: 'Валдайские холмы',
    difficulty: DIFFICULTY_LEVELS.INTERMEDIATE,
    distance: 80,
    duration: '6-8 часов',
    elevation: 300,
    description: 'Маршрут средней сложности по Валдайской возвышенности. Сочетает в себе лесные тропы, поля и небольшие водные преграды.',
    features: [
      'Холмистая местность',
      'Лесные массивы',
      'Озера и реки',
      'Исторические места',
    ],
    image: '/images/route-valdai.jpg',
    gpxFile: '/routes/valdai-hills.gpx',
  },
];

const features = [
  {
    icon: MapPinIcon,
    title: 'Проверенные маршруты',
    description: 'Все маршруты тщательно протестированы и безопасны для катания',
    color: 'from-blue-500 to-indigo-500',
    iconColor: 'text-blue-600',
    bgColor: 'from-blue-50 to-indigo-50'
  },
  {
    icon: UserGroupIcon,
    title: 'Групповые поездки',
    description: 'Присоединяйтесь к групповым поездкам с опытными инструкторами',
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Разные уровни',
    description: 'Маршруты для всех уровней подготовки - от новичков до экспертов',
    color: 'from-purple-500 to-violet-500',
    iconColor: 'text-purple-600',
    bgColor: 'from-purple-50 to-violet-50'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

const Routes: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) return <LoadingSpinner />;

  // Простая логика фильтрации
  let filteredRoutes = routes;
  if (selectedDifficulty === 'Начальный') {
    filteredRoutes = routes.filter(route => route.difficulty === 'Начальный');
  } else if (selectedDifficulty === 'Средний') {
    filteredRoutes = routes.filter(route => route.difficulty === 'Средний');
  } else if (selectedDifficulty === 'Сложный') {
    filteredRoutes = routes.filter(route => route.difficulty === 'Сложный');
  }

  // Отладочная информация
  console.log('Selected difficulty:', selectedDifficulty);
  console.log('All routes:', routes.map(r => ({ title: r.title, difficulty: r.difficulty })));
  console.log('Filtered routes:', filteredRoutes.map(r => ({ title: r.title, difficulty: r.difficulty })));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-600/20"></div>
        
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Исследуйте маршруты
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Маршруты для
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                велосипедистов
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Откройте для себя лучшие маршруты разной сложности. 
              От простых лесных троп до экстремальных горных трасс.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              Почему наши маршруты
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Лучшие
              <span className="gradient-text"> приключения</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Мы тщательно подбираем маршруты для каждого уровня подготовки
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="feature-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`icon-wrapper mb-6 bg-gradient-to-br ${feature.color} text-white rounded-2xl p-4 shadow-lg`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Выберите
              <span className="gradient-text"> сложность</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Фильтруйте маршруты по уровню сложности
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 border border-gray-200 shadow-lg">
              <button
                onClick={() => {
                  setSelectedDifficulty(null);
                  console.log('Кнопка "Все" нажата');
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDifficulty === null 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-200 font-medium'
                }`}
              >
                Все
              </button>
              <button
                onClick={() => {
                  setSelectedDifficulty('Начальный');
                  console.log('Кнопка "Начальный" нажата');
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDifficulty === 'Начальный'
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-200 font-medium'
                }`}
              >
                Начальный
              </button>
              <button
                onClick={() => {
                  setSelectedDifficulty('Средний');
                  console.log('Кнопка "Средний" нажата');
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDifficulty === 'Средний'
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-200 font-medium'
                }`}
              >
                Средний
              </button>
              <button
                onClick={() => {
                  setSelectedDifficulty('Сложный');
                  console.log('Кнопка "Сложный" нажата');
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDifficulty === 'Сложный'
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-200 font-medium'
                }`}
              >
                Сложный
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="section">
        <div className="container">
          {/* Отладочная информация */}
          <div className="mb-8 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Отладка:</strong> Выбрана сложность: "{selectedDifficulty || 'Все'}" | 
              Всего маршрутов: {routes.length} | 
              Отфильтровано: {filteredRoutes.length}
            </p>
          </div>
          
          {filteredRoutes.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  className="route-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-64 rounded-t-2xl overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover img-bw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                        route.difficulty === 'Начальный'
                          ? 'bg-green-500 text-white'
                          : route.difficulty === 'Средний'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        {route.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{route.title}</h3>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <MapIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                        <div className="text-sm text-gray-600 font-medium">Дистанция</div>
                        <div className="font-bold text-gray-900">{route.distance} км</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <ClockIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                        <div className="text-sm text-gray-600 font-medium">Длительность</div>
                        <div className="font-bold text-gray-900">{route.duration}</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <ArrowTrendingUpIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                        <div className="text-sm text-gray-600 font-medium">Набор высоты</div>
                        <div className="font-bold text-gray-900">{route.elevation} м</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{route.description}</p>
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-900">Особенности маршрута:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {route.features.map((feature, index) => (
                          <li key={index} className="font-medium">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex-1 btn-primary">
                        Подробнее
                      </button>
                      {route.gpxFile && (
                        <button className="btn-secondary">
                          <ArrowPathIcon className="h-5 w-5 mr-2" />
                          GPX
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🚴‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Маршруты не найдены</h3>
                <p className="text-gray-600 mb-6">
                  По выбранному уровню сложности маршруты не найдены. Попробуйте выбрать другой уровень.
                </p>
                <button 
                  onClick={() => setSelectedDifficulty(null)}
                  className="btn-primary"
                >
                  Показать все маршруты
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Routes; 