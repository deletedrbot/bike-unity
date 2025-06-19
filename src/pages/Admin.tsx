import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  NewspaperIcon,
  CalendarIcon,
  MapIcon,
  UserGroupIcon,
  PhotoIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ChartBarIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import NewsEditor from '../components/NewsEditor';
import NewsService, { NewsItem, NewsCreateInput } from '../services/news.service';
import RoutesService, { BikeRoute, RouteCreateInput } from '../services/routes.service';
import RouteEditor from '../components/RouteEditor';
import GalleryManager from '../components/GalleryManager';
import GalleryService, { GalleryCreateInput, GalleryImage } from '../services/gallery.service';

interface AdminStats {
  totalNews: number;
  totalEvents: number;
  totalRoutes: number;
  totalTeamMembers: number;
  recentActivity: string[];
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsEditor, setShowNewsEditor] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    totalNews: 0,
    totalEvents: 0,
    totalRoutes: 0,
    totalTeamMembers: 0,
    recentActivity: []
  });
  const [showRouteEditor, setShowRouteEditor] = useState(false);
  const [showGalleryManager, setShowGalleryManager] = useState(false);
  const [editingRoute, setEditingRoute] = useState<BikeRoute | null>(null);
  const [routes, setRoutes] = useState<BikeRoute[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [news, routes, gallery] = await Promise.all([
        NewsService.getAll(),
        RoutesService.getAll(),
        GalleryService.getAll()
      ]);

      setNewsItems(news);
      setRoutes(routes);
      setGalleryImages(gallery);
      setStats({
        totalNews: news.filter((item: NewsItem) => item.type === 'news').length,
        totalEvents: news.filter((item: NewsItem) => item.type === 'event').length,
        totalRoutes: routes.length,
        totalTeamMembers: 4, // TODO: Add team service
        recentActivity: [
          'Добавлена новость "Открытие нового сезона"',
          'Обновлено событие "Весенний велопробег"',
          'Загружены новые фотографии в галерею',
          'Добавлен новый маршрут "Читинские холмы"'
        ]
      });
    } catch (error) {
      console.error('Error loading data:', error);
      // TODO: Add error handling
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Панель управления', icon: ChartBarIcon },
    { id: 'news', name: 'Новости и события', icon: NewspaperIcon },
    { id: 'routes', name: 'Маршруты', icon: MapIcon },
    { id: 'team', name: 'Команда', icon: UserGroupIcon },
    { id: 'gallery', name: 'Галерея', icon: PhotoIcon },
    { id: 'settings', name: 'Настройки', icon: CogIcon },
  ];

  const handleAddNews = () => {
    setEditingNews(null);
    setShowNewsEditor(true);
  };

  const handleEditNews = (news: NewsItem) => {
    setEditingNews(news);
    setShowNewsEditor(true);
  };

  const handleDeleteNews = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      try {
        await NewsService.delete(id);
        setNewsItems(prev => prev.filter(item => item.id !== id));
      } catch (error) {
        console.error('Error deleting news:', error);
        // TODO: Add error handling
      }
    }
  };

  const handleNewsSave = async (newsData: NewsCreateInput) => {
    try {
      if (editingNews) {
        const updated = await NewsService.update(editingNews.id, newsData);
        setNewsItems(prev => prev.map(item => 
          item.id === editingNews.id ? updated : item
        ));
      } else {
        const created = await NewsService.create(newsData);
        setNewsItems(prev => [...prev, created]);
      }
      setShowNewsEditor(false);
      setEditingNews(null);
    } catch (error) {
      console.error('Error saving news:', error);
      // TODO: Add error handling
    }
  };

  const handleEditRoute = (route: BikeRoute) => {
    setEditingRoute(route);
    setShowRouteEditor(true);
  };

  const handleDeleteRoute = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот маршрут?')) {
      try {
        await RoutesService.delete(id);
        setRoutes(prev => prev.filter(route => route.id !== id));
      } catch (error) {
        console.error('Error deleting route:', error);
        // TODO: Add error handling
      }
    }
  };

  const handleRouteSave = async (routeData: RouteCreateInput) => {
    try {
      if (editingRoute) {
        const updated = await RoutesService.update(editingRoute.id, routeData);
        setRoutes(prev => prev.map(route => 
          route.id === editingRoute.id ? updated : route
        ));
      } else {
        const created = await RoutesService.create(routeData);
        setRoutes(prev => [...prev, created]);
      }
      setShowRouteEditor(false);
      setEditingRoute(null);
    } catch (error) {
      console.error('Error saving route:', error);
      // TODO: Add error handling
    }
  };

  const handleGalleryUpload = async (images: GalleryCreateInput[]) => {
    try {
      for (const imageData of images) {
        await GalleryService.create(imageData);
      }
      await loadData(); // Refresh all data
    } catch (error) {
      console.error('Error uploading images:', error);
      // TODO: Add error handling
    }
  };

  const handleGalleryBulkUpload = async (files: File[]) => {
    try {
      await GalleryService.uploadBulk(files);
      await loadData(); // Refresh all data
    } catch (error) {
      console.error('Error uploading images:', error);
      // TODO: Add error handling
    }
  };

  const handleDeleteImage = async (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить это изображение?')) {
      try {
        await GalleryService.delete(id);
        setGalleryImages(prev => prev.filter(img => img.id !== id));
      } catch (error) {
        console.error('Error deleting image:', error);
        // TODO: Add error handling
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Админ-панель</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Вернуться на сайт
              </Link>
              <button className="btn-primary">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-2xl shadow-lg p-6">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700 font-semibold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Новости</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalNews}</p>
                      </div>
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <NewspaperIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">События</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalEvents}</p>
                      </div>
                      <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                        <CalendarIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Маршруты</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalRoutes}</p>
                      </div>
                      <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                        <MapIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Команда</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalTeamMembers}</p>
                      </div>
                      <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                        <UserGroupIcon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Быстрые действия</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={handleAddNews}
                      className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <PlusIcon className="h-5 w-5" />
                      Добавить новость
                    </button>
                    <button 
                      onClick={handleAddNews}
                      className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <CalendarIcon className="h-5 w-5" />
                      Добавить событие
                    </button>
                    <button 
                      onClick={() => setActiveTab('routes')}
                      className="flex items-center gap-3 p-4 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-colors"
                    >
                      <MapIcon className="h-5 w-5" />
                      Добавить маршрут
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <BellIcon className="h-5 w-5" />
                    Последняя активность
                  </h2>
                  <div className="space-y-4">
                    {stats.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'news' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Новости и события</h2>
                    <button onClick={handleAddNews} className="btn-primary">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Добавить
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {newsItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                            {item.image && (
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                              {new Date(item.date).toLocaleDateString('ru-RU')} • {item.category} • {item.views} просмотров
                            </p>
                            {item.featured && (
                              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full mt-1">
                                Главная
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleEditNews(item)}
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteNews(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'routes' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Маршруты</h2>
                    <button className="btn-primary">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Добавить маршрут
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {routes.map((route) => (
                      <div key={route.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{route.title}</h3>
                            <p className="text-sm text-gray-600">Сложность: {route.difficulty}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleEditRoute(route)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                          >
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteRoute(route.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Команда</h2>
                    <button className="btn-primary">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Добавить участника
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">Участник {item}</h3>
                            <p className="text-sm text-gray-600">Роль в команде</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Галерея
                    </h2>
                    <button
                      onClick={() => setShowGalleryManager(true)}
                      className="btn-primary"
                    >
                      Загрузить изображения
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <img
                          src={image.thumbnail}
                          alt={image.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <button
                            onClick={() => handleDeleteImage(image.id)}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Настройки</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Контактная информация</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Телефон
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            defaultValue="+7 (3022) 21-23-45"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            defaultValue="info@bikeunity.ru"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Социальные сети</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            VK
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            defaultValue="vk.com/bikeunity"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Telegram
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            defaultValue="@bikeunity"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="btn-primary">
                        Сохранить изменения
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* News Editor Modal */}
      {showNewsEditor && (
        <NewsEditor
          isOpen={showNewsEditor}
          onClose={() => {
            setShowNewsEditor(false);
            setEditingNews(null);
          }}
          mode={editingNews ? 'edit' : 'add'}
          initialData={editingNews}
          onSave={handleNewsSave}
        />
      )}

      {/* Route Editor Modal */}
      {showRouteEditor && (
        <RouteEditor
          isOpen={showRouteEditor}
          onClose={() => {
            setShowRouteEditor(false);
            setEditingRoute(null);
          }}
          mode={editingRoute ? 'edit' : 'add'}
          initialData={editingRoute}
          onSave={handleRouteSave}
        />
      )}

      {/* Gallery Manager Modal */}
      {showGalleryManager && (
        <GalleryManager
          isOpen={showGalleryManager}
          onClose={() => setShowGalleryManager(false)}
          onUpload={handleGalleryUpload}
          onBulkUpload={handleGalleryBulkUpload}
        />
      )}
    </div>
  );
};

export default Admin; 