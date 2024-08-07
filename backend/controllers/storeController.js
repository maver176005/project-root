const { getAllStores, addNewStore } = require('../models/store');

// Контроллер для получения всех магазинов
const getStores = async (req, res) => {
    try {
        const stores = await getAllStores();
        res.json(stores.rows); // Для PostgreSQL используем .rows для получения данных
    } catch (error) {
        res.status(500).json({ error: 'Не удалось получить данные о магазинах' });
    }
};

// Контроллер для добавления нового магазина
const addStore = async (req, res) => {
    try {
        const { name, phone } = req.body;
        const newStore = await addNewStore(name, phone);
        res.status(201).json(newStore);
    } catch (error) {
        res.status(500).json({ error: 'Не удалось добавить магазин' });
    }
};

module.exports = {
    getStores,
    addStore,
};
