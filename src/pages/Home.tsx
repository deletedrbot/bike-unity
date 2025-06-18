import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  MapPinIcon, 
  UsersIcon, 
  ArrowRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { contactInfo } from '../data/contactInfo';

const Home: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Участников', icon: UsersIcon, color: 'from-blue-500 to-blue-600' },
    { number: '20+', label: 'Маршрутов', icon: MapPinIcon, color: 'from-green-500 to-green-600' },
    { number: '30+', label: 'Событий', icon: CalendarIcon, color: 'from-purple-500 to-purple-600' },
    { number: '3+', label: 'Года опыта', icon: SparklesIcon, color: 'from-yellow-500 to-yellow-600' },
  ];

  const features = [
    {
      icon: HeartIcon,
      title: 'Сообщество',
      description: 'Присоединяйтесь к дружному сообществу велосипедистов в Чите',
      color: 'from-pink-500 to-rose-500',
      iconColor: 'text-pink-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Безопасность',
      description: 'Все маршруты проверены и безопасны для катания',
      color: 'from-blue-500 to-indigo-500',
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: SparklesIcon,
      title: 'Приключения',
      description: 'Откройте новые места Забайкалья и получите незабываемые впечатления',
      color: 'from-purple-500 to-violet-500',
      iconColor: 'text-purple-600',
      bgColor: 'from-purple-50 to-violet-50'
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Весенний велопробег',
      date: '15 апреля 2024',
      location: 'Центральный парк Читы',
      participants: 25,
      image: '/images/event-1.jpg',
      difficulty: 'Начинающий'
    },
    {
      id: 2,
      title: 'Ночная прогулка',
      date: '22 апреля 2024',
      location: 'Набережная Читы',
      participants: 18,
      image: '/images/event-2.jpg',
      difficulty: 'Средний'
    },
    {
      id: 3,
      title: 'Горный маршрут',
      date: '29 апреля 2024',
      location: 'Окрестности Читы',
      participants: 12,
      image: '/images/event-3.jpg',
      difficulty: 'Продвинутый'
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
              Присоединяйтесь к сообществу
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Добро пожаловать в
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                Bike Unity
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactInfo.description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/events" className="btn-primary text-lg px-10 py-4">
                  Найти события
                  <ArrowRightIcon className="ml-3 h-6 w-6" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/routes" className="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  <PlayIcon className="mr-3 h-6 w-6" />
                  Посмотреть маршруты
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section gradient-bg">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stats-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`icon-wrapper mb-6 bg-gradient-to-br ${stat.color} text-white`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              Почему выбирают нас
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Все, что нужно для
              <span className="gradient-text"> приключений</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Мы создаем лучшее сообщество велосипедистов с заботой о каждом участнике
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="card-hover p-8 text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`icon-wrapper mb-6 bg-gradient-to-br ${feature.bgColor} ${feature.iconColor}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section gradient-bg">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
              Ближайшие события
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к
              <span className="gradient-text"> приключениям?</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к нашим предстоящим велопрогулкам и мероприятиям
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                className="card-hover overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`badge ${
                      event.difficulty === 'Начинающий' ? 'badge-primary' :
                      event.difficulty === 'Продвинутый' ? 'badge-accent' :
                      'badge-secondary'
                    }`}>
                      {event.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 text-secondary-600 mb-6">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-3 text-primary-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-3 text-primary-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="h-5 w-5 mr-3 text-primary-500" />
                      {event.participants} участников
                    </div>
                  </div>
                  <Link 
                    to={`/events/${event.id}`}
                    className="btn-primary w-full"
                  >
                    Подробнее
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/events" className="btn-secondary text-lg px-10 py-4">
                Все события
                <ArrowRightIcon className="ml-3 h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы присоединиться?
            </h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Станьте частью нашего сообщества и откройте для себя новые маршруты и друзей
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  Связаться с нами
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn-outline text-lg px-10 py-4">
                  Узнать больше
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 