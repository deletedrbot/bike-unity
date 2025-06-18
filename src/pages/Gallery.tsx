import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      id: 1,
      src: '/images/gallery/img1.jpg',
      alt: 'Велопрогулка по городу',
      category: 'city',
      caption: 'Групповая велопрогулка по центру города',
      description: 'Захватывающие виды городских улиц и архитектуры'
    },
    {
      id: 2,
      src: '/images/gallery/img2.jpg',
      alt: 'Горный маршрут',
      category: 'mountain',
      caption: 'Захватывающие виды горных троп',
      description: 'Покорение горных вершин и живописных перевалов'
    },
    {
      id: 3,
      src: '/images/gallery/img3.jpg',
      alt: 'Велосипедный кемпинг',
      category: 'camping',
      caption: 'Отдых в кемпинге после долгой поездки',
      description: 'Уютные вечера у костра и общение с единомышленниками'
    },
    {
      id: 4,
      src: '/images/gallery/img4.jpg',
      alt: 'Соревнования',
      category: 'competition',
      caption: 'Участие в велосипедных соревнованиях',
      description: 'Дух соревнований и спортивные достижения'
    },
    {
      id: 5,
      src: '/images/gallery/img5.jpg',
      alt: 'Вечерняя прогулка',
      category: 'city',
      caption: 'Романтичная вечерняя прогулка',
      description: 'Волшебство вечернего города и огни набережной'
    },
    {
      id: 6,
      src: '/images/gallery/img6.jpg',
      alt: 'Лесная тропа',
      category: 'forest',
      caption: 'Поездка по живописным лесным тропам',
      description: 'Единение с природой и свежий лесной воздух'
    },
    {
      id: 7,
      src: '/images/gallery/img7.jpg',
      alt: 'Пикник на природе',
      category: 'camping',
      caption: 'Приятный отдых на природе',
      description: 'Вкусная еда и хорошая компания на природе'
    },
    {
      id: 8,
      src: '/images/gallery/img8.jpg',
      alt: 'Групповое фото',
      category: 'group',
      caption: 'Дружная команда велосипедистов',
      description: 'Наши замечательные участники и их улыбки'
    },
    {
      id: 9,
      src: '/images/gallery/img9.jpg',
      alt: 'Скоростной спуск',
      category: 'mountain',
      caption: 'Захватывающий скоростной спуск',
      description: 'Адреналин и скорость на горных трассах'
    }
  ];

  const filters = [
    { id: 'all', name: 'Все', color: 'from-primary-500 to-primary-600' },
    { id: 'city', name: 'Город', color: 'from-blue-500 to-blue-600' },
    { id: 'mountain', name: 'Горы', color: 'from-green-500 to-green-600' },
    { id: 'forest', name: 'Лес', color: 'from-emerald-500 to-emerald-600' },
    { id: 'camping', name: 'Кемпинг', color: 'from-orange-500 to-orange-600' },
    { id: 'competition', name: 'Соревнования', color: 'from-purple-500 to-purple-600' },
    { id: 'group', name: 'Группа', color: 'from-pink-500 to-pink-600' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
              <MagnifyingGlassIcon className="w-4 h-4 mr-3" />
              Наша галерея
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Взгляните на наши
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-100 via-white to-accent-100 bg-clip-text text-transparent">
                приключения
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Самые яркие моменты наших поездок и незабываемые впечатления от путешествий
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`filter-button ${
                  filter === filterItem.id
                    ? `bg-gradient-to-r ${filterItem.color} text-white shadow-lg`
                    : 'filter-button-inactive'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterItem.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 gradient-bg">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="gallery-item group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{image.caption}</h3>
                      <p className="text-sm text-gray-200 leading-relaxed">{image.description}</p>
                      <div className="mt-4 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`badge ${
                      image.category === 'city' ? 'badge-primary' :
                      image.category === 'mountain' ? 'badge-accent' :
                      image.category === 'forest' ? 'badge-secondary' :
                      image.category === 'camping' ? 'badge-primary' :
                      image.category === 'competition' ? 'badge-accent' :
                      'badge-secondary'
                    }`}>
                      {filters.find(f => f.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-6">📷</div>
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">Изображения не найдены</h3>
              <p className="text-secondary-600">Попробуйте выбрать другую категорию</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].caption}</h3>
                    <p className="text-lg text-gray-200 mb-2">{filteredImages[selectedImage].description}</p>
                    <p className="text-sm text-gray-300">
                      {selectedImage + 1} из {filteredImages.length}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 