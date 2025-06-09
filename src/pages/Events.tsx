import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  difficulty: 'Начальный' | 'Средний' | 'Сложный';
  participants: number;
  maxParticipants: number;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Весенний трейл в Подмосковье',
    date: '2024-04-15',
    location: 'Московская область, Истринский район',
    difficulty: 'Средний',
    participants: 8,
    maxParticipants: 15,
    description: 'Увлекательная поездка по весенним лесам Подмосковья. Маршрут включает в себя лесные тропы, небольшие водные преграды и живописные поляны.',
    image: '/images/event-spring.jpg',
  },
  {
    id: 2,
    title: 'Эндуро-выходные в Карелии',
    date: '2024-05-20',
    location: 'Республика Карелия, Приозерский район',
    difficulty: 'Сложный',
    participants: 5,
    maxParticipants: 10,
    description: 'Двухдневный маршрут по карельским лесам и озерам. Включает ночевку в палатках и приготовление пищи на костре.',
    image: '/images/event-karelia.jpg',
  },
  {
    id: 3,
    title: 'Тренировка для начинающих',
    date: '2024-04-01',
    location: 'Московская область, тренировочная база',
    difficulty: 'Начальный',
    participants: 12,
    maxParticipants: 20,
    description: 'Базовый курс для новичков. Обучение основам управления эндуро-мотоциклом, преодолению препятствий и технике безопасности.',
    image: '/images/event-training.jpg',
  },
];

const Events: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredEvents = selectedDifficulty
    ? events.filter(event => event.difficulty === selectedDifficulty)
    : events;

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Анонсы поездок</h1>
            <p className="text-xl text-gray-300">
              Присоединяйтесь к нашим увлекательным поездкам и станьте частью приключений
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-4 py-2 rounded-full ${
                selectedDifficulty === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Все
            </button>
            {['Начальный', 'Средний', 'Сложный'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full ${
                  selectedDifficulty === difficulty
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.difficulty === 'Начальный'
                        ? 'bg-green-100 text-green-800'
                        : event.difficulty === 'Средний'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {event.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="h-5 w-5 mr-2" />
                      <span>
                        {event.participants}/{event.maxParticipants} участников
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Записаться
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 