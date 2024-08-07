// Импортируем необходимые модули
const express = require('express');
const router = express.Router();
const { getCars, addCar } = require('../controllers/carController');

// Определяем маршрут для получения всех автомобилей
router.get('/cars', getCars);

// Определяем маршрут для добавления нового автомобиля
router.post('/cars', addCar);

module.exports = router;
