import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Навигация',
      links: [
        { name: 'Главная', href: '/' },
        { name: 'О нас', href: '/about' },
        { name: 'События', href: '/events' },
        { name: 'Маршруты', href: '/routes' },
        { name: 'Команда', href: '/team' },
        { name: 'Контакты', href: '/contact' },
      ],
    },
    {
      title: 'Социальные сети',
      links: [
        { name: 'ВКонтакте', href: 'https://vk.com/bikeunity' },
        { name: 'Telegram', href: 'https://t.me/bikeunity' },
        { name: 'Instagram', href: 'https://instagram.com/bikeunity' },
      ],
    },
    {
      title: 'Контакты',
      links: [
        { name: 'Москва, ул. Примерная, 123', href: '#' },
        { name: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
        { name: 'info@bikeunity.ru', href: 'mailto:info@bikeunity.ru' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container py-12">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="footer-section"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="footer-link flex items-center space-x-2"
                    >
                      {section.title === 'Контакты' && (
                        <>
                          {link.name.includes('@') ? (
                            <EnvelopeIcon className="h-5 w-5" />
                          ) : link.name.includes('+7') ? (
                            <PhoneIcon className="h-5 w-5" />
                          ) : (
                            <MapPinIcon className="h-5 w-5" />
                          )}
                        </>
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="footer-section"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              О Bike Unity
            </h3>
            <p className="text-gray-400 mb-4">
              Сообщество эндуро-мотоциклистов, организующее поездки по бездорожью
              и трейлам. Присоединяйтесь к нам для незабываемых приключений!
            </p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="btn-primary text-sm"
              >
                Связаться с нами
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            © {currentYear} Bike Unity. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 