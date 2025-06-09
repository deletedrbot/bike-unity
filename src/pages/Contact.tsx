import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    // Очистка формы после отправки
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-gray-300">
              У вас есть вопросы? Мы всегда рады помочь и ответить на них
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Примерная, д. 1<br />
                      Тренировочная база Bike Unity
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Телефон</h3>
                    <p className="text-gray-600">
                      <a href="tel:+7XXXXXXXXXX" className="hover:text-primary-600">
                        +7 (XXX) XXX-XX-XX
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@bikeunity.com" className="hover:text-primary-600">
                        info@bikeunity.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://vk.com/bikeunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600"
                  >
                    VK
                  </a>
                  <a
                    href="https://t.me/bikeunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://instagram.com/bikeunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 h-64 bg-gray-100 rounded-lg">
                {/* Здесь будет карта */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Карта будет добавлена позже
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Тема
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Выберите тему</option>
                    <option value="general">Общий вопрос</option>
                    <option value="event">Участие в поездке</option>
                    <option value="training">Обучение</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 