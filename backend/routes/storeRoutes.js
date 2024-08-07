const express = require('express');
const router = express.Router();
const { getStores, addStore } = require('../controllers/storeController');

// Определяем маршрут для получения всех магазинов
router.get('/stores', getStores);

// Определяем маршрут для добавления нового магазина
router.post('/stores', addStore);

module.exports = router;
