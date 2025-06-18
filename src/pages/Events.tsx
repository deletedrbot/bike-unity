import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  UserGroupIcon,
  NewspaperIcon,
  EyeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: 'События' | 'Новости' | 'Объявления' | 'Отчеты';
  image: string;
  views: number;
  tags: string[];
  featured?: boolean;
  type: 'news' | 'event';
  location?: string;
  participants?: number;
  difficulty?: string;
}

const newsItems: NewsItem[] = [
  // События с главной страницы
  {
    id: 1,
    title: 'Весенний велопробег',
    content: 'Приглашаем всех желающих на традиционный весенний велопробег! Это отличная возможность начать сезон в компании единомышленников. Маршрут пройдет по живописным местам Центрального парка Читы, подходит для всех уровней подготовки.',
    excerpt: 'Традиционный весенний велопробег для всех желающих',
    author: 'Команда Bike Unity',
    date: '2024-04-15',
    category: 'События',
    image: '/images/event-1.jpg',
    views: 245,
    tags: ['велопробег', 'весна', 'парк'],
    featured: true,
    type: 'event',
    location: 'Центральный парк Читы',
    participants: 25,
    difficulty: 'Начинающий'
  },
  {
    id: 2,
    title: 'Ночная прогулка',
    content: 'Романтичная ночная прогулка по набережной Читы. Уникальная возможность увидеть город в ночных огнях. Маршрут включает остановки у самых красивых видовых точек.',
    excerpt: 'Романтичная ночная прогулка по набережной',
    author: 'Мария Иванова',
    date: '2024-04-22',
    category: 'События',
    image: '/images/event-2.jpg',
    views: 189,
    tags: ['ночная прогулка', 'набережная', 'романтика'],
    type: 'event',
    location: 'Набережная Читы',
    participants: 18,
    difficulty: 'Средний'
  },
  {
    id: 3,
    title: 'Горный маршрут',
    content: 'Экстремальный горный маршрут для опытных райдеров. Сложные технические участки, крутые спуски и подъемы. Только для подготовленных велосипедистов с защитным снаряжением.',
    excerpt: 'Экстремальный горный маршрут для опытных райдеров',
    author: 'Дмитрий Смирнов',
    date: '2024-04-29',
    category: 'События',
    image: '/images/event-3.jpg',
    views: 156,
    tags: ['горный маршрут', 'экстрим', 'техника'],
    type: 'event',
    location: 'Окрестности Читы',
    participants: 12,
    difficulty: 'Продвинутый'
  },
  // Новости
  {
    id: 4,
    title: 'Открытие нового сезона велопрогулок в Чите',
    content: 'Мы рады объявить о начале нового сезона велопрогулок! В этом году мы подготовили множество интересных маршрутов для всех уровней подготовки. Присоединяйтесь к нашему сообществу и откройте для себя красоту Забайкалья на двух колесах.',
    excerpt: 'Начинается новый сезон велопрогулок с множеством интересных маршрутов',
    author: 'Команда Bike Unity',
    date: '2024-04-15',
    category: 'Новости',
    image: '/images/news-season-opening.jpg',
    views: 245,
    tags: ['сезон', 'открытие', 'маршруты'],
    featured: true,
    type: 'news'
  },
  {
    id: 5,
    title: 'Новый маршрут: "Читинские холмы"',
    content: 'Представляем вашему вниманию новый маршрут "Читинские холмы" - идеальный выбор для райдеров среднего уровня. Маршрут включает живописные виды на город, лесные тропы и небольшие технические участки.',
    excerpt: 'Добавлен новый маршрут для райдеров среднего уровня',
    author: 'Дмитрий Смирнов',
    date: '2024-04-10',
    category: 'Новости',
    image: '/images/news-new-route.jpg',
    views: 189,
    tags: ['маршрут', 'холмы', 'средний уровень'],
    type: 'news'
  },
  {
    id: 6,
    title: 'Отчет о поездке: "Весенний старт 2024"',
    content: 'В минувшие выходные состоялась первая групповая поездка сезона "Весенний старт 2024". В мероприятии приняли участие 15 райдеров разного уровня подготовки. Погода была отличной, настроение - еще лучше!',
    excerpt: 'Успешно завершена первая групповая поездка сезона',
    author: 'Мария Иванова',
    date: '2024-04-08',
    category: 'Отчеты',
    image: '/images/news-spring-start.jpg',
    views: 156,
    tags: ['отчет', 'групповая поездка', 'весна'],
    type: 'news'
  },
  {
    id: 7,
    title: 'Обновление правил безопасности',
    content: 'В связи с началом нового сезона мы обновили правила безопасности для участников наших мероприятий. Теперь все участники обязаны использовать защитное снаряжение и следовать инструкциям инструкторов.',
    excerpt: 'Обновлены правила безопасности для участников мероприятий',
    author: 'Александр Петров',
    date: '2024-04-05',
    category: 'Объявления',
    image: '/images/news-safety-rules.jpg',
    views: 203,
    tags: ['безопасность', 'правила', 'снаряжение'],
    type: 'news'
  },
  {
    id: 8,
    title: 'Интервью с чемпионом Забайкалья',
    content: 'Мы взяли интервью у нашего земляка, чемпиона Забайкалья по маунтинбайку. Он поделился своими секретами подготовки, любимыми маршрутами и планами на будущий сезон.',
    excerpt: 'Эксклюзивное интервью с чемпионом Забайкалья',
    author: 'Екатерина Новикова',
    date: '2024-04-03',
    category: 'Новости',
    image: '/images/news-champion-interview.jpg',
    views: 178,
    tags: ['интервью', 'чемпион', 'маунтинбайк'],
    type: 'news'
  },
  {
    id: 9,
    title: 'Фотоотчет: Зимние покатушки',
    content: 'Несмотря на холодную погоду, наши энтузиасты продолжают кататься! Представляем фотоотчет с зимних покатушек по заснеженным тропам Читы.',
    excerpt: 'Красивый фотоотчет с зимних покатушек',
    author: 'Команда Bike Unity',
    date: '2024-03-28',
    category: 'Отчеты',
    image: '/images/news-winter-rides.jpg',
    views: 134,
    tags: ['фотоотчет', 'зима', 'покатушки'],
    type: 'news'
  },
];

const categories = [
  { name: 'Все', value: 'all' },
  { name: 'События', value: 'События' },
  { name: 'Новости', value: 'Новости' },
  { name: 'Объявления', value: 'Объявления' },
  { name: 'Отчеты', value: 'Отчеты' },
];

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

export default function Events() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  // Фильтрация новостей
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

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
              <NewspaperIcon className="h-5 w-5 mr-2" />
              Новости и события
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Новости и
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                события
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Будьте в курсе всех событий сообщества Bike Unity. 
              Новости, отчеты, объявления и многое другое!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Поиск */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Поиск новостей и событий..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
              />
              <NewspaperIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Фильтры по категориям */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Главные</span> новости
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-700">
                        {item.views} просмотров
                      </span>
                    </div>
                    {item.type === 'event' && item.difficulty && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                          {item.difficulty}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('ru-RU')}
                      </span>
                      <span className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        {item.author}
                      </span>
                      {item.type === 'event' && item.location && (
                        <span className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {item.location}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    {item.type === 'event' && item.participants && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">
                          Участников: <strong>{item.participants}</strong>
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/events/${item.id}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        {item.type === 'event' ? 'Подробнее' : 'Читать'}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Все <span className="gradient-text">новости</span>
            </h2>
            <p className="text-gray-600">
              {filteredNews.length} новостей найдено
            </p>
          </div>
          
          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -3 }}
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">
                        {item.category}
                      </span>
                    </div>
                    {item.type === 'event' && item.difficulty && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                          {item.difficulty}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString('ru-RU')}
                      </span>
                      <span className="flex items-center">
                        <EyeIcon className="h-3 w-3 mr-1" />
                        {item.views}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.excerpt}</p>
                    {item.type === 'event' && item.location && (
                      <div className="mb-3 text-xs text-gray-500">
                        <MapPinIcon className="h-3 w-3 inline mr-1" />
                        {item.location}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {item.tags.slice(0, 1).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/events/${item.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        {item.type === 'event' ? 'Подробнее' : 'Читать'} →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <NewspaperIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Новости не найдены</h3>
                <p className="text-gray-600 mb-6">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="btn-primary"
                >
                  Сбросить фильтры
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 