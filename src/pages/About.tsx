import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О нашем сообществе</h1>
            <p className="text-xl text-gray-300">
              Мы объединяем людей, которые разделяют страсть к эндуро-мотоциклам и любовь к приключениям
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-gray-600 mb-6">
                Bike Unity создано для объединения эндуро-мотоциклистов, развития этого вида спорта
                и популяризации безопасного и ответственного катания по бездорожью.
              </p>
              <p className="text-gray-600">
                Мы стремимся создать дружелюбное сообщество, где каждый может найти единомышленников,
                получить новые навыки и испытать незабываемые приключения.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img
                src="/images/about-mission.jpg"
                alt="Enduro riders in nature"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Безопасность',
                description: 'Мы придерживаемся строгих правил безопасности и обучаем правильному поведению на трассе',
                icon: '🛡️',
              },
              {
                title: 'Развитие',
                description: 'Постоянно совершенствуем навыки и помогаем другим становиться лучше',
                icon: '📈',
              },
              {
                title: 'Уважение',
                description: 'Уважаем природу, других участников движения и местное население',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наша история</h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <h3 className="text-xl font-semibold mb-2">2020</h3>
                <p className="text-gray-600">
                  Основание сообщества Bike Unity группой энтузиастов эндуро-спорта
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <h3 className="text-xl font-semibold mb-2">2021</h3>
                <p className="text-gray-600">
                  Организация первых групповых поездок и начало программы обучения новичков
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <p className="text-gray-600">
                  Расширение сообщества и создание собственной базы маршрутов
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative pl-8 border-l-2 border-primary-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-gray-600">
                  Запуск программы для детей и подростков, развитие инфраструктуры
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 