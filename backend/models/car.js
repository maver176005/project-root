const db = require('../config/db');

const getAllCars = () => {
    return db.raw(`
        SELECT cars.brand, cars.model, cars.price, stores.name AS store, phones.phone
        FROM cars
        JOIN stores ON cars.store_id = stores.id
        JOIN phones ON stores.id = phones.store_id
    `);
};

const addNewCar = (brand, model, price, store_id) => {
    return db('cars').insert({ brand, model, price, store_id });
};

module.exports = {
    getAllCars,
    addNewCar,
};
