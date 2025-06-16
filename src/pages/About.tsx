import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Импортируем изображения
import aboutStory from '../assets/images/about-story.svg';
import teamMember1 from '../assets/images/team-member-1.svg';
import teamMember2 from '../assets/images/team-member-2.svg';
import teamMember3 from '../assets/images/team-member-3.svg';
import teamMember4 from '../assets/images/team-member-4.svg';

const values = [
  {
    name: 'Сообщество',
    description: 'Мы создаем дружелюбное пространство, где каждый может найти единомышленников и новых друзей.',
    icon: UserGroupIcon,
  },
  {
    name: 'Страсть',
    description: 'Наша любовь к эндуро и приключениям объединяет нас и вдохновляет на новые достижения.',
    icon: HeartIcon,
  },
  {
    name: 'Безопасность',
    description: 'Мы уделяем особое внимание безопасности каждого участника наших мероприятий.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Развитие',
    description: 'Мы постоянно развиваемся, осваиваем новые маршруты и совершенствуем свои навыки.',
    icon: SparklesIcon,
  },
];

const stats = [
  { label: 'Участников', value: '500+' },
  { label: 'Маршрутов', value: '30+' },
  { label: 'Событий в год', value: '50+' },
  { label: 'Лет опыта', value: '10+' },
];

const teamMembers = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Лидер сообщества',
    experience: '15 лет',
    description: 'Опытный райдер и инструктор. Помогает новичкам освоить базовые навыки.',
    image: teamMember1,
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Инструктор',
    experience: '10 лет',
    description: 'Профессиональный инструктор по эндуро. Проводит обучение для начинающих.',
    image: teamMember2,
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Планировщик маршрутов',
    experience: '12 лет',
    description: 'Эксперт по планированию маршрутов. Знает все тропы Подмосковья.',
    image: teamMember3,
  },
  {
    id: 4,
    name: 'Екатерина Новикова',
    role: 'Организатор событий',
    experience: '8 лет',
    description: 'Отвечает за организацию поездок и мероприятий сообщества.',
    image: teamMember4,
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-story.svg"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              О сообществе Bike Unity
            </h1>
            <p className="text-xl text-blue-100">
              Мы объединяем любителей эндуро-мотоциклов, создавая пространство для общения, 
              развития и приключений. Наша миссия — сделать эндуро доступным и безопасным для всех.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы руководствуемся следующими принципами в нашей деятельности
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/about-story.svg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.experience}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Станьте частью нашего сообщества
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к нам и станьте частью увлекательного мира эндуро
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3"
              >
                Связаться с нами
              </a>
              <a
                href="/events"
                className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Посмотреть события
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 