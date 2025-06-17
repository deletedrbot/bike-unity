import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Вид с сопки',
    caption: 'Вид с сопки на город, Чита',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Групповая поездка',
    caption: 'Групповая поездка по лесным тропам',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Преодоление грязи',
    caption: 'Преодоление грязевых участков',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Утренний лес',
    caption: 'Утренний лес, Забайкалье',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Болотистая местность',
    caption: 'Болотистая местность, окрестности Читы',
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Отдых после приключений',
    caption: 'Отдых после приключений',
  },
  {
    id: 7,
    src: '/images/gallery/gallery-7.jpg',
    alt: 'В глубине тайги',
    caption: 'В глубине таёжных троп',
  },
  {
    id: 8,
    src: '/images/gallery/gallery-8.jpg',
    alt: 'На берегу реки',
    caption: 'На берегу реки Ингода',
  },
];

// Добавляем компонент спиннера
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner" />
  </div>
);

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen pt-20 fade-in-up">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-blue-800" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto fade-in-up"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Наша галерея
            </h1>
            <p className="text-xl text-blue-100">
              Взгляните на самые яркие моменты наших приключений
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow fade-in-up"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover img-bw"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-sm">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 