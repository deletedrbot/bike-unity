const swaggerUi = require('swagger-ui-express');
const express = require('express');

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Bike Unity API',
    version: '1.0.0',
    description: 'Документация API для Bike Unity',
  },
  paths: {
    '/api/auth/register': {
      post: {
        summary: 'Регистрация пользователя',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                  name: { type: 'string' },
                  role: { type: 'string' },
                },
                required: ['email', 'password'],
              },
            },
          },
        },
        responses: {
          200: { description: 'OK' },
          400: { description: 'Пользователь уже существует' },
        },
      },
    },
    '/api/auth/login': {
      post: {
        summary: 'Вход пользователя',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
                required: ['email', 'password'],
              },
            },
          },
        },
        responses: {
          200: { description: 'OK' },
          400: { description: 'Неверный email или пароль' },
        },
      },
    },
    '/api/auth/me': {
      get: {
        summary: 'Получить текущего пользователя',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'OK' },
          401: { description: 'Нет токена или неверный токен' },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

function setupSwagger(app) {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = setupSwagger; 