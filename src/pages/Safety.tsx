import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserGroupIcon,
  MapIcon,
  ClockIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

interface SafetyRule {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'equipment' | 'behavior' | 'emergency' | 'preparation';
  priority: 'high' | 'medium' | 'low';
}

const safetyRules: SafetyRule[] = [
  {
    id: 1,
    title: 'Обязательное использование шлема',
    description: 'Шлем должен быть правильно подобран по размеру и застегнут. Заменяйте шлем после любого удара.',
    icon: ShieldCheckIcon,
    category: 'equipment',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Проверка велосипеда перед поездкой',
    description: 'Проверьте тормоза, шины, цепь и все крепления перед каждой поездкой.',
    icon: CheckCircleIcon,
    category: 'equipment',
    priority: 'high'
  },
  {
    id: 3,
    title: 'Соблюдение правил дорожного движения',
    description: 'Велосипедисты обязаны соблюдать ПДД. Двигайтесь по правой стороне дороги.',
    icon: ExclamationTriangleIcon,
    category: 'behavior',
    priority: 'high'
  },
  {
    id: 4,
    title: 'Использование светоотражающих элементов',
    description: 'В темное время суток обязательно используйте фару, задний фонарь и светоотражающие элементы.',
    icon: ShieldCheckIcon,
    category: 'equipment',
    priority: 'high'
  },
  {
    id: 5,
    title: 'Соблюдение дистанции',
    description: 'Держите безопасную дистанцию между участниками группы (минимум 3-5 метров).',
    icon: UserGroupIcon,
    category: 'behavior',
    priority: 'medium'
  },
  {
    id: 6,
    title: 'Сигнализация о маневрах',
    description: 'Используйте жесты для сигнализации о поворотах, остановках и препятствиях.',
    icon: ExclamationTriangleIcon,
    category: 'behavior',
    priority: 'medium'
  },
  {
    id: 7,
    title: 'Проверка погодных условий',
    description: 'Перед поездкой проверьте прогноз погоды. Не катайтесь в экстремальных условиях.',
    icon: ClockIcon,
    category: 'preparation',
    priority: 'medium'
  },
  {
    id: 8,
    title: 'Изучение маршрута',
    description: 'Изучите маршрут заранее, отметьте опасные участки и места для отдыха.',
    icon: MapIcon,
    category: 'preparation',
    priority: 'medium'
  },
  {
    id: 9,
    title: 'Наличие аптечки',
    description: 'Всегда берите с собой аптечку первой помощи и уметь ею пользоваться.',
    icon: ShieldCheckIcon,
    category: 'emergency',
    priority: 'high'
  },
  {
    id: 10,
    title: 'Средства связи',
    description: 'Возьмите с собой мобильный телефон с зарядкой и номера экстренных служб.',
    icon: PhoneIcon,
    category: 'emergency',
    priority: 'high'
  },
  {
    id: 11,
    title: 'Запас воды и еды',
    description: 'Возьмите достаточное количество воды и легкий перекус для восстановления сил.',
    icon: CheckCircleIcon,
    category: 'preparation',
    priority: 'medium'
  },
  {
    id: 12,
    title: 'Групповые поездки',
    description: 'Не катайтесь в одиночку в отдаленных местах. Всегда сообщайте о маршруте.',
    icon: UserGroupIcon,
    category: 'behavior',
    priority: 'high'
  }
];

const emergencyContacts = [
  {
    name: 'Скорая помощь',
    phone: '103',
    description: 'Медицинская помощь'
  },
  {
    name: 'Полиция',
    phone: '102',
    description: 'Правоохранительные органы'
  },
  {
    name: 'Спасатели',
    phone: '101',
    description: 'МЧС России'
  },
  {
    name: 'Bike Unity',
    phone: '+7 (3022) 21-23-45',
    description: 'Наша команда поддержки'
  }
];

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

export default function Safety() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'equipment' | 'behavior' | 'emergency' | 'preparation'>('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  const categories = [
    { name: 'Все', value: 'all' },
    { name: 'Снаряжение', value: 'equipment' },
    { name: 'Поведение', value: 'behavior' },
    { name: 'Чрезвычайные ситуации', value: 'emergency' },
    { name: 'Подготовка', value: 'preparation' },
  ];

  const filteredRules = selectedCategory === 'all' 
    ? safetyRules 
    : safetyRules.filter(rule => rule.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-600/20"></div>
        
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
            >
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              Безопасность превыше всего
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                Правила
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-100 via-white to-orange-100 bg-clip-text text-transparent">
                безопасности
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Безопасность - наш главный приоритет. Изучите правила и рекомендации 
              для безопасного катания на велосипеде.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Safety Rules */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Основные</span> правила
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Соблюдение этих правил поможет избежать травм и сделать катание безопасным
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 border border-gray-200 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value as any)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRules.map((rule, index) => (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl ${
                  rule.priority === 'high' 
                    ? 'border-l-red-500' 
                    : rule.priority === 'medium' 
                    ? 'border-l-yellow-500' 
                    : 'border-l-green-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    rule.priority === 'high' 
                      ? 'bg-red-100 text-red-600' 
                      : rule.priority === 'medium' 
                      ? 'bg-yellow-100 text-yellow-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    <rule.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{rule.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{rule.description}</p>
                    <div className="mt-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        rule.priority === 'high' 
                          ? 'bg-red-100 text-red-700' 
                          : rule.priority === 'medium' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {rule.priority === 'high' ? 'Высокий приоритет' : 
                         rule.priority === 'medium' ? 'Средний приоритет' : 'Низкий приоритет'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Экстренные</span> контакты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Сохраните эти номера в телефоне на случай чрезвычайной ситуации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.name}</h3>
                <p className="text-gray-600 mb-3">{contact.description}</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Checklist */}
      <section className="section">
        <div className="container">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Чек-лист</span> безопасности
              </h2>
              <p className="text-lg text-gray-600">
                Проверьте этот список перед каждой поездкой
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Снаряжение</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Защитный шлем</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Исправные тормоза</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Накачанные шины</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Светоотражающие элементы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Аптечка первой помощи</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Подготовка</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Изученный маршрут</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Проверка погоды</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Заряженный телефон</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Вода и перекус</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Удобная одежда</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Остались <span className="gradient-text">вопросы</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Наша команда всегда готова помочь и ответить на ваши вопросы о безопасности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Связаться с нами
              </Link>
              <Link to="/events" className="btn-outline text-lg px-8 py-4">
                Найти безопасные маршруты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 