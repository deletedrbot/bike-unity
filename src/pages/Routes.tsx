import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapIcon, ClockIcon, ArrowTrendingUpIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface Route {
  id: number;
  title: string;
  difficulty: 'Начальный' | 'Средний' | 'Сложный';
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
    difficulty: 'Начальный',
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
    difficulty: 'Сложный',
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
    difficulty: 'Средний',
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

const Routes: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredRoutes = selectedDifficulty
    ? routes.filter(route => route.difficulty === selectedDifficulty)
    : routes;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Маршруты</h1>
            <p className="text-xl text-gray-300">
              Исследуйте наши проверенные маршруты разной сложности
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 rounded-full ${
                selectedDifficulty === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Все
            </button>
            {['Начальный', 'Средний', 'Сложный'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full ${
                  selectedDifficulty === difficulty
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRoutes.map((route) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      route.difficulty === 'Начальный'
                        ? 'bg-green-100 text-green-800'
                        : route.difficulty === 'Средний'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {route.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{route.title}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <MapIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                      <div className="text-sm text-gray-600">Дистанция</div>
                      <div className="font-semibold">{route.distance} км</div>
                    </div>
                    <div className="text-center">
                      <ClockIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                      <div className="text-sm text-gray-600">Длительность</div>
                      <div className="font-semibold">{route.duration}</div>
                    </div>
                    <div className="text-center">
                      <ArrowTrendingUpIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                      <div className="text-sm text-gray-600">Набор высоты</div>
                      <div className="font-semibold">{route.elevation} м</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Особенности маршрута:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {route.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Подробнее
                    </button>
                    {route.gpxFile && (
                      <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <ArrowPathIcon className="h-5 w-5 mr-2" />
                        GPX
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Routes; 