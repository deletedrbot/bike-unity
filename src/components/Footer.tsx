import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О нас */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bike Unity</h3>
            <p className="text-gray-400">
              Сообщество эндуро-мотоциклистов, объединенных любовью к бездорожью и приключениям.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  Анонсы
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-gray-400 hover:text-white transition-colors">
                  Маршруты
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Команда
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@bikeunity.com</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="https://vk.com/bikeunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                VK
              </a>
              <a
                href="https://t.me/bikeunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://instagram.com/bikeunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bike Unity. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 