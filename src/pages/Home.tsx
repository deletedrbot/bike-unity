import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  MapIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// Импортируем изображения
import heroBg from '../assets/images/hero-bg.svg';
import event1 from '../assets/images/event-1.svg';
import event2 from '../assets/images/event-2.svg';
import event3 from '../assets/images/event-3.svg';

const features = [
  {
    name: 'Сообщество',
    description: 'Присоединяйтесь к активному сообществу эндуро-мотоциклистов',
    icon: UserGroupIcon,
  },
  {
    name: 'Маршруты',
    description: 'Исследуйте новые маршруты разной сложности',
    icon: MapIcon,
  },
  {
    name: 'События',
    description: 'Участвуйте в регулярных поездках и мероприятиях',
    icon: CalendarIcon,
  },
  {
    name: 'Безопасность',
    description: 'Обеспечиваем безопасность на всех маршрутах',
    icon: ShieldCheckIcon,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Весенний старт',
    date: '15 апреля 2024',
    difficulty: 'Начинающий',
    image: event1,
  },
  {
    id: 2,
    title: 'Карельский экстрим',
    date: '20 мая 2024',
    difficulty: 'Продвинутый',
    image: event2,
  },
  {
    id: 3,
    title: 'Валдайские холмы',
    date: '5 июня 2024',
    difficulty: 'Средний',
    image: event3,
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Добро пожаловать в Bike Unity
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Сообщество эндуро-мотоциклистов, объединенных любовью к приключениям и свободе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="btn-primary text-lg px-8 py-3"
              >
                Ближайшие события
              </Link>
              <Link
                to="/about"
                className="btn-secondary text-lg px-8 py-3"
              >
                Узнать больше
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем безопасное и дружелюбное пространство для всех любителей эндуро
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ближайшие события
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Присоединяйтесь к нашим поездкам и мероприятиям
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {event.difficulty}
                    </span>
                    <Link
                      to={`/events/${event.id}`}
                      className="text-blue-800 hover:text-blue-900 font-medium"
                    >
                      Подробнее →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="btn-primary text-lg px-8 py-3"
            >
              Все события
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы присоединиться к нам?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Станьте частью нашего сообщества и откройте для себя мир эндуро
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Связаться с нами
              </Link>
              <Link
                to="/about"
                className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Узнать больше
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 