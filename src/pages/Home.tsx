import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
          <img
            src="/images/hero-bg.jpg"
            alt="Enduro motorcycle in nature"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bike Unity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Сообщество эндуро-мотоциклистов, объединенных страстью к приключениям
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Узнать больше
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему мы?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Опытные инструкторы',
                description: 'Наши инструкторы имеют многолетний опыт в эндуро-спорте и готовы поделиться знаниями',
                icon: '👨‍🏫',
              },
              {
                title: 'Интересные маршруты',
                description: 'Разработанные маршруты разной сложности для райдеров любого уровня',
                icon: '🗺️',
              },
              {
                title: 'Дружное сообщество',
                description: 'Присоединяйтесь к нашему дружному сообществу единомышленников',
                icon: '👥',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы к приключениям?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Присоединяйтесь к нашему сообществу и станьте частью увлекательных поездок
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Связаться с нами
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 