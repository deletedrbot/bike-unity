import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  ArrowLeftIcon,
  ClockIcon,
  StarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { contactInfo } from '../data/contactInfo';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  participants: number;
  maxParticipants: number;
  image: string;
  description: string;
  longDescription: string;
  requirements: string[];
  schedule: string[];
  organizer: string;
  price: string;
}

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      const mockEvent: Event = {
        id: parseInt(id || '1'),
        title: 'Весенний старт',
        date: '15 апреля 2024',
        time: '09:00',
        location: 'Центральный парк Читы',
        difficulty: 'Начинающий',
        participants: 12,
        maxParticipants: 20,
        image: '/images/event-1.jpg',
        description: 'Открытие сезона для начинающих райдеров. Базовые навыки и безопасность.',
        longDescription: 'Приглашаем всех желающих на открытие велосипедного сезона! Это отличная возможность для начинающих райдеров познакомиться с сообществом, освоить базовые навыки безопасного катания и найти новых друзей. Маршрут пройдет по живописным местам Центрального парка Читы.',
        requirements: [
          'Велосипед в исправном состоянии',
          'Шлем (обязательно)',
          'Удобная одежда и обувь',
          'Вода и легкий перекус',
          'Хорошее настроение'
        ],
        schedule: [
          '09:00 - Сбор участников',
          '09:30 - Инструктаж по безопасности',
          '10:00 - Начало маршрута',
          '12:00 - Привал и общение',
          '13:00 - Продолжение маршрута',
          '15:00 - Завершение мероприятия'
        ],
        organizer: 'Александр Петров',
        price: 'Бесплатно'
      };
      setEvent(mockEvent);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Событие не найдено</h2>
          <Link to="/events" className="btn-primary">
            Вернуться к событиям
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-600/20"></div>
        
        <div className="container relative z-10">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Link to="/events" className="inline-flex items-center text-white hover:text-primary-100 transition-colors">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Назад к событиям
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              {event.date} • {event.time}
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                {event.title}
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-primary-100 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {event.description}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className={`badge ${
                event.difficulty === 'Начинающий' ? 'badge-primary' :
                event.difficulty === 'Продвинутый' ? 'badge-accent' :
                'badge-secondary'
              }`}>
                {event.difficulty}
              </span>
              <span className="badge badge-secondary">
                {event.participants}/{event.maxParticipants} участников
              </span>
              <span className="badge badge-primary">
                {event.price}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">О событии</h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  {event.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-6">Расписание</h3>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                      <ClockIcon className="w-5 h-5 text-primary-500 mr-4" />
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6">Требования</h3>
                <div className="space-y-3">
                  {event.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-secondary-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="card-hover p-8 sticky top-8"
              >
                <h3 className="text-2xl font-bold mb-6">Информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 text-primary-500 mr-3" />
                    <div>
                      <div className="font-semibold text-secondary-900">{event.date}</div>
                      <div className="text-secondary-600">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 text-primary-500 mr-3" />
                    <div>
                      <div className="font-semibold text-secondary-900">Место встречи</div>
                      <div className="text-secondary-600">{event.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <UserGroupIcon className="w-5 h-5 text-primary-500 mr-3" />
                    <div>
                      <div className="font-semibold text-secondary-900">Участники</div>
                      <div className="text-secondary-600">{event.participants}/{event.maxParticipants}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-primary-500 mr-3" />
                    <div>
                      <div className="font-semibold text-secondary-900">Организатор</div>
                      <div className="text-secondary-600">{event.organizer}</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-secondary-200">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{event.price}</div>
                    <div className="text-secondary-600 mb-6">Стоимость участия</div>
                    
                    <Link to="/contact" className="btn-primary w-full mb-4">
                      Записаться на событие
                    </Link>
                    
                    <Link to={`tel:${contactInfo.phone}`} className="btn-outline w-full">
                      Позвонить организатору
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Есть вопросы о событии?
            </h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с организатором или напишите нам, и мы ответим на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  Связаться с нами
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/events" className="btn-outline text-lg px-10 py-4">
                  Все события
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail; 