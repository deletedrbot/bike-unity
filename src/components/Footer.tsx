import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'О нас',
      links: [
        { name: 'О сообществе', href: '/about' },
        { name: 'Наша команда', href: '/team' },
        { name: 'Маршруты', href: '/routes' },
        { name: 'События', href: '/events' },
      ],
    },
    {
      title: 'Активности',
      links: [
        { name: 'Групповые поездки', href: '/events' },
        { name: 'Обучение', href: '/services#training' },
        { name: 'Соревнования', href: '/events#competitions' },
        { name: 'Фотоотчеты', href: '/gallery' },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Правила безопасности', href: '/safety' },
        { name: 'Снаряжение', href: '/equipment' },
        { name: 'Помощь', href: '/help' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo-white.svg"
                alt="Bike Unity"
                className="h-12 w-auto fade-in-up"
              />
            </Link>
            <p className="mt-4 text-gray-400">
              Сообщество энтузиастов эндуро мотоциклов в Чите. 
              Наша страсть — это поездки по самым красивым местам города Читы. 
              Каждый поворот открывает перед нами новые горизонты и дарит незабываемые впечатления.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://t.me/bikeunity" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.48.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.121.13.156.307.165.43-.001.138-.02.355-.075.527z"/>
                </svg>
              </a>
              <a href="https://vk.com/bikeunitychita" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 8.93v-1.5c0-.83-.67-1.5-1.5-1.5h-3.14c-.83 0-1.5.67-1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5h3.14c.83 0 1.5-.67 1.5-1.5zm-4.57 0v-1.5c0-.83.67-1.5 1.5-1.5h3.14c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5h-3.14c-.83 0-1.5-.67-1.5-1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="fade-in-up">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3 fade-in-up">
              <MapPinIcon className="h-6 w-6 text-blue-500 img-bw" />
              <div>
                <span className="text-gray-400">г. Чита</span>
                <br />
                <span className="text-gray-300 text-sm">Забайкальский край</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 fade-in-up">
              <PhoneIcon className="h-6 w-6 text-blue-500 img-bw" />
              <div>
                <a
                  href="tel:+79699300120"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-2"
                >
                  +7 (969) 930-01-20
                </a>
                <br />
                <span className="text-gray-300 text-sm">Основной контакт</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 fade-in-up">
              <EnvelopeIcon className="h-6 w-6 text-blue-500 img-bw" />
              <div>
                <a
                  href="mailto:info@bikeunitychita.ru"
                  className="text-gray-400 hover:text-white transition-colors hover:translate-x-2"
                >
                  info@bikeunitychita.ru
                </a>
                <br />
                <span className="text-gray-300 text-sm">Общие вопросы</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 fade-in-up">
              <ClockIcon className="h-6 w-6 text-blue-500 img-bw" />
              <div>
                <span className="text-gray-400">Время работы</span>
                <br />
                <span className="text-gray-300 text-sm">Пн-Вс 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} Bike Unity. Все права защищены.</p>
              <p className="mt-1">Сообщество эндуро мотоциклистов</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/contact"
                className="btn-animated text-lg px-8 py-3"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 