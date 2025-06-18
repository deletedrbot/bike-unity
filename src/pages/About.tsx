import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { contactInfo } from '../data/contactInfo';

// Импортируем изображения
import aboutStory from '../assets/images/about-story.svg';
import teamMember1 from '../assets/images/team-member-1.svg';
import teamMember2 from '../assets/images/team-member-2.svg';
import teamMember3 from '../assets/images/team-member-3.svg';
import teamMember4 from '../assets/images/team-member-4.svg';

const values = [
  {
    name: 'Сообщество',
    description: 'Мы создаем дружелюбное пространство, где каждый может найти единомышленников и новых друзей в Чите.',
    icon: UserGroupIcon,
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-600',
    bgColor: 'from-pink-50 to-rose-50'
  },
  {
    name: 'Страсть',
    description: 'Наша любовь к эндуро и MTB объединяет нас и вдохновляет на новые достижения.',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
    iconColor: 'text-red-600',
    bgColor: 'from-red-50 to-pink-50'
  },
  {
    name: 'Безопасность',
    description: 'Мы уделяем особое внимание безопасности каждого участника наших мероприятий.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-indigo-500',
    iconColor: 'text-blue-600',
    bgColor: 'from-blue-50 to-indigo-50'
  },
  {
    name: 'Развитие',
    description: 'Мы постоянно развиваемся, осваиваем новые маршруты и совершенствуем свои навыки.',
    icon: SparklesIcon,
    color: 'from-purple-500 to-violet-500',
    iconColor: 'text-purple-600',
    bgColor: 'from-purple-50 to-violet-50'
  },
];

const stats = [
  { number: '100+', label: 'Участников', icon: UserGroupIcon, color: 'from-blue-500 to-blue-600' },
  { number: '20+', label: 'Маршрутов', icon: MapPinIcon, color: 'from-green-500 to-green-600' },
  { number: '30+', label: 'Событий в год', icon: CalendarIcon, color: 'from-purple-500 to-purple-600' },
  { number: '3+', label: 'Года опыта', icon: StarIcon, color: 'from-yellow-500 to-yellow-600' },
];

const teamMembers = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Лидер сообщества',
    experience: '5 лет',
    description: 'Опытный райдер и инструктор. Помогает новичкам освоить базовые навыки.',
    image: teamMember1,
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Инструктор',
    experience: '4 года',
    description: 'Профессиональный инструктор по эндуро. Проводит обучение для начинающих.',
    image: teamMember2,
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Планировщик маршрутов',
    experience: '6 лет',
    description: 'Эксперт по планированию маршрутов. Знает все тропы Читы и окрестностей.',
    image: teamMember3,
  },
  {
    id: 4,
    name: 'Екатерина Новикова',
    role: 'Организатор событий',
    experience: '3 года',
    description: 'Отвечает за организацию поездок и мероприятий сообщества.',
    image: teamMember4,
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

const About: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) return <LoadingSpinner />;

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
              О нашем сообществе
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                О сообществе
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
          </div>
        </div>
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

      {/* Values Section */}
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
              Наши ценности
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Принципы, которые
              <span className="gradient-text"> объединяют нас</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Мы руководствуемся следующими принципами в нашей деятельности
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.name}
                className="card-hover p-8 text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`icon-wrapper mb-6 bg-gradient-to-br ${value.bgColor} ${value.iconColor}`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.name}</h3>
                <p className="text-secondary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section gradient-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutStory}
                alt="Наша история"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
                Наша история
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Как все
                <span className="gradient-text"> начиналось</span>
              </h3>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Bike Unity началось с небольшой группы энтузиастов в Чите, которые хотели делиться своими маршрутами и опытом. Сегодня мы — одно из крупнейших велосипедных сообществ Забайкальского края.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Мы гордимся нашими достижениями и всегда открыты для новых участников!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Наша команда
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Люди, которые делают
              <span className="gradient-text"> сообщество</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Познакомьтесь с людьми, которые делают наше сообщество особенным
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="card-hover p-8 text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </div>
                  <div className="text-secondary-500 text-sm mb-4">
                    Опыт: {member.experience}
                  </div>
                  <p className="text-secondary-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Станьте частью нашего сообщества
            </h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к нам и станьте частью увлекательного мира эндуро и MTB
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  Связаться с нами
                  <ArrowRightIcon className="ml-3 h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/events" className="btn-outline text-lg px-10 py-4">
                  Посмотреть события
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 