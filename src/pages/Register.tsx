import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  interests: string[];
  message: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    interests: [],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const experienceLevels = [
    { value: 'beginner', label: 'Начинающий' },
    { value: 'intermediate', label: 'Средний' },
    { value: 'advanced', label: 'Продвинутый' },
  ];

  const interestOptions = [
    { value: 'enduro', label: 'Эндуро' },
    { value: 'mtb', label: 'MTB' },
    { value: 'road', label: 'Шоссейный велосипед' },
    { value: 'gravel', label: 'Гравий' },
    { value: 'bmx', label: 'BMX' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Registration submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      interests: [],
      message: '',
    });
    
    // Сброс уведомления через 5 секунд
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Дружелюбное сообщество',
      description: 'Присоединяйтесь к нашему дружному сообществу велосипедистов в Чите',
      color: 'from-pink-500 to-rose-500',
      iconColor: 'text-pink-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Безопасность',
      description: 'Все маршруты проверены и безопасны для катания',
      color: 'from-blue-500 to-indigo-500',
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: SparklesIcon,
      title: 'Приключения',
      description: 'Откройте новые места Забайкалья и получите незабываемые впечатления',
      color: 'from-purple-500 to-violet-500',
      iconColor: 'text-purple-600',
      bgColor: 'from-purple-50 to-violet-50'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50 to-white">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-600/20"></div>
        
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Присоединяйтесь к сообществу
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Станьте частью
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                Bike Unity
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Присоединяйтесь к нашему сообществу велосипедистов в Чите и откройте для себя новые маршруты и друзей
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              Преимущества участия
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему стоит
              <span className="gradient-text"> присоединиться</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Узнайте, что вы получите, став частью нашего сообщества
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="card-hover p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className={`icon-wrapper mb-6 bg-gradient-to-br ${benefit.bgColor} ${benefit.iconColor}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="section gradient-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
                Регистрация
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Заполните форму
                <span className="gradient-text"> регистрации</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Расскажите о себе, и мы свяжемся с вами для дальнейшего общения
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="card-hover p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Фамилия *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Ваша фамилия"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                <div>
                  <label htmlFor="phone" className="form-label">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="form-label">
                  Уровень опыта *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Выберите уровень опыта</option>
                  {experienceLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="form-label">
                  Интересы
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {interestOptions.map((interest) => (
                    <label key={interest.value} className="flex items-center">
                      <input
                        type="checkbox"
                        value={interest.value}
                        checked={formData.interests.includes(interest.value)}
                        onChange={() => handleInterestChange(interest.value)}
                        className="mr-3 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-secondary-700">{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="form-label">
                  Дополнительная информация
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input"
                  placeholder="Расскажите о себе, своих целях или задайте вопросы..."
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
                    <UserIcon className="w-5 h-5 mr-3" />
                    Отправить заявку
                    <ArrowRightIcon className="ml-3 w-5 h-5" />
                  </div>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Есть вопросы?
            </h2>
            <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  Связаться с нами
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn-outline text-lg px-10 py-4">
                  Узнать больше
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Notification */}
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
            <span className="font-semibold">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Register;
