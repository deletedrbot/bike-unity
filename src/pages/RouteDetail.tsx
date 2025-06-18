import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ArrowLeftIcon,
  StarIcon,
  ShareIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const DIFFICULTY_LEVELS = {
  НАЧАЛЬНЫЙ: 'Начальный',
  СРЕДНИЙ: 'Средний',
  СЛОЖНЫЙ: 'Сложный',
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
  fullDescription: string;
  startPoint: string;
  endPoint: string;
  bestTime: string;
  rating: number;
  reviews: number;
  safetyTips: string[];
  equipment: string[];
  photos: string[];
}

const routes: Route[] = [
  {
    id: 1,
    title: 'Парковая прогулка',
    difficulty: 'Начальный',
    distance: 8,
    duration: '1-2 часа',
    elevation: 50,
    description: 'Идеальный маршрут для начинающих велосипедистов',
    features: ['Асфальтированные дорожки', 'Много зелени', 'Остановки для отдыха'],
    image: '/images/route-1.jpg',
    gpxFile: '/routes/route-1.gpx',
    fullDescription: 'Парковая прогулка - это идеальный маршрут для тех, кто только начинает свой путь в велоспорте. Маршрут проходит по живописным аллеям Центрального парка Читы, где вы сможете насладиться красотой природы и спокойной атмосферой.\n\nМаршрут начинается от главного входа в парк и проходит по кольцевой дорожке, которая окружает весь парк. Дорога полностью асфальтирована, что делает катание комфортным и безопасным. По пути вы встретите несколько смотровых площадок, где можно остановиться для отдыха и фотографирования.\n\nОсобенности маршрута:\n• Полностью асфальтированная дорога\n• Минимальный перепад высот\n• Множество остановок для отдыха\n• Красивые виды на парк\n• Безопасность для детей\n\nМаршрут подходит для:\n• Начинающих велосипедистов\n• Семейных прогулок\n• Пожилых людей\n• Детей от 8 лет\n\nРекомендуемое время для катания: утро или вечер, когда в парке меньше людей и прохладнее.',
    startPoint: 'Главный вход в Центральный парк',
    endPoint: 'Главный вход в Центральный парк',
    bestTime: 'Утро или вечер',
    rating: 4.8,
    reviews: 127,
    safetyTips: [
      'Соблюдайте правила дорожного движения',
      'Используйте защитный шлем',
      'Держитесь правой стороны дороги',
      'Снижайте скорость на поворотах',
      'Будьте внимательны к пешеходам'
    ],
    equipment: [
      'Велосипед в исправном состоянии',
      'Защитный шлем',
      'Вода и легкий перекус',
      'Удобная одежда',
      'Солнцезащитные очки'
    ],
    photos: [
      '/images/route-1-detail-1.jpg',
      '/images/route-1-detail-2.jpg',
      '/images/route-1-detail-3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Набережная Читы',
    difficulty: 'Средний',
    distance: 15,
    duration: '2-3 часа',
    elevation: 120,
    description: 'Живописный маршрут вдоль реки',
    features: ['Виды на реку', 'Мосты', 'Смотровые площадки'],
    image: '/images/route-2.jpg',
    gpxFile: '/routes/route-2.gpx',
    fullDescription: 'Маршрут "Набережная Читы" предлагает удивительные виды на реку и город. Это один из самых популярных маршрутов среди местных велосипедистов, который сочетает в себе красоту природы и городской инфраструктуры.\n\nМаршрут начинается от памятника Ленину и проходит вдоль набережной реки Читы. По пути вы пересечете несколько мостов, подниметесь на смотровые площадки и проедете через живописные парки. Маршрут включает как асфальтированные участки, так и грунтовые тропы.\n\nОсновные точки маршрута:\n1. Старт: Памятник Ленину\n2. Набережная реки Читы\n3. Первый мост через реку\n4. Смотровая площадка "Орлиное гнездо"\n5. Парк Победы\n6. Второй мост через реку\n7. Возвращение к старту\n\nОсобенности маршрута:\n• Смешанное покрытие (асфальт + грунт)\n• Умеренные подъемы и спуски\n• Красивые виды на реку\n• Исторические места\n• Современная инфраструктура\n\nМаршрут подходит для:\n• Велосипедистов со средним опытом\n• Любителей фотографии\n• Туристов\n• Групповых поездок\n\nЛучшее время для катания: весна и осень, когда погода наиболее комфортная.',
    startPoint: 'Памятник Ленину',
    endPoint: 'Памятник Ленину',
    bestTime: 'Весна и осень',
    rating: 4.9,
    reviews: 203,
    safetyTips: [
      'Будьте осторожны на мостах',
      'Снижайте скорость на спусках',
      'Используйте светоотражающие элементы',
      'Проверяйте тормоза перед поездкой',
      'Возьмите с собой аптечку'
    ],
    equipment: [
      'Горный или гибридный велосипед',
      'Защитный шлем',
      'Светоотражающие элементы',
      'Вода и энергетические батончики',
      'Дождевик (на случай дождя)',
      'Фотоаппарат'
    ],
    photos: [
      '/images/route-2-detail-1.jpg',
      '/images/route-2-detail-2.jpg',
      '/images/route-2-detail-3.jpg'
    ]
  },
  {
    id: 3,
    title: 'Горный маршрут',
    difficulty: 'Сложный',
    distance: 25,
    duration: '4-6 часов',
    elevation: 800,
    description: 'Экстремальный маршрут для опытных райдеров',
    features: ['Крутые подъемы', 'Технические спуски', 'Горные тропы'],
    image: '/images/route-3.jpg',
    gpxFile: '/routes/route-3.gpx',
    fullDescription: 'Горный маршрут - это настоящий вызов для опытных велосипедистов. Маршрут проходит по живописным горным тропам в окрестностях Читы и предлагает экстремальные спуски, технические участки и захватывающие виды на город и окрестности.\n\nМаршрут начинается от подножия горы и включает несколько крутых подъемов с перепадом высот до 800 метров. По пути вы встретите технические участки с камнями, узкие тропы вдоль обрывов и быстрые спуски по лесным дорогам.\n\nТехнические характеристики:\n• Общий перепад высот: 800 м\n• Максимальный уклон подъема: 15%\n• Максимальный уклон спуска: 25%\n• Процент технических участков: 40%\n• Процент асфальтированных дорог: 20%\n\nОсновные участки маршрута:\n1. Подъем на первую вершину (3 км, уклон 12%)\n2. Технический спуск по камням (2 км)\n3. Лесная тропа (5 км)\n4. Подъем на вторую вершину (4 км, уклон 15%)\n5. Экстремальный спуск (3 км)\n6. Возвращение по грунтовой дороге (8 км)\n\nМаршрут подходит только для:\n• Опытных велосипедистов (стаж от 3 лет)\n• Обладателей горных велосипедов\n• Людей с хорошей физической подготовкой\n• Групп с опытным инструктором\n\nВАЖНО: Маршрут проходит вдали от цивилизации. Все участники должны быть готовы к экстремальным условиям и иметь необходимое снаряжение.',
    startPoint: 'Подножие горы (5 км от города)',
    endPoint: 'Подножие горы (5 км от города)',
    bestTime: 'Лето и ранняя осень',
    rating: 4.7,
    reviews: 89,
    safetyTips: [
      'Обязательно используйте полную защиту',
      'Проверьте велосипед перед поездкой',
      'Возьмите запасные камеры и инструменты',
      'Не катайтесь в одиночку',
      'Сообщите о маршруте друзьям',
      'Возьмите GPS-навигатор',
      'Проверьте прогноз погоды'
    ],
    equipment: [
      'Горный велосипед высокого качества',
      'Полная защита (шлем, наколенники, налокотники)',
      'Запасные камеры (минимум 2 штуки)',
      'Набор инструментов',
      'Аптечка первой помощи',
      'GPS-навигатор',
      'Мобильный телефон с зарядкой',
      'Вода (минимум 2 литра)',
      'Энергетические гели и батончики',
      'Дождевик и теплая одежда'
    ],
    photos: [
      '/images/route-3-detail-1.jpg',
      '/images/route-3-detail-2.jpg',
      '/images/route-3-detail-3.jpg'
    ]
  },
];

export default function RouteDetail() {
  const { id } = useParams<{ id: string }>();
  const [route, setRoute] = useState<Route | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundRoute = routes.find(r => r.id === Number(id));
      setRoute(foundRoute || null);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }

  if (!route) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Маршрут не найден</h1>
          <Link to="/routes" className="btn-primary">
            Вернуться к маршрутам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white">
      {/* Back Button */}
      <div className="container pt-8">
        <Link 
          to="/routes"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Назад к маршрутам
        </Link>
      </div>

      {/* Route Content */}
      <div className="container pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                route.difficulty === 'Начальный'
                  ? 'bg-green-500 text-white'
                  : route.difficulty === 'Средний'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-red-500 text-white'
              }`}>
                {route.difficulty}
              </span>
              <div className="flex items-center gap-1">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">{route.rating}</span>
                <span className="text-gray-500">({route.reviews} отзывов)</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {route.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {route.description}
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={route.image}
              alt={route.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Route Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Характеристики маршрута</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <MapIcon className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                <div className="text-sm text-gray-600 font-medium">Дистанция</div>
                <div className="text-2xl font-bold text-gray-900">{route.distance} км</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <ClockIcon className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                <div className="text-sm text-gray-600 font-medium">Длительность</div>
                <div className="text-2xl font-bold text-gray-900">{route.duration}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <ArrowTrendingUpIcon className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                <div className="text-sm text-gray-600 font-medium">Набор высоты</div>
                <div className="text-2xl font-bold text-gray-900">{route.elevation} м</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <UserGroupIcon className="h-8 w-8 mx-auto mb-3 text-primary-600" />
                <div className="text-sm text-gray-600 font-medium">Сложность</div>
                <div className="text-2xl font-bold text-gray-900">{route.difficulty}</div>
              </div>
            </div>
          </motion.div>

          {/* Route Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Описание маршрута</h2>
                <div className="prose prose-lg max-w-none">
                  {route.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Route Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Особенности маршрута</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {route.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Photos */}
              {route.photos.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Фотографии маршрута</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {route.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`${route.title} - фото ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Route Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Информация о маршруте</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Начальная точка</div>
                    <div className="font-medium text-gray-900">{route.startPoint}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Конечная точка</div>
                    <div className="font-medium text-gray-900">{route.endPoint}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Лучшее время</div>
                    <div className="font-medium text-gray-900">{route.bestTime}</div>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-2 text-primary-600" />
                  Советы по безопасности
                </h3>
                <ul className="space-y-2">
                  {route.safetyTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Equipment */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Необходимое снаряжение</h3>
                <ul className="space-y-2">
                  {route.equipment.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Записаться на маршрут
                  </button>
                  {route.gpxFile && (
                    <button className="w-full btn-secondary">
                      <ArrowPathIcon className="h-5 w-5 mr-2" />
                      Скачать GPX
                    </button>
                  )}
                  <button className="w-full btn-outline">
                    <ShareIcon className="h-5 w-5 mr-2" />
                    Поделиться
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 