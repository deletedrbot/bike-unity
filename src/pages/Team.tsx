import React from 'react';
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
    role: 'Руководитель сообщества',
    experience: '10 лет',
    description: 'Основатель сообщества Bike Unity. Профессиональный инструктор по эндуро-спорту с многолетним опытом организации поездок и обучения.',
    image: '/images/team-leader.jpg',
    email: 'alex@bikeunity.com',
    phone: '+7 (XXX) XXX-XX-XX',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Инструктор',
    experience: '8 лет',
    description: 'Сертифицированный инструктор по эндуро-спорту. Специализируется на обучении начинающих райдеров и организации женских поездок.',
    image: '/images/team-instructor1.jpg',
    email: 'maria@bikeunity.com',
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Маршрутолог',
    experience: '12 лет',
    description: 'Эксперт по разработке маршрутов и организации многодневных поездок. Знает все тропы Подмосковья и Карелии.',
    image: '/images/team-route.jpg',
    email: 'dmitry@bikeunity.com',
    phone: '+7 (XXX) XXX-XX-XX',
  },
  {
    id: 4,
    name: 'Екатерина Новикова',
    role: 'Координатор мероприятий',
    experience: '5 лет',
    description: 'Организует и координирует все мероприятия сообщества. Отвечает за коммуникацию с участниками и партнерами.',
    image: '/images/team-coordinator.jpg',
    email: 'ekaterina@bikeunity.com',
  },
];

const Team: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наша команда</h1>
            <p className="text-xl text-gray-300">
              Профессионалы, которые делают каждую поездку незабываемой
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold">
                      {member.role}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Опыт: {member.experience}
                    </p>
                    <p className="mt-4 text-gray-600">
                      {member.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      {member.email && (
                        <div className="flex items-center text-gray-600">
                          <EnvelopeIcon className="h-5 w-5 mr-2" />
                          <a href={`mailto:${member.email}`} className="hover:text-primary-600">
                            {member.email}
                          </a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center text-gray-600">
                          <PhoneIcon className="h-5 w-5 mr-2" />
                          <a href={`tel:${member.phone}`} className="hover:text-primary-600">
                            {member.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Хотите присоединиться к команде?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мы всегда рады новым талантливым людям, которые разделяют нашу страсть к эндуро-спорту
            и готовы внести свой вклад в развитие сообщества.
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team; 