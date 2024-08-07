// Импортируем модель для работы с базой данных
const { getAllCars, addNewCar } = require('../models/car');

// Контроллер для получения всех автомобилей
const getCars = async (req, res) => {
    try {
        // Получаем все автомобили из базы данных
        const cars = await getAllCars();
        // Отправляем данные клиенту
        res.json(cars.rows); // Для PostgreSQL используем .rows для получения данных
    } catch (error) {
        // Обрабатываем ошибки и отправляем сообщение об ошибке клиенту
        res.status(500).json({ error: 'Не удалось получить данные об автомобилях' });
    }
};

// Контроллер для добавления нового автомобиля
const addCar = async (req, res) => {
    try {
        const { brand, model, price, store_id } = req.body;
        await addNewCar(brand, model, price, store_id);
        res.status(201).json({ message: 'Автомобиль успешно добавлен' });
    } catch (error) {
        res.status(500).json({ error: 'Не удалось добавить автомобиль' });
    }
};

module.exports = {
    getCars,
    addCar,
};
