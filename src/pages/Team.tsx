import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  description: string;
  image: string;
  email?: string;
  phone?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Лидер сообщества',
    experience: '10 лет опыта',
    description: 'Основатель сообщества, опытный инструктор и организатор мероприятий. Помогает новичкам освоиться в мире эндуро.',
    image: '/images/team-member-1.svg',
    email: 'alex@bikeunity.ru',
    phone: '+7 (999) 123-45-67',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Инструктор',
    experience: '8 лет опыта',
    description: 'Профессиональный инструктор по эндуро, специалист по технике вождения и безопасности.',
    image: '/images/team-member-2.svg',
    email: 'maria@bikeunity.ru',
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Планировщик маршрутов',
    experience: '12 лет опыта',
    description: 'Эксперт по разработке маршрутов, знает все тропы и особенности местности.',
    image: '/images/team-member-3.svg',
    phone: '+7 (999) 765-43-21',
  },
  {
    id: 4,
    name: 'Екатерина Новикова',
    role: 'Организатор событий',
    experience: '5 лет опыта',
    description: 'Отвечает за организацию мероприятий и коммуникацию с участниками сообщества.',
    image: '/images/team-member-4.svg',
    email: 'ekaterina@bikeunity.ru',
    phone: '+7 (999) 987-65-43',
  },
];

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

export default function Team() {
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
              Наша команда
            </h1>
            <p className="text-xl text-blue-100">
              Знакомьтесь с людьми, которые делают Bike Unity таким особенным. 
              Наша команда объединяет опытных профессионалов и энтузиастов эндуро.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover:translate-x-2 fade-in-up"
              >
                <div className="aspect-w-1 aspect-h-1 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover img-bw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-blue-800 font-medium mb-2">
                    {member.role}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {member.experience}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-gray-600 hover:text-blue-800 transition-colors fade-in-up"
                      >
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        {member.email}
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center text-gray-600 hover:text-blue-800 transition-colors fade-in-up"
                      >
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        {member.phone}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="fade-in-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Хотите присоединиться к команде?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы всегда рады новым талантливым людям в нашей команде. 
              Если вы разделяете нашу любовь к эндуро и хотите внести свой вклад в развитие сообщества, 
              свяжитесь с нами!
            </p>
            <a
              href="/contact"
              className="btn-animated text-lg px-8 py-3"
            >
              Связаться с нами
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 