import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Импортируем изображения
import event1 from '../assets/images/event-1.svg';
import event2 from '../assets/images/event-2.svg';
import event3 from '../assets/images/event-3.svg';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  participants: number;
  maxParticipants: number;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Весенний старт',
    date: '15 апреля 2024',
    location: 'Подмосковье',
    difficulty: 'Начинающий',
    participants: 12,
    maxParticipants: 20,
    image: event1,
    description: 'Открытие сезона для начинающих райдеров. Базовые навыки и безопасность.',
  },
  {
    id: 2,
    title: 'Карельский экстрим',
    date: '20 мая 2024',
    location: 'Карелия',
    difficulty: 'Продвинутый',
    participants: 8,
    maxParticipants: 15,
    image: event2,
    description: 'Экстремальный маршрут по карельским лесам и горам. Только для опытных райдеров.',
  },
  {
    id: 3,
    title: 'Валдайские холмы',
    date: '5 июня 2024',
    location: 'Валдай',
    difficulty: 'Средний',
    participants: 15,
    maxParticipants: 25,
    image: event3,
    description: 'Живописный маршрут по Валдайской возвышенности. Подходит для райдеров среднего уровня.',
  },
];

const difficultyColors = {
  'Начинающий': 'bg-green-100 text-green-800',
  'Средний': 'bg-yellow-100 text-yellow-800',
  'Продвинутый': 'bg-red-100 text-red-800',
};

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

export default function Events() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen pt-20 fade-in-up">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-blue-800" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto fade-in-up"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              События и поездки
            </h1>
            <p className="text-xl text-blue-100">
              Присоединяйтесь к нашим поездкам и станьте частью сообщества Bike Unity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover:translate-x-2 fade-in-up"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover img-bw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[event.difficulty]}`}>
                      {event.difficulty}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <UserGroupIcon className="w-5 h-5 mr-1" />
                      <span className="text-sm">
                        {event.participants}/{event.maxParticipants}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center justify-center w-full btn-animated"
                  >
                    Подробнее
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center fade-in-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Хотите организовать свое событие?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Свяжитесь с нами, и мы поможем организовать поездку вашей мечты
            </p>
            <Link
              to="/contact"
              className="btn-animated text-lg px-8 py-3"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 