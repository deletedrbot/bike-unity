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

## Деплой через Docker Compose

1. Убедитесь, что у вас установлен Docker и docker-compose.
2. Скопируйте `.env` в `backend/.env` и настройте переменные.
3. Соберите и запустите проект:
   ```bash
   docker-compose up --build -d
   ```
4. Фронтенд будет доступен на http://localhost/
5. Бэкенд — на http://localhost:3001/

Для остановки:
```bash
docker-compose down
```

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

## Тесты
- Запуск тестов: `npm test`
- Тесты лежат в папке `src/__tests__`

## Pre-commit хуки
- Используется husky + lint-staged для автолинтинга и prettier при коммите.

## ErrorBoundary
- Глобальный перехват ошибок реализован в `src/components/ErrorBoundary.tsx`.

## Глобальное состояние
- Пример глобального состояния через Context API: `src/contexts/GlobalContext.tsx`.

## Валидация форм
- Пример формы с валидацией: `src/components/ValidatedForm.tsx` (react-hook-form + yup).

## PWA
- Service worker: `src/service-worker.js`. 