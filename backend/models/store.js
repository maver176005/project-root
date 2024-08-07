const db = require('../config/db');

const getAllStores = () => {
    return db.raw(`
        SELECT stores.id, stores.name, phones.phone
        FROM stores
        JOIN phones ON stores.id = phones.store_id
    `);
};

const addNewStore = (name, phone) => {
    return db.transaction(async trx => {
        const [store] = await trx('stores').insert({ name }).returning(['id', 'name']);
        await trx('phones').insert({ store_id: store.id, phone });
        return store;
    });
};

module.exports = {
    getAllStores,
    addNewStore,
};
