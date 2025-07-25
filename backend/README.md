# Bike Unity Backend

## Запуск локально

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Создайте файл `.env` на основе `.env.example` и укажите свои значения.
3. Запустите сервер:
   ```bash
   npm run dev
   ```

## Переменные окружения
- `PORT` — порт сервера (по умолчанию 3001)
- `JWT_SECRET` — секрет для JWT
- `DB_PATH` — путь к базе данных SQLite

## Документация API
Swagger доступен по адресу: `http://localhost:3001/api/docs`

## Docker
Для запуска в Docker:
```bash
docker build -t bike-unity-backend .
docker run -p 3001:3001 --env-file .env bike-unity-backend
``` 