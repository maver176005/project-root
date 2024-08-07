// Импортируем конфигурацию базы данных
const db = require('../config/db');

// Функция для создания таблиц и заполнения их демо-данными
const createTables = async () => {
    // Создаем таблицу магазинов
    await db.schema.createTable('stores', (table) => {
        table.increments('id').primary();
        table.string('name');
    });

    // Создаем таблицу телефонов
    await db.schema.createTable('phones', (table) => {
        table.increments('id').primary();
        table.integer('store_id').references('id').inTable('stores');
        table.string('phone');
    });

    // Создаем таблицу автомобилей
    await db.schema.createTable('cars', (table) => {
        table.increments('id').primary();
        table.string('brand');
        table.string('model');
        table.integer('price');
        table.integer('store_id').references('id').inTable('stores');
    });

    // Вставляем демо-данные в таблицу магазинов
    await db('stores').insert([
        { name: 'AutoWorld' },
        { name: 'CarHub' },
    ]);

    // Вставляем демо-данные в таблицу телефонов
    await db('phones').insert([
        { store_id: 1, phone: '+1234567890' },
        { store_id: 2, phone: '+0987654321' },
    ]);

    // Вставляем демо-данные в таблицу автомобилей
    await db('cars').insert([
        { brand: 'Toyota', model: 'Corolla', price: 20000, store_id: 1 },
        { brand: 'Honda', model: 'Civic', price: 22000, store_id: 2 },
    ]);

    console.log('Таблицы созданы и демо-данные вставлены');
};

// Запускаем функцию создания таблиц
createTables().then(() => process.exit());
