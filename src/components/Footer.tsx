import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'О нас',
      links: [
        { name: 'О сообществе', path: '/about' },
        { name: 'Наша миссия', path: '/about#mission' },
        { name: 'Команда', path: '/about#team' },
        { name: 'История', path: '/about#history' },
      ]
    },
    {
      title: 'События',
      links: [
        { name: 'Все события', path: '/events' },
        { name: 'Календарь', path: '/events#calendar' },
        { name: 'Регистрация', path: '/register' },
        { name: 'Фотоотчеты', path: '/gallery' },
      ]
    },
    {
      title: 'Маршруты',
      links: [
        { name: 'Все маршруты', path: '/routes' },
        { name: 'По сложности', path: '/routes#difficulty' },
        { name: 'Карта маршрутов', path: '/routes#map' },
        { name: 'Отзывы', path: '/routes#reviews' },
      ]
    },
    {
      title: 'Поддержка',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Правила', path: '/rules' },
        { name: 'Безопасность', path: '/safety' },
        { name: 'Контакты', path: '/contact' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/bikeunity', icon: '📱' },
    { name: 'VK', url: 'https://vk.com/bikeunity', icon: '💬' },
    { name: 'YouTube', url: 'https://youtube.com/bikeunity', icon: '📺' },
  ];

  return (
    <footer className="footer relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-secondary-100 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="container">
          {/* Main Footer Content */}
          <div className="footer-content py-16">
            {/* Company Info */}
            <div className="footer-section">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/logo.svg" 
                  alt="Bike Unity" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent">Bike Unity</span>
              </div>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Сообщество велосипедистов, объединяющее любителей активного отдыха и приключений на двух колесах.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="contact-info-item">
                  <MapPinIcon className="h-5 w-5 text-primary-600" />
                  <span className="text-secondary-600">г. Чита, Забайкальский край</span>
                </div>
                <div className="contact-info-item">
                  <PhoneIcon className="h-5 w-5 text-primary-600" />
                  <a href="tel:+73022212345" className="footer-link">+7 (3022) 21-23-45</a>
                </div>
                <div className="contact-info-item">
                  <EnvelopeIcon className="h-5 w-5 text-primary-600" />
                  <a href="mailto:info@bikeunity.ru" className="footer-link">info@bikeunity.ru</a>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="footer-link hover:text-primary-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-200 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-secondary-600 text-sm">
                © 2024 Bike Unity. Все права защищены.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-secondary-600 text-sm">Следите за нами:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-secondary-600 hover:text-primary-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export { Footer };
export default Footer; 