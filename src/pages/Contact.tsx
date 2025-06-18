import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { contactInfo } from '../data/contactInfo';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Сброс уведомления через 5 секунд
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfoItems = [
    {
      icon: MapPinIcon,
      title: 'Адрес',
      content: contactInfo.location,
      description: 'Наш офис находится в центре города',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: PhoneIcon,
      title: 'Телефон',
      content: contactInfo.phone,
      description: 'Звоните в любое время',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: contactInfo.email,
      description: 'Пишите нам на почту',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white pt-20">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-600/20"></div>
        
        <div className="container relative z-10">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 mr-3" />
              Свяжитесь с нами
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Давайте обсудим
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                ваши планы
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              У вас есть вопросы или предложения? Мы всегда рады общению и готовы помочь!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Контактная информация
                </h2>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Свяжитесь с нами любым удобным способом. Мы ответим в кратчайшие сроки.
                </p>
              </motion.div>
              
              <div className="space-y-8">
                {contactInfoItems.map((info) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="contact-info-item"
                    whileHover={{ x: 10 }}
                  >
                    <div className={`icon-wrapper bg-gradient-to-br ${info.bgColor} ${info.color.replace('from-', 'text-').replace(' to-', '-')}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-1">
                        {info.content}
                      </p>
                      <p className="text-secondary-600">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Напишите нам
                </h2>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
                </p>
              </motion.div>

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Тема *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Тема сообщения"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Отправка...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <PaperAirplaneIcon className="w-5 h-5 mr-3" />
                      Отправить сообщение
                    </div>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Notification */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg z-50"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Сообщение отправлено!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact; 