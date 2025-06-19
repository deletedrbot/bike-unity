# Bike Unity

Веб-приложение для сообщества велосипедистов Читы.

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Axios

## Требования

- Node.js 18+
- npm 9+

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/your-username/bike-unity.git
cd bike-unity

# Установка зависимостей
npm install
```

## Разработка

```bash
# Запуск сервера разработки
npm run dev
```

## Сборка

```bash
# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview
```

## Деплой

Проект настроен для автоматического деплоя на GitHub Pages при пуше в ветку `main`.

### Ручной деплой

```bash
# Сборка и деплой на GitHub Pages
npm run deploy
```

### Настройка окружения

1. В репозитории GitHub перейдите в Settings > Secrets and variables > Actions
2. Добавьте следующие секреты:
   - `VITE_API_URL`: URL вашего API (например, https://api.bike-unity.com)

### Настройка GitHub Pages

1. В репозитории GitHub перейдите в Settings > Pages
2. В разделе "Source" выберите "Deploy from a branch"
3. Выберите ветку "gh-pages" и папку "/ (root)"
4. Нажмите "Save"

## Структура проекта

```
bike-unity/
├── src/
│   ├── components/     # React компоненты
│   ├── pages/         # Страницы приложения
│   ├── services/      # API сервисы
│   ├── styles/        # Глобальные стили
│   ├── types/         # TypeScript типы
│   ├── utils/         # Вспомогательные функции
│   ├── App.tsx        # Корневой компонент
│   └── main.tsx       # Точка входа
├── public/            # Статические файлы
├── .github/           # GitHub Actions
├── index.html         # HTML шаблон
├── package.json       # Зависимости и скрипты
├── tsconfig.json      # Конфигурация TypeScript
├── vite.config.ts     # Конфигурация Vite
└── README.md         # Документация
```

## Лицензия

MIT 